attribute vec2 spot;
attribute vec3 tint;
attribute float flux;
uniform float reach;
varying vec2 vUv;
flat varying vec3 vTint;
flat varying float vFlux;

void main() {
  vUv = uv;
  vTint = tint;
  vFlux = flux;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(spot + position.xy * reach, 0.0, 1.0);
}
