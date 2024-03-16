import { ResistorTypes, ResistorConfig } from '@resistor-calculator/types';

// TODO: Replace the mock values for a real DB
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

export const getResistorConfig = (bandNumber: string): ResistorConfig[] => {
  if (bandNumber === '4') {
    return CONFIG_MOCK;
  }

  return [
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
    ...CONFIG_MOCK,
  ];
};

export const getResistorTypes = (): ResistorTypes[] => {
  return ['4', '5'];
};
