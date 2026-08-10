interface MenuItem {
    action: string;
    label: string;
    icon?: any;
    variant?: "default" | "danger" | "success";
}
type __VLS_Props = {
    items: MenuItem[];
    ariaLabel?: string;
    position?: "bottom-left" | "bottom-right";
    buttonVariant?: "outline" | "secondary";
    icon?: any;
};
declare const __VLS_export: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (item: MenuItem) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((item: MenuItem) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
