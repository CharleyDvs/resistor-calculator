import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface TriggerProps {
  children: React.ReactNode;
}

export const DropdownMenuList = ({ children }: TriggerProps) => {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content className={cx('option-list')}>{children}</DropdownMenu.Content>
    </DropdownMenu.Portal>
  );
};
