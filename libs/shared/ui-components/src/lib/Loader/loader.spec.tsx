import { render, screen } from '@testing-library/react';

import { Loader, LoaderProps } from '.';

describe('Loader', () => {
  const loadTestComponent = ({ children, ...rest }: Partial<LoaderProps>) => {
    render(<Loader {...rest}>{children}</Loader>);
  };

  it('renders a loader correctly', () => {
    loadTestComponent({
      isLoading: true,
    });

    const barLoader = screen.getByRole('alert');

    expect(barLoader).toBeTruthy();
  });

  it('renders an error message correctly', () => {
    const errorText = 'This is an error text';

    loadTestComponent({
      isError: true,
      errorText,
    });

    const errorMessage = screen.getByText(errorText);

    expect(errorMessage).toBeTruthy();
  });

  it('renders content when loading and error is false', () => {
    const contentText = 'This is random content';

    loadTestComponent({
      children: contentText
    });

    const errorMessage = screen.getByText(contentText);

    expect(errorMessage).toBeTruthy();
  });
});
