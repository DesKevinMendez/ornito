import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { ref } from 'vue';
import SnackBarItem from '../../../components/Snack/SnackBarItem.vue';

type SnackBarItemStoryArgs = ComponentPropsAndSlots<typeof SnackBarItem>;

const meta = {
  title: 'Components/Primitives/SnackBarItem',
  component: SnackBarItem,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'object' },
    error: { control: 'boolean' },
    onExpired: { action: 'expired' },
    onCancel: { action: 'cancel' },
  },
  args: { message: { text: 'Vehicle saved successfully.' }, error: false, onExpired: fn(), onCancel: fn() },
  render: (args) => ({
    components: { SnackBarItem },
    setup() {
      const instanceKey = ref(0);
      const { onExpired, onCancel, ...componentArgs } = args;
      const restart = () => { instanceKey.value += 1; };
      return { instanceKey, componentArgs, onExpired, onCancel, restart };
    },
    template: `
      <div class="max-w-md">
        <SnackBarItem :key="instanceKey" v-bind="componentArgs" @expired="onExpired" @cancel="onCancel" />
        <button class="mt-2 text-sm text-primary-600 underline" @click="restart">Restart timer</button>
      </div>
    `,
  }),
} satisfies Meta<SnackBarItemStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Success: Story = {};
export const Error: Story = { args: { error: true, message: { text: 'Unable to save the vehicle.' } } };
