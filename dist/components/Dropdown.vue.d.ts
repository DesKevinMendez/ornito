interface DropdownItem {
    label: string;
    value: string;
    icon?: any;
}
interface Props {
    items: DropdownItem[];
    placeholder?: string;
    triggerVariant?: 'primary' | 'secondary' | 'outline';
    triggerSize?: 'full' | 'auto';
    triggerSmall?: boolean;
    position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
}
type __VLS_Props = Props;
type __VLS_ModelProps = {
    modelValue?: string;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | undefined) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | undefined) => any) | undefined;
}>, {
    placeholder: string;
    triggerVariant: "primary" | "secondary" | "outline";
    triggerSize: "full" | "auto";
    triggerSmall: boolean;
    position: "bottom-left" | "bottom-right" | "top-left" | "top-right";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
