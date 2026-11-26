import {
  AddEquation,
  AgXToneMapping,
  CustomBlending,
  Data3DTexture,
  DynamicDrawUsage,
  HalfFloatType,
  InstancedBufferAttribute,
  InstancedBufferGeometry,
  LinearFilter,
  Mesh,
  NoBlending,
  OneFactor,
  OrthographicCamera,
  PlaneGeometry,
  RGBAFormat,
  ShaderMaterial,
  WebGLRenderTarget,
} from "three";
import { createLayer, resize } from "./layer";
import type { Layout } from "./layout";
import screenVertex from "./shaders/paper.vert";
import lightFragment from "./shaders/starlight.frag";
import fragmentShader from "./shaders/stars.frag";
import vertexShader from "./shaders/stars.vert";
import profile from "./star-psf.json";
import { REACH, scatter, twinkle, type Star } from "./starfield";

const EXPOSURE = 570;

const instances = (count: number, size: number) => new InstancedBufferAttribute(new Float32Array(count * size), size).setUsage(DynamicDrawUsage);

function sampling(scale: number) {
  const stride = Math.max(1, Math.ceil(scale / profile.maximumScale));
  const target = scale / stride;
  const { scales } = profile;
  let lower = 0;
  let upper = scales.length - 1;
  while (upper - lower > 1) {
    const middle = (lower + upper) >> 1;
    if (scales[middle] < target) lower = middle;
    else upper = middle;
  }

  const fraction = (target - scales[lower]) / (scales[upper] - scales[lower]);
  return { radius: profile.radiusCssPixels * scales[upper] * stride + stride, layer: (lower + fraction + 0.5) / scales.length, stride };
}

async function loadProfiles() {
  const response = await fetch("cdn/star-psf.bin.gz");
  if (!response.ok || !response.body) throw new Error(`Could not load the star profiles: ${response.status}`);
  const stream = response.headers.get("Content-Encoding")?.includes("gzip") ? response.body : response.body.pipeThrough(new DecompressionStream("gzip"));
  const bytes = await new Response(stream).arrayBuffer();
  if (bytes.byteLength !== profile.byteLength) throw new Error("The star profiles have an unexpected size.");

  const [width, height, depth] = profile.size;
  const texture = new Data3DTexture(new Uint16Array(bytes), width, height, depth);
  texture.format = RGBAFormat;
  texture.type = HalfFloatType;
  texture.minFilter = texture.magFilter = LinearFilter;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;
  return texture;
}

export function createStars(logo: HTMLElement, onLoad: () => void) {
  const renderer = createLayer("sky");
  if (!renderer) return;
  if (!renderer.extensions.has("EXT_color_buffer_float") && !renderer.extensions.has("EXT_color_buffer_half_float")) {
    renderer.dispose();
    return;
  }

  renderer.toneMapping = AgXToneMapping;

  let spot = instances(0, 2);
  let tint = instances(0, 3);
  let flux = instances(0, 1);

  const plane = new PlaneGeometry(2, 2);
  const geometry = new InstancedBufferGeometry();
  geometry.setIndex(plane.index);
  geometry.setAttribute("position", plane.getAttribute("position"));
  geometry.setAttribute("spot", spot);
  geometry.setAttribute("tint", tint);
  geometry.setAttribute("flux", flux);

  const light = new WebGLRenderTarget(1, 1, { type: HalfFloatType, depthBuffer: false });

  const uniforms = {
    profiles: { value: null as Data3DTexture | null },
    viewport: { value: [1, 1] },
    radius: { value: 0 },
    layer: { value: 0 },
    stride: { value: 1 },
    exposure: { value: 0 },
  };

  const material = new ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    blending: CustomBlending,
    blendEquation: AddEquation,
    blendSrc: OneFactor,
    blendDst: OneFactor,
    blendSrcAlpha: OneFactor,
    blendDstAlpha: OneFactor,
    depthTest: false,
    depthWrite: false,
  });

  const field = new Mesh(geometry, material);
  field.frustumCulled = false;
  field.visible = false;

  const show = { light: { value: light.texture }, frame: { value: 0 } };
  const screen = new Mesh(new PlaneGeometry(2, 2), new ShaderMaterial({ uniforms: show, vertexShader: screenVertex, fragmentShader: lightFragment, blending: NoBlending, depthTest: false, depthWrite: false }));
  screen.frustumCulled = false;
  const flat = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const camera = new OrthographicCamera();
  const canvas = renderer.domElement;
  logo.prepend(canvas);

  loadProfiles().then(
    (texture) => {
      uniforms.profiles.value = texture;
      field.visible = true;
      onLoad();
    },
    () => canvas.remove(),
  );

  let layout: Layout;
  let stars: Star[] = [];
  let sky = "";

  const fit = (next: Layout) => {
    layout = next;
    sky = "";
  };

  const draw = (time: number) => {
    const { box, baseline, roofs, starFloor } = layout;
    const place = logo.getBoundingClientRect();
    if (!canvas.isConnected || place.width === 0) return;

    const unit = box.width / place.width;
    const pageTop = place.top + scrollY;
    const tall = pageTop + (baseline - box.top) / unit;
    canvas.style.top = `${-pageTop}px`;
    canvas.style.height = `${tall}px`;

    const ratio = Math.min(2, devicePixelRatio);
    const width = Math.round(canvas.clientWidth * ratio);
    const height = Math.round(tall * ratio);
    if (width <= 0 || height <= 0) return;
    resize(renderer, width, height);
    if (light.width !== width || light.height !== height) light.setSize(width, height);

    const wide = canvas.clientWidth;
    const left = canvas.getBoundingClientRect().left;
    const middle = document.documentElement.clientWidth / 2 - left;
    camera.left = 0;
    camera.right = wide;
    camera.top = 0;
    camera.bottom = tall;
    camera.near = 0;
    camera.far = 1;
    camera.updateProjectionMatrix();

    const scale = ((REACH * ratio) / (profile.size[0] / 2)) * profile.maximumScale;
    const { radius, layer, stride } = sampling(scale);
    uniforms.viewport.value = [width, height];
    uniforms.radius.value = radius;
    uniforms.layer.value = layer;
    uniforms.stride.value = stride;
    uniforms.exposure.value = (EXPOSURE * scale * scale) / (stride * stride);
    show.frame.value = (show.frame.value + 1) % 64;

    const logoLeft = place.left - left;
    const view = `${wide} ${tall} ${middle} ${logoLeft} ${unit}`;
    if (sky !== view) {
      sky = view;
      const reach = REACH * unit;
      stars = scatter(-middle, wide - middle, tall).filter(({ x, y }) => {
        const across = box.left + (middle + x - logoLeft) * unit;
        const under = roofs.filter((roof) => across > roof.from - reach && across < roof.to + reach).map((roof) => roof.top);
        return (tall - y) * unit > Math.max(starFloor, ...under) + 0.9 * reach;
      });

      if (stars.length > flux.count) {
        geometry.dispose();
        spot = instances(stars.length, 2);
        tint = instances(stars.length, 3);
        flux = instances(stars.length, 1);
        geometry.setAttribute("spot", spot).setAttribute("tint", tint).setAttribute("flux", flux);
      }
    }

    for (const [i, { x, y, magnitude, color, index }] of stars.entries()) {
      const flicker = twinkle(index, time, y / tall);
      spot.setXY(i, middle + x + flicker.shift[0] * REACH, y + flicker.shift[1] * REACH);
      tint.setXYZ(i, color[0] * flicker.tint[0], color[1] * flicker.tint[1], color[2] * flicker.tint[2]);
      flux.setX(i, 10 ** (-0.4 * magnitude) * flicker.gain);
    }

    spot.needsUpdate = tint.needsUpdate = flux.needsUpdate = true;
    geometry.instanceCount = stars.length;
    renderer.setRenderTarget(light);
    renderer.render(field, camera);
    renderer.setRenderTarget(null);
    renderer.render(screen, flat);
  };

  return { fit, draw };
}
