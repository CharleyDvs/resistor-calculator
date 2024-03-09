import classNames from 'classnames/bind';

import { BandColorLegend } from '@resistor-calculator/ui-components';
import { ResistorConfig, BandValue } from '@resistor-calculator/utilities';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface ValueLegendProps {
  resistorData?: ResistorConfig[];
  bandValues?: BandValue[];
}

export const ValueLegend = ({ resistorData, bandValues }: ValueLegendProps) => {
  return (
    <div className={cx('value-legend')}>
      {resistorData &&
        bandValues &&
        resistorData.map(({ values, type }, index) => {
          const currentColor = bandValues[index];
          
          return (
            <BandColorLegend
              key={currentColor + index}
              color={currentColor}
              legend={type}
              value={values[currentColor] || 'N/A'}
            />
          );
        })}
    </div>
  );
};
