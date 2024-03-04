import { REGULAR_BAND_COLORS, ADDITIONAL_BAND_COLORS } from './BandColors';

import { ColorCode } from './types';

const REGULAR_MULTIPLIERS: ColorCode<typeof REGULAR_BAND_COLORS> = REGULAR_BAND_COLORS.reduce(
  (prev, color, index) => ({ ...prev, [color]: 1 * 10 ^ index }),
  {} as ColorCode<typeof REGULAR_BAND_COLORS>
);

const ADDITIONAL_MULTIPLIERS: ColorCode<typeof ADDITIONAL_BAND_COLORS> = ADDITIONAL_BAND_COLORS.reduce(
  (prev, color, index) => ({ ...prev, [color]: 1 * 10 ^ ((index+1) * 1) }),
  {} as ColorCode<typeof ADDITIONAL_BAND_COLORS>
);

export const MULTIPLIERS = {...ADDITIONAL_MULTIPLIERS, ...REGULAR_MULTIPLIERS  }
