import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import DropdownAnimation from '../../../components/DropdownAnimation.vue';

const meta = {
  title: 'Components/Primitives/DropdownAnimation',
  component: DropdownAnimation,
  tags: ['autodocs'],
  render: () => ({
    components: { DropdownAnimation },
    setup() {
      const open = ref(true);
      return { open };
    },
    template: `
      <div class="max-w-xs">
        <button class="rounded border border-input-light dark:border-input-dark px-3 py-2 text-sm" @click="open = !open">Toggle menu</button>
        <DropdownAnimation>
          <div v-if="open" class="mt-2 rounded-lg border border-default-light dark:border-default-dark bg-white p-3 text-sm shadow-lg">Animated dropdown content</div>
        </DropdownAnimation>
      </div>
    `,
  }),
} satisfies Meta<typeof DropdownAnimation>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
