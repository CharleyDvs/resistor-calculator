import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export const BarLoader = () => {
  return (
    <div className={cx('bar-loader')} role='alert' aria-busy>
      <div className={cx('bar-1')} />
      <div className={cx('bar-2')} />
      <div className={cx('bar-3')} />
      <div className={cx('bar-4')} />
    </div>
  );
};
