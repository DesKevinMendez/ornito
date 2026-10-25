<template>
  <div>
    <label
      v-if="label && !small"
      :for="id"
      class="block text-sm font-medium text-form-label-text-light dark:text-form-label-text-dark mb-2"
    >
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
              'w-full bg-form-control-bg-light dark:bg-form-control-bg-dark text-form-control-text-light dark:text-form-control-text-dark placeholder-form-control-placeholder-text-light dark:placeholder-form-control-placeholder-text-dark border border-input-light dark:border-input-dark px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-form-control-border-focus-light dark:focus:border-form-control-border-focus-dark',
              errorMessage ? 'border-danger-light dark:border-danger-dark' : '',
              small ? 'py-2' : 'py-3'
            ]"
          ></textarea>
        </div>
        <div class="mt-1 flex items-start justify-between gap-2">
          <ErrorMessage :name="name" class="text-sm text-danger-600 dark:text-danger-400" />
          <span
            v-if="maxLength"
            class="text-xs text-form-supporting-text-light dark:text-form-supporting-text-dark ml-auto shrink-0"
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


