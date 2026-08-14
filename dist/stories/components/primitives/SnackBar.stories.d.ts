import { StoryObj } from '@storybook/vue3-vite';
type SnackBarStoryArgs = {
    message: string;
    error: boolean;
};
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<globalThis.ExtractPropTypes<{
        active: BooleanConstructor;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<{
        active: BooleanConstructor;
    }>> & Readonly<{}>, {
        active: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    tags: string[];
    argTypes: {
        message: {
            control: "text";
        };
        error: {
            control: "boolean";
        };
    };
    args: {
        message: string;
        error: false;
    };
    render: (args: SnackBarStoryArgs) => {
        components: {
            SnackBar: import('vue').DefineComponent<globalThis.ExtractPropTypes<{
                active: BooleanConstructor;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<{
                active: BooleanConstructor;
            }>> & Readonly<{}>, {
                active: boolean;
            }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
        };
        setup(): {
            messages: globalThis.Ref<{
                ts: number;
                text: string;
                error: boolean;
            }[], {
                ts: number;
                text: string;
                error: boolean;
            }[] | {
                ts: number;
                text: string;
                error: boolean;
            }[]>;
            pushMessage: (text: string, error?: boolean) => void;
        };
        template: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Success: Story;
export declare const Error: Story;
