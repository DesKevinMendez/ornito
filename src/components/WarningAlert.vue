<template>
  <div
    class="flex items-start gap-3 p-4 rounded-lg border border-warning-200 dark:border-warning-800 bg-warning-50 dark:bg-warning-500/15"
  >
    <IconAlertTriangle
      class="w-5 h-5 text-warning-600 dark:text-warning-400 flex-shrink-0 mt-0.5"
    />
    <div class="flex-1 text-sm text-warning-700 dark:text-warning-300">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconAlertTriangle } from "@tabler/icons-vue";
</script>

