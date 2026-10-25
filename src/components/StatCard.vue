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
      return 'text-stat-card-change-positive-text-light dark:text-stat-card-change-positive-text-dark';
    case 'negative':
      return 'text-stat-card-change-negative-text-light dark:text-stat-card-change-negative-text-dark';
    case 'neutral':
      return 'text-stat-card-change-neutral-text-light dark:text-stat-card-change-neutral-text-dark';
    case 'info':
      return 'text-stat-card-change-info-text-light dark:text-stat-card-change-info-text-dark';
    default:
      return 'text-stat-card-change-default-text-light dark:text-stat-card-change-default-text-dark';
  }
});
</script>

<template>
  <Card>
    <div>
      <div class="flex items-center gap-1.5">
        <p class="text-sm font-medium text-stat-card-title-text-light dark:text-stat-card-title-text-dark">{{ title }}</p>
        <HelpTooltip v-if="help" :tooltip="help" />
      </div>
      <p v-if="isNull" class="text-2xl font-bold text-stat-card-empty-text-light dark:text-stat-card-empty-text-dark mt-1">Sin datos</p>
      <p v-else class="text-2xl font-bold text-stat-card-value-text-light dark:text-stat-card-value-text-dark mt-1 tabular-nums">{{ value }}</p>
    </div>
    <div v-if="change !== undefined || description" class="mt-4 flex items-center">
      <span v-if="change !== undefined" :class="['text-sm font-medium tabular-nums', colorClass]">
        {{ change }}
      </span>
      <span v-if="description" class="text-sm text-stat-card-description-text-light dark:text-stat-card-description-text-dark ml-1">{{ description }}</span>
    </div>
  </Card>
</template>
