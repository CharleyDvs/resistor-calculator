import classNames from 'classnames/bind';

import { BandColorDropdown } from '@resistor-calculator/ui-components';
import { BAND_COLORS, BandValue } from '@resistor-calculator/types';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface ValueSelectorProps {
  bandValues: BandValue[];
  setBandValues: React.Dispatch<React.SetStateAction<BandValue[]>>;
}

const bandColorOptions: { value: BandValue; label: string }[] = BAND_COLORS.map(
  (color) => ({
    value: color,
    label: color,
  })
);

export const ValueSelector = ({
  bandValues,
  setBandValues,
}: ValueSelectorProps) => {
  return (
    <div className={cx('value-selector')}>
      <div className={cx('resistor-end')} />
      {bandValues.map((color, index) => (
        <BandColorDropdown key={color + index}>
          <div className={cx('resistor-band')}>
            <BandColorDropdown.Trigger color={color} />
          </div>
          <BandColorDropdown.List>
            {bandColorOptions.map(({ value, label }) => (
              <BandColorDropdown.ListItem
                key={value}
                color={value}
                onCheckedChange={() => {
                  const newColors = [...bandValues];
                  newColors[index] = value;
                  setBandValues(newColors);
                }}
                checked={value === bandValues[index]}
              >
                {label}
              </BandColorDropdown.ListItem>
            ))}
          </BandColorDropdown.List>
        </BandColorDropdown>
      ))}
      <div className={cx('resistor-end')} />
    </div>
  );
};
