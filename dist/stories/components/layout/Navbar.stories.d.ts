import { ComponentPropsAndSlots, StoryObj } from '@storybook/vue3-vite';
import { default as Navbar } from '../../../components/Navbar.vue';
type NavbarStoryArgs = ComponentPropsAndSlots<typeof Navbar> & {
    showUtilities: boolean;
    onToggleMobileSidebar: () => void;
};
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{
            "onToggle-mobile-sidebar"?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "toggle-mobile-sidebar": () => any;
        }, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{
            "onToggle-mobile-sidebar"?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{
        "onToggle-mobile-sidebar"?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "toggle-mobile-sidebar": () => any;
    }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            right?: (props: {}) => any;
        };
    });
    tags: string[];
    argTypes: {
        showUtilities: {
            control: "boolean";
        };
        onToggleMobileSidebar: {
            action: string;
        };
    };
    args: {
        showUtilities: true;
        onToggleMobileSidebar: import('storybook/test').Mock<(...args: any[]) => any>;
    };
    render: (args: NavbarStoryArgs) => {
        components: {
            IconBell: import('@tabler/icons-vue').Icon;
            IconUser: import('@tabler/icons-vue').Icon;
            Navbar: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{
                    "onToggle-mobile-sidebar"?: (() => any) | undefined;
                }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                    "toggle-mobile-sidebar": () => any;
                }, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<{}> & Readonly<{
                    "onToggle-mobile-sidebar"?: (() => any) | undefined;
                }>, {}, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{
                "onToggle-mobile-sidebar"?: (() => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                "toggle-mobile-sidebar": () => any;
            }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    right?: (props: {}) => any;
                };
            });
        };
        setup(): {
            showUtilities: boolean;
            onToggleMobileSidebar: () => void;
        };
        template: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const EmptyUtilities: Story;
