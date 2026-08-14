import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';

import CardPaginations from '../../../components/CardPaginations.vue';

type CardPaginationsStoryArgs = ComponentPropsAndSlots<typeof CardPaginations> & {
  onPageChange: (page: number) => void;
};

const meta = {
  title: 'Components/Data/CardPaginations',
  component: CardPaginations,
  tags: ['autodocs'],
  argTypes: {
    pagination: { control: 'object' },
    onPageChange: { action: 'page-change' },
  },
  args: {
    pagination: {
      total: 48,
      per_page: 10,
      current_page: 2,
      from: 11,
      to: 20,
      last_page: 5,
    },
    onPageChange: fn(),
  },
  render: (args) => ({
    components: { CardPaginations },
    setup() {
      return { args, onPageChange: args.onPageChange };
    },
    template: '<CardPaginations v-bind="args" @page-change="onPageChange" />',
  }),
} satisfies Meta<CardPaginationsStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LastPage: Story = {
  args: {
    pagination: {
      total: 48,
      per_page: 10,
      current_page: 5,
      from: 41,
      to: 48,
      last_page: 5,
    },
  },
};
