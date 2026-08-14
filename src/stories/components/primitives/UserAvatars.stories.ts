import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import UserAvatars from '../../../components/UserAvatars.vue';

type UserAvatarsStoryArgs = ComponentPropsAndSlots<typeof UserAvatars>;

const users = [
  { initials: 'AR', name: 'Ana Rivera' },
  { initials: 'MS', name: 'Marco Soto' },
  { initials: 'LM', name: 'Lucía Mejía' },
  { initials: 'DC', name: 'Diego Cruz' },
];

const meta = {
  title: 'Components/Primitives/UserAvatars',
  component: UserAvatars,
  tags: ['autodocs'],
  argTypes: { users: { control: 'object' } },
  args: { users },
  render: (args) => ({
    components: { UserAvatars },
    setup() {
      return { args };
    },
    template: '<UserAvatars v-bind="args" />',
  }),
} satisfies Meta<UserAvatarsStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const SmallTeam: Story = { args: { users: users.slice(0, 2) } };
