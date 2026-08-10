<script setup lang="ts">
interface Props {
  title: string;
  value: string | number | null;
  change?: string | number;
  changeType?: 'positive' | 'negative' | 'neutral' | 'info';
  description?: string;
  help?: string;
}

const {
  title,
  value,
  change,
  changeType = 'neutral',
  description = '',
  help,
} = defineProps<Props>();

const isNull = computed(() => value === null)

const colorClass = computed(() => {
  switch (changeType) {
    case 'positive':
      return 'text-success-600 dark:text-success-400';
    case 'negative':
      return 'text-danger-600 dark:text-danger-400';
    case 'neutral':
      return 'text-warning-600 dark:text-warning-400';
    case 'info':
      return 'text-secondary-600 dark:text-secondary-400';
    default:
      return 'text-gray-600 dark:text-gray-400';
  }
});
</script>

<template>
  <Card>
    <div>
      <div class="flex items-center gap-1.5">
        <p class="text-sm font-medium text-gray-600 dark:text-gray-300">{{ title }}</p>
        <HelpTooltip v-if="help" :tooltip="help" />
      </div>
      <p v-if="isNull" class="text-2xl font-bold text-gray-400 dark:text-gray-500 mt-1">Sin datos</p>
      <p v-else class="text-2xl font-bold text-gray-900 dark:text-white mt-1 tabular-nums">{{ value }}</p>
    </div>
    <div v-if="change !== undefined || description" class="mt-4 flex items-center">
      <span v-if="change !== undefined" :class="['text-sm font-medium tabular-nums', colorClass]">
        {{ change }}
      </span>
      <span v-if="description" class="text-sm text-gray-500 dark:text-gray-400 ml-1">{{ description }}</span>
    </div>
  </Card>
</template>
