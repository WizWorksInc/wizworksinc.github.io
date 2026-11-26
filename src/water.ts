import { modeRgb, useMode } from "culori/fn";
import {
  DataTexture,
  DoubleSide,
  InstancedBufferAttribute,
  InstancedBufferGeometry,
  LinearFilter,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  ShaderMaterial,
  type Texture,
  TextureLoader,
  Vector2,
  Vector3,
} from "three";
import { createLayer, resize } from "./layer";
import type { Layout } from "./layout";
import noise from "./shaders/noise.glsl";
import fragmentShader from "./shaders/water.frag";
import vertexShader from "./shaders/water.vert";

const MOONLIGHT = "#e2d8b8";
const COLUMN_WIDTH = 3;
const FADE_MS = 600;

const rgb = useMode(modeRgb);

type Strip = { chop: number; rest: number; row: number; pitch: number; depth: number };

function seaStrips({ baseline, sea }: Layout) {
  const strips: Strip[] = [];
  for (let rest = baseline + sea.pitch / 2, row = 0; rest < baseline + sea.depth; row++) {
    const depth = (rest - baseline) / sea.depth;
    const pitch = sea.pitch * (1 + 0.95 * depth);
    strips.push({ chop: 0, rest, row, pitch, depth });
    if (depth < 0.82) strips.push({ chop: 1, rest: rest + pitch / 2, row, pitch, depth: (rest + pitch / 2 - baseline) / sea.depth });
    rest += pitch;
  }

  return strips;
}

function seaGeometry(columns: number, strips: Strip[]) {
  const plane = new PlaneGeometry(1, 2, columns, 1);
  const geometry = new InstancedBufferGeometry();
  geometry.setIndex(plane.index);
  geometry.setAttribute("position", plane.getAttribute("position"));
  geometry.setAttribute("uv", plane.getAttribute("uv"));
  for (const name of ["chop", "rest", "row", "pitch", "depth"] as const) {
    geometry.setAttribute(name, new InstancedBufferAttribute(Float32Array.from(strips, (strip) => strip[name]), 1));
  }

  geometry.instanceCount = strips.length;
  return geometry;
}

export function createWater(logo: HTMLElement, onLoad: () => void) {
  const renderer = createLayer("water");
  if (!renderer) return;

  const blank: Texture = new DataTexture(new Uint8Array(4), 1, 1);
  blank.needsUpdate = true;
  const moonlight = rgb(MOONLIGHT)!;
  const uniforms = {
    baseline: { value: 0 },
    basePitch: { value: 0 },
    seaDepth: { value: 0 },
    wavelength: { value: 0 },
    grit: { value: 0 },
    time: { value: 0 },
    pixel: { value: 0 },
    glass: { value: 0 },
    spread: { value: 0 },
    polarity: { value: 0 },
    moonX: { value: 0 },
    span: { value: new Vector2() },
    ink: { value: new Vector3() },
    wiz: { value: new Vector3() },
    moonlight: { value: new Vector3(moonlight.r, moonlight.g, moonlight.b) },
    mirrored: { value: new Vector3() },
    mirror: { value: blank },
  };

  // Logo units run downward which reverses the winding. Hence DoubleSide.
  const material = new ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader: noise + fragmentShader,
    transparent: true,
    premultipliedAlpha: true,
    depthTest: false,
    side: DoubleSide,
  });

  const sea = new Mesh(new InstancedBufferGeometry(), material);
  sea.frustumCulled = false;

  const camera = new OrthographicCamera();
  const loader = new TextureLoader();
  const canvas = renderer.domElement;
  canvas.addEventListener("webglcontextlost", () => logo.removeAttribute("data-water"));
  logo.append(canvas);
  logo.toggleAttribute("data-water", true);

  let layout: Layout;
  let strips: Strip[] = [];
  let columns = 0;
  let top = 0;
  let foot = 0;
  let loaded = 0;

  const fit = (next: Layout) => {
    layout = next;
    const { box, baseline, sea: waves, mirror, moon } = layout;
    top = baseline - 2 * waves.pitch;
    foot = box.top + box.height;
    canvas.style.top = `${(100 * (top - box.top)) / box.height}%`;
    canvas.style.height = `${(100 * (foot - top)) / box.height}%`;

    const ink = rgb(getComputedStyle(logo).color)!;
    const wiz = rgb(layout.wiz)!;
    uniforms.baseline.value = baseline;
    uniforms.basePitch.value = waves.pitch;
    uniforms.seaDepth.value = waves.depth;
    uniforms.wavelength.value = waves.length;
    uniforms.grit.value = waves.grit;
    uniforms.spread.value = box.width * 0.3;

    // Keeps the moonlit side brighter whether the ink is light or dark.
    uniforms.polarity.value = 2 * (0.2126 * ink.r + 0.7152 * ink.g + 0.0722 * ink.b) - 1;
    uniforms.moonX.value = moon.x;
    uniforms.ink.value.set(ink.r, ink.g, ink.b);
    uniforms.wiz.value.set(wiz.r, wiz.g, wiz.b);
    uniforms.mirrored.value.set(mirror.west, mirror.east, mirror.cap);

    strips = seaStrips(layout);
    columns = 0;
    loaded = 0;
    loader.load(mirror.image, (texture) => {
      // A resize can swap layouts before this image arrives.
      if (layout !== next) return texture.dispose();
      texture.flipY = false;
      texture.generateMipmaps = false;
      texture.minFilter = LinearFilter;
      uniforms.mirror.value.dispose();
      uniforms.mirror.value = texture;
      loaded = performance.now();
      onLoad();
    });
  };

  const draw = (time: number, fade: boolean) => {
    const ratio = Math.min(2, devicePixelRatio);
    const width = Math.round(canvas.clientWidth * ratio);
    const height = Math.round(canvas.clientHeight * ratio);
    if (width === 0 || height === 0) return;
    resize(renderer, width, height);

    const count = Math.ceil(canvas.clientWidth / COLUMN_WIDTH);
    if (count !== columns) {
      columns = count;
      sea.geometry.dispose();
      sea.geometry = seaGeometry(columns, strips);
    }

    const pixel = (foot - top) / height;
    const middle = layout.box.left + layout.box.width / 2;
    camera.left = middle - (width * pixel) / 2;
    camera.right = middle + (width * pixel) / 2;
    camera.top = top;
    camera.bottom = foot;
    camera.near = 0;
    camera.far = 1;
    camera.updateProjectionMatrix();

    uniforms.span.value.set(camera.left, camera.right);
    uniforms.time.value = time;
    uniforms.pixel.value = pixel;
    uniforms.glass.value = loaded === 0 ? 0 : fade ? Math.min(1, (performance.now() - loaded) / FADE_MS) : 1;
    renderer.render(sea, camera);
  };

  return { fit, draw };
}
