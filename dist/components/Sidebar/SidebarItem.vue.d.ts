interface Props {
    to: string;
    name: string;
    icon: any;
    isCollapsed: boolean;
    hasExternalIcon?: boolean;
    hasBadge?: boolean;
    badgeText?: string;
    textFitContent?: boolean;
    showActiveBackground?: boolean;
    useExternalIndicator?: boolean;
}
declare const __VLS_export: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    hasExternalIcon: boolean;
    hasBadge: boolean;
    badgeText: string;
    textFitContent: boolean;
    showActiveBackground: boolean;
    useExternalIndicator: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
