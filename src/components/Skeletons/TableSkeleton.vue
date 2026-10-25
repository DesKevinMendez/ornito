<template>
    <tbody class="bg-table-body-bg-light dark:bg-table-body-bg-dark divide-y divide-default animate-pulse">
        <tr
            v-for="row in rows"
            :key="row"
            class="hover:bg-table-body-hover-bg-light dark:hover:bg-table-body-hover-bg-dark transition-colors duration-200"
        >
            <td
                v-for="(_, colIndex) in columns"
                :key="colIndex"
                class="px-6 py-4 whitespace-nowrap text-sm text-table-body-text-light dark:text-table-body-text-dark overflow-hidden text-ellipsis"
            >
                <div
                    class="h-4 bg-table-skeleton-placeholder-bg-light dark:bg-table-skeleton-placeholder-bg-dark rounded"
                    :style="{ width: getRandomWidth() }"
                />
            </td>

            <!-- Fixed Actions Column Skeleton -->
            <td
                v-if="showActions"
                style="width: 120px; min-width: 120px; max-width: 120px;"
                class="px-6 py-4 whitespace-nowrap text-sm text-table-body-text-light dark:text-table-body-text-dark overflow-hidden text-ellipsis"
            >
                <div class="h-4 bg-table-skeleton-placeholder-bg-light dark:bg-table-skeleton-placeholder-bg-dark rounded w-16" />
            </td>
        </tr>
    </tbody>
</template>

<script setup lang="ts">
import type { TableField } from '@/types/Table';

interface Props {
    rows?: number;
    columns: TableField<any>[];
    showActions?: boolean;
}

withDefaults(defineProps<Props>(), {
    rows: 10,
});

// Generate random widths for more realistic skeleton
const getRandomWidth = (): string => {
    const widths = ["50%", "65%", "75%", "85%", "95%", "100%"];
    return widths[Math.floor(Math.random() * widths.length)];
};
</script>
