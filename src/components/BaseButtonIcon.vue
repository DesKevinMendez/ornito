<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="[
      'rounded-lg transition-all duration-200 cursor-pointer inline-flex items-center justify-center',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'focus:outline-none',
      'active:scale-95',
      sizeClasses,
      variantClasses,
    ]"
  >
    <svg
      v-if="loading"
      class="animate-spin"
      :class="[iconSizeClass, spinnerColorClass]"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
    <component v-else :is="icon" :class="iconSizeClass" />
  </button>
</template>

<script setup lang="ts">
import type { ButtonVariant } from "@/types/Button";

type Size = "sm" | "md" | "lg";

interface Props {
  icon: any;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
}

const { variant = "secondary", size = "md" } = defineProps<Props>();

const sizeClasses = computed((): string => {
  const map: Record<Size, string> = {
    sm: "p-1",
    md: "p-1.5",
    lg: "p-2",
  };
  return map[size];
});

const iconSizeClass = computed(() => {
  const map: Record<Size, string> = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };
  return map[size];
});

const variantClasses = computed((): string => {
  const map: Record<ButtonVariant, string> = {
    primary: "bg-button-primary-bg-light dark:bg-button-primary-bg-dark text-button-primary-text-light dark:text-button-primary-text-dark hover:bg-button-primary-bg-hover-light dark:hover:bg-button-primary-bg-hover-dark active:bg-button-primary-bg-active-light dark:active:bg-button-primary-bg-active-dark hover:text-button-primary-text-hover-light dark:hover:text-button-primary-text-hover-dark active:text-button-primary-text-active-light dark:active:text-button-primary-text-active-dark shadow-sm hover:shadow",
    secondary: "bg-button-secondary-bg-light dark:bg-button-secondary-bg-dark text-button-secondary-text-light dark:text-button-secondary-text-dark hover:bg-button-secondary-bg-hover-light dark:hover:bg-button-secondary-bg-hover-dark active:bg-button-secondary-bg-active-light dark:active:bg-button-secondary-bg-active-dark hover:text-button-secondary-text-hover-light dark:hover:text-button-secondary-text-hover-dark active:text-button-secondary-text-active-light dark:active:text-button-secondary-text-active-dark shadow-sm hover:shadow",
    outline: "border-2 border-button-outline-border-light dark:border-button-outline-border-dark bg-button-outline-bg-light dark:bg-button-outline-bg-dark text-button-outline-text-light dark:text-button-outline-text-dark hover:bg-button-outline-bg-hover-light dark:hover:bg-button-outline-bg-hover-dark active:bg-button-outline-bg-active-light dark:active:bg-button-outline-bg-active-dark hover:text-button-outline-text-hover-light dark:hover:text-button-outline-text-hover-dark active:text-button-outline-text-active-light dark:active:text-button-outline-text-active-dark",
    "primary-outline": "border-2 border-button-primary-outline-border-light dark:border-button-primary-outline-border-dark bg-button-primary-outline-bg-light dark:bg-button-primary-outline-bg-dark text-button-primary-outline-text-light dark:text-button-primary-outline-text-dark hover:bg-button-primary-outline-bg-hover-light dark:hover:bg-button-primary-outline-bg-hover-dark active:bg-button-primary-outline-bg-active-light dark:active:bg-button-primary-outline-bg-active-dark hover:text-button-primary-outline-text-hover-light dark:hover:text-button-primary-outline-text-hover-dark active:text-button-primary-outline-text-active-light dark:active:text-button-primary-outline-text-active-dark",
    danger: "bg-button-danger-bg-light dark:bg-button-danger-bg-dark text-button-danger-text-light dark:text-button-danger-text-dark hover:bg-button-danger-bg-hover-light dark:hover:bg-button-danger-bg-hover-dark active:bg-button-danger-bg-active-light dark:active:bg-button-danger-bg-active-dark hover:text-button-danger-text-hover-light dark:hover:text-button-danger-text-hover-dark active:text-button-danger-text-active-light dark:active:text-button-danger-text-active-dark focus:ring-button-danger-ring-focus-light dark:focus:ring-button-danger-ring-focus-dark shadow-sm hover:shadow",
    "danger-outline": "border-2 border-button-danger-outline-border-light dark:border-button-danger-outline-border-dark bg-button-danger-outline-bg-light dark:bg-button-danger-outline-bg-dark text-button-danger-outline-text-light dark:text-button-danger-outline-text-dark hover:bg-button-danger-outline-bg-hover-light dark:hover:bg-button-danger-outline-bg-hover-dark active:bg-button-danger-outline-bg-active-light dark:active:bg-button-danger-outline-bg-active-dark hover:text-button-danger-outline-text-hover-light dark:hover:text-button-danger-outline-text-hover-dark active:text-button-danger-outline-text-active-light dark:active:text-button-danger-outline-text-active-dark focus:ring-button-danger-ring-focus-light dark:focus:ring-button-danger-ring-focus-dark",
    overlay: "bg-button-overlay-bg-light dark:bg-button-overlay-bg-dark text-button-overlay-text-light dark:text-button-overlay-text-dark hover:bg-button-overlay-bg-hover-light dark:hover:bg-button-overlay-bg-hover-dark active:bg-button-overlay-bg-active-light dark:active:bg-button-overlay-bg-active-dark hover:text-button-overlay-text-hover-light dark:hover:text-button-overlay-text-hover-dark active:text-button-overlay-text-active-light dark:active:text-button-overlay-text-active-dark shadow-sm hover:shadow",
  };
  return map[variant];
});

const spinnerColorClass = computed(() => {
  const map: Record<ButtonVariant, string> = {
    primary: "text-button-icon-primary-spinner-text-light dark:text-button-icon-primary-spinner-text-dark",
    secondary: "text-button-icon-secondary-spinner-text-light dark:text-button-icon-secondary-spinner-text-dark",
    outline: "text-button-icon-outline-spinner-text-light dark:text-button-icon-outline-spinner-text-dark",
    "primary-outline": "text-button-icon-primary-outline-spinner-text-light dark:text-button-icon-primary-outline-spinner-text-dark",
    danger: "text-button-icon-danger-spinner-text-light dark:text-button-icon-danger-spinner-text-dark",
    "danger-outline": "text-button-icon-danger-outline-spinner-text-light dark:text-button-icon-danger-outline-spinner-text-dark",
    overlay: "text-button-icon-overlay-spinner-text-light dark:text-button-icon-overlay-spinner-text-dark",
  };
  return map[variant];
});
</script>
