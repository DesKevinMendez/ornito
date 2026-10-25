<template>
    <!-- Results Count -->
    <div class="text-sm text-table-footer-text-light dark:text-table-footer-text-dark tabular-nums">
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
