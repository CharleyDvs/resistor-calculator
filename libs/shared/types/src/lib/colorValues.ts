import { BAND_COLORS } from './bandColors';

export type BandValue = (typeof BAND_COLORS)[number];

export type ColorCode<T extends readonly string[]> = {
  [K in T[number]]: string;
};
