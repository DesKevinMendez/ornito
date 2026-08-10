import { DropdownMenuItem } from '../../types/DropdownMenuItem';
interface Props {
    userName: string;
    userInitials: string;
    userRole: string;
    menuItems: DropdownMenuItem[];
    showNotifications?: boolean;
    unreadNotificationsCount?: number;
}
declare var __VLS_12: {}, __VLS_14: {};
type __VLS_Slots = {} & {
    notifications?: (props: typeof __VLS_12) => any;
} & {
    avatar?: (props: typeof __VLS_14) => any;
};
declare const __VLS_base: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "bell-click": () => any;
    "panel-open": () => any;
    "mark-all-read": () => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onBell-click"?: (() => any) | undefined;
    "onPanel-open"?: (() => any) | undefined;
    "onMark-all-read"?: (() => any) | undefined;
}>, {
    showNotifications: boolean;
    unreadNotificationsCount: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
