import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { IconHome, IconSettings, IconUser } from '@tabler/icons-vue';
import { provide } from 'vue';
import {
  createMemoryHistory,
  createRouter,
  routeLocationKey,
  routerKey,
  routerViewLocationKey,
} from 'vue-router';

import Sidebar from '../../../components/Sidebar.vue';
import type { RoutesLink } from '../../../types/RoutesLink';

const menuItems: RoutesLink[] = [
  { route: '/', name: 'Dashboard', icon: IconHome },
  { route: '/team', name: 'Team', icon: IconUser },
  {
    route: '/settings',
    name: 'Settings',
    icon: IconSettings,
    children: [
      { route: '/settings/profile', name: 'Profile', icon: IconUser },
      { route: '/settings/preferences', name: 'Preferences', icon: IconSettings },
    ],
  },
];

const routerDecorator = (story: ReturnType<NonNullable<Meta<typeof Sidebar>['render']>>) => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: { template: '<div />' } },
      { path: '/team', component: { template: '<div />' } },
      { path: '/settings/:pathMatch(.*)*', component: { template: '<div />' } },
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

type SidebarStoryArgs = ComponentPropsAndSlots<typeof Sidebar> & {
  onToggleCollapse: () => void;
  onClose: () => void;
};

const meta = {
  title: 'Components/Navigation/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  decorators: [routerDecorator],
  argTypes: {
    isCollapsed: { control: 'boolean' },
    logo: { control: false },
    menuItems: { control: false },
    onToggleCollapse: { action: 'toggle-collapse' },
    onClose: { action: 'close' },
  },
  args: {
    isCollapsed: false,
    logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"%3E%3Crect width="32" height="32" rx="8" fill="%233b82f6"/%3E%3Cpath d="M9 16h14M16 9v14" stroke="white" stroke-width="3" stroke-linecap="round"/%3E%3C/svg%3E',
    title: 'Ornito',
    subtitle: 'Operations',
    version: '0.4.1',
    menuItems,
    onToggleCollapse: () => undefined,
    onClose: () => undefined,
  },
  render: (args) => ({
    components: { Sidebar },
    setup() {
      return {
        args,
        onToggleCollapse: args.onToggleCollapse,
        onClose: args.onClose,
      };
    },
    template: '<Sidebar v-bind="args" @toggle-collapse="onToggleCollapse" @close="onClose" />',
  }),
} satisfies Meta<SidebarStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Collapsed: Story = {
  args: {
    isCollapsed: true,
  },
};
