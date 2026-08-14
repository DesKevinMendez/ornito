import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import ViewHeader from '../../../components/ViewHeader.vue';

type ViewHeaderStoryArgs = ComponentPropsAndSlots<typeof ViewHeader> & { showAction: boolean };

const meta = {
  title: 'Components/Layout/ViewHeader',
  component: ViewHeader,
  tags: ['autodocs'],
  argTypes: { title: { control: 'text' }, subtitle: { control: 'text' }, badgeText: { control: 'text' }, showAction: { control: 'boolean' } },
  args: { title: 'Vehicles', subtitle: 'Manage your active fleet', badgeText: '12 total', showAction: true },
  render: (args) => ({
    components: { ViewHeader },
    setup() {
      const { showAction, ...componentArgs } = args;
      return { showAction, componentArgs };
    },
    template: `
      <ViewHeader v-bind="componentArgs">
        <template #right>
          <button v-if="showAction" class="rounded-lg bg-primary-600 px-3 py-2 text-sm text-white">Add vehicle</button>
        </template>
      </ViewHeader>
    `,
  }),
} satisfies Meta<ViewHeaderStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const WithoutBadge: Story = { args: { badgeText: undefined } };
