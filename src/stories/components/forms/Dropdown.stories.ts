import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { IconCheck, IconSettings, IconUser } from '@tabler/icons-vue';
import { ref } from 'vue';

import Dropdown from '../../../components/Dropdown.vue';

type DropdownStoryArgs = ComponentPropsAndSlots<typeof Dropdown> & {
  modelValue?: string;
};

const items = [
  { label: 'Profile', value: 'profile', icon: IconUser },
  { label: 'Settings', value: 'settings', icon: IconSettings },
  { label: 'Completed', value: 'completed', icon: IconCheck },
];

const meta = {
  title: 'Components/Forms/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    items: { control: false },
    modelValue: { control: 'select', options: ['profile', 'settings', 'completed', undefined] },
    placeholder: { control: 'text' },
    triggerVariant: { control: 'select', options: ['primary', 'secondary', 'outline'] },
    triggerSize: { control: 'select', options: ['full', 'auto'] },
    triggerSmall: { control: 'boolean' },
    position: { control: 'select', options: ['bottom-left', 'bottom-right', 'top-left', 'top-right'] },
  },
  args: {
    items,
    modelValue: 'profile',
    placeholder: 'Choose a section',
    triggerVariant: 'outline',
    triggerSize: 'auto',
    triggerSmall: false,
    position: 'bottom-left',
  },
  render: (args) => ({
    components: { Dropdown },
    setup() {
      const { modelValue: initialValue, ...componentArgs } = args;
      const modelValue = ref(initialValue);
      return { componentArgs, modelValue };
    },
    template: `
      <div class="min-h-40 p-4">
        <Dropdown v-bind="componentArgs" v-model="modelValue" />
        <p class="mt-3 text-sm text-gray-500">Selected value: {{ modelValue || 'none' }}</p>
      </div>
    `,
  }),
} satisfies Meta<DropdownStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const EmptySelection: Story = {
  args: {
    modelValue: undefined,
    placeholder: 'Select a section',
  },
};

export const TopRight: Story = {
  args: {
    modelValue: 'settings',
    position: 'top-right',
  },
};

export const Compact: Story = {
  args: {
    triggerSmall: true,
  },
};
