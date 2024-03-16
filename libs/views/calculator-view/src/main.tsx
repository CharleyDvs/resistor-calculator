import { useTranslation } from 'react-i18next';

import { Loader, Tabs } from '@resistor-calculator/ui-components';
import { useGetResistorTypes } from '@resistor-calculator/ui-hooks';

import { Calculator } from './sections';

export const CalculatorView = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'calculator-view' });

  const { data: resistorTypes, isLoading, isError } = useGetResistorTypes();

  return (
    <>
      <h1>{t('title')}</h1>
      <Loader
        isLoading={isLoading}
        isError={isError}
        errorText={'Something went wrong! Try again later'}
      >
        {resistorTypes && (
          <Tabs defaultValue={resistorTypes[0]}>
            <Tabs.List>
              {resistorTypes.map((resistorType, index) => (
                <Tabs.Trigger
                  key={'tab' + resistorType + index}
                  value={resistorType}
                >
                  {resistorType} bands resistor
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            {resistorTypes.map((resistorType, index) => (
              <Tabs.Content
                key={'tab-content' + resistorType + index}
                value={resistorType}
              >
                <Calculator bandNumber={resistorType} />
              </Tabs.Content>
            ))}
          </Tabs>
        )}
      </Loader>
    </>
  );
};

export default CalculatorView;
