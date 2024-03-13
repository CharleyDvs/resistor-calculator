import { render, screen } from '@testing-library/react';

import { BandColorLegend } from '.';

describe('BandColorLegend', () => {
  const testColor = 'black';
  const testLegend = 'Test legend';
  const testValue = '10 %';

  beforeEach(() => {
    render(
      <BandColorLegend
        color={testColor}
        legend={testLegend}
        value={testValue}
      />
    );
  });
  it('renders correctly with the given props', () => {
    const colorDisplay = screen.getByTestId(`color-display-${testColor}`);
    const colorLegend = screen.getByText(testLegend);
    const colorValue = screen.getByText(testValue);

    expect(colorDisplay).toBeTruthy();
    expect(colorLegend).toBeTruthy();
    expect(colorValue).toBeTruthy();
  });
});
