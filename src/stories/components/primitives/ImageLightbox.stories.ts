import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import ImageLightbox from '../../../components/ImageLightbox.vue';

type ImageLightboxStoryArgs = ComponentPropsAndSlots<typeof ImageLightbox> & { caption: string };

const demoImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"%3E%3Cdefs%3E%3ClinearGradient id="g" x1="0" x2="1" y1="0" y2="1"%3E%3Cstop stop-color="%230ea5e9"/%3E%3Cstop offset="1" stop-color="%237c3aed"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="800" height="500" fill="url(%23g)"/%3E%3Ccircle cx="400" cy="250" r="130" fill="white" fill-opacity=".85"/%3E%3Ctext x="400" y="265" fill="%23334155" font-size="34" text-anchor="middle" font-family="sans-serif"%3EPreview image%3C/text%3E%3C/svg%3E';

const meta = {
  title: 'Components/Primitives/ImageLightbox',
  component: ImageLightbox,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    src: { control: 'text' },
    caption: { control: 'text' },
  },
  args: { open: true, src: demoImage, caption: 'Click the image or press Escape to close.' },
  render: (args) => ({
    components: { ImageLightbox },
    setup() {
      const isOpen = ref(args.open);
      const { open: _, caption, ...componentArgs } = args;
      return { isOpen, caption, componentArgs };
    },
    template: `
      <div class="min-h-48">
        <button class="rounded bg-gray-900 px-3 py-2 text-sm text-white" @click="isOpen = true">Open lightbox</button>
        <p class="mt-3 text-sm text-gray-500">{{ caption }}</p>
        <ImageLightbox v-bind="componentArgs" :open="isOpen" @close="isOpen = false" />
      </div>
    `,
  }),
} satisfies Meta<ImageLightboxStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
