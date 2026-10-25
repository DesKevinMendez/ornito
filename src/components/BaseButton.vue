<template>
  <component
    :is="componentToRender"
    :to="to"
    :type="type"
    :disabled="disabled || loading"
    :class="[
      'rounded-lg font-medium transition-all duration-200 relative cursor-pointer',
      'disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2',
      'focus:outline-none',
      'active:scale-95 shadow-sm hover:shadow',
      size === 'full' && 'w-full',
      size === 'auto' && 'w-auto',
      size === 'small' && 'text-sm',
      variantClasses,
    ]"
  >
    <div class="flex items-center justify-center relative">
      <!-- Loading spinner -->
      <svg
        v-if="loading"
        class="animate-spin h-4 w-4 transition-all duration-300 ease-in-out mr-2"
        :class="spinnerColorClass"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <!-- Button content -->
      <div class="flex items-center space-x-2">
        <component
          v-if="icon && !loading && iconPosition !== 'right'"
          :is="icon"
          :class="['h-5 w-5', $slots.default ? 'mr-2' : '', iconClass]"
        />
        <slot />
        <component
          v-if="icon && !loading && iconPosition === 'right'"
          :is="icon"
          :class="['h-5 w-5', iconClass]"
        />
      </div>
    </div>
  </component>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { RouteLocationRaw } from 'vue-router';
import type { ButtonVariant } from "@/types/Button";

interface Props {
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  size?: "full" | "auto" | "small";
  icon?: any;
  iconPosition?: "left" | "right";
  iconClass?: string;
  disabled?: boolean;
  loading?: boolean;
  to?: string | RouteLocationRaw;
}

const props = withDefaults(defineProps<Props>(), {
  type: "button",
  variant: "primary",
  size: "full",
  icon: null,
  iconPosition: "left",
  iconClass: "",
  disabled: false,
  loading: false,
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

const variantClassMap: Record<ButtonVariant, string> = {
  primary:
    "bg-button-primary-bg-light dark:bg-button-primary-bg-dark text-button-primary-text-light dark:text-button-primary-text-dark hover:bg-button-primary-bg-hover-light dark:hover:bg-button-primary-bg-hover-dark active:bg-button-primary-bg-active-light dark:active:bg-button-primary-bg-active-dark hover:text-button-primary-text-hover-light dark:hover:text-button-primary-text-hover-dark active:text-button-primary-text-active-light dark:active:text-button-primary-text-active-dark",
  secondary:
    "bg-button-secondary-bg-light dark:bg-button-secondary-bg-dark text-button-secondary-text-light dark:text-button-secondary-text-dark hover:bg-button-secondary-bg-hover-light dark:hover:bg-button-secondary-bg-hover-dark active:bg-button-secondary-bg-active-light dark:active:bg-button-secondary-bg-active-dark hover:text-button-secondary-text-hover-light dark:hover:text-button-secondary-text-hover-dark active:text-button-secondary-text-active-light dark:active:text-button-secondary-text-active-dark",
  outline:
    "border border-button-outline-border-light dark:border-button-outline-border-dark bg-button-outline-bg-light dark:bg-button-outline-bg-dark text-button-outline-text-light dark:text-button-outline-text-dark hover:bg-button-outline-bg-hover-light dark:hover:bg-button-outline-bg-hover-dark active:bg-button-outline-bg-active-light dark:active:bg-button-outline-bg-active-dark hover:text-button-outline-text-hover-light dark:hover:text-button-outline-text-hover-dark active:text-button-outline-text-active-light dark:active:text-button-outline-text-active-dark",
  "primary-outline":
    "border border-button-primary-outline-border-light dark:border-button-primary-outline-border-dark bg-button-primary-outline-bg-light dark:bg-button-primary-outline-bg-dark text-button-primary-outline-text-light dark:text-button-primary-outline-text-dark hover:bg-button-primary-outline-bg-hover-light dark:hover:bg-button-primary-outline-bg-hover-dark active:bg-button-primary-outline-bg-active-light dark:active:bg-button-primary-outline-bg-active-dark hover:text-button-primary-outline-text-hover-light dark:hover:text-button-primary-outline-text-hover-dark active:text-button-primary-outline-text-active-light dark:active:text-button-primary-outline-text-active-dark",
  danger:
    "bg-button-danger-bg-light dark:bg-button-danger-bg-dark text-button-danger-text-light dark:text-button-danger-text-dark hover:bg-button-danger-bg-hover-light dark:hover:bg-button-danger-bg-hover-dark active:bg-button-danger-bg-active-light dark:active:bg-button-danger-bg-active-dark hover:text-button-danger-text-hover-light dark:hover:text-button-danger-text-hover-dark active:text-button-danger-text-active-light dark:active:text-button-danger-text-active-dark",
  "danger-outline":
    "border border-button-danger-outline-border-light dark:border-button-danger-outline-border-dark bg-button-danger-outline-bg-light dark:bg-button-danger-outline-bg-dark text-button-danger-outline-text-light dark:text-button-danger-outline-text-dark hover:bg-button-danger-outline-bg-hover-light dark:hover:bg-button-danger-outline-bg-hover-dark active:bg-button-danger-outline-bg-active-light dark:active:bg-button-danger-outline-bg-active-dark hover:text-button-danger-outline-text-hover-light dark:hover:text-button-danger-outline-text-hover-dark active:text-button-danger-outline-text-active-light dark:active:text-button-danger-outline-text-active-dark",
  overlay:
    "bg-button-overlay-bg-light dark:bg-button-overlay-bg-dark text-button-overlay-text-light dark:text-button-overlay-text-dark hover:bg-button-overlay-bg-hover-light dark:hover:bg-button-overlay-bg-hover-dark active:bg-button-overlay-bg-active-light dark:active:bg-button-overlay-bg-active-dark hover:text-button-overlay-text-hover-light dark:hover:text-button-overlay-text-hover-dark active:text-button-overlay-text-active-light dark:active:text-button-overlay-text-active-dark text-sm",
};

const variantClasses = computed(() => variantClassMap[props.variant]);
const spinnerColorClass = computed(() => {
  const textClassMap: Record<ButtonVariant, string> = {
    primary: "text-button-primary-spinner-text-light dark:text-button-primary-spinner-text-dark",
    secondary: "text-button-secondary-spinner-text-light dark:text-button-secondary-spinner-text-dark",
    outline: "text-button-outline-spinner-text-light dark:text-button-outline-spinner-text-dark",
    "primary-outline": "text-button-primary-outline-spinner-text-light dark:text-button-primary-outline-spinner-text-dark",
    danger: "text-button-danger-spinner-text-light dark:text-button-danger-spinner-text-dark",
    "danger-outline": "text-button-danger-outline-spinner-text-light dark:text-button-danger-outline-spinner-text-dark",
    overlay: "text-button-overlay-spinner-text-light dark:text-button-overlay-spinner-text-dark",
  };
  return textClassMap[props.variant];
});
</script>
