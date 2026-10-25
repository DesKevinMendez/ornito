<template>
  <component
    :is="componentToRender"
    :to="to"
    :class="[
      'w-8 h-8 flex items-center justify-center transition-colors cursor-pointer',
      rounded ? 'rounded-full' : 'rounded-lg',
      colorClasses,
    ]"
  >
    <slot>
      <component :is="icon" class="w-4 h-4 " />
    </slot>
  </component>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { computed } from "vue";

interface Props {
  icon: any;
  color?: string;
  to?: string | object;
  rounded?: boolean;
  outline?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  color: "gray",
  rounded: false,
  outline: false,
});

const hasTo = computed(() => {
  return props.to !== undefined;
});

const componentToRender = computed(() => {
  if (hasTo.value) {
    return RouterLink;
  }
  return "button";
});

const colorClasses = computed(() => {
  const filledMap: Record<string, string> = {
    gray: "bg-icon-button-gray-bg-light hover:bg-icon-button-gray-bg-hover-light dark:bg-icon-button-gray-bg-dark dark:hover:bg-icon-button-gray-bg-hover-dark text-icon-button-gray-text-light dark:text-icon-button-gray-text-dark",
    primary: "bg-primary-600 hover:bg-primary-500 dark:bg-primary-700 dark:hover:bg-primary-600 text-white",
    secondary: "bg-secondary-600 hover:bg-secondary-500 dark:bg-secondary-700 dark:hover:bg-secondary-600 text-white",
    success: "bg-success-600 hover:bg-success-500 dark:bg-success-700 dark:hover:bg-success-600 text-white",
    green: "bg-success-600 hover:bg-success-500 dark:bg-success-700 dark:hover:bg-success-600 text-white",
    danger: "bg-danger-100 hover:bg-danger-200 dark:bg-danger-900/50 dark:hover:bg-danger-900/80 text-danger-700 dark:text-danger-200",
    red: "bg-danger-100 hover:bg-danger-200 dark:bg-danger-900/50 dark:hover:bg-danger-900/80 text-danger-700 dark:text-danger-200",
    warning: "bg-warning-600 hover:bg-warning-500 dark:bg-warning-700 dark:hover:bg-warning-600 text-white",
    yellow: "bg-warning-600 hover:bg-warning-500 dark:bg-warning-700 dark:hover:bg-warning-600 text-white",
    pink: "bg-icon-button-pink-bg-light hover:bg-icon-button-pink-bg-hover-light dark:bg-icon-button-pink-bg-dark dark:hover:bg-icon-button-pink-bg-hover-dark text-icon-button-pink-text-light dark:text-icon-button-pink-text-dark",
  };

  const outlineMap: Record<string, string> = {
    gray: "border border-input text-icon-button-gray-outline-text-light dark:text-icon-button-gray-outline-text-dark hover:bg-icon-button-gray-outline-bg-hover-light dark:hover:bg-icon-button-gray-outline-bg-hover-dark",
    primary: "border border-primary-subtle text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30",
    secondary: "border border-secondary text-secondary-600 dark:text-secondary-400 hover:bg-secondary-50 dark:hover:bg-secondary-900/30",
    success: "border border-success text-success-600 dark:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/30",
    green: "border border-success text-success-600 dark:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/30",
    danger: "border border-danger text-danger-600 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/30",
    red: "border border-danger text-danger-600 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/30",
    warning: "border border-warning text-warning-600 dark:text-warning-400 hover:bg-warning-50 dark:hover:bg-warning-900/30",
    yellow: "border border-warning text-warning-600 dark:text-warning-400 hover:bg-warning-50 dark:hover:bg-warning-900/30",
    pink: "border border-pink text-icon-button-pink-outline-text-light dark:text-icon-button-pink-outline-text-dark hover:bg-icon-button-pink-outline-bg-hover-light dark:hover:bg-icon-button-pink-outline-bg-hover-dark",
  };

  const map = props.outline ? outlineMap : filledMap;
  return map[props.color] || map.gray;
});
</script>
