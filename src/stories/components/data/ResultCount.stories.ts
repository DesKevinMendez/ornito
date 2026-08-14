import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';

import ResultCount from '../../../components/Table/ResultCount.vue';

type ResultCountStoryArgs = ComponentPropsAndSlots<typeof ResultCount>;

const meta = {
  title: 'Components/Data/ResultCount',
  component: ResultCount,
  tags: ['autodocs'],
  argTypes: {
    internalPaginationServer: { control: 'object' },
    totalItems: { control: { type: 'number', min: 0 } },
  },
  args: {
    internalPaginationServer: {
      total: 48,
      per_page: 10,
      current_page: 2,
      from: 11,
      to: 20,
      last_page: 5,
    },
    totalItems: 10,
  },
} satisfies Meta<ResultCountStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    internalPaginationServer: {
      total: 0,
      per_page: 10,
      current_page: 1,
      from: 0,
      to: 0,
      last_page: 0,
    },
    totalItems: 0,
  },
};
