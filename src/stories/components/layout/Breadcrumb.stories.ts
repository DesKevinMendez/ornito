import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { IconHome, IconSettings } from '@tabler/icons-vue';
import { provide } from 'vue';
import { createMemoryHistory, createRouter, routeLocationKey, routerKey, routerViewLocationKey } from 'vue-router';
import Breadcrumb from '../../../components/Breadcrumb.vue';

type BreadcrumbStoryArgs = ComponentPropsAndSlots<typeof Breadcrumb>;

const routerDecorator = (story: ReturnType<NonNullable<Meta<typeof Breadcrumb>['render']>>) => {
  const router = createRouter({ history: createMemoryHistory(), routes: [{ path: '/', component: { template: '<div />' } }, { path: '/vehicles', component: { template: '<div />' } }, { path: '/settings', component: { template: '<div />' } }] });
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

const meta = {
  title: 'Components/Layout/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  decorators: [routerDecorator],
  argTypes: { items: { control: 'object' } },
  args: {
    items: [
      { label: 'Home', to: '/', icon: IconHome },
      { label: 'Vehicles', to: '/vehicles' },
      { label: 'Details', icon: IconSettings },
    ],
  },
  render: (args) => ({
    components: { Breadcrumb },
    setup() {
      return { args };
    },
    template: '<Breadcrumb v-bind="args" />',
  }),
} satisfies Meta<BreadcrumbStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const TwoLevels: Story = { args: { items: [{ label: 'Home', to: '/' }, { label: 'Settings' }] } };
