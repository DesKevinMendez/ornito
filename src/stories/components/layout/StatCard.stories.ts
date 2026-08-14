import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import StatCard from '../../../components/StatCard.vue';

type StatCardStoryArgs = ComponentPropsAndSlots<typeof StatCard>;

const meta = {
  title: 'Components/Layout/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    value: { control: 'text' },
    change: { control: 'text' },
    changeType: { control: 'select', options: ['positive', 'negative', 'neutral', 'info'] },
    description: { control: 'text' },
    help: { control: 'text' },
  },
  args: { title: 'Active vehicles', value: '128', change: '+12%', changeType: 'positive', description: 'from last month', help: 'Vehicles with an active assignment.' },
  render: (args) => ({
    components: { StatCard },
    setup() {
      return { args };
    },
    template: '<div class="max-w-sm"><StatCard v-bind="args" /></div>',
  }),
} satisfies Meta<StatCardStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Positive: Story = {};
export const Negative: Story = { args: { change: '-4%', changeType: 'negative', description: 'from last month' } };
export const NoData: Story = { args: { value: null, change: undefined, description: '' } };
