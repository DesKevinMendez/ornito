interface Props {
    label: string;
    id: string;
    name: string;
    placeholder?: string;
    rules?: any;
    small?: boolean;
    rows?: number;
    maxLength?: number;
}
type __VLS_Props = Props;
type __VLS_ModelProps = {
    modelValue: string | undefined | null;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | null | undefined) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | null | undefined) => any) | undefined;
}>, {
    placeholder: string;
    rows: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
