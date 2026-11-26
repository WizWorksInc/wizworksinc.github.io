uniform highp sampler3D profiles;
uniform float layer;
uniform float stride;
flat varying vec2 vCenter;
flat varying vec3 vEnergy;

void main() {
  vec2 size = vec2(textureSize(profiles, 0).xy);
  vec2 offset = gl_FragCoord.xy - vCenter;
  gl_FragColor = vec4(vEnergy * texture(profiles, vec3(0.5 + offset / (size * stride), layer)).rgb, 0.0);
}
