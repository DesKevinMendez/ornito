<template>
  <span
    :class="[
      'inline-flex items-center px-2.5 py-0.5 rounded-full font-medium tabular-nums',
      variantClasses,
      textClasses
    ]"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import type { BadgeVariant } from '@/types/Badge';

interface Props {
  variant: BadgeVariant;
  text?: 'xs' | 'sm' | 'base';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'neutral',
  text: 'base'
});

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'success':
      return 'bg-success-50 dark:bg-success-900/30 text-success-700 dark:text-success-400';
    case 'warning':
      return 'bg-warning-50 dark:bg-warning-900/30 text-warning-700 dark:text-warning-400';
    case 'danger':
      return 'bg-danger-50 dark:bg-danger-900/30 text-danger-700 dark:text-danger-400';
    case 'info':
      return 'bg-secondary-50 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400';
    case 'neutral':
    default:
      return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
  }
});

const textClasses = computed(() => {
  switch (props.text) {
    case 'xs':
      return 'text-xs';
    case 'sm':
      return 'text-sm';
    case 'base':
    default:
      return 'text-base';
  }
});
</script>
