import { ComponentPropsAndSlots, StoryObj } from '@storybook/vue3-vite';
import { default as HelpTooltip } from '../../../components/HelpTooltip.vue';
type HelpTooltipStoryArgs = ComponentPropsAndSlots<typeof HelpTooltip>;
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<{
        tooltip: string;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
        tooltip: string;
    }> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
    tags: string[];
    argTypes: {
        tooltip: {
            control: "text";
        };
    };
    args: {
        tooltip: string;
    };
    render: (args: HelpTooltipStoryArgs) => {
        components: {
            HelpTooltip: import('vue').DefineComponent<{
                tooltip: string;
            }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
                tooltip: string;
            }> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
        };
        setup(): {
            args: HelpTooltipStoryArgs;
        };
        template: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
