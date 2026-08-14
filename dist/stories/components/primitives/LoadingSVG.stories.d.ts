import { ComponentPropsAndSlots, StoryObj } from '@storybook/vue3-vite';
import { default as LoadingSVG } from '../../../components/LoadingSVG.vue';
type LoadingSVGStoryArgs = ComponentPropsAndSlots<typeof LoadingSVG>;
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<{
        customClass?: string;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
        customClass?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
    tags: string[];
    argTypes: {
        customClass: {
            control: "text";
        };
    };
    args: {
        customClass: string;
    };
    render: (args: LoadingSVGStoryArgs) => {
        components: {
            LoadingSVG: import('vue').DefineComponent<{
                customClass?: string;
            }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
                customClass?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
        };
        setup(): {
            args: LoadingSVGStoryArgs;
        };
        template: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Small: Story;
