import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { ref } from 'vue';
import ConfirmationModal from '../../../components/ConfirmationModal.vue';

type ConfirmationModalStoryArgs = ComponentPropsAndSlots<typeof ConfirmationModal>;

const meta = {
  title: 'Components/Primitives/ConfirmationModal',
  component: ConfirmationModal,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    loading: { control: 'boolean' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    onClose: { action: 'close' },
    onConfirm: { action: 'confirm' },
  },
  args: {
    open: true,
    loading: false,
    title: 'Delete vehicle',
    subtitle: "This action cannot be undone. Type 'Confirmar' to continue.",
    onClose: fn(),
    onConfirm: fn(),
  },
  render: (args) => ({
    components: { ConfirmationModal },
    setup() {
      const isOpen = ref(args.open);
      const loading = ref(args.loading ?? false);
      const { open: _, loading: __, onClose, onConfirm, ...componentArgs } = args;
      const handleClose = () => {
        loading.value = false;
        isOpen.value = false;
        onClose?.();
      };
      const handleConfirm = () => {
        onConfirm?.();
        loading.value = true;
        window.setTimeout(() => {
          loading.value = false;
          isOpen.value = false;
        }, 500);
      };
      return { isOpen, loading, componentArgs, handleClose, handleConfirm };
    },
    template: `
      <div class="min-h-48">
        <button class="rounded bg-danger-600 px-3 py-2 text-sm text-white" @click="isOpen = true">Delete vehicle</button>
        <ConfirmationModal
          v-bind="componentArgs"
          :open="isOpen"
          :loading="loading"
          @close="handleClose"
          @confirm="handleConfirm"
        />
      </div>
    `,
  }),
} satisfies Meta<ConfirmationModalStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Loading: Story = { args: { loading: true } };
