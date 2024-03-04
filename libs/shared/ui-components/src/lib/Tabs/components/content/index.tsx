import * as Tabs from '@radix-ui/react-tabs';

interface TabsContentProps extends Partial<Tabs.TabsContentProps & React.RefAttributes<HTMLDivElement>> {
  value: string;
}

export const TabsContent = (
  props:  TabsContentProps
) => {

  return <Tabs.Content {...props} />;
};
