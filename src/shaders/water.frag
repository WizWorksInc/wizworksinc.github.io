uniform float baseline, time, pixel, grit, glass, spread, polarity, moonX;
uniform vec3 ink, wiz, moonlight, mirrored;
uniform sampler2D mirror;
varying vec2 at;
varying float across, slope, local;
flat varying float vChop, vRest, vRow, vPitch, vDepth;

vec2 letters(float x) {
  float level = (at.y - baseline) * 1.12;
  vec2 uv = vec2((x - mirrored.x) / (mirrored.y - mirrored.x), 1.0 - level / mirrored.z);
  return texture2D(mirror, uv).rg * step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
}

float face() {
  float swell = noise(vec2(at.x / (330.0 + 260.0 * vDepth) + 11.0, vDepth * 9.0 + 3.0));
  float chop = noise(vec2(at.x / (110.0 + 90.0 * vDepth) + 47.0, vDepth * 26.0 + 19.0));
  return 0.62 * swell + 0.38 * chop;
}

void main() {
  float dx = moonX - at.x;
  float near = exp(-dx * dx / (spread * spread));
  float lit = clamp(slope * dx / (abs(dx) + 200.0) * 2.6, -1.0, 1.0) * near;

  float weight = 0.0;
  float alpha = 1.0;
  vec3 color = ink;

  if (vChop < 0.5) {
    float ripple = vPitch * (0.2 + 2.6 * vDepth) * (noise(vec2(at.x / (vPitch * 9.0) + 400.0 + time * 0.08, vRest / (vPitch * 1.6) + time * 0.11)) - 0.5) * 2.0;

    // The reflection leans with the wave slope and softens away from the shore.
    float bend = clamp(0.3 * slope * (at.y - baseline), -2.5 * vPitch, 2.5 * vPitch);
    float spread = vPitch * (0.36 + 0.8 * vDepth);

    vec2 tone = vec2(0.0);
    for (int i = -2; i <= 2; i++) tone += letters(at.x + ripple + bend + float(i) * spread);
    tone *= 0.116 * glass * max(0.0, 1.0 - vDepth * 1.1);

    float swell = noise(vec2(at.x / 520.0 + 60.0, vRest / (vPitch * 7.0) + 40.0));
    float thin = (0.15 + 0.07 * swell) * (1.0 - 0.7 * vDepth);
    weight = vPitch * local * max(thin, tone.x) * (1.0 + polarity * 0.4 * lit);

    vec3 line = mix(ink, wiz, clamp(tone.y / max(thin, tone.x), 0.0, 1.0));
    color = mix(line, moonlight, clamp(0.5 * max(lit, 0.0) + 0.14 * near, 0.0, 0.5));
  } else {
    float x = at.x + time * 2.0;
    float run = (40.0 + 50.0 * vDepth) * grit;
    float dash = 0.66 * noise(vec2(x / run + vRow * 17.7, vRow * 3.1)) + 0.34 * noise(vec2(x / (run * 0.24) + vRow * 5.3, vRow * 7.9 + 60.0));
    weight = vPitch * 0.16 * clamp((face() - 0.12 - dash + polarity * 0.16 * lit) * 4.0, 0.0, 1.0);
    alpha = 0.75 * smoothstep(0.4, 1.0, weight / grit);
  }

  float halfWeight = weight * 0.5;
  float cover = clamp(min(across + pixel * 0.5, halfWeight) - max(across - pixel * 0.5, -halfWeight), 0.0, pixel) / pixel;
  gl_FragColor = vec4(color, 1.0) * cover * alpha;
}
