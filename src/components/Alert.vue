<template>
  <Transition name="alert-reveal">
    <div
      v-if="show"
      :class="[
        'flex items-start gap-3 p-4 rounded-lg border backdrop-blur-sm',
        typeClasses.border,
        typeClasses.background
      ]"
    >
      <component
        :is="iconComponent"
        :class="[
          'w-5 h-5 flex-shrink-0 mt-0.5',
          typeClasses.icon
        ]"
      />
      <div :class="['flex-1 text-sm', typeClasses.text]">
        <slot />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { IconAlertTriangle, IconAlertCircle, IconInfoCircle, IconShieldCheck } from "@tabler/icons-vue";
import { computed } from "vue";
import type { AlertType } from "@/types/Alert";

const props = withDefaults(defineProps<{
  type: AlertType;
  show?: boolean;
}>(), {
  show: true,
});

const typeClasses = computed(() => {
  switch (props.type) {
    case "warning":
      return {
        border: "border-warning-200 dark:border-warning-900/50",
        background: "bg-warning-50/85 dark:bg-warning-900/40",
        icon: "text-warning-700 dark:text-warning-100",
        text: "text-warning-700 dark:text-warning-100"
      };
    case "danger":
      return {
        border: "border-danger-200 dark:border-danger-900/50",
        background: "bg-danger-50/85 dark:bg-danger-900/40",
        icon: "text-danger-700 dark:text-danger-100",
        text: "text-danger-700 dark:text-danger-100"
      };
    case "info":
      return {
        border: "border-secondary-200 dark:border-secondary-900/50",
        background: "bg-secondary-50/85 dark:bg-secondary-900/40",
        icon: "text-secondary-700 dark:text-secondary-100",
        text: "text-secondary-700 dark:text-secondary-100"
      };
    case "success":
      return {
        border: "border-success-200 dark:border-success-900/50",
        background: "bg-success-50/85 dark:bg-success-900/40",
        icon: "text-success-700 dark:text-success-100",
        text: "text-success-700 dark:text-success-100"
      };
    default:
      return {
        border: "border-warning-200 dark:border-warning-900/50",
        background: "bg-warning-50/85 dark:bg-warning-900/40",
        icon: "text-warning-700 dark:text-warning-100",
        text: "text-warning-700 dark:text-warning-100"
      };
  }
});

const iconComponent = computed(() => {
  switch (props.type) {
    case "warning":
      return IconAlertTriangle;
    case "danger":
      return IconAlertCircle;
    case "info":
      return IconInfoCircle;
    case "success":
      return IconShieldCheck;
    default:
      return IconAlertTriangle;
  }
});
</script>

<style scoped>
.alert-reveal-enter-active,
.alert-reveal-leave-active {
  transition: opacity 200ms ease, transform 200ms ease, max-height 250ms ease;
  overflow: hidden;
}
.alert-reveal-enter-from,
.alert-reveal-leave-to {
  opacity: 0;
  transform: translateY(-4px);
  max-height: 0;
}
.alert-reveal-enter-to,
.alert-reveal-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 200px;
}
</style>
