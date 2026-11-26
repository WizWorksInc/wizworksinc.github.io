uniform vec3 top, bottom, glow;
uniform vec2 size, moon, light;
uniform float strength, scale;

const float RAKE = 1.6;

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

float soft(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}

float strands(vec2 p, float cell, float seed) {
  vec2 q = p / cell;
  vec2 i = floor(q);
  float sum = 0.0;
  for (int y = -1; y <= 1; ++y) {
    for (int x = -1; x <= 1; ++x) {
      vec2 c = i + vec2(x, y) + seed;
      vec2 center = vec2(x, y) + vec2(hash(c), hash(c + 41.7));
      float angle = hash(c + 17.3) * 6.2831853;
      vec2 along = vec2(cos(angle), sin(angle));
      vec2 d = q - i - center;
      float across = length(d - along * clamp(dot(d, along), -0.9, 0.9)) * cell;
      sum += exp(-across * across * 2.5);
    }
  }

  return min(sum, 1.5);
}

float sheet(vec2 p) {
  mat2 turn = mat2(0.8, 0.6, -0.6, 0.8);
  float formation = 0.6 * soft(turn * p / 7.0) + 0.4 * soft(turn * turn * p / 3.0 + 17.0);
  vec2 bend = vec2(soft(p * 0.15), soft(p * 0.15 + 9.0)) - 0.5;
  float fibers = strands(p + bend * 2.0, 4.0, 0.0) + strands(p - bend * 2.0, 5.5, 63.0);
  float fine = soft(turn * p * vec2(1.0, 0.5) + 53.0);
  return 0.25 * formation + 0.06 * fibers + 0.04 * fine;
}

void main() {
  vec2 at = vec2(gl_FragCoord.x, size.y - gl_FragCoord.y);
  vec2 pixel = at - size * 0.5 + 4096.0;
  // Grain stays in CSS pixels so it looks the same at every density.
  vec2 grain = (at - size * 0.5) / scale + 4096.0;

  float d = length(at - moon) / max(size.x, size.y);
  vec3 c = mix(mix(top, bottom, at.y / size.y), glow, strength * exp(-d * d * 3.2));

  float h = sheet(grain);
  vec2 slope = vec2(sheet(grain + vec2(0.5, 0.0)), sheet(grain + vec2(0.0, 0.5))) - h;
  float shade = -dot(slope / 0.5, light) * RAKE;

  float speck = smoothstep(0.86, 0.95, noise(grain * vec2(0.21, 0.5) + 70.0)) * step(0.76, noise(grain * 0.031 + 9.0));
  c.x += speck * (c.x > 0.5 ? -0.03 : 0.02);

  gl_FragColor = vec4(oklabToLinear(c) * (1.0 + shade), 1.0);
  #include <colorspace_fragment>

  // Dither hides banding in the dark gradient.
  gl_FragColor.rgb += (hash(pixel + 7.0) + hash(pixel + 91.0) - 1.0) / 255.0;
}
