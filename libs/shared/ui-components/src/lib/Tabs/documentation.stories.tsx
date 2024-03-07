import type { Meta } from '@storybook/react';
import { Tabs } from '.';
import { Card } from '../Card';

import { FullExample as BandColorExample } from '../BandColorDropdown/documentation.stories';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Tabs',
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const FullExample = () => {
  return (
    <Tabs defaultValue={'tab1'}>
      <Card>
        <Card.Header>
          <Tabs.List>
            <Tabs.Trigger value="tab1">Topic 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Topic 2</Tabs.Trigger>
            <Tabs.Trigger value="tab3">Topic 3</Tabs.Trigger>
          </Tabs.List>
        </Card.Header>
        <Card.Body>
          <Tabs.Content value="tab1">
            <h2 style={{ margin: 0, paddingBottom: 12 }}>Example 1</h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            soluta voluptatem, nostrum quae voluptatum numquam cumque unde, vel
            reprehenderit alias officiis at cum minus illo error velit, deleniti
            dolores obcaecati!
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <h2 style={{ margin: 0, paddingBottom: 12 }}>Example 2</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quasi inventore asperiores, soluta eum consequuntur distinctio
            repellendus, provident laborum molestiae dicta ratione quia sequi
            fuga? Exercitationem asperiores dolorum sed expedita.
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                paddingTop: '24px',
              }}
            >
              <BandColorExample />
              <BandColorExample />
            </div>
          </Tabs.Content>
          <Tabs.Content value="tab3">
            <h2 style={{ margin: 0, paddingBottom: 12 }}>Example 3</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
            dignissimos, placeat aliquid officia nam dolor repellat optio
            similique, dolores neque assumenda eius? Inventore quia obcaecati
            sequi libero reprehenderit eius.
          </Tabs.Content>
        </Card.Body>
      </Card>
    </Tabs>
  );
};
