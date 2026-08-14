import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { IconHeart, IconPlus } from '@tabler/icons-vue';
import BaseButtonIcon from '../../../components/BaseButtonIcon.vue';

type BaseButtonIconStoryArgs = ComponentPropsAndSlots<typeof BaseButtonIcon>;

const meta = {
  title: 'Components/Primitives/BaseButtonIcon',
  component: BaseButtonIcon,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: false },
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'primary-outline', 'danger', 'danger-outline', 'overlay'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
  args: { icon: IconPlus, variant: 'primary', size: 'md', type: 'button', disabled: false, loading: false },
  render: (args) => ({
    components: { BaseButtonIcon },
    setup() {
      return { args };
    },
    template: '<BaseButtonIcon v-bind="args" />',
  }),
} satisfies Meta<BaseButtonIconStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Secondary: Story = { args: { variant: 'secondary', icon: IconHeart } };
export const Large: Story = { args: { size: 'lg' } };
export const Loading: Story = { args: { loading: true } };
export const Disabled: Story = { args: { disabled: true } };
