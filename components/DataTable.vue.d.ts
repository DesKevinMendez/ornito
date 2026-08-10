import { TableField } from '../types/Table';
interface Props<T = any> {
    columns: TableField<T>[];
    data?: T[];
    url?: string;
    showSearch?: boolean;
    searchPlaceholder?: string;
    actionsLabel?: string;
    searchBy?: string[] | string;
}
type __VLS_Props = Props;
declare var __VLS_22: string, __VLS_23: {
    row: any;
    value: any;
}, __VLS_25: {
    row: any;
}, __VLS_28: string, __VLS_29: {
    row: any;
    value: any;
}, __VLS_31: {
    row: any;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_22>]?: (props: typeof __VLS_23) => any;
} & {
    [K in NonNullable<typeof __VLS_28>]?: (props: typeof __VLS_29) => any;
} & {
    actions?: (props: typeof __VLS_25) => any;
} & {
    actions?: (props: typeof __VLS_31) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "row-selected": (...args: any[]) => void;
    "pagination-loaded": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onRow-selected"?: ((...args: any[]) => any) | undefined;
    "onPagination-loaded"?: ((...args: any[]) => any) | undefined;
}>, {
    data: any[];
    actionsLabel: string;
    showSearch: boolean;
    searchPlaceholder: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
