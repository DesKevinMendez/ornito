import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';

import TablePagination from '../../../components/TablePagination.vue';

type TablePaginationStoryArgs = ComponentPropsAndSlots<typeof TablePagination> & {
  onPageChange: (page: number) => void;
};

const meta = {
  title: 'Components/Data/TablePagination',
  component: TablePagination,
  tags: ['autodocs'],
  argTypes: {
    internalPaginationServer: { control: 'object' },
    onPageChange: { action: 'page-change' },
  },
  args: {
    internalPaginationServer: {
      total: 120,
      per_page: 10,
      current_page: 6,
      from: 51,
      to: 60,
      last_page: 12,
    },
    onPageChange: fn(),
  },
  render: (args) => ({
    components: { TablePagination },
    setup() {
      return { args, onPageChange: args.onPageChange };
    },
    template: '<TablePagination v-bind="args" @page-change="onPageChange" />',
  }),
} satisfies Meta<TablePaginationStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FirstPage: Story = {
  args: {
    internalPaginationServer: {
      total: 20,
      per_page: 10,
      current_page: 1,
      from: 1,
      to: 10,
      last_page: 2,
    },
  },
};
