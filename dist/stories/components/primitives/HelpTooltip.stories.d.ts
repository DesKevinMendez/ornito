import { ComponentPropsAndSlots, StoryObj } from '@storybook/vue3-vite';
import { default as HelpTooltip } from '../../../components/HelpTooltip.vue';
declare const icons: {
    'Question mark': undefined;
    'Info circle': import('@tabler/icons-vue').Icon;
    'Alert circle': import('@tabler/icons-vue').Icon;
    'Light bulb': import('@tabler/icons-vue').Icon;
};
type HelpTooltipStoryArgs = Omit<ComponentPropsAndSlots<typeof HelpTooltip>, 'icon'> & {
    icon: keyof typeof icons;
};
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<{
        tooltip: string;
        icon?: Component;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
        tooltip: string;
        icon?: Component;
    }> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
    tags: string[];
    argTypes: {
        tooltip: {
            control: "text";
        };
        icon: {
            control: "select";
            options: string[];
            mapping: {
                'Question mark': undefined;
                'Info circle': import('@tabler/icons-vue').Icon;
                'Alert circle': import('@tabler/icons-vue').Icon;
                'Light bulb': import('@tabler/icons-vue').Icon;
            };
        };
    };
    args: {
        tooltip: string;
        icon: "Question mark";
    };
    render: (args: HelpTooltipStoryArgs) => {
        components: {
            HelpTooltip: import('vue').DefineComponent<{
                tooltip: string;
                icon?: Component;
            }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
                tooltip: string;
                icon?: Component;
            }> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
        };
        setup(): {
            args: HelpTooltipStoryArgs;
        };
        template: string;
    };
};
export default meta;
type Story = StoryObj<Omit<typeof meta, 'component'>>;
export declare const Default: Story;
export declare const CustomIcon: Story;
