import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import Card from '../../../components/Card.vue';

type CardStoryArgs = ComponentPropsAndSlots<typeof Card> & { body: string; showActions: boolean };

const meta = {
  title: 'Components/Layout/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    colInMobile: { control: 'boolean' },
    noPadding: { control: 'boolean' },
    body: { control: 'text' },
    showActions: { control: 'boolean' },
  },
  args: { title: 'Vehicle details', subtitle: 'Current assignment and status', colInMobile: false, noPadding: false, body: 'This card groups related information into a clear, reusable surface.', showActions: true },
  render: (args) => ({
    components: { Card },
    setup() {
      const { body, showActions, ...componentArgs } = args;
      return { body, showActions, componentArgs };
    },
    template: `
      <div class="max-w-lg">
        <Card v-bind="componentArgs">
          <template v-if="showActions" #headerButtons>
            <button class="rounded border border-gray-300 px-2 py-1 text-xs">Edit</button>
          </template>
          <p class="text-sm text-gray-600 dark:text-gray-300">{{ body }}</p>
        </Card>
      </div>
    `,
  }),
} satisfies Meta<CardStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const WithoutHeader: Story = { args: { title: undefined, subtitle: undefined, showActions: false } };
export const NoPadding: Story = { args: { noPadding: true } };
