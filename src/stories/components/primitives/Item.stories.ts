import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { IconChevronRight } from '@tabler/icons-vue';
import Item from '../../../components/Item.vue';
import UserAvatar from '../../../components/UserAvatar.vue';

type ItemStoryArgs = InstanceType<typeof Item>['$props'];

const meta: Meta<ItemStoryArgs> = {
  title: 'Components/Primitives/Item',
  component: Item,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    image: { control: 'text' },
    imageAlt: { control: 'text' },
    icon: { control: false },
    border: { control: 'boolean' },
    hoverable: { control: 'boolean' },
  },
  args: {
    title: 'Ana Rivera',
    subtitle: 'Assigned driver',
    icon: IconChevronRight,
    border: false,
    hoverable: true,
  },
  render: (args) => ({
    components: { Item },
    setup() {
      return { args };
    },
    template: '<div class="w-full max-w-md"><Item v-bind="args" /></div>',
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithImage: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop',
    imageAlt: 'Portrait of Ana Rivera',
  },
};
export const WithBorder: Story = { args: { ...WithImage.args, border: true } };
export const WithoutHover: Story = { args: { ...WithImage.args, border: true, hoverable: false } };
export const TitleOnly: Story = { args: { subtitle: '', icon: undefined } };
export const WithoutIcon: Story = { args: { icon: undefined } };
export const LongContent: Story = {
  args: {
    title: 'Delivery to the regional distribution center',
    subtitle: 'A longer description wraps without pushing the trailing icon outside the item.',
  },
};
export const CustomSlots: Story = {
  render: (args) => ({
    components: { Item, UserAvatar, IconChevronRight },
    setup() {
      return { args };
    },
    template: `
      <div class="w-full max-w-md">
        <Item v-bind="args">
          <template #image><UserAvatar :name="args.title" size="lg" /></template>
          <template #title><span class="text-primary-600 dark:text-primary-400">{{ args.title }}</span></template>
          <template #subtitle><span>Available for deliveries</span></template>
          <template #icon><IconChevronRight class="h-5 w-5 text-primary-500" aria-hidden="true" /></template>
        </Item>
      </div>
    `,
  }),
};
export const Dark: Story = {
  decorators: [() => ({
    template: '<div class="dark rounded-xl bg-gray-950 p-4"><story /></div>',
  })],
  args: WithImage.args,
};

export const NotificationsList: Story = {
  args: { border: true, icon: undefined },
  render: (args) => ({
    components: { Item },
    setup() {
      const notifications = [
        {
          id: 1,
          name: 'Jese Leos',
          prefix: 'New message from ',
          connector: ': ',
          emphasis: '',
          detail: '"Hey, what\'s up? All set for the presentation?"',
          time: 'a few moments ago',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop',
        },
        {
          id: 2,
          name: 'Joseph McFall',
          prefix: '',
          connector: ' and ',
          emphasis: '5 others',
          detail: ' started following you.',
          time: '10 minutes ago',
          image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&fit=crop',
        },
        {
          id: 3,
          name: 'Bonnie Green',
          prefix: '',
          connector: ' and ',
          emphasis: '141 others',
          detail: ' love your story. See it and view more stories.',
          time: '23 minutes ago',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop',
        },
        {
          id: 4,
          name: 'Leslie Livingston',
          prefix: '',
          connector: '',
          emphasis: '',
          detail: ' mentioned you in a comment. What do you say?',
          time: '1 hour ago',
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop',
        },
      ];
      return { args, notifications };
    },
    template: `
      <ul
        class="m-0 w-full max-w-sm list-none divide-y divide-gray-200 overflow-hidden rounded-xl bg-white p-0 dark:divide-gray-700 dark:bg-gray-900 [&>li>div]:rounded-none"
        :class="{ 'border border-gray-200 dark:border-gray-700': args.border }"
      >
        <li v-for="notification in notifications" :key="notification.id">
          <Item
            :title="notification.name"
            :image="notification.image"
            :hoverable="args.hoverable"
            :icon="args.icon"
          >
            <template #title>
              <span class="font-normal text-gray-500 dark:text-gray-400">
                {{ notification.prefix }}<strong class="font-medium text-gray-900 dark:text-white">{{ notification.name }}</strong>{{ notification.connector }}<strong v-if="notification.emphasis" class="font-medium text-gray-900 dark:text-white">{{ notification.emphasis }}</strong>{{ notification.detail }}
              </span>
            </template>
            <template #subtitle>
              <span class="mt-1 block text-xs text-secondary-600 dark:text-secondary-400">{{ notification.time }}</span>
            </template>
          </Item>
        </li>
      </ul>
    `,
  }),
};

export const DarkNotificationsList: Story = {
  ...NotificationsList,
  decorators: Dark.decorators,
};
