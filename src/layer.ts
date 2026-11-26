import { WebGLRenderer } from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

const supported = WebGL.isWebGL2Available();

export function createLayer(className: string) {
  if (!supported) return;

  let renderer: WebGLRenderer;

  // Creation can still fail after the check above (a blocked GPU for one).
  try {
    renderer = new WebGLRenderer({ alpha: true, depth: false });
  } catch {
    return;
  }

  const canvas = renderer.domElement;

  // three.js sets display inline which would beat the print rule in the stylesheet.
  canvas.style.display = "";
  canvas.className = className;
  canvas.setAttribute("aria-hidden", "true");

  // A lost context leaves the static artwork underneath on show.
  canvas.addEventListener("webglcontextlost", () => canvas.remove());
  return renderer;
}

export function resize(renderer: WebGLRenderer, width: number, height: number) {
  const canvas = renderer.domElement;
  if (canvas.width !== width || canvas.height !== height) renderer.setSize(width, height, false);
}
