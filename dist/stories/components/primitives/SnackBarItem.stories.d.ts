import { ComponentPropsAndSlots, StoryObj } from '@storybook/vue3-vite';
import { default as SnackBarItem } from '../../../components/Snack/SnackBarItem.vue';
type SnackBarItemStoryArgs = ComponentPropsAndSlots<typeof SnackBarItem>;
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<globalThis.ExtractPropTypes<{
        message: {
            type: ObjectConstructor;
            required: true;
            validator: (value: {
                text: string;
            }) => boolean;
        };
        error: {
            type: BooleanConstructor;
            required: true;
        };
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        cancel: (...args: any[]) => void;
        expired: (...args: any[]) => void;
    }, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<{
        message: {
            type: ObjectConstructor;
            required: true;
            validator: (value: {
                text: string;
            }) => boolean;
        };
        error: {
            type: BooleanConstructor;
            required: true;
        };
    }>> & Readonly<{
        onCancel?: ((...args: any[]) => any) | undefined;
        onExpired?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    tags: string[];
    argTypes: {
        message: {
            control: "object";
        };
        error: {
            control: "boolean";
        };
        onExpired: {
            action: string;
        };
        onCancel: {
            action: string;
        };
    };
    args: {
        message: {
            text: string;
        };
        error: false;
        onExpired: import('storybook/test').Mock<(...args: any[]) => any>;
        onCancel: import('storybook/test').Mock<(...args: any[]) => any>;
    };
    render: (args: SnackBarItemStoryArgs) => {
        components: {
            SnackBarItem: import('vue').DefineComponent<globalThis.ExtractPropTypes<{
                message: {
                    type: ObjectConstructor;
                    required: true;
                    validator: (value: {
                        text: string;
                    }) => boolean;
                };
                error: {
                    type: BooleanConstructor;
                    required: true;
                };
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                cancel: (...args: any[]) => void;
                expired: (...args: any[]) => void;
            }, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<{
                message: {
                    type: ObjectConstructor;
                    required: true;
                    validator: (value: {
                        text: string;
                    }) => boolean;
                };
                error: {
                    type: BooleanConstructor;
                    required: true;
                };
            }>> & Readonly<{
                onCancel?: ((...args: any[]) => any) | undefined;
                onExpired?: ((...args: any[]) => any) | undefined;
            }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
        };
        setup(): {
            instanceKey: globalThis.Ref<number, number>;
            componentArgs: {
                key?: PropertyKey | undefined;
                ref?: import('vue').VNodeRef | undefined;
                ref_for?: boolean | undefined;
                ref_key?: string | undefined;
                onVnodeBeforeMount?: (((vnode: VNode) => void) | ((vnode: VNode) => void)[]) | undefined;
                onVnodeMounted?: (((vnode: VNode) => void) | ((vnode: VNode) => void)[]) | undefined;
                onVnodeBeforeUpdate?: (((vnode: VNode, oldVNode: VNode) => void) | ((vnode: VNode, oldVNode: VNode) => void)[]) | undefined;
                onVnodeUpdated?: (((vnode: VNode, oldVNode: VNode) => void) | ((vnode: VNode, oldVNode: VNode) => void)[]) | undefined;
                onVnodeBeforeUnmount?: (((vnode: VNode) => void) | ((vnode: VNode) => void)[]) | undefined;
                onVnodeUnmounted?: (((vnode: VNode) => void) | ((vnode: VNode) => void)[]) | undefined;
                class?: unknown;
                style?: unknown;
                error: boolean;
                message: Record<string, any>;
            };
            onExpired: ((...args: any[]) => any) | undefined;
            onCancel: ((...args: any[]) => any) | undefined;
            restart: () => void;
        };
        template: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Success: Story;
export declare const Error: Story;
