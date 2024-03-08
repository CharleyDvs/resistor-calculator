import { REGULAR_BAND_COLORS } from './BandColors';

export type ColorCode<T extends readonly string[]> = {
  [K in T[number]]: number;
};

export type BandValue = (typeof REGULAR_BAND_COLORS)[number];
