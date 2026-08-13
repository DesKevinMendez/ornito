import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';

import { IconArrowRight } from '@tabler/icons-vue';
import { fn } from 'storybook/test';

import Button from './../components/BaseButton.vue';

type ButtonStoryArgs = ComponentPropsAndSlots<typeof Button> & {
  label: string;
  onClick?: (event: MouseEvent) => void;
};

const meta = {
  title: 'Components/BaseButton',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Text rendered inside the button default slot.',
    },
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'outline',
        'primary-outline',
        'danger',
        'danger-outline',
        'overlay',
      ],
    },
    size: {
      control: 'select',
      options: ['full', 'auto', 'small'],
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    iconPosition: {
      control: 'inline-radio',
      options: ['left', 'right'],
    },
    icon: {
      control: false,
    },
    to: {
      control: 'text',
      description: 'When provided, renders the button as a Vue Router link.',
    },
  },
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'auto',
    type: 'button',
    iconPosition: 'left',
    disabled: false,
    loading: false,
    onClick: fn(),
  },
  render: (args) => ({
    components: { Button },
    setup() {
      const { label, ...buttonArgs } = args;

      return { buttonArgs, label };
    },
    template: '<Button v-bind="buttonArgs">{{ label }}</Button>',
  }),
} satisfies Meta<ButtonStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const PrimaryOutline: Story = {
  args: {
    variant: 'primary-outline',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
};

export const DangerOutline: Story = {
  args: {
    variant: 'danger-outline',
  },
};

export const Overlay: Story = {
  args: {
    variant: 'overlay',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const FullWidth: Story = {
  args: {
    size: 'full',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    label: 'Saving',
  },
};

export const WithIcon: Story = {
  args: {
    icon: IconArrowRight,
    iconPosition: 'right',
    label: 'Continue',
  },
};
