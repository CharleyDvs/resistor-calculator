import type { Meta, StoryFn } from '@storybook/react';
import { Loader } from '.';

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: 'Loader',
  parameters: {
    layout: 'centered',
  },
  args: {
    isError: false,
    isLoading: false,
  },
};
export default meta;

export const FullExample: StoryFn<typeof Loader> = (args) => {
  const ErrorText = () => <>Something went wrong, please try again later</>;
  return (
    <Loader {...args} errorText={<ErrorText />}>
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
        doloremque velit, quidem magnam asperiores dolorem voluptates totam id
        ipsum adipisci, itaque tempora explicabo officia esse magni. Voluptas,
        repellendus? Sapiente, molestias!
      </span>
    </Loader>
  );
};
