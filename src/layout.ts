import layouts from "./layouts.json";

export type Layout = typeof layouts.wide & {
  moon: { x: number; altitude: number };
  starReach: number;
};

export const WIDE: Layout = { ...layouts.wide, moon: { x: 1497.55, altitude: 586.95 }, starReach: 102.4 };
export const NARROW: Layout = { ...layouts.narrow, moon: { x: 300.48, altitude: 758.3 }, starReach: 112 };
