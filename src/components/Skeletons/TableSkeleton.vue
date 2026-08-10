<template>
    <tbody class="bg-white dark:bg-gray-800/20 divide-y divide-gray-200 dark:divide-gray-700 animate-pulse">
        <tr
            v-for="row in rows"
            :key="row"
            class="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-200"
        >
            <td
                v-for="(_, colIndex) in columns"
                :key="colIndex"
                class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300 overflow-hidden text-ellipsis"
            >
                <div
                    class="h-4 bg-gray-200 dark:bg-gray-700 rounded"
                    :style="{ width: getRandomWidth() }"
                />
            </td>

            <!-- Fixed Actions Column Skeleton -->
            <td
                v-if="showActions"
                style="width: 120px; min-width: 120px; max-width: 120px;"
                class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300 overflow-hidden text-ellipsis"
            >
                <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16" />
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
