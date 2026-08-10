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
      :class="[iconSizeClass, variant === 'primary' || variant === 'danger' ? 'text-white' : 'text-gray-900 dark:text-white']"
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
    primary: "bg-primary-600 dark:bg-primary-500 text-white hover:bg-primary-700 dark:hover:bg-primary-600 shadow-sm hover:shadow",
    secondary: "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 shadow-sm hover:shadow",
    outline: "border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700",
    "primary-outline": "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white dark:border-primary-500 dark:text-primary-400 dark:hover:bg-primary-500",
    danger: "bg-danger-600 hover:bg-danger-700 text-white dark:bg-danger-500 dark:hover:bg-danger-600 focus:ring-danger-500 shadow-sm hover:shadow",
    "danger-outline": "border-2 border-danger-600 text-danger-600 hover:bg-danger-600 hover:text-white dark:border-danger-500 dark:text-danger-400 dark:hover:bg-danger-500 dark:hover:text-white focus:ring-danger-500",
    overlay: "bg-black/60 hover:bg-black/80 text-white shadow-sm hover:shadow",
  };
  return map[variant];
});
</script>
