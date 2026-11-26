import Prando from "prando";
import { createNoise2D } from "simplex-noise";
import type { Layout } from "./layout";

const SEED = 1887;
const DENSITY = 0.2;
const BRIGHT = 0.9;
const FAINT = 6.6;
const SLOPE = 0.32;
const COOL = [0.82, 0.91, 1];
const WHITE = [1, 0.97, 0.94];
const WARM = [1, 0.86, 0.7];
const FRAMES = 24;
const FLICKER = 0.3;
const WANDER = 0.565;
const PACE = 0.35;
const GRAIN = 1.134;

export const MOST = 140;

export type Star = { x: number; level: number; magnitude: number; color: number[]; index: number };

const seeded = new Prando(SEED);
const noise = createNoise2D(() => seeded.next());

export function scatter(wide: number, high: number, middle: number, { roofs, starReach, starFloor }: Layout) {
  const random = new Prando(SEED);
  const count = Math.min(MOST, Math.round((DENSITY * wide * high) / (starReach * starReach)));
  const stars: Star[] = [];
  for (let index = 0; index < count; index++) {
    // Every star takes four draws even when skipped so the others stay put.
    const x = middle + wide * random.next(-0.5, 0.5);
    const level = high * random.next();
    const magnitude = Math.max(BRIGHT, FAINT + Math.log10(1 - random.next()) / SLOPE);
    const warmth = random.next(-1, 1);

    const under = roofs.filter((roof) => x > roof.from - starReach && x < roof.to + starReach).map((roof) => roof.top);
    if (level <= Math.max(starFloor, ...under) + 0.9 * starReach) continue;

    const far = warmth < 0 ? COOL : WARM;
    const color = WHITE.map((shade, band) => shade + (far[band] - shade) * Math.abs(warmth));
    stars.push({ x, level, magnitude, color, index });
  }

  return stars;
}

export function twinkle(star: number, time: number, low: number) {
  // Flicker steps 24 times a second like film.
  const frame = Math.floor(time * FRAMES);
  const wander = (channel: number, rate: number) => WANDER * noise(star * 7.31 + channel * 3.17, (frame / FRAMES) * rate * PACE);
  const grain = (channel: number) => GRAIN * noise(star * 7.31 + channel * 3.17, frame * 5.77);

  const depth = FLICKER * (0.35 + 0.65 * low);
  const warm = depth * (0.5 * wander(3, 1.7) + 0.15 * grain(4));
  return {
    gain: Math.exp(depth * (1.4 * wander(1, 2.3) + 0.8 * wander(2, 7) + 0.3 * grain(0))),
    tint: [1 + warm, 1, 1 - warm],
    shift: [0.03 * depth * grain(5), 0.03 * depth * grain(6)],
  };
}
