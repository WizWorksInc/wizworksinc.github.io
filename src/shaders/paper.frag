uniform vec3 top, bottom, glow;
uniform vec2 size, moon;
uniform float strength;

vec3 oklabToLinear(vec3 c) {
  float l = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
  float m = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
  float s = c.x - 0.0894841775 * c.y - 1.291485548 * c.z;
  
  vec3 k = vec3(l * l * l, m * m * m, s * s * s);
  
  return clamp(vec3(
    dot(k, vec3(4.0767416621, -3.3077115913, 0.2309699292)),
    dot(k, vec3(-1.2684380046, 2.6097574011, -0.3413193965)),
    dot(k, vec3(-0.0041960863, -0.7034186147, 1.707614701))), 0.0, 1.0);
}

void main() {
  vec2 at = vec2(gl_FragCoord.x, size.y - gl_FragCoord.y);
  vec2 grain = at - size * 0.5 + 4096.0;
  
  float d = length(at - moon) / max(size.x, size.y);
  vec3 c = mix(mix(top, bottom, at.y / size.y), glow, strength * exp(-d * d * 3.2));
  
  c.x += (noise(grain * vec2(0.5, 0.36)) + 0.5 * noise(grain * 1.1) - 0.75) * 0.01;
  c.x += (noise(grain * 0.011) + 0.6 * noise(grain * 0.047) - 0.8) * 0.008;
  float speck = smoothstep(0.86, 0.95, noise(grain * vec2(0.21, 0.5) + 70.0)) * step(0.76, noise(grain * 0.031 + 9.0));
  c.x += speck * (c.x > 0.5 ? -0.03 : 0.02);

  gl_FragColor = vec4(oklabToLinear(c), 1.0);
  #include <colorspace_fragment>

  // Dither hides banding in the dark gradient.
  gl_FragColor.rgb += (hash(grain + 7.0) + hash(grain + 91.0) - 1.0) / 255.0;
}
