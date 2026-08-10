interface Props {
    title: string;
    value: string | number | null;
    change?: string | number;
    changeType?: 'positive' | 'negative' | 'neutral' | 'info';
    description?: string;
    help?: string;
}
declare const __VLS_export: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
