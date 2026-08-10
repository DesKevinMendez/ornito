interface Tab {
    id: string;
    label: string;
}
interface Props {
    tabs: Tab[];
    modelValue?: number;
}
declare var __VLS_8: `tab-${number}`, __VLS_9: {
    activeTab: Tab;
    activeTabIndex: number;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_8>]?: (props: typeof __VLS_9) => any;
};
declare const __VLS_base: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: number) => any;
    change: (tab: Tab, index: number) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onChange?: ((tab: Tab, index: number) => any) | undefined;
}>, {
    modelValue: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
