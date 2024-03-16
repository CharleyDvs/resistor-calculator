import { render, screen, act } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { BandColorDropdown } from '.';

describe('BandColorDropdown', () => {
  const testLegend = 'Color';
  const testValues = [
    { value: 'black', label: testLegend + 'Black' },
    { value: 'brown', label: testLegend + 'Brown' },
    { value: 'white', label: testLegend + 'White' },
  ];
  const mockFn = jest.fn();

  const TestComponent = () => {
    return (
      <BandColorDropdown>
        <BandColorDropdown.Trigger color={testValues[0].value} />
        <BandColorDropdown.List>
          {testValues.map(({ value, label }) => (
            <BandColorDropdown.ListItem
              key={value}
              color={value}
              onCheckedChange={mockFn}
              checked={value === testValues[0].value}
            >
              {label}
            </BandColorDropdown.ListItem>
          ))}
        </BandColorDropdown.List>
      </BandColorDropdown>
    );
  };

  beforeEach(() => {
    render(<TestComponent />);
  });
  it('renders correctly with the given props', () => {
    const dropdownTrigger = screen.getByRole('combobox');

    expect(dropdownTrigger).toBeTruthy();
  });

  it('renders a list when the trigger is clicked', async () => {
    const dropdownTrigger = screen.getByRole('combobox');

    userEvent.click(dropdownTrigger);

    const listItem = await screen.findAllByText(testLegend, { exact: false });

    listItem && expect(listItem.length).toBe(testValues.length);
  });

  it('fires a callback when an item is clicked', async () => {
    const dropdownTrigger = screen.getByRole('combobox');

    userEvent.click(dropdownTrigger);

    const listItem = await screen.findAllByText(testLegend, { exact: false });

    await act(async () => {
      await userEvent.click(listItem[1]);
    });

    expect(mockFn).toHaveBeenCalled();
  });
});
