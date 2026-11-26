import profile from "./star-psf.json";
import { REACH } from "./starfield";

export { profile };

const EXPOSURE = 570;

export function sampling(ratio: number) {
  const scale = ((REACH * ratio) / (profile.size[0] / 2)) * profile.maximumScale;
  const stride = Math.max(1, Math.ceil(scale / profile.maximumScale));
  const target = scale / stride;
  const { scales } = profile;
  let lower = 0;
  let upper = scales.length - 1;
  while (upper - lower > 1) {
    const middle = (lower + upper) >> 1;
    if (scales[middle] < target) lower = middle;
    else upper = middle;
  }

  const fraction = (target - scales[lower]) / (scales[upper] - scales[lower]);
  return {
    radius: profile.radiusCssPixels * scales[upper] * stride + stride,
    layer: (lower + fraction + 0.5) / scales.length,
    stride,
    exposure: (EXPOSURE * scale * scale) / (stride * stride),
  };
}
