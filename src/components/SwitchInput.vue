<template>
  <div>
    <label
      v-if="label"
      class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
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
          modelValue ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600',
        ]"
      >
        <span
          :class="[
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
            modelValue ? 'translate-x-5' : 'translate-x-0',
          ]"
        />
      </button>
      <span v-if="showLabel" class="text-sm text-gray-700 dark:text-gray-300">
        {{ modelValue ? trueLabel : falseLabel }}
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

const modelValue = defineModel<boolean>({ required: true });

const toggle = () => {
  if (!disabled) {
    modelValue.value = !modelValue.value;
  }
};
</script>
