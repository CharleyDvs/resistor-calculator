const CONFIG_MOCK = {
  0: {
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
  1: {
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
  2: {
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
  3: {
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
};

export const getResistorConfig = (bands: string) => {
  if (bands === '4') {
    return { data: CONFIG_MOCK };
  }

  return {
    data: {
      ...CONFIG_MOCK,
    },
  };
};

export const getResistorTypes = () => {
  return {
    data: {
      bands: ['3', '4'],
    },
  };
};
