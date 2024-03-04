import { BAND_COLORS } from './BandColors';

import { ColorCode } from './types';

export const TOLERANCES: Partial<ColorCode<typeof BAND_COLORS>> = {
  brown: 1,
  red: 2,
  green: 0.5,
  blue: 0.25,
  violet: 0.1,
  gold: 5,
  silver: 10,
};
