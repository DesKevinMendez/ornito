<template>
  <thead class="bg-gray-50 dark:bg-gray-800/30">
    <tr>
      <th
        v-for="column in columns"
        :key="column.key"
        :style="{
          width: column.width ? (typeof column.width === 'number' ? `${column.width}px` : column.width) : 'auto',
          minWidth: column.width ? (typeof column.width === 'number' ? `${column.width}px` : column.width) : '150px',
          maxWidth: column.width ? (typeof column.width === 'number' ? `${column.width}px` : column.width) : 'none'
        }"
        class="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider overflow-hidden text-ellipsis"
      >
        {{ column.label }}
      </th>

      <!-- Fixed Actions Header -->
      <th
        v-if="showActions"
        style="width: 120px; min-width: 120px; max-width: 120px;"
        class="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider overflow-hidden text-ellipsis"
      >
        {{ actionsLabel || 'Actions' }}
      </th>
    </tr>
  </thead>
</template>

<script setup lang="ts">
import type { TableField } from '@/types/Table';

interface Props<T = any> {
  columns: TableField<T>[];
  showActions?: boolean;
  actionsLabel?: string;
}

defineProps<Props>();
</script>
