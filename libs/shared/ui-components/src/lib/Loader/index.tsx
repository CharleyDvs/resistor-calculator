import { BarLoader, ErrorMessage } from './components';

export interface LoaderProps {
  children: React.ReactNode;
  isLoading?: boolean;
  isError?: boolean;
  errorText?: React.ReactNode
}

export const Loader = ({ children, isLoading, isError, errorText }: LoaderProps) => {
  if (isLoading) {
    return <BarLoader />;
  }

  if (isError) {
    return <ErrorMessage>{errorText}</ErrorMessage>
  }

  return children;
};
