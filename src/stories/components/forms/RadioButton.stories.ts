import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';

import RadioButton from '../../../components/RadioButton.vue';

type RadioButtonStoryArgs = ComponentPropsAndSlots<typeof RadioButton> & {
  modelValue: string | number | null;
  dark: boolean;
};

const meta = {
  title: 'Components/Forms/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'select', options: ['monthly', 'annual', null] },
    name: { control: 'text' },
    value: { control: 'text' },
    label: { control: 'text' },
    id: { control: 'text' },
    disabled: { control: 'boolean' },
    dark: { control: 'boolean' },
  },
  args: {
    modelValue: 'monthly',
    name: 'plan',
    value: 'monthly',
    label: 'Plan mensual',
    disabled: false,
    dark: false,
  },
  render: (args) => ({
    components: { RadioButton },
    setup() {
      const selected = ref(args.modelValue);
      const { modelValue: _, dark, ...firstOption } = args;
      return { selected, firstOption, dark };
    },
    template: `
      <div :class="{ dark }">
        <fieldset class="max-w-lg rounded-xl bg-card-bg-light p-4 dark:bg-card-bg-dark">
          <legend class="text-sm font-medium text-form-label-text-light dark:text-form-label-text-dark">Planes disponibles</legend>
          <div class="mt-2 grid gap-2 sm:grid-cols-2">
            <RadioButton v-bind="firstOption" v-model="selected" />
            <RadioButton v-model="selected" :name="firstOption.name" value="annual" label="Plan anual" />
          </div>
          <p class="mt-3 text-sm text-form-supporting-text-light dark:text-form-supporting-text-dark">Seleccionado: {{ selected ?? 'ninguno' }}</p>
        </fieldset>
      </div>
    `,
  }),
} satisfies Meta<RadioButtonStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Unselected: Story = { args: { modelValue: null } };
export const Disabled: Story = { args: { disabled: true } };
export const Dark: Story = { args: { dark: true } };
