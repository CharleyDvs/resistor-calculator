import { useState } from 'react';
import type { Meta } from '@storybook/react';
import { BandColorDropdown } from '.';

const meta: Meta<typeof BandColorDropdown> = {
  component: BandColorDropdown,
  title: 'BandColorDropdown',
  parameters: {
    layout: 'centered',
  }
};
export default meta;

const DEFAULT_VALUES = [
  {
    value: 'black',
    label: 'Black',
  },
  {
    value: 'red',
    label: 'Red',
  },
];

export const FullExample = () => {
  const [colorValue, setColorValue] = useState<string>(DEFAULT_VALUES[0].value);

  return (
    <BandColorDropdown>
      <BandColorDropdown.Trigger color={colorValue} />
      <BandColorDropdown.List>
        {DEFAULT_VALUES.map(({ value, label }) => (
          <BandColorDropdown.ListItem
            key={value}
            color={value}
            onCheckedChange={() => setColorValue(value)}
            checked={value=== colorValue}
          >
            {label}
          </BandColorDropdown.ListItem>
        ))}
      </BandColorDropdown.List>
    </BandColorDropdown>
  );
};
