<template>
  <div>
    <label v-if="label && !small" :for="id" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      {{ label }}
    </label>
    <Field
      :name="name"
      :rules="rules"
      v-slot="{ field, errorMessage }"
    >
      <div>
        <div class="relative">
          <textarea
            :id="id"
            v-bind="field"
            :value="modelValue"
            @input="(e) => { field.onChange(e); modelValue = (e.target as HTMLTextAreaElement).value }"
            :placeholder="placeholder"
            :rows="rows"
            :maxlength="maxLength"
            :class="[
              'w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
              errorMessage ? 'border-danger-500 dark:border-danger-500' : '',
              small ? 'py-2' : 'py-3'
            ]"
          ></textarea>
        </div>
        <div class="mt-1 flex items-start justify-between gap-2">
          <ErrorMessage :name="name" class="text-sm text-danger-600 dark:text-danger-400" />
          <span
            v-if="maxLength"
            class="text-xs text-gray-500 dark:text-gray-400 ml-auto shrink-0"
            :class="charCount >= maxLength ? 'text-danger-600 dark:text-danger-400' : ''"
          >
            {{ charCount }} / {{ maxLength }}
          </span>
        </div>
      </div>
    </Field>
  </div>
</template>

<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate';
import { computed } from 'vue';

interface Props {
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  rules?: any;
  small?: boolean;
  rows?: number;
  maxLength?: number;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  rows: 3,
});

const modelValue = defineModel<string | undefined | null>({ required: true });

const charCount = computed(() => (modelValue.value ?? '').length);
</script>


