import { BaseResistor, BandValue } from '@resistor-calculator/utilities';
import { useState } from 'react';

const CONFIG_MOCK = [
  {
    type: 'significantValue',
    values: {
      black: '0',
      brown: '1',
      red: '2',
      orange: '3',
      yellow: '4',
      green: '5',
      blue: '6',
      violet: '7',
      gray: '8',
      white: '9',
    },
  },
  {
    type: 'significantValue',
    values: {
      black: '0',
      brown: '1',
      red: '2',
      orange: '3',
      yellow: '4',
      green: '5',
      blue: '6',
      violet: '7',
      gray: '8',
      white: '9',
    },
  },
  {
    type: 'multiplier',
    values: {
      black: 'x10^0',
      brown: 'x10',
      red: 'x10^2',
      orange: 'x10^3',
      yellow: 'x10^4',
      green: 'x10^5',
      blue: 'x10^6',
      violet: 'x10^7',
      gray: 'x10^8',
      white: 'x10^9',
    },
  },
  {
    type: 'tolerance',
    values: {
      brown: '+/- 1%',
      red: '+/- 2%',
      orange: '+/- 3%',
      yellow: '+/- 4%',
      green: '+/- .5%',
      blue: '+/- .25%',
      violet: '+/- .1%',
      gray: '+/- .05%',
      white: 'x10^9',
    },
  },
];

export const useResistorCalculator = () => {
  const [bandValues, setBandValues] = useState<BandValue[]>([
    'black',
    'black',
    'black',
    'black',
  ]);

  const resistor = new BaseResistor(CONFIG_MOCK);
  const resistorInfo = resistor.calculateValues(bandValues)


  return { bandValues, setBandValues, resistorInfo };
};
