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
    "bg-btn-primary-light dark:bg-btn-primary-dark text-btn-primary-light dark:text-btn-primary-dark hover:bg-btn-primary-light-hover dark:hover:bg-btn-primary-dark-hover active:bg-btn-primary-light-active dark:active:bg-btn-primary-dark-active hover:text-btn-primary-light-hover dark:hover:text-btn-primary-dark-hover active:text-btn-primary-light-active dark:active:text-btn-primary-dark-active",
  secondary:
    "bg-btn-secondary-light dark:bg-btn-secondary-dark text-btn-secondary-light dark:text-btn-secondary-dark hover:bg-btn-secondary-light-hover dark:hover:bg-btn-secondary-dark-hover active:bg-btn-secondary-light-active dark:active:bg-btn-secondary-dark-active hover:text-btn-secondary-light-hover dark:hover:text-btn-secondary-dark-hover active:text-btn-secondary-light-active dark:active:text-btn-secondary-dark-active",
  outline:
    "border border-btn-outline-light dark:border-btn-outline-dark bg-btn-outline-light dark:bg-btn-outline-dark text-btn-outline-light dark:text-btn-outline-dark hover:bg-btn-outline-light-hover dark:hover:bg-btn-outline-dark-hover active:bg-btn-outline-light-active dark:active:bg-btn-outline-dark-active hover:text-btn-outline-light-hover dark:hover:text-btn-outline-dark-hover active:text-btn-outline-light-active dark:active:text-btn-outline-dark-active",
  "primary-outline":
    "border border-btn-primary-outline-light dark:border-btn-primary-outline-dark bg-btn-primary-outline-light dark:bg-btn-primary-outline-dark text-btn-primary-outline-light dark:text-btn-primary-outline-dark hover:bg-btn-primary-outline-light-hover dark:hover:bg-btn-primary-outline-dark-hover active:bg-btn-primary-outline-light-active dark:active:bg-btn-primary-outline-dark-active hover:text-btn-primary-outline-light-hover dark:hover:text-btn-primary-outline-dark-hover active:text-btn-primary-outline-light-active dark:active:text-btn-primary-outline-dark-active",
  danger:
    "bg-btn-danger-light dark:bg-btn-danger-dark text-btn-danger-light dark:text-btn-danger-dark hover:bg-btn-danger-light-hover dark:hover:bg-btn-danger-dark-hover active:bg-btn-danger-light-active dark:active:bg-btn-danger-dark-active hover:text-btn-danger-light-hover dark:hover:text-btn-danger-dark-hover active:text-btn-danger-light-active dark:active:text-btn-danger-dark-active",
  "danger-outline":
    "border border-btn-danger-outline-light dark:border-btn-danger-outline-dark bg-btn-danger-outline-light dark:bg-btn-danger-outline-dark text-btn-danger-outline-light dark:text-btn-danger-outline-dark hover:bg-btn-danger-outline-light-hover dark:hover:bg-btn-danger-outline-dark-hover active:bg-btn-danger-outline-light-active dark:active:bg-btn-danger-outline-dark-active hover:text-btn-danger-outline-light-hover dark:hover:text-btn-danger-outline-dark-hover active:text-btn-danger-outline-light-active dark:active:text-btn-danger-outline-dark-active",
  overlay:
    "bg-btn-overlay-light dark:bg-btn-overlay-dark text-btn-overlay-light dark:text-btn-overlay-dark hover:bg-btn-overlay-light-hover dark:hover:bg-btn-overlay-dark-hover active:bg-btn-overlay-light-active dark:active:bg-btn-overlay-dark-active hover:text-btn-overlay-light-hover dark:hover:text-btn-overlay-dark-hover active:text-btn-overlay-light-active dark:active:text-btn-overlay-dark-active text-sm",
};

const variantClasses = computed(() => variantClassMap[props.variant]);
const spinnerColorClass = computed(() => {
  const textClassMap: Record<ButtonVariant, string> = {
    primary: "text-btn-primary-light dark:text-btn-primary-dark",
    secondary: "text-btn-secondary-light dark:text-btn-secondary-dark",
    outline: "text-btn-outline-light dark:text-btn-outline-dark",
    "primary-outline": "text-btn-primary-outline-light dark:text-btn-primary-outline-dark",
    danger: "text-btn-danger-light dark:text-btn-danger-dark",
    "danger-outline": "text-btn-danger-outline-light dark:text-btn-danger-outline-dark",
    overlay: "text-btn-overlay-light dark:text-btn-overlay-dark",
  };
  return textClassMap[props.variant];
});
</script>
