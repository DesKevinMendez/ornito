<template>
  <RouterLink
    v-if="to"
    :to="to"
    class="w-full text-left px-4 py-2 text-sm transition-colors duration-150 flex items-center space-x-2 text-dropdown-item-text-light dark:text-dropdown-item-text-dark hover:bg-dropdown-item-hover-bg-light dark:hover:bg-dropdown-item-hover-bg-dark hover:text-dropdown-item-hover-text-light dark:hover:text-dropdown-item-hover-text-dark"
    :class="{ 'bg-dropdown-item-active-bg-light dark:bg-dropdown-item-active-bg-dark text-dropdown-item-active-text-light dark:text-dropdown-item-active-text-dark': active }"
  >
    <component v-if="icon" :is="icon" class="w-4 h-4" />
    <span>{{ label }}</span>
  </RouterLink>
  <button
    v-else
    type="button"
    @click="handleClick"
    class="w-full text-left px-4 py-2 text-sm transition-colors duration-150 flex items-center space-x-2 cursor-pointer text-dropdown-item-text-light dark:text-dropdown-item-text-dark hover:bg-dropdown-item-hover-bg-light dark:hover:bg-dropdown-item-hover-bg-dark hover:text-dropdown-item-hover-text-light dark:hover:text-dropdown-item-hover-text-dark"
    :class="{ 'bg-dropdown-item-active-bg-light dark:bg-dropdown-item-active-bg-dark text-dropdown-item-active-text-light dark:text-dropdown-item-active-text-dark': active }"
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
