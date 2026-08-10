<template>
  <div :class="layoutClasses">
    <span class="text-base font-medium text-gray-600 dark:text-gray-400 block mb-1">{{ label }}</span>
    <div class="text-gray-900 dark:text-white text-base w-fit">
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
