<template>
  <div :class="layoutClasses">
    <span class="text-base font-medium text-info-item-label-text-light dark:text-info-item-label-text-dark block mb-1">{{ label }}</span>
    <div class="text-info-item-value-text-light dark:text-info-item-value-text-dark text-base w-fit">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  column?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  column: true
});

const layoutClasses = computed(() => {
  if (!props.column) {
    return 'flex items-center space-x-2';
  }
  return '';
});
</script>
