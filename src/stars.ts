import {
  DoubleSide,
  DynamicDrawUsage,
  InstancedBufferAttribute,
  InstancedBufferGeometry,
  LinearFilter,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  ShaderMaterial,
  TextureLoader,
} from "three";
import { createLayer, resize } from "./layer";
import type { Layout } from "./layout";
import fragmentShader from "./shaders/stars.frag";
import vertexShader from "./shaders/stars.vert";
import { MOST, scatter, twinkle, type Star } from "./starfield";

const EXPOSURE = 2e4;

export function createStars(logo: HTMLElement, onLoad: () => void) {
  const renderer = createLayer("sky");
  if (!renderer) return;

  const spot = new InstancedBufferAttribute(new Float32Array(MOST * 2), 2).setUsage(DynamicDrawUsage);
  const tint = new InstancedBufferAttribute(new Float32Array(MOST * 3), 3).setUsage(DynamicDrawUsage);
  const flux = new InstancedBufferAttribute(new Float32Array(MOST), 1).setUsage(DynamicDrawUsage);

  const plane = new PlaneGeometry(2, 2);
  const geometry = new InstancedBufferGeometry();
  geometry.setIndex(plane.index);
  geometry.setAttribute("position", plane.getAttribute("position"));
  geometry.setAttribute("uv", plane.getAttribute("uv"));
  geometry.setAttribute("spot", spot);
  geometry.setAttribute("tint", tint);
  geometry.setAttribute("flux", flux);

  const sprite = new TextureLoader().load("cdn/star.png", () => {
    field.visible = true;
    onLoad();
  });

  sprite.flipY = false;
  sprite.generateMipmaps = false;
  sprite.minFilter = LinearFilter;

  const uniforms = { sprite: { value: sprite }, reach: { value: 0 } };

  // Logo units run downward which reverses the winding. Hence DoubleSide.
  const material = new ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    transparent: true,
    premultipliedAlpha: true,
    depthTest: false,
    side: DoubleSide,
  });

  const field = new Mesh(geometry, material);
  field.frustumCulled = false;
  field.visible = false;

  const camera = new OrthographicCamera();
  const canvas = renderer.domElement;
  logo.prepend(canvas);

  let layout: Layout;
  let stars: Star[] = [];
  let sky = "";

  const fit = (next: Layout) => {
    layout = next;
    uniforms.reach.value = layout.starReach;
    sky = "";
  };

  const draw = (time: number) => {
    const { box, baseline, starReach } = layout;
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

    const across = canvas.clientWidth * unit;
    const high = tall * unit;
    const middle = box.left + box.width / 2;
    camera.left = middle - across / 2;
    camera.right = middle + across / 2;
    camera.top = baseline - high;
    camera.bottom = baseline;
    camera.near = 0;
    camera.far = 1;
    camera.updateProjectionMatrix();

    if (sky !== `${across} ${high}`) {
      sky = `${across} ${high}`;
      stars = scatter(across, high, middle, layout);
    }

    for (const [i, { x, level, magnitude, color, index }] of stars.entries()) {
      const flicker = twinkle(index, time, 1 - level / high);
      spot.setXY(i, x + flicker.shift[0] * starReach, baseline - level + flicker.shift[1] * starReach);
      tint.setXYZ(i, color[0] * flicker.tint[0], color[1] * flicker.tint[1], color[2] * flicker.tint[2]);
      flux.setX(i, EXPOSURE * 10 ** (-0.4 * magnitude) * flicker.gain);
    }

    spot.needsUpdate = tint.needsUpdate = flux.needsUpdate = true;
    geometry.instanceCount = stars.length;
    renderer.render(field, camera);
  };

  return { fit, draw };
}
