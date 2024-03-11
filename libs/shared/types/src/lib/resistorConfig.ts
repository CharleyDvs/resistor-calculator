import { ColorCode } from './colorValues';
import { BAND_COLORS } from './bandColors';

export type ResistorBandConfig = {
  type: string,
  values: Partial<ColorCode<typeof BAND_COLORS>>,
}