import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';

import TableHeader from '../../../components/TableHeader.vue';
import type { TableField } from '../../../types/Table';

interface HeaderRow {
  name: string;
  department: string;
  status: string;
}

const columns: TableField<HeaderRow>[] = [
  { label: 'Name', key: 'name', width: 220 },
  { label: 'Department', key: 'department' },
  { label: 'Status', key: 'status' },
];

type TableHeaderStoryArgs = ComponentPropsAndSlots<typeof TableHeader>;

const meta = {
  title: 'Components/Data/TableHeader',
  component: TableHeader,
  tags: ['autodocs'],
  argTypes: {
    columns: { control: false },
    showActions: { control: 'boolean' },
    actionsLabel: { control: 'text' },
  },
  args: {
    columns,
    showActions: true,
    actionsLabel: 'Actions',
  },
  render: (args) => ({
    components: { TableHeader },
    setup() {
      return { args };
    },
    template: `
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <TableHeader v-bind="args" />
        </table>
      </div>
    `,
  }),
} satisfies Meta<TableHeaderStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutActions: Story = {
  args: {
    showActions: false,
  },
};
