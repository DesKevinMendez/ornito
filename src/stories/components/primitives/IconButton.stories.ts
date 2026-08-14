import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { IconArrowRight, IconSettings } from '@tabler/icons-vue';
import { provide } from 'vue';
import { createMemoryHistory, createRouter, routeLocationKey, routerKey, routerViewLocationKey } from 'vue-router';
import IconButton from '../../../components/IconButton.vue';

type IconButtonStoryArgs = ComponentPropsAndSlots<typeof IconButton>;

const routerDecorator = (story: ReturnType<NonNullable<Meta<typeof IconButton>['render']>>) => {
  const router = createRouter({ history: createMemoryHistory(), routes: [{ path: '/', component: { template: '<div />' } }, { path: '/settings', component: { template: '<div />' } }] });
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
  title: 'Components/Primitives/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  decorators: [routerDecorator],
  argTypes: {
    icon: { control: false },
    color: { control: 'select', options: ['gray', 'primary', 'secondary', 'success', 'danger', 'warning', 'pink'] },
    to: { control: 'text' },
    rounded: { control: 'boolean' },
    outline: { control: 'boolean' },
  },
  args: { icon: IconSettings, color: 'gray', rounded: false, outline: false },
  render: (args) => ({
    components: { IconButton },
    setup() {
      return { args };
    },
    template: '<IconButton v-bind="args" aria-label="Settings" />',
  }),
} satisfies Meta<IconButtonStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Rounded: Story = { args: { rounded: true, color: 'primary' } };
export const Outline: Story = { args: { outline: true, color: 'secondary' } };
export const RouterLink: Story = { args: { to: '/settings', icon: IconArrowRight, color: 'success' } };
