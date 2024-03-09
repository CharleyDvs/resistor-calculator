import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface BandColorLegendProps {
  color: string;
  legend: string;
  value: string;
}

export const BandColorLegend = ({
  color,
  legend,
  value,
}: BandColorLegendProps) => {
  return (
    <div className={cx('color-display-container')}>
      <div className={cx('color-display')} style={{ backgroundColor: color }} />
      <span>{legend}</span>
      <span>
        <i>{value}</i>
      </span>
    </div>
  );
};
