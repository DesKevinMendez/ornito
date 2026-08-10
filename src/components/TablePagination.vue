<template>
  <div class="flex items-center justify-between">
    <!-- Page Info -->
    <div class="text-sm text-gray-600 dark:text-gray-400 tabular-nums">
      Página {{ internalPaginationServer.current_page }} de {{ internalPaginationServer.last_page }}
    </div>

    <!-- Pagination Buttons -->
    <div class="flex items-center space-x-2">
      <!-- Previous Button -->
      <BaseButton
            :disabled="internalPaginationServer.current_page === 1"
        variant="outline"
        size="auto"
        :small="true"
        :icon="IconChevronLeft"
        icon-class="h-4 w-4"
        class="px-2.5!"
        @click="goToPage(internalPaginationServer.current_page - 1)"
      />

      <!-- Page Numbers -->
      <div class="flex items-center space-x-1">
        <template v-for="page in visiblePages" :key="page">
          <BaseButton
            v-if="page !== -1"
            :variant="page === internalPaginationServer.current_page ? 'primary' : 'outline'"
            size="auto"
            :small="true"
            class="tabular-nums"
            @click="goToPage(page)"
          >
            {{ page }}
          </BaseButton>
          <span v-else class="px-2 text-gray-600 dark:text-gray-400">...</span>
        </template>
      </div>

      <!-- Next Button -->
      <BaseButton
        :disabled="internalPaginationServer.current_page === internalPaginationServer.last_page"
        variant="outline"
        size="auto"
        :small="true"
        :icon="IconChevronRight"
        icon-class="h-4 w-4"
        class="px-2.5!"
        @click="goToPage(internalPaginationServer.current_page + 1)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-vue';
import type { tApiPagination } from '@/types/api';

interface Props {
  internalPaginationServer: tApiPagination;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  'page-change': [page: number];
}>();

const visiblePages = computed(() => {
  const total = props.internalPaginationServer.last_page;
  const current = props.internalPaginationServer.current_page;
  const pages: number[] = [];

  if (total <= 7) {
    // Show all pages if total is 7 or less
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    // Show current page, 2 before, 2 after, and first/last
    const start = Math.max(1, current - 2);
    const end = Math.min(total, current + 2);

    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push(-1); // Ellipsis
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < total) {
      if (end < total - 1) pages.push(-1); // Ellipsis
      pages.push(total);
    }
  }

  return pages;
});

const goToPage = (page: number) => {
  if (page >= 1 && page <= props.internalPaginationServer.last_page) {
    emit('page-change', page);
  }
};
</script>
