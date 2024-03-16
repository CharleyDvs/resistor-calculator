import { BaseResistor } from '.';

import { ResistorConfig } from '@resistor-calculator/types';

const CONFIG_MOCK: ResistorConfig[] = [
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
];

describe('BaseResistor', () => {
  it('creates a BaseResistor instance with a given configuration', () => {
    const resistor = new BaseResistor(CONFIG_MOCK);

    expect(resistor).toBeTruthy();
  });

  it('creates a BaseResistor instance and correctly calculates the band values', () => {
    const bandValues = ['brown', 'black', 'violet']
    const expectedResult = { resistance: '10x10^7 Ω' }
    const resistor = new BaseResistor(CONFIG_MOCK);

    const result = resistor.calculateValues(bandValues);
    
    expect(result).toMatchObject(expectedResult);
  });
});
