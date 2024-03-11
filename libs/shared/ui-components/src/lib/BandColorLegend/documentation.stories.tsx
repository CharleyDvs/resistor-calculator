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
    value: '1',
    legend: 'significant value',
    color: 'brown',
  },
  {
    value: '0',
    legend: 'significant value',
    color: 'black',
  },
  {
    value: '+/- 2%',
    legend: 'tolerance',
    color: 'red',
  },
];

export const FullExample = () => (
  <>
    {DEFAULT_VALUES.map(({ color, legend, value }) => (
      <BandColorLegend
        key={value}
        color={color}
        legend={legend}
        value={value}
      />
    ))}
  </>
);
