import { inject } from 'vue'
import type { tApiPagination, tServerResponse } from '@/types/api'
import { useRequestKey } from './useDataRequest'

const refreshData = ref(false);
export default function () {
    const requestFactory = inject(useRequestKey);
    if (!requestFactory) {
        throw new Error(
            'useTable: no request instance provided. Call app.provide(useRequestKey, useRequest) in the consuming app.'
        );
    }
    const { get } = requestFactory();

    const isLoading = ref(false);
    const error = ref<string | null>(null);
    const internalData = ref<any[]>([]);
    const internalPaginationServer = ref<tApiPagination>({
        total: 0,
        per_page: 0,
        current_page: 1,
        from: 0,
        to: 0,
        last_page: 0,
    });

    const fetchData = async (
        url: string,
        currentPage: number,
        selectedPageSize: string,
        searchQuery?: string,
        searchBy?: string | string[]
    ) => {
        if (!url) return;

        isLoading.value = true;
        error.value = null;

        try {
            const separator = url.includes('?') ? '&' : '?';
            let apiUrl = url + `${separator}page=${currentPage}&per_page=${selectedPageSize}`;

            if (searchQuery && searchBy) {
                if (typeof searchBy === 'string') {
                    apiUrl += `&filter[${searchBy}]=${encodeURIComponent(searchQuery)}`;
                } else if (Array.isArray(searchBy)) {
                    searchBy.forEach(field => {
                        apiUrl += `&filter[${field}]=${encodeURIComponent(searchQuery)}`;
                    });
                }
            }

            const { data } = await get<tServerResponse<any>>(apiUrl);
            if (data.value) {
                internalData.value = data.value.data;
                internalPaginationServer.value = data.value.pagination;
            }
        } catch (err) {
            error.value = err instanceof Error ? err.message : "Error fetching data";
            console.error("Error fetching table data:", err);
            internalData.value = [];
        } finally {
            isLoading.value = false;
        }
    };

    const refreshTable = () => {
        refreshData.value = true;
        setTimeout(() => {
            refreshData.value = false;
        }, 200);
    };

    return {
        refreshData,
        isLoading,
        error,
        internalData,
        internalPaginationServer,
        fetchData,
        refreshTable,
    }
}
