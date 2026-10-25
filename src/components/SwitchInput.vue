<template>
  <div>
    <label
      v-if="label"
      class="mb-2 block text-sm font-medium text-switch-input-label-light dark:text-switch-input-label-dark"
    >
      {{ label }}
    </label>
    <div class="flex items-center space-x-3">
      <button
        type="button"
        @click="toggle"
        :disabled="disabled"
        :class="[
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
          checked
            ? 'bg-switch-input-track-on-light dark:bg-switch-input-track-on-dark'
            : 'bg-switch-input-track-off-light dark:bg-switch-input-track-off-dark',
        ]"
      >
        <span
          :class="[
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-switch-input-thumb-light dark:bg-switch-input-thumb-dark shadow ring-0 transition duration-200 ease-in-out',
            checked ? 'translate-x-5' : 'translate-x-0',
          ]"
        />
      </button>
      <span
        v-if="showLabel"
        class="text-sm text-switch-input-label-light dark:text-switch-input-label-dark"
      >
        {{ checked ? trueLabel : falseLabel }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label?: string;
  modelValue: boolean;
  disabled?: boolean;
  trueLabel?: string;
  falseLabel?: string;
  showLabel?: boolean;
}

const {
  disabled = false,
  trueLabel = "Activo",
  falseLabel = "Inactivo",
  showLabel = true,
} = defineProps<Props>();

const checked = defineModel<boolean>({ required: true });

const toggle = () => {
  if (!disabled) {
    checked.value = !checked.value;
  }
};
</script>
