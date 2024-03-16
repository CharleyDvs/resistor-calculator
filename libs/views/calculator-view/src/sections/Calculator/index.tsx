import classNames from 'classnames/bind';

import { Loader } from '@resistor-calculator/ui-components';
import {
  useResistorCalculator,
  useGetResistorConfigData,
} from '@resistor-calculator/ui-hooks';

import { DataCard, ValueSelector, ValueLegend } from '..';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface CalculatorProps {
  bandNumber: string;
}

export const Calculator = ({ bandNumber }: CalculatorProps) => {
  const {
    data: resistorConfig,
    isLoading,
    isError,
  } = useGetResistorConfigData(bandNumber);
  const { bandValues, setBandValues, resistorInfo } =
    useResistorCalculator(resistorConfig);

  return (
    <Loader
      isLoading={isLoading}
      isError={isError}
      errorText={'Something went wrong! Try again later'}
    >
      <div className={cx('calculator-container')}>
        <ValueSelector bandValues={bandValues} setBandValues={setBandValues} />
        <ValueLegend resistorData={resistorConfig} bandValues={bandValues} />
        <DataCard title="Resistor Values" infoToDisplay={resistorInfo} />
      </div>
    </Loader>
  );
};
