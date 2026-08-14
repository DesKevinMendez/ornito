import { ComponentPropsAndSlots, StoryObj } from '@storybook/vue3-vite';
import { default as Modal } from '../../../components/Modal.vue';
type ModalStoryArgs = ComponentPropsAndSlots<typeof Modal> & {
    body: string;
};
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            open: boolean;
            title?: string;
            subtitle?: string;
            size?: "sm" | "md" | "lg" | "xl" | "2xl";
        }> & Readonly<{
            onClose?: ((...args: any[]) => any) | undefined;
            "onUpdate:open"?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            close: (...args: any[]) => void;
            "update:open": (...args: any[]) => void;
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
            size?: "sm" | "md" | "lg" | "xl" | "2xl";
        }> & Readonly<{
            onClose?: ((...args: any[]) => any) | undefined;
            "onUpdate:open"?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        open: boolean;
        title?: string;
        subtitle?: string;
        size?: "sm" | "md" | "lg" | "xl" | "2xl";
    }> & Readonly<{
        onClose?: ((...args: any[]) => any) | undefined;
        "onUpdate:open"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        close: (...args: any[]) => void;
        "update:open": (...args: any[]) => void;
    }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
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
        size: {
            control: "select";
            options: string[];
        };
        body: {
            control: "text";
        };
    };
    args: {
        open: true;
        title: string;
        subtitle: string;
        size: "md";
        body: string;
    };
    render: (args: ModalStoryArgs) => {
        components: {
            Modal: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                    open: boolean;
                    title?: string;
                    subtitle?: string;
                    size?: "sm" | "md" | "lg" | "xl" | "2xl";
                }> & Readonly<{
                    onClose?: ((...args: any[]) => any) | undefined;
                    "onUpdate:open"?: ((...args: any[]) => any) | undefined;
                }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                    close: (...args: any[]) => void;
                    "update:open": (...args: any[]) => void;
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
                    size?: "sm" | "md" | "lg" | "xl" | "2xl";
                }> & Readonly<{
                    onClose?: ((...args: any[]) => any) | undefined;
                    "onUpdate:open"?: ((...args: any[]) => any) | undefined;
                }>, {}, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<{
                open: boolean;
                title?: string;
                subtitle?: string;
                size?: "sm" | "md" | "lg" | "xl" | "2xl";
            }> & Readonly<{
                onClose?: ((...args: any[]) => any) | undefined;
                "onUpdate:open"?: ((...args: any[]) => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                close: (...args: any[]) => void;
                "update:open": (...args: any[]) => void;
            }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?: (props: {}) => any;
                };
            });
        };
        setup(): {
            isOpen: globalThis.Ref<boolean, boolean>;
            body: string;
            componentArgs: {
                title?: string;
                subtitle?: string;
                size?: "sm" | "md" | "lg" | "xl" | "2xl";
                onClose?: ((...args: any[]) => any) | undefined;
                "onUpdate:open"?: ((...args: any[]) => any) | undefined;
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
export declare const Small: Story;
export declare const Large: Story;
