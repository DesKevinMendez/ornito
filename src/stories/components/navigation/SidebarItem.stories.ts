import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { IconSettings } from '@tabler/icons-vue';
import { provide } from 'vue';
import {
  createMemoryHistory,
  createRouter,
  routeLocationKey,
  routerKey,
  routerViewLocationKey,
} from 'vue-router';

import SidebarItem from '../../../components/Sidebar/SidebarItem.vue';

const routerDecorator = (story: ReturnType<NonNullable<Meta<typeof SidebarItem>['render']>>) => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: { template: '<div />' } },
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

type SidebarItemStoryArgs = ComponentPropsAndSlots<typeof SidebarItem>;

const meta = {
  title: 'Components/Navigation/SidebarItem',
  component: SidebarItem,
  tags: ['autodocs'],
  decorators: [routerDecorator],
  argTypes: {
    icon: { control: false },
    to: { control: 'text' },
    isCollapsed: { control: 'boolean' },
    hasBadge: { control: 'boolean' },
    hasExternalIcon: { control: 'boolean' },
    showActiveBackground: { control: 'boolean' },
    useExternalIndicator: { control: 'boolean' },
  },
  args: {
    to: '/',
    name: 'Settings',
    icon: IconSettings,
    isCollapsed: false,
    hasBadge: true,
    badgeText: '3',
    hasExternalIcon: true,
    showActiveBackground: true,
    useExternalIndicator: false,
  },
} satisfies Meta<SidebarItemStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Collapsed: Story = {
  args: {
    isCollapsed: true,
  },
};
