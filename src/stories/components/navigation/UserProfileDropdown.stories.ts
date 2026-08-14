import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { IconSettings, IconUser } from '@tabler/icons-vue';
import { fn } from 'storybook/test';
import { provide } from 'vue';
import {
  createMemoryHistory,
  createRouter,
  routeLocationKey,
  routerKey,
  routerViewLocationKey,
} from 'vue-router';

import UserProfileDropdown from '../../../components/navbar/UserProfileDropdown.vue';
import type { DropdownMenuItem } from '../../../types/DropdownMenuItem';

const menuItems: DropdownMenuItem[] = [
  { label: 'Profile', icon: IconUser, to: '/profile' },
  { label: 'Settings', icon: IconSettings, to: '/settings' },
  { label: 'Sign out', onClick: fn() },
];

const routerDecorator = (story: ReturnType<NonNullable<Meta<typeof UserProfileDropdown>['render']>>) => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: { template: '<div />' } },
      { path: '/profile', component: { template: '<div />' } },
      { path: '/settings', component: { template: '<div />' } },
    ],
  });

  return {
    components: { story },
    setup() {
      provide(routerKey, router);
      provide(routeLocationKey, router.currentRoute.value);
      provide(routerViewLocationKey, router.currentRoute);
      return { router };
    },
    template: '<story />',
  };
};

type UserProfileDropdownStoryArgs = ComponentPropsAndSlots<typeof UserProfileDropdown> & {
  onBellClick: () => void;
  onPanelOpen: () => void;
  onMarkAllRead: () => void;
};

const meta = {
  title: 'Components/Navigation/UserProfileDropdown',
  component: UserProfileDropdown,
  tags: ['autodocs'],
  decorators: [routerDecorator],
  argTypes: {
    menuItems: { control: false },
    showNotifications: { control: 'boolean' },
    unreadNotificationsCount: { control: { type: 'number', min: 0, max: 99 } },
    onBellClick: { action: 'bell-click' },
    onPanelOpen: { action: 'panel-open' },
    onMarkAllRead: { action: 'mark-all-read' },
  },
  args: {
    userName: 'Ana Rivera',
    userInitials: 'AR',
    userRole: 'Operations Manager',
    menuItems,
    showNotifications: true,
    unreadNotificationsCount: 3,
    onBellClick: fn(),
    onPanelOpen: fn(),
    onMarkAllRead: fn(),
  },
  render: (args) => ({
    components: { UserProfileDropdown },
    setup() {
      const { onBellClick, onPanelOpen, onMarkAllRead, ...componentArgs } = args;
      return { componentArgs, onBellClick, onPanelOpen, onMarkAllRead };
    },
    template: `
      <div class="flex justify-end p-6">
        <UserProfileDropdown
          v-bind="componentArgs"
          @bell-click="onBellClick"
          @panel-open="onPanelOpen"
          @mark-all-read="onMarkAllRead"
        >
          <template #avatar>
            <span class="text-lg font-semibold text-primary-600">AR</span>
          </template>
          <template #notifications>
            <div class="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
              A vehicle inspection needs your review.
            </div>
          </template>
        </UserProfileDropdown>
      </div>
    `,
  }),
} satisfies Meta<UserProfileDropdownStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutNotifications: Story = {
  args: {
    showNotifications: false,
  },
};
