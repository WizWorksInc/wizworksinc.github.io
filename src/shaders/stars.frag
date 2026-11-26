uniform sampler2D sprite;
varying vec2 vUv;
flat varying vec3 vTint;
flat varying float vFlux;

void main() {
  vec3 code = texture2D(sprite, vUv).rgb;

  // The sprite stores six decades of brightness as a log code.
  vec3 light = pow(vec3(10.0), 6.0 * code - 6.0) * step(0.01, code);
  vec3 seen = (1.0 - exp(-light * vFlux)) * vTint;
  gl_FragColor = vec4(seen, max(seen.r, max(seen.g, seen.b)));
}
