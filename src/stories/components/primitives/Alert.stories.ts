import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import Alert from '../../../components/Alert.vue';
import type { AlertType } from '../../../types/Alert';

type AlertStoryArgs = ComponentPropsAndSlots<typeof Alert> & { message: string };

const meta = {
  title: 'Components/Primitives/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['info', 'success', 'warning', 'danger'] satisfies AlertType[] },
    show: { control: 'boolean' },
    message: { control: 'text' },
  },
  args: { type: 'info', show: true, message: 'Your changes have been saved successfully.' },
  render: (args) => ({
    components: { Alert },
    setup() {
      const { message, ...componentArgs } = args;
      return { message, componentArgs };
    },
    template: '<Alert v-bind="componentArgs">{{ message }}</Alert>',
  }),
} satisfies Meta<AlertStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Success: Story = { args: { type: 'success', message: 'The profile was updated.' } };
export const Warning: Story = { args: { type: 'warning', message: 'This action may take a few minutes.' } };
export const Danger: Story = { args: { type: 'danger', message: 'Unable to complete the request.' } };
