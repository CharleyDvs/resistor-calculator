import * as Tabs from '@radix-ui/react-tabs';
import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface TabsTriggerProps extends Partial<Tabs.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>> {
  value: string;
}

export const TabsTrigger = (
  props: TabsTriggerProps
) => {
  return <Tabs.Trigger className={cx('tabs-trigger')} {...props} />;
};
