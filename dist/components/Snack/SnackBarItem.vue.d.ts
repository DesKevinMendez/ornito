declare const __VLS_export: import('vue').DefineComponent<globalThis.ExtractPropTypes<{
    message: {
        type: ObjectConstructor;
        required: true;
        validator: (value: {
            text: string;
        }) => boolean;
    };
    error: {
        type: BooleanConstructor;
        required: true;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    cancel: (...args: any[]) => void;
    expired: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<{
    message: {
        type: ObjectConstructor;
        required: true;
        validator: (value: {
            text: string;
        }) => boolean;
    };
    error: {
        type: BooleanConstructor;
        required: true;
    };
}>> & Readonly<{
    onCancel?: ((...args: any[]) => any) | undefined;
    onExpired?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
