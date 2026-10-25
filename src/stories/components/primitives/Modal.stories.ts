import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import Modal from '../../../components/Modal.vue';

type ModalStoryArgs = ComponentPropsAndSlots<typeof Modal> & { body: string };

const meta = {
  title: 'Components/Primitives/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', '2xl'] },
    body: { control: 'text' },
  },
  args: { open: true, title: 'Edit vehicle', subtitle: 'Update the details and save your changes.', size: 'md', body: 'This modal keeps the page context visible while the user completes a focused task.' },
  render: (args) => ({
    components: { Modal },
    setup() {
      const isOpen = ref(args.open);
      const { open: _, body, ...componentArgs } = args;
      return { isOpen, body, componentArgs };
    },
    template: `
      <div class="min-h-48">
        <button class="rounded bg-primary-600 px-3 py-2 text-sm text-white" @click="isOpen = true">Open modal</button>
        <Modal v-bind="componentArgs" v-model:open="isOpen">
          <p class="text-sm leading-6 text-gray-600 dark:text-gray-300">{{ body }}</p>
          <div class="mt-5 flex justify-end">
            <button class="rounded border border-gray-300 px-3 py-2 text-sm" @click="isOpen = false">Close</button>
          </div>
        </Modal>
      </div>
    `,
  }),
} satisfies Meta<ModalStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Small: Story = { args: { size: 'sm' } };
export const Large: Story = { args: { size: 'lg' } };
