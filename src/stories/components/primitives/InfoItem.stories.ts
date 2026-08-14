import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import InfoItem from '../../../components/InfoItem.vue';

type InfoItemStoryArgs = ComponentPropsAndSlots<typeof InfoItem> & { value: string };

const meta = {
  title: 'Components/Primitives/InfoItem',
  component: InfoItem,
  tags: ['autodocs'],
  argTypes: { label: { control: 'text' }, column: { control: 'boolean' }, value: { control: 'text' } },
  args: { label: 'Assigned driver', column: true, value: 'Ana Rivera' },
  render: (args) => ({
    components: { InfoItem },
    setup() {
      const { value, ...componentArgs } = args;
      return { value, componentArgs };
    },
    template: '<InfoItem v-bind="componentArgs">{{ value }}</InfoItem>',
  }),
} satisfies Meta<InfoItemStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Inline: Story = { args: { column: false, label: 'Status', value: 'Active' } };
