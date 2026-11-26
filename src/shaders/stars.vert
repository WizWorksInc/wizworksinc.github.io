attribute vec2 spot;
attribute vec3 tint;
attribute float flux;
attribute vec4 arms;
attribute vec3 glint;
uniform vec2 viewport;
uniform float radius;
uniform float exposure;
flat varying vec2 vCenter;
flat varying vec3 vEnergy;
flat varying vec4 vArms;
flat varying vec3 vGlint;

void main() {
  vec4 center = projectionMatrix * modelViewMatrix * vec4(spot, 0.0, 1.0);
  vCenter = (center.xy * 0.5 + 0.5) * viewport;
  vEnergy = tint * flux * exposure;
  vArms = arms;
  vGlint = glint;
  gl_Position = vec4(center.xy + position.xy * 2.0 * radius / viewport, 0.0, 1.0);
}
