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
    primary: "bg-icon-button-primary-bg-light hover:bg-icon-button-primary-bg-hover-light dark:bg-icon-button-primary-bg-dark dark:hover:bg-icon-button-primary-bg-hover-dark text-icon-button-primary-text-light dark:text-icon-button-primary-text-dark",
    secondary: "bg-icon-button-secondary-bg-light hover:bg-icon-button-secondary-bg-hover-light dark:bg-icon-button-secondary-bg-dark dark:hover:bg-icon-button-secondary-bg-hover-dark text-icon-button-secondary-text-light dark:text-icon-button-secondary-text-dark",
    success: "bg-icon-button-success-bg-light hover:bg-icon-button-success-bg-hover-light dark:bg-icon-button-success-bg-dark dark:hover:bg-icon-button-success-bg-hover-dark text-icon-button-success-text-light dark:text-icon-button-success-text-dark",
    green: "bg-icon-button-success-bg-light hover:bg-icon-button-success-bg-hover-light dark:bg-icon-button-success-bg-dark dark:hover:bg-icon-button-success-bg-hover-dark text-icon-button-success-text-light dark:text-icon-button-success-text-dark",
    danger: "bg-icon-button-danger-bg-light hover:bg-icon-button-danger-bg-hover-light dark:bg-icon-button-danger-bg-dark dark:hover:bg-icon-button-danger-bg-hover-dark text-icon-button-danger-text-light dark:text-icon-button-danger-text-dark",
    red: "bg-icon-button-danger-bg-light hover:bg-icon-button-danger-bg-hover-light dark:bg-icon-button-danger-bg-dark dark:hover:bg-icon-button-danger-bg-hover-dark text-icon-button-danger-text-light dark:text-icon-button-danger-text-dark",
    warning: "bg-icon-button-warning-bg-light hover:bg-icon-button-warning-bg-hover-light dark:bg-icon-button-warning-bg-dark dark:hover:bg-icon-button-warning-bg-hover-dark text-icon-button-warning-text-light dark:text-icon-button-warning-text-dark",
    yellow: "bg-icon-button-warning-bg-light hover:bg-icon-button-warning-bg-hover-light dark:bg-icon-button-warning-bg-dark dark:hover:bg-icon-button-warning-bg-hover-dark text-icon-button-warning-text-light dark:text-icon-button-warning-text-dark",
    pink: "bg-icon-button-pink-bg-light hover:bg-icon-button-pink-bg-hover-light dark:bg-icon-button-pink-bg-dark dark:hover:bg-icon-button-pink-bg-hover-dark text-icon-button-pink-text-light dark:text-icon-button-pink-text-dark",
  };

  const outlineMap: Record<string, string> = {
    gray: "border border-icon-button-gray-outline-border-light dark:border-icon-button-gray-outline-border-dark text-icon-button-gray-outline-text-light dark:text-icon-button-gray-outline-text-dark hover:bg-icon-button-gray-outline-bg-hover-light dark:hover:bg-icon-button-gray-outline-bg-hover-dark",
    primary: "border border-icon-button-primary-outline-border-light dark:border-icon-button-primary-outline-border-dark text-icon-button-primary-outline-text-light dark:text-icon-button-primary-outline-text-dark hover:bg-icon-button-primary-outline-bg-hover-light dark:hover:bg-icon-button-primary-outline-bg-hover-dark",
    secondary: "border border-icon-button-secondary-outline-border-light dark:border-icon-button-secondary-outline-border-dark text-icon-button-secondary-outline-text-light dark:text-icon-button-secondary-outline-text-dark hover:bg-icon-button-secondary-outline-bg-hover-light dark:hover:bg-icon-button-secondary-outline-bg-hover-dark",
    success: "border border-icon-button-success-outline-border-light dark:border-icon-button-success-outline-border-dark text-icon-button-success-outline-text-light dark:text-icon-button-success-outline-text-dark hover:bg-icon-button-success-outline-bg-hover-light dark:hover:bg-icon-button-success-outline-bg-hover-dark",
    green: "border border-icon-button-success-outline-border-light dark:border-icon-button-success-outline-border-dark text-icon-button-success-outline-text-light dark:text-icon-button-success-outline-text-dark hover:bg-icon-button-success-outline-bg-hover-light dark:hover:bg-icon-button-success-outline-bg-hover-dark",
    danger: "border border-icon-button-danger-outline-border-light dark:border-icon-button-danger-outline-border-dark text-icon-button-danger-outline-text-light dark:text-icon-button-danger-outline-text-dark hover:bg-icon-button-danger-outline-bg-hover-light dark:hover:bg-icon-button-danger-outline-bg-hover-dark",
    red: "border border-icon-button-danger-outline-border-light dark:border-icon-button-danger-outline-border-dark text-icon-button-danger-outline-text-light dark:text-icon-button-danger-outline-text-dark hover:bg-icon-button-danger-outline-bg-hover-light dark:hover:bg-icon-button-danger-outline-bg-hover-dark",
    warning: "border border-icon-button-warning-outline-border-light dark:border-icon-button-warning-outline-border-dark text-icon-button-warning-outline-text-light dark:text-icon-button-warning-outline-text-dark hover:bg-icon-button-warning-outline-bg-hover-light dark:hover:bg-icon-button-warning-outline-bg-hover-dark",
    yellow: "border border-icon-button-warning-outline-border-light dark:border-icon-button-warning-outline-border-dark text-icon-button-warning-outline-text-light dark:text-icon-button-warning-outline-text-dark hover:bg-icon-button-warning-outline-bg-hover-light dark:hover:bg-icon-button-warning-outline-bg-hover-dark",
    pink: "border border-icon-button-pink-outline-border-light dark:border-icon-button-pink-outline-border-dark text-icon-button-pink-outline-text-light dark:text-icon-button-pink-outline-text-dark hover:bg-icon-button-pink-outline-bg-hover-light dark:hover:bg-icon-button-pink-outline-bg-hover-dark",
  };

  const map = props.outline ? outlineMap : filledMap;
  return map[props.color] || map.gray;
});
</script>
