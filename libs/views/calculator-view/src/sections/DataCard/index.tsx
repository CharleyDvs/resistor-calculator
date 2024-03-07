import classNames from 'classnames/bind';

import { Card } from '@resistor-calculator/ui-components';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface DataCardProps {
  title: string;
  resistorData: { [key: string]: string };
}

export const DataCard = ({ title, resistorData }: DataCardProps) => {
  const resistorDataToDisplay = Object.entries(resistorData);
  return (
    <div className={cx('resistor-data')}>
      <Card>
        <Card.Header>
          <h2>{title}</h2>
        </Card.Header>
        <Card.Body>
          {resistorDataToDisplay.map(([key, value]) => (
            <div key={key}>
              <span>{key}:</span>
              <span>{value}</span>
            </div>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};
