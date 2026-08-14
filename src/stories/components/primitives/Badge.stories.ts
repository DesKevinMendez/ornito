import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import Badge from '../../../components/Badge.vue';

type BadgeStoryArgs = ComponentPropsAndSlots<typeof Badge> & { label: string };

const meta = {
  title: 'Components/Primitives/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['neutral', 'info', 'success', 'warning', 'danger'] },
    text: { control: 'select', options: ['xs', 'sm', 'base'] },
    label: { control: 'text' },
  },
  args: { variant: 'neutral', text: 'base', label: 'Pending' },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: '<Badge v-bind="args">{{ args.label }}</Badge>',
  }),
} satisfies Meta<BadgeStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Success: Story = { args: { variant: 'success', label: 'Active' } };
export const Warning: Story = { args: { variant: 'warning', label: 'Review' } };
export const Danger: Story = { args: { variant: 'danger', label: 'Blocked' } };
export const Small: Story = { args: { text: 'xs', label: 'New' } };
