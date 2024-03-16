import classNames from 'classnames/bind';

import { Card } from '@resistor-calculator/ui-components';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface DataCardProps {
  title: string;
  infoToDisplay: { [key: string]: string };
}

export const DataCard = ({ title, infoToDisplay }: DataCardProps) => {
  const dataToDisplay = Object.entries(infoToDisplay);

  return (
    <div className={cx('data-card')}>
      <Card>
        <Card.Header>
          <h2 className={cx('data-card-title')}>{title}</h2>
        </Card.Header>
        <Card.Body>
          {dataToDisplay.map(([key, value]) => (
            <div key={key}>
              <span className={cx('key-container')}>{key}:</span>
              <span>{value}</span>
            </div>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};
