import {
  useResistorCalculator,
  useGetResistorConfigData,
} from '@resistor-calculator/ui-hooks';
import classNames from 'classnames/bind';

import { DataCard, ValueSelector, ValueLegend } from '..';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface CalculatorProps {
  bandNumber: string;
}

export const Calculator = ({ bandNumber }: CalculatorProps) => {
  const { data: resistorConfig, isLoading } = useGetResistorConfigData(bandNumber);
  const { bandValues, setBandValues, resistorInfo } =
    useResistorCalculator(resistorConfig); 

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className={cx('calculator-container')}>
      <ValueSelector bandValues={bandValues} setBandValues={setBandValues} />
      {/* <ValueLegend resistorData={CONFIG_MOCK} bandValues={bandValues} /> */}
      <DataCard title="Resistor Values" infoToDisplay={resistorInfo} />
    </div>
  );
};
