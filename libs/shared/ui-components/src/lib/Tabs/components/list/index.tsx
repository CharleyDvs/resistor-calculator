import * as Tabs from '@radix-ui/react-tabs';

export const TabsList = (
  props: Partial<Tabs.TabsListProps & React.RefAttributes<HTMLDivElement>>
) => {
  return <Tabs.List {...props} />;
};
