import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface TriggerProps {
  color?: string;
}

export const Trigger = ({ color= '#000' }: TriggerProps) => {
  return (
    <DropdownMenu.Trigger asChild>
      <div className={cx('band-color')} style={{ backgroundColor: color }} />
    </DropdownMenu.Trigger>
  );
};
