export const REGULAR_BAND_COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'gray',
  'white',
] as const;

export const ADDITIONAL_BAND_COLORS = ['gold', 'silver'] as const;

export const BAND_COLORS = [...REGULAR_BAND_COLORS, ...ADDITIONAL_BAND_COLORS] as const;
