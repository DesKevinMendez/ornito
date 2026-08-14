import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { IconSearch } from '@tabler/icons-vue';
import { fn } from 'storybook/test';
import { provide, ref, type Ref } from 'vue';
import { Form } from 'vee-validate';

import BaseButton from '../components/BaseButton.vue';
import SearchableSelect from '../components/SearchableSelect.vue';
import { useRequestKey, type UseRequestFactory } from '../composables/useDataRequest';

interface Vehicle {
  id: number;
  name: string;
  plate: string;
  driver: string;
  model: string;
}

type SearchableSelectStoryArgs = ComponentPropsAndSlots<typeof SearchableSelect> & {
  selectedValue?: string | number | (string | number)[] | null;
  onSelect?: (item: unknown) => void;
  onData?: (data: unknown) => void;
};

const vehicles: Vehicle[] = [
  { id: 1, name: 'Hilux 01', plate: 'P-1023', driver: 'Ana Rivera', model: 'Toyota Hilux' },
  { id: 2, name: 'Box Truck 07', plate: 'C-7781', driver: 'Marco Soto', model: 'Isuzu NPR' },
  { id: 3, name: 'Service Van 12', plate: 'N-4410', driver: 'Lucía Mejía', model: 'Ford Transit' },
  { id: 4, name: 'Pickup 18', plate: 'P-8902', driver: 'Diego Cruz', model: 'Nissan Frontier' },
  { id: 5, name: 'Refrigerated 03', plate: 'C-2201', driver: 'Sofía Herrera', model: 'Hino 300' },
];

const wait = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const requiredRule = (value: unknown) =>
  value !== null && value !== undefined && value !== ''
    ? true
    : 'Vehicle is required.';

const mockRequest: UseRequestFactory = () => ({
  async get<T>(url: string) {
    await wait(250);

    const request = new URL(url, window.location.origin);
    const id = request.searchParams.get('filter[id]');
    const search = [...request.searchParams.entries()]
      .find(([key]) => !key.startsWith('filter['))?.[1]
      ?.toLowerCase()
      .trim();

    const data = id
      ? vehicles.filter((vehicle) => String(vehicle.id) === id)
      : search
        ? vehicles.filter((vehicle) =>
            [vehicle.name, vehicle.plate, vehicle.driver, vehicle.model].some((value) =>
              value.toLowerCase().includes(search),
            ),
          )
        : vehicles;

    return { data: ref({ data }) as Ref<T | null> };
  },
});

const meta = {
  title: 'Components/SearchableSelect',
  component: SearchableSelect,
  tags: ['autodocs'],
  argTypes: {
    url: { control: 'text' },
    searchBy: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    small: { control: 'boolean' },
    disabled: { control: 'boolean' },
    multiple: { control: 'boolean' },
    localSearchFirst: { control: 'boolean' },
    leftIcon: { control: false },
    rules: { control: false },
    selectedValue: { control: false },
    onSelect: { action: 'select' },
    onData: { action: 'data' },
  },
  args: {
    url: '/demo/vehicles',
    searchBy: 'name',
    label: 'Vehicle',
    placeholder: 'Search by plate, driver, or model...',
    labelKey: 'name',
    valueKey: 'id',
    subtitleKey: ['plate', '{driver} · {model}'],
    localSearchFirst: true,
    small: false,
    disabled: false,
    multiple: false,
    selectedValue: null,
    onSelect: fn(),
    onData: fn(),
  },
  render: (args) => ({
    components: { SearchableSelect },
    setup() {
      const { selectedValue, onSelect, onData, ...componentArgs } = args;
      const modelValue = ref(selectedValue ?? null);

      provide(useRequestKey, mockRequest);

      return { componentArgs, modelValue, onSelect, onData };
    },
    template: `
      <div class="max-w-lg p-4">
        <SearchableSelect
          v-bind="componentArgs"
          v-model="modelValue"
          @select="onSelect"
          @data="onData"
        />
      </div>
    `,
  }),
} satisfies Meta<SearchableSelectStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    small: true,
    placeholder: 'Search vehicle...',
  },
};

export const WithInitialSelection: Story = {
  args: {
    selectedValue: 2,
  },
};

export const Multiple: Story = {
  args: {
    multiple: true,
    selectedValue: [1, 3],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithValidation: Story = {
  args: {
    name: 'vehicle_id',
    rules: requiredRule,
  },
  render: (args) => ({
    components: { BaseButton, Form, SearchableSelect },
    setup() {
      const { selectedValue, onSelect, onData, ...componentArgs } = args;
      const modelValue = ref(selectedValue ?? null);

      provide(useRequestKey, mockRequest);

      return { componentArgs, modelValue, onSelect, onData, onSubmit: fn() };
    },
    template: `
      <div class="max-w-lg p-4">
        <Form @submit="onSubmit" class="space-y-3">
          <SearchableSelect
            v-bind="componentArgs"
            v-model="modelValue"
            @select="onSelect"
            @data="onData"
          />
          <BaseButton type="submit" size="auto">Validate selection</BaseButton>
        </Form>
      </div>
    `,
  }),
};

export const WithIcon: Story = {
  args: {
    leftIcon: IconSearch,
  },
};
