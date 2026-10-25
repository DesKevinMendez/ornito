import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import CollapseTransition from '../../../components/CollapseTransition.vue';

const meta = {
  title: 'Components/Primitives/CollapseTransition',
  component: CollapseTransition,
  tags: ['autodocs'],
  render: () => ({
    components: { CollapseTransition },
    setup() {
      const expanded = ref(true);
      return { expanded };
    },
    template: `
      <div class="max-w-md">
        <button class="rounded border border-gray-300 px-3 py-2 text-sm" @click="expanded = !expanded">Toggle details</button>
        <CollapseTransition>
          <div v-if="expanded" class="mt-3 rounded-lg bg-gray-100 p-4 text-sm text-gray-700">The content expands and collapses with a height transition.</div>
        </CollapseTransition>
      </div>
    `,
  }),
} satisfies Meta<typeof CollapseTransition>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
