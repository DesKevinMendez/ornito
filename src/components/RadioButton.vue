<template>
  <label
    :for="id"
    :class="[
      'flex min-h-14 items-center gap-3 rounded-xl border px-4 py-3 transition-colors',
      disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
      selected
        ? 'border-radio-button-card-border-selected-light bg-radio-button-card-bg-selected-light text-radio-button-card-text-selected-light ring-1 ring-radio-button-card-ring-selected-light dark:border-radio-button-card-border-selected-dark dark:bg-radio-button-card-bg-selected-dark dark:text-radio-button-card-text-selected-dark dark:ring-radio-button-card-ring-selected-dark'
        : 'border-radio-button-card-border-light bg-radio-button-card-bg-light text-radio-button-card-text-light dark:border-radio-button-card-border-dark dark:bg-radio-button-card-bg-dark dark:text-radio-button-card-text-dark',
      !selected && !disabled
        ? 'hover:border-radio-button-card-border-hover-light dark:hover:border-radio-button-card-border-hover-dark'
        : '',
    ]"
  >
    <input
      :id="id"
      type="radio"
      :name="name"
      :value="value"
      :checked="selected"
      :disabled="disabled"
      @change="select"
      class="h-5 w-5 shrink-0 accent-radio-button-control-bg-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-radio-button-control-ring-focus-light focus-visible:ring-offset-2 focus-visible:ring-offset-radio-button-control-ring-offset-focus-light dark:accent-radio-button-control-bg-dark dark:focus-visible:ring-radio-button-control-ring-focus-dark dark:focus-visible:ring-offset-radio-button-control-ring-offset-focus-dark"
    />
    <span class="text-sm font-medium">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  id?: string;
  name: string;
  value: string | number;
  label: string;
  disabled?: boolean;
}

const { value, disabled = false } = defineProps<Props>();
const modelValue = defineModel<string | number | null>({ required: true });
const selected = computed(() => modelValue.value === value);

const select = () => {
  if (!disabled) modelValue.value = value;
};
</script>
