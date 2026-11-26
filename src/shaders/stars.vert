attribute vec2 spot;
attribute vec3 tint;
attribute float flux;
uniform vec2 viewport;
uniform float radius;
uniform float exposure;
flat varying vec2 vCenter;
flat varying vec3 vEnergy;

void main() {
  vec4 center = projectionMatrix * modelViewMatrix * vec4(spot, 0.0, 1.0);
  vCenter = (center.xy * 0.5 + 0.5) * viewport;
  vEnergy = tint * flux * exposure;

  gl_Position = vec4(center.xy + position.xy * 2.0 * radius / viewport, 0.0, 1.0);
}
