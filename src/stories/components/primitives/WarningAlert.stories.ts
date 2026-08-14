import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import WarningAlert from '../../../components/WarningAlert.vue';

type WarningAlertStoryArgs = ComponentPropsAndSlots<typeof WarningAlert> & { message: string };

const meta = {
  title: 'Components/Primitives/WarningAlert',
  component: WarningAlert,
  tags: ['autodocs'],
  argTypes: { message: { control: 'text' } },
  args: { message: 'This item is missing required information.' },
  render: (args) => ({
    components: { WarningAlert },
    setup() {
      return { args };
    },
    template: '<WarningAlert>{{ args.message }}</WarningAlert>',
  }),
} satisfies Meta<WarningAlertStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
