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
      return 'text-stat-card-change-positive-light dark:text-stat-card-change-positive-dark';
    case 'negative':
      return 'text-stat-card-change-negative-light dark:text-stat-card-change-negative-dark';
    case 'neutral':
      return 'text-stat-card-change-neutral-light dark:text-stat-card-change-neutral-dark';
    case 'info':
      return 'text-stat-card-change-info-light dark:text-stat-card-change-info-dark';
    default:
      return 'text-stat-card-change-neutral-light dark:text-stat-card-change-neutral-dark';
  }
});
</script>

<template>
  <Card>
    <div>
      <div class="flex items-center gap-1.5">
        <p class="text-sm font-medium text-stat-card-title-light dark:text-stat-card-title-dark">{{ title }}</p>
        <HelpTooltip v-if="help" :tooltip="help" />
      </div>
      <p v-if="isNull" class="text-2xl font-bold text-stat-card-empty-light dark:text-stat-card-empty-dark mt-1">Sin datos</p>
      <p v-else class="text-2xl font-bold text-stat-card-value-light dark:text-stat-card-value-dark mt-1 tabular-nums">{{ value }}</p>
    </div>
    <div v-if="change !== undefined || description" class="mt-4 flex items-center">
      <span v-if="change !== undefined" :class="['text-sm font-medium tabular-nums', colorClass]">
        {{ change }}
      </span>
      <span v-if="description" class="text-sm text-stat-card-description-light dark:text-stat-card-description-dark ml-1">{{ description }}</span>
    </div>
  </Card>
</template>
