import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { IconArchive, IconDotsVertical, IconPencil, IconTrash } from '@tabler/icons-vue';
import { fn } from 'storybook/test';
import { provide, ref, type Ref } from 'vue';

import DataTable from '../../../components/DataTable.vue';
import DropdownMenu from '../../../components/DropdownMenu.vue';
import { useRequestKey, type UseRequestFactory } from '../../../composables/useDataRequest';
import type { TableField } from '../../../types/Table';

interface Employee {
  id: number;
  name: string;
  department: string;
  status: 'Active' | 'On leave';
}

const employees: Employee[] = [
  { id: 1, name: 'Ana Rivera', department: 'Operations', status: 'Active' },
  { id: 2, name: 'Marco Soto', department: 'Logistics', status: 'On leave' },
  { id: 3, name: 'Sofía Herrera', department: 'Finance', status: 'Active' },
  { id: 4, name: 'Diego Cruz', department: 'Support', status: 'Active' },
  { id: 5, name: 'Lucía Mejía', department: 'Operations', status: 'On leave' },
];

const dropdownEmployees: Employee[] = [
  { id: 1, name: 'Ana Rivera', department: 'Operations', status: 'Active' },
  { id: 2, name: 'Marco Soto', department: 'Logistics', status: 'On leave' },
];

const rowActions = [
  { action: 'edit', label: 'Edit item', icon: IconPencil },
  { action: 'archive', label: 'Archive item', icon: IconArchive, variant: 'success' as const },
  { action: 'delete', label: 'Delete item', icon: IconTrash, variant: 'danger' as const },
];

const columns: TableField<Employee>[] = [
  { label: 'Name', key: 'name', width: 220 },
  { label: 'Department', key: 'department' },
  { label: 'Status', key: 'status', slot: 'status' },
];

const localDataColumns: TableField<Employee>[] = [
  { label: 'Employee ID', key: 'id', format: (row) => `EMP-${row.id}` },
  { label: 'Name', key: 'name', width: 220 },
  { label: 'Status', key: 'status', slot: 'status' },
];

const mockRequest: UseRequestFactory = () => ({
  get<T>(url: string) {
    const request = new URL(url, window.location.origin);
    const search = [...request.searchParams.entries()]
      .find(([key]) => key.startsWith('filter['))?.[1]
      ?.toLowerCase()
      .trim();
    const filteredEmployees = search
      ? employees.filter((employee) =>
          [employee.name, employee.department, employee.status]
            .join(' ')
            .toLowerCase()
            .includes(search),
        )
      : employees;

    return Promise.resolve({
      data: ref({
        data: filteredEmployees,
        pagination: {
          total: filteredEmployees.length,
          per_page: 10,
          current_page: 1,
          from: filteredEmployees.length ? 1 : 0,
          to: filteredEmployees.length,
          last_page: 1,
        },
      }) as Ref<T | null>,
    });
  },
});

const dropdownItemsRequest: UseRequestFactory = () => ({
  get<T>() {
    return Promise.resolve({
      data: ref({
        data: dropdownEmployees,
        pagination: {
          total: dropdownEmployees.length,
          per_page: 10,
          current_page: 1,
          from: 1,
          to: dropdownEmployees.length,
          last_page: 1,
        },
      }) as Ref<T | null>,
    });
  },
});

type DataTableStoryArgs = ComponentPropsAndSlots<typeof DataTable> & {
  onRowSelected: (row: Employee) => void;
};

const renderTable = (requestFactory?: UseRequestFactory, withRowActions = false) =>
  (args: DataTableStoryArgs) => ({
    components: { DataTable, DropdownMenu },
    setup() {
      if (requestFactory) provide(useRequestKey, requestFactory);
      const { onRowSelected, ...componentArgs } = args;
      return {
        componentArgs,
        onRowSelected,
        rowActions,
        onActionSelected: fn(),
        actionIcon: IconDotsVertical,
      };
    },
    template: `
      <div class="max-w-4xl p-4">
        <DataTable v-bind="componentArgs" @row-selected="onRowSelected">
          <template #status="{ row }">
            <span
              class="rounded-full px-2 py-1 text-xs font-medium"
              :class="row.status === 'Active' ? 'bg-success-100 text-success-700' : 'bg-warning-100 text-warning-700'"
            >
              {{ row.status }}
            </span>
          </template>
          ${withRowActions ? `
          <template #actions>
            <div @click.stop>
              <DropdownMenu
                :items="rowActions"
                aria-label="Employee actions"
                :icon="actionIcon"
                @select="onActionSelected"
              />
            </div>
          </template>` : ''}
        </DataTable>
      </div>
    `,
  });

const meta = {
  title: 'Components/Data/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    columns: { control: false },
    data: { control: false },
    url: { control: 'text' },
    showSearch: { control: 'boolean' },
    searchBy: { control: 'object' },
    onRowSelected: { action: 'row-selected' },
  },
  args: {
    columns,
    url: '/storybook/employees',
    showSearch: true,
    searchBy: ['name', 'department', 'status'],
    onRowSelected: fn(),
  },
  render: renderTable(mockRequest),
} satisfies Meta<DataTableStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LocalData: Story = {
  args: {
    columns: localDataColumns,
    data: employees,
    url: undefined,
    showSearch: false,
    searchBy: undefined,
  },
  render: renderTable(),
};

export const WithoutSearch: Story = {
  args: {
    showSearch: false,
  },
};

export const TwoItemsWithDropdown: Story = {
  args: {
    actionsLabel: 'Options',
  },
  render: renderTable(dropdownItemsRequest, true),
};
