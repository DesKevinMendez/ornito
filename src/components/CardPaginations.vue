<script setup lang="ts">
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-vue";
import type { tApiPagination } from "@/types/api";

interface Props {
  pagination: tApiPagination | null;
}

const { pagination } = defineProps<Props>();

const emit = defineEmits<{
  "page-change": [page: number];
}>();

const goToPage = (page: number) => {
  if (!pagination) return;
  if (page < 1 || page > pagination.last_page) return;
  emit("page-change", page);
};
</script>

<template>
  <div
    v-if="pagination && pagination.last_page > 1"
    class="flex items-center justify-between pt-4"
  >
    <p class="text-base text-gray-500 dark:text-gray-400 tabular-nums">
      Mostrando {{ pagination.from }}-{{ pagination.to }} de {{ pagination.total }}
    </p>
    <div class="flex items-center gap-2">
      <button
        type="button"
        :disabled="pagination.current_page === 1"
        class="w-8 h-8 flex items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-500 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
        @click="goToPage(pagination.current_page - 1)"
      >
        <IconChevronLeft class="w-4 h-4" />
      </button>
      <span class="text-base text-gray-700 dark:text-gray-300 tabular-nums">
        {{ pagination.current_page }} / {{ pagination.last_page }}
      </span>
      <button
        type="button"
        :disabled="pagination.current_page === pagination.last_page"
        class="w-8 h-8 flex items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-500 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
        @click="goToPage(pagination.current_page + 1)"
      >
        <IconChevronRight class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>
