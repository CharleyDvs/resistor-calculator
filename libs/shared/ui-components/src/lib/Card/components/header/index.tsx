import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export interface CardHeaderProps {
  children: React.ReactNode;
}

export const CardHeader = ({ children }: CardHeaderProps) => {
  return <div className={cx('card-header')}>{children}</div>;
};
