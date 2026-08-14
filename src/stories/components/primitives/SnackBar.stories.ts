import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { onMounted, onUnmounted } from 'vue';

import SnackBar from '../../../components/Snack/SnackBar.vue';
import useMessages from '../../../composables/useMessages';

type SnackBarStoryArgs = {
  message: string;
  error: boolean;
};

const meta = {
  title: 'Components/SnackBar',
  component: SnackBar,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
    error: { control: 'boolean' },
  },
  args: {
    message: 'Changes saved successfully.',
    error: false,
  },
  render: (args) => ({
    components: { SnackBar },
    setup() {
      const { messages, pushMessage } = useMessages();

      onMounted(() => {
        messages.value = [];
        pushMessage(args.message, args.error);
      });

      onUnmounted(() => {
        messages.value = [];
      });

      return { messages, pushMessage };
    },
    template: `
      <div class="min-h-48">
        <SnackBar />
        <button
          class="rounded-lg bg-primary-600 px-4 py-2 font-medium text-white"
          type="button"
          @click="pushMessage('Another notification.')"
        >
          Add notification
        </button>
      </div>
    `,
  }),
} satisfies Meta<SnackBarStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {};

export const Error: Story = {
  args: {
    message: 'Something went wrong.',
    error: true,
  },
};
