import { ComponentPropsAndSlots, StoryObj } from '@storybook/vue3-vite';
import { default as BottomModal } from '../../../components/BottomModal.vue';
type BottomModalStoryArgs = ComponentPropsAndSlots<typeof BottomModal> & {
    body: string;
};
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            open: boolean;
            title?: string;
            subtitle?: string;
        }> & Readonly<{
            "onUpdate:open"?: ((value: boolean) => any) | undefined;
            onClose?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            "update:open": (value: boolean) => any;
            close: () => any;
        }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            open: boolean;
            title?: string;
            subtitle?: string;
        }> & Readonly<{
            "onUpdate:open"?: ((value: boolean) => any) | undefined;
            onClose?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        open: boolean;
        title?: string;
        subtitle?: string;
    }> & Readonly<{
        "onUpdate:open"?: ((value: boolean) => any) | undefined;
        onClose?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:open": (value: boolean) => any;
        close: () => any;
    }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        } & {
            footer?: (props: {}) => any;
        };
    });
    tags: string[];
    argTypes: {
        open: {
            control: "boolean";
        };
        title: {
            control: "text";
        };
        subtitle: {
            control: "text";
        };
        body: {
            control: "text";
        };
        onClose: {
            action: string;
        };
    };
    args: {
        open: true;
        title: string;
        subtitle: string;
        body: string;
        onClose: import('storybook/test').Mock<(...args: any[]) => any>;
    };
    render: (args: BottomModalStoryArgs) => {
        components: {
            BottomModal: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                    open: boolean;
                    title?: string;
                    subtitle?: string;
                }> & Readonly<{
                    "onUpdate:open"?: ((value: boolean) => any) | undefined;
                    onClose?: (() => any) | undefined;
                }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
                    "update:open": (value: boolean) => any;
                    close: () => any;
                }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<{
                    open: boolean;
                    title?: string;
                    subtitle?: string;
                }> & Readonly<{
                    "onUpdate:open"?: ((value: boolean) => any) | undefined;
                    onClose?: (() => any) | undefined;
                }>, {}, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<{
                open: boolean;
                title?: string;
                subtitle?: string;
            }> & Readonly<{
                "onUpdate:open"?: ((value: boolean) => any) | undefined;
                onClose?: (() => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
                "update:open": (value: boolean) => any;
                close: () => any;
            }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?: (props: {}) => any;
                } & {
                    footer?: (props: {}) => any;
                };
            });
        };
        setup(): {
            isOpen: globalThis.Ref<boolean, boolean>;
            body: string;
            onClose: (() => any) | undefined;
            componentArgs: {
                title?: string;
                subtitle?: string;
                "onUpdate:open"?: ((value: boolean) => any) | undefined;
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
                footer?: ((props: {}) => any) | import('vue').VNodeChild;
            };
        };
        template: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Interactive: Story;
export declare const WithoutHeading: Story;
