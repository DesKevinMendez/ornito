import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { IconBell, IconChartBar, IconCreditCard, IconSettings, IconActivity } from '@tabler/icons-vue';
import { ref, watch } from 'vue';
import type { Tab } from '../../../types/Tabs';

import Tabs from '../../../components/Tabs.vue';

type TabsStoryArgs = InstanceType<typeof Tabs>['$props'];

const tabs: Tab[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'activity', label: 'Activity' },
  { id: 'settings', label: 'Settings' },
];

const pillTabs: Tab[] = [
  { id: 'tab-1', label: 'Tab 1' },
  { id: 'tab-2', label: 'Tab 2' },
  { id: 'tab-3', label: 'Tab 3' },
  { id: 'tab-4', label: 'Tab 4' },
  { id: 'tab-5', label: 'Tab 5', disabled: true },
];

const iconTabs: Tab[] = [
  { id: 'overview', label: 'Overview', icon: IconChartBar },
  { id: 'activity', label: 'Activity', icon: IconActivity },
  { id: 'settings', label: 'Settings', icon: IconSettings },
  { id: 'notifications', label: 'Notifications', icon: IconBell },
  { id: 'billing', label: 'Billing', icon: IconCreditCard, disabled: true },
];

const meta: Meta<TabsStoryArgs> = {
  title: 'Components/Forms/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    tabs: { control: false },
    modelValue: { control: { type: 'number', min: 0, step: 1 } },
    variant: { control: 'select', options: ['segmented', 'pills', 'underline'] },
    label: { control: 'text' },
  },
  args: {
    tabs,
    modelValue: 0,
    variant: 'segmented',
    label: 'Workspace sections',
  },
  render: (args) => ({
    components: { Tabs },
    setup() {
      const modelValue = ref(args.modelValue ?? 0);
      watch(() => args.modelValue, value => { modelValue.value = value ?? 0; });
      return { args, modelValue };
    },
    template: `
      <div class="max-w-2xl p-4">
        <Tabs v-bind="args" v-model="modelValue">
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
          <template #tab-3>
            <div class="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <h3 class="font-semibold text-gray-900 dark:text-white">Fourth tab</h3>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Content for the fourth tab.</p>
            </div>
          </template>
          <template #tab-4>
            <div class="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <h3 class="font-semibold text-gray-900 dark:text-white">Fifth tab</h3>
            </div>
          </template>
        </Tabs>
        <p class="mt-3 text-sm text-gray-500 dark:text-gray-400">Active tab: {{ modelValue + 1 }}</p>
      </div>
    `,
  }),
};

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

export const Pills: Story = { args: { tabs: pillTabs, variant: 'pills' } };
export const WithIcons: Story = { args: { tabs: iconTabs.slice(0, 3) } };
export const PillsWithIcons: Story = { args: { tabs: iconTabs, variant: 'pills' } };
export const WrappedPills: Story = {
  ...PillsWithIcons,
  args: { ...PillsWithIcons.args, modelValue: 3 },
  decorators: [() => ({ template: '<div class="max-w-xs"><story /></div>' })],
};
export const DarkPills: Story = {
  ...Pills,
  decorators: [() => ({ template: '<div class="dark rounded-xl bg-gray-950 p-2"><story /></div>' })],
};
export const DarkWithIcons: Story = { ...WithIcons, decorators: DarkPills.decorators };
export const DarkPillsWithIcons: Story = { ...PillsWithIcons, decorators: DarkPills.decorators };

export const Underline: Story = { args: { tabs: pillTabs, variant: 'underline' } };
export const UnderlineWithIcons: Story = { args: { tabs: iconTabs, variant: 'underline' } };
export const ScrollingUnderline: Story = {
  ...UnderlineWithIcons,
  decorators: [() => ({ template: '<div class="max-w-xs"><story /></div>' })],
};
export const DarkUnderline: Story = { ...Underline, decorators: DarkPills.decorators };
export const DarkUnderlineWithIcons: Story = { ...UnderlineWithIcons, decorators: DarkPills.decorators };
