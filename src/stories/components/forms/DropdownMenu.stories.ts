import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { IconArchive, IconDotsVertical, IconPencil, IconTrash } from '@tabler/icons-vue';
import { fn } from 'storybook/test';

import DropdownMenu from '../../../components/DropdownMenu.vue';

type DropdownMenuStoryArgs = ComponentPropsAndSlots<typeof DropdownMenu>;

const items = [
  { action: 'edit', label: 'Edit item', icon: IconPencil },
  { action: 'archive', label: 'Archive item', icon: IconArchive, variant: 'success' as const },
  { action: 'delete', label: 'Delete item', icon: IconTrash, variant: 'danger' as const },
];

const meta = {
  title: 'Components/Forms/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  argTypes: {
    items: { control: false },
    ariaLabel: { control: 'text' },
    position: { control: 'select', options: ['bottom-left', 'bottom-right'] },
    buttonVariant: { control: 'select', options: ['outline', 'secondary'] },
    icon: { control: false },
  },
  args: {
    items,
    ariaLabel: 'Item actions',
    position: 'bottom-right',
    buttonVariant: 'outline',
    icon: IconDotsVertical,
  },
  render: (args) => ({
    components: { DropdownMenu },
    setup() {
      const handleSelect = fn();
      return { args, handleSelect };
    },
    template: `
      <div class="flex min-h-40 justify-end p-4">
        <DropdownMenu v-bind="args" @select="handleSelect" />
      </div>
    `,
  }),
} satisfies Meta<DropdownMenuStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const BottomLeft: Story = {
  args: {
    position: 'bottom-left',
    buttonVariant: 'secondary',
  },
};

export const DestructiveActions: Story = {
  args: {
    items: [
      { action: 'delete', label: 'Delete permanently', icon: IconTrash, variant: 'danger' },
      { action: 'archive', label: 'Archive', icon: IconArchive, variant: 'default' },
    ],
  },
};
