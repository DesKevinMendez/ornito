<template>
  <div>
    <label
      v-if="label && !small"
      :for="id"
      class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
    >
      {{ label }}
    </label>
    <Field
      :name="name"
      :label="label?.toLowerCase()"
      :rules="rules"
      v-slot="{ field, errorMessage }"
    >
      <div>
        <SearchableSelect
          v-if="url && searchBy"
          :url="url"
          :id
          :search-by="searchBy"
          :label-key="labelKey"
          :value-key="valueKey"
          :subtitle-key="subtitleKey"
          :placeholder="placeholder"
          :left-icon="leftIcon"
          v-model="modelValue"
          :disabled="disabled"
          @select="(item: any) => field.onChange(item.value)"
        />
        <div v-else class="relative">
          <VueDatePicker
            v-if="type === 'date' || type === 'datetime' || type === 'time'"
            v-model="datePickerValue"
            :min-date="minDate ?? undefined"
            :max-date="maxDate ?? undefined"
            :disabled-dates="disabledDates"
            :id="id"
            :locale="es"
            :time-picker="type === 'time'"
            :model-type="
              type === 'time'
                ? 'HH:mm'
                : type === 'datetime'
                ? 'yyyy-MM-dd HH:mm'
                : 'yyyy-MM-dd'
            "
            :time-config="
              type === 'date'
                ? { enableTimePicker: false }
                : { enableTimePicker: true }
            "
            :dark="isDarkMode"
            text-input
            :teleport="false"
            :autocomplete="autocomplete"
            @update:model-value="(val: string | Date | null | undefined) => handleDatePickerUpdate(val, field)"
          >
            <template #dp-input="slotProps">
              <input
                :id="id"
                :value="slotProps.value"
                :placeholder="placeholder"
                @input="slotProps.onInput"
                @keydown.enter="slotProps.onEnter"
                @keydown.tab="slotProps.onTab"
                @blur="slotProps.onBlur"
                @focus="slotProps.onFocus"
                @keypress="slotProps.onKeypress"
                @paste="slotProps.onPaste"
                :class="[
                  'w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
                  leftIcon ? 'pl-10' : 'pl-4',
                  rightIcon || isPasswordField ? 'pr-10' : 'pr-4',
                  errorMessage ? 'border-danger-500 dark:border-danger-500' : '',
                  small ? 'py-2' : 'py-3',
                ]"
                :disabled="disabled"
                :autocomplete="autocomplete"
              />
            </template>
          </VueDatePicker>
          <div v-else-if="type === 'range'" class="space-y-1">
            <input
              :id="id"
              v-bind="field"
              :value="modelValue"
              @input="(e) => { field.onChange(e); modelValue = Number((e.target as HTMLInputElement).value) }"
              type="range"
              :min="min"
              :max="max"
              :step="step"
              :disabled="disabled"
              :autocomplete="autocomplete"
              class="w-full accent-primary-600"
            />
            <div class="flex justify-between text-xs text-gray-400">
              <span>{{ min }}</span>
              <span class="font-medium text-gray-600 dark:text-gray-300">{{ modelValue }}</span>
              <span>{{ max }}</span>
            </div>
          </div>
          <input
            v-else-if="type !== 'money'"
            :id="id"
            v-bind="field"
            :value="modelValue"
            @input="(e) => { field.onChange(e); modelValue = (e.target as HTMLInputElement).value }"
            :type="inputType"
            v-maska="maska"
            :placeholder="placeholder"
            :disabled="disabled"
            :autocomplete="autocomplete"
            :class="[
              'w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:cursor-not-allowed',
              leftIcon ? 'pl-10' : 'pl-4',
              rightIcon || isPasswordField ? 'pr-10' : 'pr-4',
              errorMessage ? 'border-danger-500 dark:border-danger-500' : '',
              small ? 'py-2' : 'py-3',
            ]"
          />
          <input
            v-else
            :id="id"
            v-model.lazy="internalValue"
            type="text"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
            v-money3="money.config"
            :class="[
              'w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 pl-10',
              rightIcon || isPasswordField || type === 'money'
                ? 'pr-10'
                : 'pr-4',
              errorMessage ? 'border-danger-500 dark:border-danger-500' : '',
              small ? 'py-2' : 'py-3',
            ]"
          />
          <!-- Left Icon -->
          <div
            v-if="type === 'money'"
            class="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer transition-colors duration-200"
          >
            <component
              :is="IconCurrencyDollar"
              :class="[
                small ? 'h-4 w-4' : 'h-5 w-5',
                'text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200',
              ]"
            />
          </div>
          <div
            v-if="leftIcon"
            class="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer transition-colors duration-200"
          >
            <component
              :is="leftIcon"
              :class="[
                small ? 'h-4 w-4' : 'h-5 w-5',
                'text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200',
              ]"
            />
          </div>
          <div
            v-if="props.loading"
            class="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <IconLoader2
              :class="[
                small ? 'h-4 w-4' : 'h-5 w-5',
                'text-gray-400 dark:text-gray-400 animate-spin',
              ]"
            />
          </div>
          <!-- Right Icon -->
          <div
            v-else-if="rightIcon && !isPasswordField"
            class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer transition-colors duration-200"
          >
            <component
              :is="rightIcon"
              :class="[
                small ? 'h-4 w-4' : 'h-5 w-5',
                'text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200',
              ]"
            />
          </div>
          <!-- Toggle Button (only for password fields) -->
          <button
            v-if="isPasswordField"
            type="button"
            @click="togglePasswordVisibility"
            class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer transition-colors duration-200"
          >
            <component
              :is="toggleIcon"
              :class="[
                small ? 'h-4 w-4' : 'h-5 w-5',
                'text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200',
              ]"
            />
          </button>
        </div>
        <!-- Error Message -->
        <ErrorMessage
          :name="name"
          class="mt-1 text-sm text-danger-600 dark:text-danger-400"
        />
        <!-- Help Text -->
        <p v-if="help" class="mt-1 text-xs text-gray-500 dark:text-gray-400">
          {{ help }}
        </p>
      </div>
    </Field>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { Field, ErrorMessage } from "vee-validate";
import { IconCurrencyDollar, IconEye, IconEyeOff, IconLoader2 } from "@tabler/icons-vue";
import { Money3Directive, unformat } from "v-money3";
import { vMaska } from "maska/vue";

const vMoney3 = Money3Directive;
import { VueDatePicker } from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useTheme } from "../composables/useTheme";
import { es } from "date-fns/locale";
import { format, parseISO, isValid } from "date-fns";

interface Props {
  label: string;
  id: string;
  name: string;
  type?:
    | "text"
    | "email"
    | "password"
    | "tel"
    | "date"
    | "datetime"
    | "time"
    | "number"
    | "money"
    | "range";
  placeholder?: string;
  leftIcon?: any;
  rightIcon?: any;
  rules?: any;
  small?: boolean;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  mask?: string;
  help?: string;
  url?: string;
  searchBy?: string;
  labelKey?: string;
  valueKey?: string;
  subtitleKey?: string | string[];
  disabled?: boolean;
  loading?: boolean;
  minDate?: Date | string | null;
  maxDate?: Date | string | null;
  autocomplete?: string;
  disabledDates?: Date[] | string[] | ((date: Date) => boolean);
}

const maska = computed(() => {
  if (props.mask) {
    return props.mask;
  }
  return undefined;
});

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  placeholder: "",
  autocomplete: "off",
});

const modelValue = defineModel<string | number | undefined | null>({
  required: true,
});

const { isDarkMode } = useTheme();

const internalValue = ref<string>("");

const datetimeValue = ref<string | null>(null);

const datePickerValue = computed({
  get: () => {
    if (props.type === "datetime") {
      return datetimeValue.value;
    }
    return modelValue.value;
  },
  set: (val: string | Date | null | undefined) => {
    if (props.type === "datetime") {
      const isoValue = convertLocalDatetimeToIso(String(val || ""));
      if (isoValue !== null) {
        modelValue.value = isoValue;
      }
    } else {
      modelValue.value = val as string | number | null | undefined;
    }
  },
});

function convertIsoToLocalDatetime(isoString: string | null | undefined): string | null {
  if (!isoString) return null;

  try {
    const date = parseISO(isoString);
    if (!isValid(date)) return null;

    return format(date, "yyyy-MM-dd HH:mm");
  } catch {
    return null;
  }
}

function convertLocalDatetimeToIso(localString: string | null | undefined): string | null {
  if (!localString) return null;

  try {
    const date = parseISO(localString.replace(" ", "T"));
    if (!isValid(date)) return null;

    return date.toISOString();
  } catch {
    return null;
  }
}

function handleDatePickerUpdate(
  val: string | Date | null | undefined,
  field: any
): void {
  if (props.type === "datetime") {
    const isoValue = convertLocalDatetimeToIso(String(val || ""));
    if (isoValue === null) {
      return;
    }
  }

  field.onChange(val);
}

const money = computed(() => {
  return {
    config: {
      prefix: "",
      suffix: "",
      thousands: ",",
      decimal: ".",
      precision: 2,
      masked: false,
      allowBlank: false,
      shouldRound: true,
    },
  };
});

watch(
  () => modelValue.value,
  (newVal) => {
    if (props.type === "money") {
      if (newVal === null || newVal === undefined || newVal === "") {
        internalValue.value = "";
      } else if (typeof newVal === "number") {
        internalValue.value = (newVal / 100).toFixed(2);
      } else {
        const numValue = parseFloat(String(newVal));
        if (!isNaN(numValue)) {
          internalValue.value = (numValue / 100).toFixed(2);
        } else {
          internalValue.value = "";
        }
      }
    } else if (props.type === "datetime") {
      const converted = convertIsoToLocalDatetime(String(newVal || ""));
      datetimeValue.value = converted;
    }
  },
  { immediate: true }
);

watch(
  () => internalValue.value,
  (newVal) => {
    if (props.type === "money") {
      if (!newVal || newVal === "") {
        modelValue.value = 0;
        return;
      }
      const unformatted = unformat(newVal, money.value.config);
      const numValue = parseFloat(String(unformatted));
      if (!Number.isNaN(numValue)) {
        modelValue.value = Math.round(numValue * 100);
      } else {
        modelValue.value = 0;
      }
    }
  }
);

watch(
  () => datetimeValue.value,
  (newVal) => {
    if (props.type === "datetime") {
      const isoValue = convertLocalDatetimeToIso(newVal);
      if (isoValue !== null) {
        modelValue.value = isoValue;
      }
    }
  }
);

// Internal state for password visibility
const isPasswordVisible = ref(false);

const isPasswordField = computed(() => props.type === "password");

const inputType = computed(() => {
  if (props.type === "password") {
    return isPasswordVisible.value ? "text" : "password";
  }
  return props.type;
});

const toggleIcon = computed(() => {
  if (props.type === "password") {
    return isPasswordVisible.value ? IconEyeOff : IconEye;
  }
  return null;
});

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
</script>

<style global>
.dp__theme_dark {
  --dp-primary-color: var(--ds-color-primary-600);
  --dp-background-color: var(--ds-color-datepicker-dark-bg);
}
.dp__theme_light {
  --dp-primary-color: var(--ds-color-primary-600);
}
</style>
