import { modeOklab, useMode } from "culori/fn";
import { Mesh, OrthographicCamera, PlaneGeometry, ShaderMaterial, Vector2, Vector3 } from "three";
import { createLayer, resize } from "./layer";
import noise from "./shaders/noise.glsl";
import fragmentShader from "./shaders/paper.frag";
import vertexShader from "./shaders/paper.vert";

const GLOW_STRENGTH = 0.3;
const LIGHT = new Vector2(-1, -1).normalize();

const oklab = useMode(modeOklab);

function lab(color: string) {
  const { l, a, b } = oklab(color.trim())!;
  return new Vector3(l, a, b);
}

export function createPaper() {
  const renderer = createLayer("paper");
  if (!renderer) return;

  const style = getComputedStyle(document.documentElement);
  const uniforms = {
    top: { value: lab(style.getPropertyValue("--paper-top")) },
    bottom: { value: lab(style.getPropertyValue("--paper-bottom")) },
    glow: { value: lab(style.getPropertyValue("--paper-glow")) },
    strength: { value: GLOW_STRENGTH },
    size: { value: new Vector2() },
    moon: { value: new Vector2() },
    scale: { value: 1 },
    light: { value: LIGHT },
  };

  const sheet = new Mesh(new PlaneGeometry(2, 2), new ShaderMaterial({ uniforms, vertexShader, fragmentShader: noise + fragmentShader }));
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const canvas = renderer.domElement;
  document.body.prepend(canvas);

  return (moonX: number, moonY: number) => {
    const ratio = Math.min(2, devicePixelRatio);
    resize(renderer, Math.round(canvas.clientWidth * ratio), Math.round(canvas.clientHeight * ratio));
    uniforms.size.value.set(canvas.width, canvas.height);
    uniforms.moon.value.set(moonX * ratio, moonY * ratio);
    uniforms.scale.value = ratio;
    renderer.render(sheet, camera);
  };
}
