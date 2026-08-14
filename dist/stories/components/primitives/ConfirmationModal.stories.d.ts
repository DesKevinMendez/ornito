import { ComponentPropsAndSlots, StoryObj } from '@storybook/vue3-vite';
import { default as ConfirmationModal } from '../../../components/ConfirmationModal.vue';
type ConfirmationModalStoryArgs = ComponentPropsAndSlots<typeof ConfirmationModal>;
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<{
        open: boolean;
        loading?: boolean;
        title?: string;
        subtitle?: string;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        close: () => any;
        confirm: () => any;
    }, string, import('vue').PublicProps, Readonly<{
        open: boolean;
        loading?: boolean;
        title?: string;
        subtitle?: string;
    }> & Readonly<{
        onClose?: (() => any) | undefined;
        onConfirm?: (() => any) | undefined;
    }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
    tags: string[];
    argTypes: {
        open: {
            control: "boolean";
        };
        loading: {
            control: "boolean";
        };
        title: {
            control: "text";
        };
        subtitle: {
            control: "text";
        };
        onClose: {
            action: string;
        };
        onConfirm: {
            action: string;
        };
    };
    args: {
        open: true;
        loading: false;
        title: string;
        subtitle: string;
        onClose: import('storybook/test').Mock<(...args: any[]) => any>;
        onConfirm: import('storybook/test').Mock<(...args: any[]) => any>;
    };
    render: (args: ConfirmationModalStoryArgs) => {
        components: {
            ConfirmationModal: import('vue').DefineComponent<{
                open: boolean;
                loading?: boolean;
                title?: string;
                subtitle?: string;
            }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
                close: () => any;
                confirm: () => any;
            }, string, import('vue').PublicProps, Readonly<{
                open: boolean;
                loading?: boolean;
                title?: string;
                subtitle?: string;
            }> & Readonly<{
                onClose?: (() => any) | undefined;
                onConfirm?: (() => any) | undefined;
            }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
        };
        setup(): {
            isOpen: globalThis.Ref<boolean, boolean>;
            loading: globalThis.Ref<boolean, boolean>;
            componentArgs: {
                title?: string;
                subtitle?: string;
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
            };
            handleClose: () => void;
            handleConfirm: () => void;
        };
        template: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Loading: Story;
