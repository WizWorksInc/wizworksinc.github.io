import Prando from "prando";
import { createNoise2D } from "simplex-noise";

const SEED = 1887;
const DENSITY = 0.2;
const BRIGHT = 0.9;
const FAINT = 6.6;
const SLOPE = 0.32;
const TIERS = 4;
const COOL = [0.82, 0.91, 1];
const WHITE = [1, 0.97, 0.94];
const WARM = [1, 0.86, 0.7];
const FRAMES = 24;
const FLICKER = 0.3;
const WANDER = 0.565;
const PACE = 0.35;
const GRAIN = 1.134;

export const REACH = 36;

export type Star = { x: number; y: number; magnitude: number; color: number[]; index: number };

const seeded = new Prando(SEED);
const noise = createNoise2D(() => seeded.next());

export function scatter(west: number, east: number, depth: number) {
  const stars: Star[] = [];
  for (let tier = 0; tier < TIERS; tier++) {
    const last = tier === TIERS - 1;
    const share = (last ? 1 : 0.75) * 4 ** -tier;
    const cell = REACH / Math.sqrt(DENSITY * share);

    for (let column = Math.floor((west - REACH) / cell); column <= Math.floor((east + REACH) / cell); column++) {
      for (let row = 0; row * cell <= depth + REACH; row++) {
        const random = new Prando(`${SEED} ${tier} ${column} ${row}`);
        const x = (column + random.next()) * cell;
        const y = (row + random.next()) * cell;
        const rank = 4 ** -tier * (last ? 1 - random.next() : 1 - 0.75 * random.next());
        const magnitude = Math.max(BRIGHT, FAINT + Math.log10(rank) / SLOPE);
        const warmth = random.next(-1, 1);
        const index = random.nextInt(0, 9999);

        const far = warmth < 0 ? COOL : WARM;
        const color = WHITE.map((shade, band) => shade + (far[band] - shade) * Math.abs(warmth));
        stars.push({ x, y, magnitude, color, index });
      }
    }
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
