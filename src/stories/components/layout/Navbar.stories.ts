import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { IconBell, IconUser } from '@tabler/icons-vue';
import { fn } from 'storybook/test';
import Navbar from '../../../components/Navbar.vue';

type NavbarStoryArgs = ComponentPropsAndSlots<typeof Navbar> & { showUtilities: boolean; onToggleMobileSidebar: () => void };

const meta = {
  title: 'Components/Layout/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: { showUtilities: { control: 'boolean' }, onToggleMobileSidebar: { action: 'toggle-mobile-sidebar' } },
  args: { showUtilities: true, onToggleMobileSidebar: fn() },
  render: (args) => ({
    components: { IconBell, IconUser, Navbar },
    setup() {
      const { showUtilities, onToggleMobileSidebar } = args;
      return { showUtilities, onToggleMobileSidebar };
    },
    template: `
      <Navbar @toggle-mobile-sidebar="onToggleMobileSidebar">
        <template #right>
          <div v-if="showUtilities" class="flex items-center gap-2">
            <button class="rounded-lg p-2 text-gray-600" aria-label="Notifications"><IconBell class="h-5 w-5" /></button>
            <button class="rounded-lg p-2 text-gray-600" aria-label="Profile"><IconUser class="h-5 w-5" /></button>
          </div>
        </template>
      </Navbar>
    `,
  }),
} satisfies Meta<NavbarStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const EmptyUtilities: Story = { args: { showUtilities: false } };
