import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { IconAlertCircle, IconBulb, IconInfoCircle } from '@tabler/icons-vue';
import HelpTooltip from '../../../components/HelpTooltip.vue';

const icons = {
  'Question mark': undefined,
  'Info circle': IconInfoCircle,
  'Alert circle': IconAlertCircle,
  'Light bulb': IconBulb,
};

type HelpTooltipStoryArgs = Omit<ComponentPropsAndSlots<typeof HelpTooltip>, 'icon'> & {
  icon: keyof typeof icons;
};

const meta = {
  title: 'Components/Primitives/HelpTooltip',
  component: HelpTooltip,
  tags: ['autodocs'],
  argTypes: {
    tooltip: { control: 'text' },
    icon: { control: 'select', options: Object.keys(icons), mapping: icons },
  },
  args: { tooltip: 'This value is calculated from the latest available data.', icon: 'Question mark' },
  render: (args) => ({
    components: { HelpTooltip },
    setup() {
      return { args };
    },
    template: '<div class="flex items-center gap-2 p-8"><span class="text-sm">Hover the icon for help</span><HelpTooltip v-bind="args" /></div>',
  }),
} satisfies Meta<HelpTooltipStoryArgs>;

export default meta;
type Story = StoryObj<Omit<typeof meta, 'component'>>;
export const Default: Story = {};
export const CustomIcon: Story = { args: { icon: 'Info circle' } };
