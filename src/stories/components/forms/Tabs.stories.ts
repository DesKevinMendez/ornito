import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';

import Tabs from '../../../components/Tabs.vue';

type TabsStoryArgs = ComponentPropsAndSlots<typeof Tabs> & {
  modelValue: number;
};

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'activity', label: 'Activity' },
  { id: 'settings', label: 'Settings' },
];

const meta = {
  title: 'Components/Forms/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    tabs: { control: false },
    modelValue: { control: 'number' },
  },
  args: {
    tabs,
    modelValue: 0,
  },
  render: (args) => ({
    components: { Tabs },
    setup() {
      const { modelValue: initialValue, ...componentArgs } = args;
      const modelValue = ref(initialValue);
      return { componentArgs, modelValue };
    },
    template: `
      <div class="max-w-2xl p-4">
        <Tabs v-bind="componentArgs" v-model="modelValue">
          <template #tab-0>
            <div class="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <h3 class="font-semibold text-gray-900 dark:text-white">Overview</h3>
              <p class="mt-1 text-sm text-gray-500">A quick summary of the current workspace.</p>
            </div>
          </template>
          <template #tab-1>
            <div class="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <h3 class="font-semibold text-gray-900 dark:text-white">Recent activity</h3>
              <p class="mt-1 text-sm text-gray-500">No new activity has been recorded.</p>
            </div>
          </template>
          <template #tab-2>
            <div class="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <h3 class="font-semibold text-gray-900 dark:text-white">Settings</h3>
              <p class="mt-1 text-sm text-gray-500">Manage workspace preferences here.</p>
            </div>
          </template>
        </Tabs>
        <p class="mt-3 text-sm text-gray-500">Active tab: {{ modelValue + 1 }}</p>
      </div>
    `,
  }),
} satisfies Meta<TabsStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InitiallyActivity: Story = {
  args: {
    modelValue: 1,
  },
};

export const InitiallySettings: Story = {
  args: {
    modelValue: 2,
  },
};
