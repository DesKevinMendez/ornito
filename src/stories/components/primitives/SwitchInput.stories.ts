import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import SwitchInput from '../../../components/SwitchInput.vue';

type SwitchInputStoryArgs = ComponentPropsAndSlots<typeof SwitchInput> & { modelValue: boolean };

const meta = {
  title: 'Components/Primitives/SwitchInput',
  component: SwitchInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean' },
    label: { control: 'text' },
    trueLabel: { control: 'text' },
    falseLabel: { control: 'text' },
    showLabel: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { modelValue: true, label: 'Notifications', trueLabel: 'Enabled', falseLabel: 'Disabled', showLabel: true, disabled: false },
  render: (args) => ({
    components: { SwitchInput },
    setup() {
      const modelValue = ref(args.modelValue);
      const { modelValue: _, ...componentArgs } = args;
      return { modelValue, componentArgs };
    },
    template: '<SwitchInput v-bind="componentArgs" v-model="modelValue" />',
  }),
} satisfies Meta<SwitchInputStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Off: Story = { args: { modelValue: false } };
export const WithoutStatusLabel: Story = { args: { showLabel: false } };
export const Disabled: Story = { args: { disabled: true } };
