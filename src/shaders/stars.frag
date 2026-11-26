uniform highp sampler3D profiles;
uniform float layer;
uniform float stride;
uniform float time;
uniform float ratio;
flat varying vec2 vCenter;
flat varying vec3 vEnergy;
flat varying vec2 vArms;
flat varying vec3 vGlint;

float hash(vec2 p) {
  vec3 q = fract(p.xyx * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}

float wobble(vec2 p) {
  vec2 cell = floor(p);
  vec2 f = fract(p);
  vec2 s = f * f * (3.0 - 2.0 * f);
  float bottom = mix(hash(cell), hash(cell + vec2(1.0, 0.0)), s.x);
  float top = mix(hash(cell + vec2(0.0, 1.0)), hash(cell + vec2(1.0, 1.0)), s.x);
  return (mix(bottom, top, s.y) * 2.0 - 1.0) / 0.43;
}

void main() {
  vec2 size = vec2(textureSize(profiles, 0).xy) * stride;
  vec2 offset = gl_FragCoord.xy - vCenter;
  vec2 turned = vec2(offset.x - offset.y, offset.x + offset.y) * 0.70710678;
  vec3 psf = texture(profiles, vec3(0.5 + offset / size, layer)).rgb;
  vec3 halo = min(psf, texture(profiles, vec3(0.5 + turned / size, layer)).rgb);

  int arm = offset.x * offset.y < 0.0 ? 1 : 0;
  float along = length(offset) / ratio;
  float spread = vGlint.x;
  float ripple = wobble(vec2(along / 4.0 + vGlint.y + float(arm) * 31.0, time * vGlint.z));
  float boil = mix(1.0, vArms[arm] * exp(spread * ripple - 0.5 * spread * spread), smoothstep(1.0, 3.0, along));
  gl_FragColor = vec4(vEnergy * (halo + (psf - halo) * boil), 0.0);
}
