import { fireEvent, render, screen } from '@testing-library/react';

import { Tabs } from '.';

describe('Tabs', () => {
  const testValues = ['1', '2'];
  const testTrigger = 'Test trigger';
  const testContent = 'Test content';

  beforeEach(() => {
    render(
      <Tabs defaultValue={testValues[0]}>
        <Tabs.List>
          {testValues.map((value) => (
            <Tabs.Trigger key={value} value={value}>
              {testTrigger + value}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {testValues.map((value) => (
          <Tabs.Content key={value} value={value}>
            {testContent + value}
          </Tabs.Content>
        ))}
      </Tabs>
    );
  });
  it('renders correctly with the given props', () => {
    const tabs = screen.getAllByText(testTrigger, { exact: false });
    const tabContent = screen.getByText(testContent + testValues[0]);

    expect(tabs.length).toEqual(testValues.length);
    expect(tabContent).toBeTruthy();
  });

  it('changes the content when another tab is clicked', () => {
    const tabs = screen.getAllByText(testTrigger, { exact: false });
    const tabContent0 = screen.getByText(testContent + testValues[0]);

    expect(tabContent0).toBeTruthy();

    fireEvent.mouseDown(tabs[1]);

    const tabContent1 = screen.getByText(testContent + testValues[1]);

    expect(tabContent1).toBeTruthy();
  });
});
