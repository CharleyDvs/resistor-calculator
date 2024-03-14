import { useTranslation } from 'react-i18next';

import { Tabs } from '@resistor-calculator/ui-components';
import { useGetResistorTypes } from '@resistor-calculator/ui-hooks';

import { Calculator } from './sections';

export const CalculatorView = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'calculator-view' });

  const { data: resistorTypes, isLoading } = useGetResistorTypes();

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <h1>{t('title')}</h1>
      {resistorTypes && (
        <Tabs defaultValue={resistorTypes[0]}>
          <Tabs.List>
            {resistorTypes.map((resistorType, index) => (
              <Tabs.Trigger key={'tab'+ resistorType + index} value={resistorType}>
                {resistorType} bands resistor
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {resistorTypes.map((resistorType, index) => (
            <Tabs.Content key={'tab-content'+ resistorType + index} value={resistorType}>
              <Calculator bandNumber={resistorType} />
            </Tabs.Content>
          ))}
        </Tabs>
      )}
    </>
  );
};

export default CalculatorView;
