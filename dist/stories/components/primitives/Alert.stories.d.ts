import { ComponentPropsAndSlots, StoryObj } from '@storybook/vue3-vite';
import { default as Alert } from '../../../components/Alert.vue';
import { AlertType } from '../../../types/Alert';
type AlertStoryArgs = ComponentPropsAndSlots<typeof Alert> & {
    message: string;
};
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            type: AlertType;
            show?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            show: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            type: AlertType;
            show?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, {
            show: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        type: AlertType;
        show?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        show: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
    tags: string[];
    argTypes: {
        type: {
            control: "select";
            options: ("warning" | "danger" | "info" | "success")[];
        };
        show: {
            control: "boolean";
        };
        message: {
            control: "text";
        };
    };
    args: {
        type: "info";
        show: true;
        message: string;
    };
    render: (args: AlertStoryArgs) => {
        components: {
            Alert: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                    type: AlertType;
                    show?: boolean;
                }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
                    show: boolean;
                }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<{
                    type: AlertType;
                    show?: boolean;
                }> & Readonly<{}>, {}, {}, {}, {}, {
                    show: boolean;
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<{
                type: AlertType;
                show?: boolean;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                show: boolean;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?: (props: {}) => any;
                };
            });
        };
        setup(): {
            message: string;
            componentArgs: {
                type: AlertType;
                show?: boolean;
                key?: PropertyKey;
                ref?: import('vue').VNodeRef;
                ref_for?: boolean;
                ref_key?: string;
                onVnodeBeforeMount?: ((vnode: VNode) => void) | ((vnode: VNode) => void)[];
                onVnodeMounted?: ((vnode: VNode) => void) | ((vnode: VNode) => void)[];
                onVnodeBeforeUpdate?: ((vnode: VNode, oldVNode: VNode) => void) | ((vnode: VNode, oldVNode: VNode) => void)[];
                onVnodeUpdated?: ((vnode: VNode, oldVNode: VNode) => void) | ((vnode: VNode, oldVNode: VNode) => void)[];
                onVnodeBeforeUnmount?: ((vnode: VNode) => void) | ((vnode: VNode) => void)[];
                onVnodeUnmounted?: ((vnode: VNode) => void) | ((vnode: VNode) => void)[];
                class?: unknown;
                style?: unknown;
                default?: ((props: {}) => any) | import('vue').VNodeChild;
            };
        };
        template: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Success: Story;
export declare const Warning: Story;
export declare const Danger: Story;
