import classNames from 'classnames/bind';

import { BandColorLegend } from '@resistor-calculator/ui-components';
import {
  SIGNIFICANT_VALUES
} from '@resistor-calculator/utilities';

import { BandValue } from '../../types';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface ValueLegendProps {
  bandValues: BandValue[]
}

export const ValueLegend = ({ bandValues }: ValueLegendProps) => {
  return (
    <div className={cx('value-legend')}>
      {bandValues.map((color, index) => (
        <BandColorLegend
          key={color + index}
          color={color}
          legend={color}
          value={SIGNIFICANT_VALUES[color]}
        />
      ))}
    </div>
  );
};
