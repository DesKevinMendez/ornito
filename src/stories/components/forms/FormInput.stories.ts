import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { IconMail, IconSearch } from '@tabler/icons-vue';
import { fn } from 'storybook/test';
import { Form } from 'vee-validate';
import { ref } from 'vue';

import BaseButton from '../../../components/BaseButton.vue';
import FormInput from '../../../components/FormInput.vue';

type FormInputStoryArgs = ComponentPropsAndSlots<typeof FormInput> & {
  modelValue: string | number | null;
  onSubmit?: (values: Record<string, unknown>) => void;
};

const requiredRule = (value: unknown) =>
  value !== null && value !== undefined && value !== '' ? true : 'This field is required.';

const emailRule = (value: unknown) => {
  if (!value) return 'Email is required.';
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value))
    ? true
    : 'Enter a valid email address.';
};

const meta = {
  title: 'Components/Forms/FormInput',
  component: FormInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    label: { control: 'text' },
    id: { control: 'text' },
    name: { control: 'text' },
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'range', 'date', 'money'] },
    placeholder: { control: 'text' },
    leftIcon: { control: false },
    rightIcon: { control: false },
    rules: { control: false },
    small: { control: 'boolean' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    help: { control: 'text' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    onSubmit: { action: 'submit' },
  },
  args: {
    modelValue: 'Ada Lovelace',
    label: 'Full name',
    id: 'full-name',
    name: 'fullName',
    type: 'text',
    placeholder: 'Enter a name',
    leftIcon: undefined,
    small: false,
    help: 'Use the name shown on official documents.',
    disabled: false,
    loading: false,
    onSubmit: fn(),
  },
  render: (args) => ({
    components: { BaseButton, Form, FormInput },
    setup() {
      const { modelValue: initialValue, onSubmit, ...componentArgs } = args;
      const modelValue = ref(initialValue);
      return { componentArgs, modelValue, onSubmit };
    },
    template: `
      <div class="max-w-lg p-4">
        <Form @submit="onSubmit" class="space-y-3">
          <FormInput v-bind="componentArgs" v-model="modelValue" />
          <BaseButton type="submit" size="auto">Validate input</BaseButton>
        </Form>
        <p class="mt-3 text-sm text-gray-500">Value: {{ modelValue }}</p>
      </div>
    `,
  }),
} satisfies Meta<FormInputStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const EmailWithValidation: Story = {
  args: {
    modelValue: '',
    label: 'Email address',
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'you@example.com',
    leftIcon: IconMail,
    rules: emailRule,
    help: 'We will only use this for account notifications.',
  },
};

export const Password: Story = {
  args: {
    modelValue: '',
    label: 'Password',
    id: 'password',
    name: 'password',
    type: 'password',
    placeholder: 'Enter your password',
    rules: requiredRule,
  },
};

export const Range: Story = {
  args: {
    modelValue: 40,
    label: 'Completion',
    id: 'completion',
    name: 'completion',
    type: 'range',
    min: 0,
    max: 100,
    step: 10,
    leftIcon: IconSearch,
  },
};

export const DisabledLoading: Story = {
  args: {
    modelValue: 'Loading profile',
    disabled: true,
    loading: true,
  },
};
