import { REGULAR_BAND_COLORS } from './BandColors';

import { ColorCode } from './types';

export const SIGNIFICANT_VALUES: ColorCode<typeof REGULAR_BAND_COLORS> = REGULAR_BAND_COLORS.reduce(
  (prev, color, index) => ({ ...prev, [color]: index }),
  {} as ColorCode<typeof REGULAR_BAND_COLORS>
);
