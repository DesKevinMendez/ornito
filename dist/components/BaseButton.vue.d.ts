import { RouteLocationRaw } from 'vue-router';
import { ButtonVariant } from '../types/Button';
interface Props {
    type?: "button" | "submit" | "reset";
    variant?: ButtonVariant;
    size?: "full" | "auto" | "small";
    icon?: any;
    iconPosition?: "left" | "right";
    iconClass?: string;
    disabled?: boolean;
    loading?: boolean;
    to?: string | RouteLocationRaw;
}
declare var __VLS_13: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_13) => any;
};
declare const __VLS_base: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    type: "button" | "submit" | "reset";
    variant: ButtonVariant;
    size: "full" | "auto" | "small";
    icon: any;
    iconPosition: "left" | "right";
    iconClass: string;
    disabled: boolean;
    loading: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
