import { ButtonVariant } from '../types/Button';
type Size = "sm" | "md" | "lg";
interface Props {
    icon: any;
    type?: "button" | "submit" | "reset";
    variant?: ButtonVariant;
    size?: Size;
    disabled?: boolean;
    loading?: boolean;
}
declare const __VLS_export: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
