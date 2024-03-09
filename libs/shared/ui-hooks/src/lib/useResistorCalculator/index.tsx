import {
  BaseResistor,
  BandValue,
  ResistorConfig,
} from '@resistor-calculator/utilities';
import { useEffect, useState } from 'react';

export const useResistorCalculator = (config: ResistorConfig[]) => {
  const [bandValues, setBandValues] = useState<BandValue[]>([]);

  useEffect(() => {
    const startingBandValues: BandValue[] = [];

    config.forEach(({ values }) => {
      const initialColor = Object.keys(values)[0] as BandValue;
      startingBandValues.push(initialColor);
    });

    setBandValues(startingBandValues);
  }, [config]);

  const resistor = new BaseResistor(config);
  const resistorInfo = resistor.calculateValues(bandValues);

  return { bandValues, setBandValues, resistorInfo };
};
