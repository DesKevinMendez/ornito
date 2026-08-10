<template>
  <RouterLink
    v-if="to"
    :to="to"
    class="w-full text-left px-4 py-2 text-sm transition-colors duration-150 flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/30 hover:text-gray-900 dark:hover:text-white"
    :class="{ 'bg-gray-100 dark:bg-gray-700/50 text-gray-900 dark:text-white': active }"
  >
    <component v-if="icon" :is="icon" class="w-4 h-4" />
    <span>{{ label }}</span>
  </RouterLink>
  <button
    v-else
    type="button"
    @click="handleClick"
    class="w-full text-left px-4 py-2 text-sm transition-colors duration-150 flex items-center space-x-2 cursor-pointer text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/30 hover:text-gray-900 dark:hover:text-white"
    :class="{ 'bg-gray-100 dark:bg-gray-700/50 text-gray-900 dark:text-white': active }"
  >
    <component v-if="icon" :is="icon" class="w-4 h-4" />
    <span>{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

interface Props {
  label: string;
  icon?: any;
  active?: boolean;
  to?: string;
}

const props = withDefaults(defineProps<Props>(), {
  active: false
});

const emit = defineEmits<{
  click: [value: string]
}>();

const handleClick = () => {
  emit('click', props.label);
};
</script>
