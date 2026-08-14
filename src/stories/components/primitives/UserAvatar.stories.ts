import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import UserAvatar from '../../../components/UserAvatar.vue';

type UserAvatarStoryArgs = ComponentPropsAndSlots<typeof UserAvatar>;

const meta = {
  title: 'Components/Primitives/UserAvatar',
  component: UserAvatar,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    imageUrl: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
  args: { name: 'Ana Rivera', imageUrl: null, size: 'md' },
  render: (args) => ({
    components: { UserAvatar },
    setup() {
      return { args };
    },
    template: '<UserAvatar v-bind="args" />',
  }),
} satisfies Meta<UserAvatarStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Initials: Story = {};
export const WithImage: Story = { args: { imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop' } };
export const Large: Story = { args: { size: 'xl' } };
