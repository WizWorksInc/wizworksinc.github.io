attribute float chop, rest, row, pitch, depth;
uniform float baseline, basePitch, seaDepth, wavelength, time, pixel;
uniform vec2 span;
varying vec2 at;
varying float across, slope, local;
flat varying float vChop, vRest, vRow, vPitch, vDepth;

float surface(float x, float r) {
  float d = (r - baseline) / seaDepth;
  float turn = x / wavelength * 6.2831853;
  float n = (r - baseline) / basePitch;
  float wave = 0.4 * sin(turn * 0.37 + n * 0.09 + 0.7 + time * 0.12)
    + 0.56 * sin(turn + n * 0.2 - time * 0.18)
    + 0.34 * sin(turn * 1.73 - n * 0.3 + 1.3 + time * 0.26);
  return r + basePitch * (1.0 + 0.95 * d) * (0.3 + 1.75 * d) * wave;
}

void main() {
  float x = mix(span.x, span.y, uv.x);
  float y = surface(x, rest);

  local = max(0.5, (surface(x, rest + pitch * 0.5) - surface(x, rest - pitch * 0.5)) / pitch);
  slope = (surface(x + 4.0, rest) - surface(x - 4.0, rest)) / 8.0;

  // Negated because logo units run downward. The other sign mirrors each quad and moves its diagonal.
  across = -position.y * (pitch * local * 0.5 + pixel * 2.0);
  at = vec2(x, y);

  vChop = chop;
  vRest = rest;
  vRow = row;
  vPitch = pitch;
  vDepth = depth;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(x, y + across, 0.0, 1.0);
}
