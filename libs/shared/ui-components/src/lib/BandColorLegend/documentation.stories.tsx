import type { Meta } from '@storybook/react';
import { BandColorLegend } from '.';

const meta: Meta<typeof BandColorLegend> = {
  component: BandColorLegend,
  title: 'BandColorLegend',
  parameters: {
    layout: 'centered',
  },
};
export default meta;

const DEFAULT_VALUES = [
  {
    value: 1,
    color: 'black',
  },
  {
    value: 10,
    color: 'brown',
  },
];

export const FullExample = () => (
  <>
    {DEFAULT_VALUES.map(({ value, color }) => (
      <BandColorLegend key={value} color={color} legend={color} value={value} />
    ))}
  </>
);
