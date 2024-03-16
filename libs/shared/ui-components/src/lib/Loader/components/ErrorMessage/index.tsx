import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface ErrorMessageProps {
  children?: React.ReactNode;
}

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <div className={cx('error-container')} role={'alert'}>{children}</div>;
};
