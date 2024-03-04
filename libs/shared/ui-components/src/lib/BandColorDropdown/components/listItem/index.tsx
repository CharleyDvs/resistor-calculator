import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export interface ListItemProps
  extends Partial<
    DropdownMenu.DropdownMenuCheckboxItemProps &
      React.RefAttributes<HTMLDivElement>
  > {
  color: string;
}

export const ListItem = ({
  color,
  checked,
  children,
  ...rest
}: ListItemProps) => {
  return (
    <DropdownMenu.CheckboxItem
      className={cx('list-item', { checked })}
      {...rest}
    >
      {children}
      <div className={cx('color-display')} style={{ backgroundColor: color }} />
    </DropdownMenu.CheckboxItem>
  );
};
