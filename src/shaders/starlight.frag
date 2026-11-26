uniform sampler2D light;
uniform float frame;

float hash(vec2 p) {
  vec3 q = fract(p.xyx * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}

void main() {
  gl_FragColor = vec4(texelFetch(light, ivec2(gl_FragCoord.xy), 0).rgb, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>

  vec2 seed = gl_FragCoord.xy + frame * vec2(17.0, 59.0);
  float lit = step(1e-6, max(gl_FragColor.r, max(gl_FragColor.g, gl_FragColor.b)));
  vec3 seen = clamp(gl_FragColor.rgb + lit * (hash(seed) + hash(seed + 0.5) - 1.0) / 255.0, 0.0, 1.0);
  gl_FragColor = vec4(seen, max(seen.r, max(seen.g, seen.b)));
}
