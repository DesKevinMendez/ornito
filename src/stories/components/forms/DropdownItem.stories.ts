import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { IconSettings } from '@tabler/icons-vue';
import { fn } from 'storybook/test';

import DropdownItem from '../../../components/DropdownItem.vue';

type DropdownItemStoryArgs = ComponentPropsAndSlots<typeof DropdownItem>;

const meta = {
  title: 'Components/Forms/DropdownItem',
  component: DropdownItem,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    icon: { control: false },
    active: { control: 'boolean' },
    to: { control: false },
  },
  args: {
    label: 'Account settings',
    icon: IconSettings,
    active: false,
  },
  render: (args) => ({
    components: { DropdownItem },
    setup() {
      const handleClick = fn();
      return { args, handleClick };
    },
    template: `
      <div class="max-w-xs rounded-xl border border-gray-200 bg-white p-1 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <DropdownItem v-bind="args" @click="handleClick" />
      </div>
    `,
  }),
} satisfies Meta<DropdownItemStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    active: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    icon: undefined,
    label: 'Sign out',
  },
};
