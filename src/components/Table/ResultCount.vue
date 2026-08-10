<template>
    <!-- Results Count -->
    <div class="mt-4 text-sm text-gray-600 dark:text-gray-400 tabular-nums">
        Mostrando {{ totalItems }} de
        {{ total }} resultados
    </div>
</template>

<script setup lang="ts">
import type { tApiPagination } from "@/types/api";

interface Props {
    internalPaginationServer: tApiPagination;
    totalItems: number;
}

const props = defineProps<Props>();

const total = computed(() => {
    return props.internalPaginationServer.total;
});
</script>

<style scoped></style>
