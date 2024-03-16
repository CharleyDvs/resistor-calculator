import { ResistorConfig } from '@resistor-calculator/types';

export class BaseResistor {
  config: ResistorConfig[] | [];

  constructor(config: ResistorConfig[]) {
    this.config = config;
  }

  calculateValues(bandColors: string[]) {
    const resistorValues: { [key: string]: string } = {};

    this.config.forEach(({ type, values }, idx) => {
      const currentBandColor = bandColors[idx];

      if (resistorValues[type]) {
        resistorValues[type] = `${resistorValues[type]}${
          values[currentBandColor] ?? ''
        }`;
      } else {
        resistorValues[type] = values[currentBandColor] ?? 'N/A';
      }
    });

    const { significantValue, multiplier, ...rest } = resistorValues;

    return {
      resistance: significantValue + multiplier + ' Ω',
      ...rest,
    };
  }
}
