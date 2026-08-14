import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Divider from '../../../components/Divider.vue';

const meta = {
  title: 'Components/Primitives/Divider',
  component: Divider,
  tags: ['autodocs'],
  render: () => ({
    components: { Divider },
    template: '<div class="max-w-xl"><p class="text-sm text-gray-600">Content above</p><Divider /><p class="text-sm text-gray-600">Content below</p></div>',
  }),
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
