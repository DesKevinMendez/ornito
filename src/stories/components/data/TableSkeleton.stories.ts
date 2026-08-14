import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';

import TableSkeleton from '../../../components/Skeletons/TableSkeleton.vue';
import type { TableField } from '../../../types/Table';

interface SkeletonRow {
  name: string;
  department: string;
  status: string;
}

const columns: TableField<SkeletonRow>[] = [
  { label: 'Name', key: 'name' },
  { label: 'Department', key: 'department' },
  { label: 'Status', key: 'status' },
];

type TableSkeletonStoryArgs = ComponentPropsAndSlots<typeof TableSkeleton>;

const meta = {
  title: 'Components/Data/TableSkeleton',
  component: TableSkeleton,
  tags: ['autodocs'],
  argTypes: {
    rows: { control: { type: 'number', min: 1, max: 10 } },
    columns: { control: false },
    showActions: { control: 'boolean' },
  },
  args: {
    rows: 5,
    columns,
    showActions: true,
  },
  render: (args) => ({
    components: { TableSkeleton },
    setup() {
      return { args };
    },
    template: `
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <TableSkeleton v-bind="args" />
        </table>
      </div>
    `,
  }),
} satisfies Meta<TableSkeletonStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Compact: Story = {
  args: {
    rows: 3,
    showActions: false,
  },
};
