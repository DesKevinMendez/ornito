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
  },
  args: {
    title: 'Ana Rivera',
    subtitle: 'Assigned driver',
    icon: IconChevronRight,
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
