import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { Form } from 'vee-validate';
import { ref } from 'vue';

import BaseButton from '../../../components/BaseButton.vue';
import FormTextarea from '../../../components/FormTextarea.vue';

type FormTextareaStoryArgs = ComponentPropsAndSlots<typeof FormTextarea> & {
  modelValue: string | null;
  onSubmit?: (values: Record<string, unknown>) => void;
};

const requiredRule = (value: unknown) =>
  value !== null && value !== undefined && String(value).trim() !== ''
    ? true
    : 'A message is required.';

const minLengthRule = (value: unknown) =>
  String(value ?? '').length >= 20 ? true : 'Use at least 20 characters.';

const meta = {
  title: 'Components/Forms/FormTextarea',
  component: FormTextarea,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    label: { control: 'text' },
    id: { control: 'text' },
    name: { control: 'text' },
    placeholder: { control: 'text' },
    rules: { control: false },
    small: { control: 'boolean' },
    rows: { control: 'number' },
    maxLength: { control: 'number' },
    onSubmit: { action: 'submit' },
  },
  args: {
    modelValue: 'Add a note for the operations team.',
    label: 'Notes',
    id: 'notes',
    name: 'notes',
    placeholder: 'Write a note...',
    rows: 4,
    small: false,
    onSubmit: fn(),
  },
  render: (args) => ({
    components: { BaseButton, Form, FormTextarea },
    setup() {
      const { modelValue: initialValue, onSubmit, ...componentArgs } = args;
      const modelValue = ref(initialValue);
      return { componentArgs, modelValue, onSubmit };
    },
    template: `
      <div class="max-w-lg p-4">
        <Form @submit="onSubmit" class="space-y-3">
          <FormTextarea v-bind="componentArgs" v-model="modelValue" />
          <BaseButton type="submit" size="auto">Validate note</BaseButton>
        </Form>
      </div>
    `,
  }),
} satisfies Meta<FormTextareaStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCharacterLimit: Story = {
  args: {
    modelValue: 'Keep this update short and clear.',
    maxLength: 80,
    rows: 5,
  },
};

export const WithValidation: Story = {
  args: {
    modelValue: '',
    rules: requiredRule,
  },
};

export const MinimumLength: Story = {
  args: {
    modelValue: 'Too short',
    rules: minLengthRule,
  },
};
