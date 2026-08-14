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

import SidebarNav from '../../../components/SidebarNav.vue';

const items = [
  { name: 'Dashboard', icon: IconHome, to: '/' },
  { name: 'Team', icon: IconUser, to: '/team' },
  { name: 'Settings', icon: IconSettings, to: '/settings' },
];

const routerDecorator = (story: ReturnType<NonNullable<Meta<typeof SidebarNav>['render']>>) => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: { template: '<div />' } },
      { path: '/team', component: { template: '<div />' } },
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

type SidebarNavStoryArgs = ComponentPropsAndSlots<typeof SidebarNav>;

const meta = {
  title: 'Components/Navigation/SidebarNav',
  component: SidebarNav,
  tags: ['autodocs'],
  decorators: [routerDecorator],
  argTypes: {
    items: { control: false },
  },
  args: {
    items,
  },
} satisfies Meta<SidebarNavStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
