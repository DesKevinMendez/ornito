import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import LoadingSVG from '../../../components/LoadingSVG.vue';

type LoadingSVGStoryArgs = ComponentPropsAndSlots<typeof LoadingSVG>;

const meta = {
  title: 'Components/Primitives/LoadingSVG',
  component: LoadingSVG,
  tags: ['autodocs'],
  argTypes: { customClass: { control: 'text' } },
  args: { customClass: 'animate-spin h-10 w-10 text-primary-600' },
  render: (args) => ({
    components: { LoadingSVG },
    setup() {
      return { args };
    },
    template: '<LoadingSVG v-bind="args" />',
  }),
} satisfies Meta<LoadingSVGStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Small: Story = { args: { customClass: 'animate-spin h-5 w-5 text-gray-700' } };
