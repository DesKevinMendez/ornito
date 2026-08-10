<template>
  <div>
    <!-- Top Section -->
    <div class="flex items-start justify-between gap-4 flex-col md:flex-row">
      <!-- Left Header -->
      <div class="space-y-2">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{{ title }}</h1>
        <div class="flex space-x-2 justify-start flex-col gap-3 md:gap-0 md:flex-row items-center">
          <span class="text-gray-600 dark:text-gray-400 text-sm">{{ subtitle }}</span>
          <Badge v-if="badgeText" variant="neutral" text="sm">
            {{ badgeText }}
          </Badge>
        </div>
      </div>

      <!-- Filter/Sort Options -->
      <div class="flex items-center space-x-3">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface ViewHeaderProps {
  subtitle: string;
  title: string;
  badgeText?: string;
}

defineProps<ViewHeaderProps>();
</script>
