import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import HelpTooltip from '../../../components/HelpTooltip.vue';

type HelpTooltipStoryArgs = ComponentPropsAndSlots<typeof HelpTooltip>;

const meta = {
  title: 'Components/Primitives/HelpTooltip',
  component: HelpTooltip,
  tags: ['autodocs'],
  argTypes: { tooltip: { control: 'text' } },
  args: { tooltip: 'This value is calculated from the latest available data.' },
  render: (args) => ({
    components: { HelpTooltip },
    setup() {
      return { args };
    },
    template: '<div class="flex items-center gap-2 p-8"><span class="text-sm">Hover the icon for help</span><HelpTooltip v-bind="args" /></div>',
  }),
} satisfies Meta<HelpTooltipStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
