import * as RTabs from '@radix-ui/react-tabs';

import { TabsContent, TabsList, TabsTrigger } from './components';

export const Tabs = (
  props: Partial<RTabs.TabsProps & React.RefAttributes<HTMLDivElement>>
) => {
  return <RTabs.Root {...props} />;
};

Tabs.Content = TabsContent;
Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
