import { render, screen } from '@testing-library/react';

import { Card } from '.';

describe('Card', () => {
  const testTitle = 'Test title';
  const testContent = 'Test content';

  beforeEach(() => {
    render(
      <Card>
        <Card.Header>
          {testTitle}
        </Card.Header>
        <Card.Body>
          {testContent}
        </Card.Body>
      </Card>
    );
  });
  it('renders correctly with the given props', () => {
    const cardTitle = screen.getByText(testTitle);
    const cardBody = screen.getByText(testContent)

    expect(cardTitle).toBeTruthy();
    expect(cardBody).toBeTruthy();
  });
});
