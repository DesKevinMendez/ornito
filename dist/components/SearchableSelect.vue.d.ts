interface SelectItem {
    label: string;
    value: string | number;
    icon?: any;
    subtitles: string[];
}
interface Props {
    url: string;
    searchBy: string;
    placeholder?: string;
    leftIcon?: any;
    id?: string;
    name?: string;
    label?: string;
    rules?: any;
    small?: boolean;
    labelKey?: string;
    valueKey?: string;
    subtitleKey?: string | string[];
    disabled?: boolean;
    multiple?: boolean;
    localSearchFirst?: boolean;
}
type __VLS_Props = Props;
type __VLS_ModelProps = {
    modelValue?: string | number | (string | number)[] | undefined | null;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    data: (raw: any) => any;
    select: (item: SelectItem) => any;
    "update:modelValue": (value: string | number | (string | number)[] | null | undefined) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onData?: ((raw: any) => any) | undefined;
    onSelect?: ((item: SelectItem) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | (string | number)[] | null | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
