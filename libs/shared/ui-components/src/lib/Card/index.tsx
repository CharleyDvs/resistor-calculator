import classNames from 'classnames/bind';

import { CardHeader, CardBody } from './components';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className={cx('card')}>{children}</div>;
};

Card.Body = CardBody;
Card.Header = CardHeader;
