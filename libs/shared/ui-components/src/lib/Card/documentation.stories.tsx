import type { Meta } from '@storybook/react';
import { Card } from '.';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Card',
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const FullExample = () => {
  return (
    <Card>
      <Card.Header>
        <h1 style={{ padding: 24, margin: 0 }}>Card Header</h1>
      </Card.Header>
      <Card.Body>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
          doloremque velit, quidem magnam asperiores dolorem voluptates totam id
          ipsum adipisci, itaque tempora explicabo officia esse magni. Voluptas,
          repellendus? Sapiente, molestias!
        </span>
      </Card.Body>
    </Card>
  );
};
