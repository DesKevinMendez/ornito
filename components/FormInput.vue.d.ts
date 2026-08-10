interface Props {
    label: string;
    id: string;
    name: string;
    type?: "text" | "email" | "password" | "tel" | "date" | "datetime" | "time" | "number" | "money" | "range";
    placeholder?: string;
    leftIcon?: any;
    rightIcon?: any;
    rules?: any;
    small?: boolean;
    min?: number | string;
    max?: number | string;
    step?: number | string;
    mask?: string;
    help?: string;
    url?: string;
    searchBy?: string;
    labelKey?: string;
    valueKey?: string;
    subtitleKey?: string | string[];
    disabled?: boolean;
    loading?: boolean;
    minDate?: Date | string | null;
    maxDate?: Date | string | null;
    autocomplete?: string;
    disabledDates?: Date[] | string[] | ((date: Date) => boolean);
}
type __VLS_Props = Props;
type __VLS_ModelProps = {
    modelValue: string | number | undefined | null;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | null | undefined) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | null | undefined) => any) | undefined;
}>, {
    type: "text" | "email" | "password" | "tel" | "date" | "datetime" | "time" | "number" | "money" | "range";
    placeholder: string;
    autocomplete: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
