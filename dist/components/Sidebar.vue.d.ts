import { RoutesLink } from '../types/RoutesLink';
interface Props {
    isCollapsed: boolean;
    logo: string;
    title: string;
    subtitle: string;
    version: string;
    menuItems: RoutesLink[];
}
declare const __VLS_export: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => any;
    "toggle-collapse": () => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClose?: (() => any) | undefined;
    "onToggle-collapse"?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
