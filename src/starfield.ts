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

const TOP_ALTITUDE = 50;
const SATURATION_ZENITH = 70;
const ZENITH_SCINTILLATION = 0.15;
const ZENITH_CORNER_HZ = 12;
const CHANNEL_NM = [610, 550, 465];
const DISPERSION = 0.75;
const PATH_SPREAD = 0.35;
const BURST_HZ = 0.08;
const BURST_SPREAD = 0.3;
const SPIKE_SPREAD = 0.5;

export const REACH = 36;

export type Star = { x: number; y: number; magnitude: number; color: number[]; index: number; path: number };

const seeded = new Prando(SEED);
const noise = createNoise2D(() => seeded.next());

let spread = 0;
for (let i = 0; i < 4096; i++) spread += noise(i * 0.618, i * 0.37) ** 2;
const NOISE_DEVIATION = Math.sqrt(spread / 4096);

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
        const normal = Math.sqrt(-2 * Math.log(1 - random.next())) * Math.cos(2 * Math.PI * random.next());
        const path = Math.exp(PATH_SPREAD * normal);

        const far = warmth < 0 ? COOL : WARM;
        const color = WHITE.map((shade, band) => shade + (far[band] - shade) * Math.abs(warmth));
        stars.push({ x, y, magnitude, color, index, path });
      }
    }
  }

  return stars;
}

export function twinkle(star: number, path: number, time: number, low: number) {
  const altitude = Math.max(1, TOP_ALTITUDE * (1 - low));
  const secant = 1 / Math.cos((Math.min(90 - altitude, SATURATION_ZENITH) * Math.PI) / 180);
  const corner = ZENITH_CORNER_HZ / Math.sqrt(secant);
  const steady = (channel: number, hertz: number) => noise(star * 7.31 + channel * 3.17, time * hertz) / NOISE_DEVIATION;

  const burst = Math.exp(BURST_SPREAD * steady(9, BURST_HZ) - (BURST_SPREAD * BURST_SPREAD) / 2);
  const strength = ZENITH_SCINTILLATION * secant ** (11 / 12) * path * burst;
  const apart = DISPERSION * ((secant - 1) / (1 / Math.cos((SATURATION_ZENITH * Math.PI) / 180) - 1));
  const shared = steady(0, corner);
  const gain = CHANNEL_NM.map((nanometers, channel) => {
    const deviation = strength * (nanometers / 550) ** (-7 / 12);
    const wave = Math.sqrt(1 - apart * apart) * shared + apart * steady(1 + channel, corner);
    return Math.exp(deviation * wave - (deviation * deviation) / 2);
  });

  const spike = SPIKE_SPREAD * strength;
  return {
    gain,
    arms: [0, 1, 2, 3].map((arm) => Math.exp(spike * steady(4 + arm * 2, corner) - (spike * spike) / 2)),
    shimmer: strength,
    rate: corner,
    shift: [0.02 * strength * steady(20, corner), 0.02 * strength * steady(21, corner)],
  };
}
