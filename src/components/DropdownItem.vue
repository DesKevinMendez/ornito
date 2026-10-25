<template>
  <RouterLink
    v-if="to"
    :to="to"
    class="w-full text-left px-4 py-2 text-sm transition-colors duration-150 flex items-center space-x-2 hover:bg-dropdown-item-bg-hover-light dark:hover:bg-dropdown-item-bg-hover-dark hover:text-dropdown-item-text-hover-light dark:hover:text-dropdown-item-text-hover-dark"
    :class="stateClasses"
  >
    <component v-if="icon" :is="icon" class="w-4 h-4" />
    <span>{{ label }}</span>
  </RouterLink>
  <button
    v-else
    type="button"
    @click="handleClick"
    class="w-full text-left px-4 py-2 text-sm transition-colors duration-150 flex items-center space-x-2 cursor-pointer hover:bg-dropdown-item-bg-hover-light dark:hover:bg-dropdown-item-bg-hover-dark hover:text-dropdown-item-text-hover-light dark:hover:text-dropdown-item-text-hover-dark"
    :class="stateClasses"
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

// Base and active text colors are exclusive so the active color never depends on utility order.
const stateClasses = computed(() =>
  props.active
    ? 'bg-dropdown-item-bg-active-light dark:bg-dropdown-item-bg-active-dark text-dropdown-item-text-active-light dark:text-dropdown-item-text-active-dark'
    : 'text-dropdown-item-text-light dark:text-dropdown-item-text-dark'
);

const emit = defineEmits<{
  click: [value: string]
}>();

const handleClick = () => {
  emit('click', props.label);
};
</script>
