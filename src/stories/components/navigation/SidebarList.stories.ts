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

import SidebarList from '../../../components/Sidebar/SidebarList.vue';
import type { RoutesLink } from '../../../types/RoutesLink';

const menuItems: RoutesLink[] = [
  { route: '/', name: 'Dashboard', icon: IconHome },
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

const routerDecorator = (story: ReturnType<NonNullable<Meta<typeof SidebarList>['render']>>) => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: { template: '<div />' } },
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

type SidebarListStoryArgs = ComponentPropsAndSlots<typeof SidebarList>;

const meta = {
  title: 'Components/Navigation/SidebarList',
  component: SidebarList,
  tags: ['autodocs'],
  decorators: [routerDecorator],
  argTypes: {
    isCollapsed: { control: 'boolean' },
    menuItems: { control: false },
  },
  args: {
    isCollapsed: false,
    menuItems,
  },
} satisfies Meta<SidebarListStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ExpandedSidebar: Story = {
  args: {
    isCollapsed: true,
  },
};
