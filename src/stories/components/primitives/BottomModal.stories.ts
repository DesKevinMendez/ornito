import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { ref } from 'vue';
import BottomModal from '../../../components/BottomModal.vue';

type BottomModalStoryArgs = ComponentPropsAndSlots<typeof BottomModal> & { body: string };

const meta = {
  title: 'Components/Primitives/BottomModal',
  component: BottomModal,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    showFooterDivider: { control: 'boolean' },
    body: { control: 'text' },
    onClose: { action: 'close' },
  },
  args: {
    open: true,
    title: 'Choose an option',
    subtitle: 'Select the action you want to take.',
    showFooterDivider: true,
    body: 'A bottom modal keeps the current page in view while presenting a focused set of options. Add longer content here and it will scroll inside the sheet.',
    onClose: fn(),
  },
  render: (args) => ({
    components: { BottomModal },
    setup() {
      const isOpen = ref(args.open);
      const { open: _, body, onClose, ...componentArgs } = args;
      return { isOpen, body, onClose, componentArgs };
    },
    template: `
      <div class="min-h-dvh bg-gray-100 p-6 dark:bg-gray-950">
        <div class="mx-auto max-w-5xl space-y-6">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">My account</p>
              <h1 class="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">Good morning, Alex</h1>
            </div>
            <button class="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white" @click="isOpen = true">Open bottom sheet</button>
          </div>

          <div class="grid gap-4 sm:grid-cols-3">
            <div class="rounded-xl bg-white p-5 shadow-sm dark:bg-gray-900"><p class="text-sm text-gray-500 dark:text-gray-400">Available balance</p><p class="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">$12,480.00</p></div>
            <div class="rounded-xl bg-white p-5 shadow-sm dark:bg-gray-900"><p class="text-sm text-gray-500 dark:text-gray-400">Monthly income</p><p class="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">$4,250.00</p></div>
            <div class="rounded-xl bg-white p-5 shadow-sm dark:bg-gray-900"><p class="text-sm text-gray-500 dark:text-gray-400">Monthly expenses</p><p class="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">$1,840.00</p></div>
          </div>

          <div class="rounded-xl bg-white p-5 shadow-sm dark:bg-gray-900">
            <h2 class="font-semibold text-gray-900 dark:text-white">Recent activity</h2>
            <div class="mt-4 space-y-4">
              <div class="flex items-center gap-3"><span class="h-10 w-10 rounded-full bg-sky-100 dark:bg-sky-900" /><div class="flex-1"><p class="text-sm font-medium text-gray-800 dark:text-gray-200">Coffee shop</p><p class="text-xs text-gray-500">Today · 9:42 AM</p></div><span class="text-sm font-medium text-gray-800 dark:text-gray-200">−$8.50</span></div>
              <div class="flex items-center gap-3"><span class="h-10 w-10 rounded-full bg-violet-100 dark:bg-violet-900" /><div class="flex-1"><p class="text-sm font-medium text-gray-800 dark:text-gray-200">Salary payment</p><p class="text-xs text-gray-500">Yesterday · 8:15 AM</p></div><span class="text-sm font-medium text-emerald-600">+$2,400.00</span></div>
              <div class="flex items-center gap-3"><span class="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900" /><div class="flex-1"><p class="text-sm font-medium text-gray-800 dark:text-gray-200">Online store</p><p class="text-xs text-gray-500">Oct 19 · 3:28 PM</p></div><span class="text-sm font-medium text-gray-800 dark:text-gray-200">−$64.25</span></div>
            </div>
          </div>
        </div>
        <BottomModal v-bind="componentArgs" v-model:open="isOpen" @close="onClose">
          <p class="text-sm leading-6 text-gray-600 dark:text-gray-300">{{ body }}</p>
          <template #footer>
            <div class="flex justify-end gap-3">
              <button class="rounded-lg border border-strong-light dark:border-strong-dark px-4 py-2 text-sm text-gray-700 dark:text-gray-200" @click="isOpen = false">Cancel</button>
              <button class="rounded-lg bg-primary-600 px-4 py-2 text-sm text-white" @click="isOpen = false">Continue</button>
            </div>
          </template>
        </BottomModal>
      </div>
    `,
  }),
} satisfies Meta<BottomModalStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Interactive: Story = { args: { open: false } };
export const WithoutHeading: Story = { args: { title: '', subtitle: '' } };
