import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export interface CardBodyProps {
  children: React.ReactNode;
}

export const CardBody = ({ children }: CardBodyProps) => {
  return <div className={cx('card-body')}>{children}</div>;
};
