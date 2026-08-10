import { tApiPagination } from '../types/api';
export default function (): {
    refreshData: globalThis.Ref<boolean, boolean>;
    isLoading: globalThis.Ref<boolean, boolean>;
    error: globalThis.Ref<string | null, string | null>;
    internalData: globalThis.Ref<any[], any[]>;
    internalPaginationServer: globalThis.Ref<{
        total: number;
        per_page: number;
        current_page: number;
        from: number;
        to: number;
        last_page: number;
    }, tApiPagination | {
        total: number;
        per_page: number;
        current_page: number;
        from: number;
        to: number;
        last_page: number;
    }>;
    fetchData: (url: string, currentPage: number, selectedPageSize: string, searchQuery?: string, searchBy?: string | string[]) => Promise<void>;
    refreshTable: () => void;
};
