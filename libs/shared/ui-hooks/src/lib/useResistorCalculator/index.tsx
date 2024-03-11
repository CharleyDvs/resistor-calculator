import { useEffect, useState } from 'react';

import { BaseResistor } from '@resistor-calculator/utilities';

import { ResistorBandConfig, BandValue } from '@resistor-calculator/types';

export const useResistorCalculator = (config?: ResistorBandConfig[]) => {
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
