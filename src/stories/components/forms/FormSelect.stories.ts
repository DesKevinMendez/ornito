import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { IconMapPin } from '@tabler/icons-vue';
import { fn } from 'storybook/test';
import { Form } from 'vee-validate';
import { ref } from 'vue';

import BaseButton from '../../../components/BaseButton.vue';
import FormSelect from '../../../components/FormSelect.vue';

type FormSelectStoryArgs = ComponentPropsAndSlots<typeof FormSelect> & {
  modelValue: string | number | null;
  onSubmit?: (values: Record<string, unknown>) => void;
};

const options = [
  { value: 'sv', label: 'El Salvador' },
  { value: 'gt', label: 'Guatemala' },
  { value: 'hn', label: 'Honduras' },
];

const requiredRule = (value: unknown) =>
  value !== null && value !== undefined && value !== '' ? true : 'Select a country.';

const meta = {
  title: 'Components/Forms/FormSelect',
  component: FormSelect,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'select', options: ['sv', 'gt', 'hn', null] },
    label: { control: 'text' },
    id: { control: 'text' },
    name: { control: 'text' },
    placeholder: { control: 'text' },
    options: { control: false },
    leftIcon: { control: false },
    rules: { control: false },
    small: { control: 'boolean' },
    onSubmit: { action: 'submit' },
  },
  args: {
    modelValue: null,
    label: 'Country',
    id: 'country',
    name: 'country',
    placeholder: 'Select a country',
    options,
    small: false,
    onSubmit: fn(),
  },
  render: (args) => ({
    components: { BaseButton, Form, FormSelect },
    setup() {
      const { modelValue: initialValue, onSubmit, ...componentArgs } = args;
      const modelValue = ref(initialValue);
      return { componentArgs, modelValue, onSubmit };
    },
    template: `
      <div class="max-w-lg p-4">
        <Form @submit="onSubmit" class="space-y-3">
          <FormSelect v-bind="componentArgs" v-model="modelValue" />
          <BaseButton type="submit" size="auto">Validate selection</BaseButton>
        </Form>
        <p class="mt-3 text-sm text-gray-500">Selected: {{ modelValue || 'none' }}</p>
      </div>
    `,
  }),
} satisfies Meta<FormSelectStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithInitialSelection: Story = {
  args: {
    modelValue: 'gt',
    leftIcon: IconMapPin,
  },
};

export const WithValidation: Story = {
  args: {
    rules: requiredRule,
  },
};

export const Small: Story = {
  args: {
    modelValue: 'hn',
    small: true,
    label: 'Region',
  },
};
