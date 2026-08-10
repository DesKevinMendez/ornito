import { tApiPagination } from '../types/api';
interface Props {
    internalPaginationServer: tApiPagination;
}
declare const __VLS_export: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "page-change": (page: number) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onPage-change"?: ((page: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
