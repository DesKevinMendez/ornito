<template>
  <div>
    <label
      v-if="label && !small"
      :for="id"
      class="block text-sm font-medium text-form-label-light dark:text-form-label-dark mb-2"
    >
      {{ label }}
    </label>
    <Field
      :name="name"
      :rules="rules"
      v-model="modelValue"
      v-slot="{ field, value, errorMessage, handleChange }"
    >
      <div class="relative">
        <select
          :id="id"
          :name="field.name"
          @change="handleSelectChange($event, handleChange)"
          @blur="field.onBlur"
          :value
          :class="[
            'w-full bg-form-control-bg-light dark:bg-form-control-bg-dark text-form-control-text-light dark:text-form-control-text-dark placeholder-form-control-placeholder-light dark:placeholder-form-control-placeholder-dark border border-input px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-subtle',
            leftIcon ? 'pl-10' : 'pl-4',
            'pr-4',
            errorMessage ? 'border-danger' : '',
            small ? 'py-2' : 'py-3',
          ]"
        >
          <option
            v-if="placeholder"
            value=""
            class="bg-form-select-placeholder-bg-light dark:bg-form-select-placeholder-bg-dark text-form-select-placeholder-text-light dark:text-form-select-placeholder-text-dark"
            disabled
          >
            {{ placeholder }}
          </option>
          <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :selected="value != null && String(value) === String(option.value)"
            class="bg-form-control-bg-light dark:bg-form-control-bg-dark text-form-control-text-light dark:text-form-control-text-dark"
          >
            {{ option.label }}
          </option>
        </select>
        <div
          v-if="leftIcon"
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <component
            :is="leftIcon"
            :class="[
              small ? 'h-4 w-4' : 'h-5 w-5',
              'text-form-control-icon-light dark:text-form-control-icon-dark',
            ]"
          />
        </div>
      </div>
    </Field>
    <!-- Error Message -->
    <ErrorMessage
      :name="name"
      class="mt-1 text-sm text-danger-600 dark:text-danger-400"
    />
  </div>
</template>

<script setup lang="ts">
import { Field, ErrorMessage } from "vee-validate";

interface Option {
  value: string | number;
  label: string;
}

interface Props {
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  leftIcon?: any;
  rules?: any;
  small?: boolean;
  options: Option[];
}

const props = defineProps<Props>();
const { placeholder = "Selecciona una opción" } = props;

const modelValue = defineModel<string | number | undefined | null>({
  required: true,
});

const handleSelectChange = (
  event: Event,
  handleChange: (value: any) => void
) => {
  const target = event.target as HTMLSelectElement;
  const selectedOption = props.options.find(
    (opt) => String(opt.value) === target.value
  );
  const newValue =
    target.value === ""
      ? null
      : selectedOption
        ? selectedOption.value
        : target.value;
  modelValue.value = newValue;
  handleChange(newValue);
};
</script>
