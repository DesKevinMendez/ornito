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
      variant === 'primary' && 'bg-primary-600 dark:bg-primary-500 text-white hover:bg-primary-700 dark:hover:bg-primary-600',
      variant === 'secondary' && 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700',
      variant === 'outline' &&
        'border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white',
      variant === 'primary-outline' &&
        'border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white dark:border-primary-500 dark:text-primary-400 dark:hover:bg-primary-500',
      variant === 'danger' &&
        'bg-danger-600 hover:bg-danger-700 text-white dark:bg-danger-500 dark:hover:bg-danger-600',
      variant === 'danger-outline' &&
        'border border-danger-600 text-danger-600 hover:bg-danger-600 hover:text-white dark:border-danger-500 dark:text-danger-400 dark:hover:bg-danger-500 dark:hover:text-white',
      variant === 'overlay' &&
        'bg-black/60 hover:bg-black/80 text-white text-sm',
    ]"
  >
    <div class="flex items-center justify-center relative">
      <!-- Loading spinner -->
      <svg
        v-if="loading"
        class="animate-spin h-4 w-4 transition-all duration-300 ease-in-out mr-2"
        :class="variant === 'primary' ? 'text-white' : 'text-gray-900 dark:text-white'"
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
</script>
