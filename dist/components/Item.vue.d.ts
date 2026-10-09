import { Component } from 'vue';
import { ItemId } from '../types/Item';
interface Props {
    title: string;
    subtitle?: string;
    image?: string;
    imageAlt?: string;
    icon?: Component;
    border?: boolean;
    hoverable?: boolean;
    clickable?: boolean;
    id?: ItemId;
}
declare var __VLS_10: {}, __VLS_12: {}, __VLS_14: {}, __VLS_16: {};
type __VLS_Slots = {} & {
    image?: (props: typeof __VLS_10) => any;
} & {
    title?: (props: typeof __VLS_12) => any;
} & {
    subtitle?: (props: typeof __VLS_14) => any;
} & {
    icon?: (props: typeof __VLS_16) => any;
};
declare const __VLS_base: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (id: ItemId | undefined) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClick?: ((id: ItemId | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
