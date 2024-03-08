import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { Tabs } from '@resistor-calculator/ui-components';
import { useResistorCalculator } from '@resistor-calculator/ui-hooks';

import { DataCard, ValueSelector, ValueLegend } from './sections';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export const CalculatorView = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'calculator-view' });
  const { bandValues, setBandValues, resistorInfo } = useResistorCalculator();

  return (
    <>
      <h1>{t('title')}</h1>
      <Tabs defaultValue={'4bands'}>
        <Tabs.List>
          <Tabs.Trigger value="4bands">4 bands resistor</Tabs.Trigger>
          <Tabs.Trigger value="5bands">5 bands resistor</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="4bands">
          <div className={cx('calculator-container')}>
            <ValueSelector
              bandValues={bandValues}
              setBandValues={setBandValues}
            />
            <ValueLegend bandValues={bandValues} />
            <DataCard title="Resistor Values" infoToDisplay={resistorInfo} />
          </div>
        </Tabs.Content>
        <Tabs.Content value="5bands">
          <h2 style={{ margin: 0, paddingBottom: 12 }}>Example 2</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          quasi inventore asperiores, soluta eum consequuntur distinctio
          repellendus, provident laborum molestiae dicta ratione quia sequi
          fuga? Exercitationem asperiores dolorum sed expedita.
        </Tabs.Content>
      </Tabs>
    </>
  );
};

export default CalculatorView;
