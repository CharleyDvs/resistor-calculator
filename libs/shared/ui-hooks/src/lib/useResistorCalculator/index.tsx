import { useEffect, useState } from 'react';

import { BaseResistor } from '@resistor-calculator/utilities';

import { ResistorConfig, BandValue } from '@resistor-calculator/types';

/**
 * This custom hook will help you get the active indexes for the sidebar.
 * @param config the configuration object to claculate the resistor values.
 * @returns `{bandValues, setBandValues, resistorInfo}`.
 */
export const useResistorCalculator = (config?: ResistorConfig[]) => {
  const [bandValues, setBandValues] = useState<BandValue[]>([]);

  useEffect(() => {
    const startingBandValues: BandValue[] = [];

    if (config) {
      config.forEach(({ values }) => {
        const initialColor = Object.keys(values)[0] as BandValue;
        startingBandValues.push(initialColor);
      });

      setBandValues(startingBandValues);
    }
  }, [config]);

  const resistor = new BaseResistor(config || []);
  const resistorInfo = resistor.calculateValues(bandValues);

  return { bandValues, setBandValues, resistorInfo };
};
