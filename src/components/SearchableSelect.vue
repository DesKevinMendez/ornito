<template>
  <div class="relative" ref="selectRef">
    <label
      v-if="label && !small"
      :for="id"
      class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
    >
      {{ label }}
    </label>
    <Field
      :name="name || id"
      :rules="rules"
      v-model="modelValue"
      v-slot="{ field, errorMessage, handleChange }"
    >
      <div class="relative">
      <input
        :id="id"
        ref="inputRef"
        v-model="searchQuery"
        @focus="handleFocus"
        @blur="(event) => { field.onBlur(event); handleBlur() }"
        :placeholder="placeholder"
        :name="field.name"
        autocomplete="off"
        aria-autocomplete="none"
        data-lpignore="true"
        data-bwignore="true"
        data-form-type="other"
        spellcheck="false"
        :class="[
          'w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
          leftIcon ? 'pl-10' : 'pl-4',
          'pr-10',
          errorMessage ? 'border-danger-500 dark:border-danger-500' : '',
          small ? 'py-2' : 'py-3',
        ]"
        :disabled="disabled"
      />
      <div
        v-if="leftIcon"
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <component
          :is="leftIcon"
          :class="[
            small ? 'h-4 w-4' : 'h-5 w-5',
            'text-gray-400 dark:text-gray-400',
          ]"
        />
      </div>
      <div
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
        <component
          :is="IconChevronDown"
          :class="[
            small ? 'h-4 w-4' : 'h-5 w-5',
            'text-gray-400 dark:text-gray-400 transition-transform duration-200',
            isOpen ? 'rotate-180' : '',
          ]"
        />
      </div>
      </div>

      <div
      v-if="multiple && selectedItemsData.length"
      class="flex flex-wrap gap-2 mt-2"
    >
      <span
        v-for="item in selectedItemsData"
        :key="item.value"
        class="inline-flex items-center gap-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1"
      >
        {{ item.label }}
        <button
          type="button"
          @click="removeItem(item.value, handleChange)"
          class="hover:text-primary-900 dark:hover:text-primary-100"
        >
          <IconX class="h-4 w-4" />
        </button>
      </span>
    </div>

      <DropdownAnimation>
      <div v-if="isOpen" :class="dropdownClasses">
        <div
          v-if="isLoading"
          class="py-4 px-4 flex items-center justify-center"
        >
          <LoadingSVG />
        </div>
        <div
          v-else-if="items.length === 0"
          class="py-4 px-4 text-center text-gray-500 dark:text-gray-400"
        >
          No se encontraron datos
        </div>
        <div v-else class="space-y-2 p-2 max-h-64 overflow-y-auto">
          <div
            v-for="item in items"
            :key="item.value"
            @click="(e) => selectItem(item, e, handleChange)"
            class="rounded-lg p-3 border cursor-pointer transition-colors"
            :class="{
              'border-primary-500 bg-primary-100 dark:bg-primary-900/20 hover:bg-primary-200 dark:hover:bg-primary-900/30':
                isItemSelected(item),
              'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700':
                !isItemSelected(item),
            }"
          >
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-2">
                <component
                  v-if="item.icon"
                  :is="item.icon"
                  class="w-5 h-5 text-gray-600 dark:text-gray-400"
                />
                <div class="flex flex-col">
                  <span
                    class="font-semibold text-gray-900 dark:text-white"
                  >{{ item.label }}</span>
                  <span
                    v-for="(line, index) in item.subtitles"
                    :key="index"
                    class="text-xs text-gray-500 dark:text-gray-400"
                  >{{ line }}</span>
                </div>
              </div>
              <div
                v-if="isItemSelected(item)"
                class="text-primary-600 dark:text-primary-400"
              >
                <IconCheck class="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </DropdownAnimation>
    </Field>
    <ErrorMessage
      :name="name || id"
      class="mt-1 text-sm text-danger-600 dark:text-danger-400"
    />
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { Field, ErrorMessage } from "vee-validate";
import { IconChevronDown, IconCheck, IconX } from "@tabler/icons-vue";
import { watchDebounced } from "@vueuse/core";
import { useRequestKey } from "../composables/useDataRequest";

interface SelectItem {
  label: string;
  value: string | number;
  icon?: any;
  subtitles: string[];
}

interface Props {
  url: string;
  searchBy: string;
  placeholder?: string;
  leftIcon?: any;
  id?: string;
  name?: string;
  label?: string;
  rules?: any;
  small?: boolean;
  labelKey?: string;
  valueKey?: string;
  subtitleKey?: string | string[];
  disabled?: boolean;
  multiple?: boolean;
  localSearchFirst?: boolean;
}

const props = defineProps<Props>();

const {
  placeholder = "Buscar...",
  id = "searchable-select",
  small = false,
  labelKey = "label",
  valueKey = "value",
  multiple = false,
} = props;

const modelValue = defineModel<
  string | number | (string | number)[] | undefined | null
>();

const requestFactory = inject(useRequestKey);
if (!requestFactory) {
  throw new Error(
    "SearchableSelect: no request instance provided. Call app.provide(useRequestKey, useRequest) in the consuming app."
  );
}
const { get } = requestFactory();

const isOpen = ref(false);
const searchQuery = ref("");
const items = ref<SelectItem[]>([]);
const initialItems = ref<SelectItem[]>([]);
const rawItemsMap = ref<Map<string | number, any>>(new Map());
const selectedItemData = ref<SelectItem | null>(null);
const selectedItemsData = ref<SelectItem[]>([]);
const isLoading = ref(false);
const selectRef = ref<HTMLElement>();
const inputRef = ref<HTMLInputElement>();
const savedSearchQuery = ref("");
const preventSearch = ref(false);
const isSelecting = ref(false);
const isInternalModelUpdate = ref(false);
const selectedItem = computed(() => {
  if (!modelValue.value) return null;
  if (
    selectedItemData.value &&
    selectedItemData.value.value === modelValue.value
  ) {
    return selectedItemData.value;
  }
  return (
    items.value.find((item) => item.value === modelValue.value) ||
    initialItems.value.find((item) => item.value === modelValue.value)
  );
});

const dropdownClasses = computed(() => {
  const baseClasses =
    "absolute w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-[9999] mt-2 overflow-hidden";
  return baseClasses;
});

const selectedValues = computed<(string | number)[]>(() =>
  Array.isArray(modelValue.value) ? modelValue.value : []
);

const itemMatchesQuery = (item: SelectItem, query: string): boolean => {
  const normalizedQuery = query.toLocaleLowerCase();
  return [item.label, ...item.subtitles].some((text) =>
    text.toLocaleLowerCase().includes(normalizedQuery)
  );
};

const searchInitialItems = (query: string): SelectItem[] =>
  initialItems.value.filter((item) => itemMatchesQuery(item, query));

const isItemSelected = (item: SelectItem): boolean =>
  multiple
    ? selectedValues.value.includes(item.value)
    : selectedItem.value?.value === item.value;

let resolveSeq = 0;

const resolveSelectedLabels = async () => {
  const seq = ++resolveSeq;
  const values = selectedValues.value;
  if (values.length === 0) {
    selectedItemsData.value = [];
    return;
  }

  // Preserve already-resolved chips, then fill from the loaded lists.
  const byValue = new Map<string | number, SelectItem>();
  for (const item of selectedItemsData.value) byValue.set(item.value, item);
  for (const item of items.value) byValue.set(item.value, item);
  for (const item of initialItems.value) byValue.set(item.value, item);

  let missing = values.filter((value) => !byValue.has(value));
  if (missing.length && props.url) {
    if (initialItems.value.length === 0) {
      await fetchInitialData();
      if (seq !== resolveSeq) return;
      for (const item of initialItems.value) byValue.set(item.value, item);
      missing = values.filter((value) => !byValue.has(value));
    }
    // Resolve selected values that are beyond the first page by fetching by id.
    for (const value of missing) {
      try {
        const separator = props.url.includes("?") ? "&" : "?";
        const { data } = await get<any>(
          `${props.url}${separator}filter[${valueKey}]=${value}`
        );
        if (seq !== resolveSeq) return;
        const arr = Array.isArray(data.value) ? data.value : data.value?.data || [];
        if (arr.length) byValue.set(value, mapToSelectItem(arr[0]));
      } catch {
        // fall back to the raw identifier below
      }
    }
  }

  if (seq !== resolveSeq) return;
  selectedItemsData.value = values.map(
    (value) => byValue.get(value) ?? { label: String(value), value, subtitles: [] }
  );
};

const removeItem = (value: string | number, handleChange: (value: any) => void) => {
  isInternalModelUpdate.value = true;
  const newValue = selectedValues.value.filter((current) => current !== value);
  modelValue.value = newValue;
  handleChange(newValue);
  selectedItemsData.value = selectedItemsData.value.filter(
    (item) => item.value !== value
  );
};

function getValueByPath(item: any, path: string): any {
  return path
    .trim()
    .split(".")
    .reduce((acc, key) => acc?.[key], item);
}

function resolveTemplate(template: string, item: any): string {
  const placeholders = [...template.matchAll(/\{([^}]+)\}/g)];
  if (placeholders.length === 0) {
    const value = getValueByPath(item, template);
    return value !== undefined && value !== null ? String(value) : "";
  }
  const values = placeholders.map((match) => getValueByPath(item, match[1]));
  const allEmpty = values.every(
    (value) => value === undefined || value === null || value === ""
  );
  if (allEmpty) return "";
  let result = template;
  placeholders.forEach((match, index) => {
    const value = values[index];
    result = result.replace(
      match[0],
      value !== undefined && value !== null ? String(value) : ""
    );
  });
  return result
    .replace(/^[\s\-:|,·]+/, "")
    .replace(/[\s\-:|,·]+$/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function buildSubtitles(item: any): string[] {
  if (!props.subtitleKey) return [];
  const keys = Array.isArray(props.subtitleKey)
    ? props.subtitleKey
    : [props.subtitleKey];
  return keys.map((key) => resolveTemplate(key, item)).filter(Boolean);
}

const mapToSelectItem = (item: any): SelectItem => {
  const mapped = {
    label: resolveTemplate(labelKey, item),
    value: getValueByPath(item, valueKey),
    icon: item.icon,
    subtitles: buildSubtitles(item),
  };
  rawItemsMap.value.set(mapped.value, item);
  return mapped;
};

const fetchInitialData = async (options: { searchWithId?: boolean } = {}) => {
  if (!props.url) return;

  let url = props.url;
  if (options.searchWithId && modelValue.value) {
    const separator = props.url.includes('?') ? '&' : '?';
    url = `${props.url}${separator}filter[${props.valueKey}]=${modelValue.value}`;
  }

  isLoading.value = true;
  try {
    const { data } = await get<any>(url);
    if (data.value) {
      const dataArray = Array.isArray(data.value)
        ? data.value
        : data.value.data || [];
      const mappedItems = dataArray.map(mapToSelectItem);
      items.value = mappedItems;
      initialItems.value = mappedItems;
    }
  } catch (error) {
    console.error("Error fetching initial data:", error);
    items.value = [];
    initialItems.value = [];
  } finally {
    isLoading.value = false;
  }
};

const searchData = async (query: string) => {
  if (!props.url || !query.trim()) {
    items.value = initialItems.value;
    return;
  }

  if (props.localSearchFirst) {
    const localMatches = searchInitialItems(query);
    if (localMatches.length > 0) {
      items.value = localMatches;
      return;
    }
  }

  isLoading.value = true;
  try {
    const separator = props.url.includes('?') ? '&' : '?';
    const searchUrl = `${props.url}${separator}${props.searchBy}=${encodeURIComponent(query)}`;
    const { data } = await get<any>(searchUrl);
    if (data.value) {
      const dataArray = Array.isArray(data.value)
        ? data.value
        : data.value.data || [];
      const mappedItems = dataArray.map(mapToSelectItem);
      items.value = mappedItems;
    }
  } catch (error) {
    console.error("Error searching data:", error);
    items.value = [];
  } finally {
    isLoading.value = false;
  }
};

const handleFocus = () => {
  isOpen.value = true;
  savedSearchQuery.value = searchQuery.value;
  isSelecting.value = true;
  searchQuery.value = "";
  if (initialItems.value.length === 0) {
    fetchInitialData();
  } else {
    items.value = initialItems.value;
    if (
      selectedItemData.value &&
      !items.value.find((item) => item.value === selectedItemData.value!.value)
    ) {
      items.value = [selectedItemData.value, ...items.value];
    }
  }
  if (inputRef.value) {
    inputRef.value.select();
  }
};

const handleBlur = () => {
  setTimeout(() => {
    isOpen.value = false;
    isSelecting.value = true;
    if (multiple) {
      searchQuery.value = "";
    } else if (modelValue.value && selectedItem.value) {
      searchQuery.value = selectedItem.value.label;
    } else if (!modelValue.value) {
      searchQuery.value = "";
    }
    savedSearchQuery.value = "";
  }, 200);
};

watchDebounced(
  searchQuery,
  (newQuery) => {
    if (isSelecting.value) {
      isSelecting.value = false;
      return;
    }
    const trimmedQuery = newQuery.trim();
    if (trimmedQuery && !preventSearch.value) {
      searchData(trimmedQuery);
      preventSearch.value = false;
    } else {
      items.value = initialItems.value;
    }
  },
  { debounce: 500 }
);

const emit = defineEmits<{
  select: [item: SelectItem];
  data: [raw: any];
}>();

const selectItem = (
  item: SelectItem,
  event: Event | undefined,
  handleChange: (value: any) => void
) => {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  if (multiple) {
    isSelecting.value = true;
    isInternalModelUpdate.value = true;
    if (selectedValues.value.includes(item.value)) {
      const newValue = selectedValues.value.filter((v) => v !== item.value);
      modelValue.value = newValue;
      handleChange(newValue);
      selectedItemsData.value = selectedItemsData.value.filter(
        (i) => i.value !== item.value
      );
    } else {
      const newValue = [...selectedValues.value, item.value];
      modelValue.value = newValue;
      handleChange(newValue);
      if (!selectedItemsData.value.find((i) => i.value === item.value)) {
        selectedItemsData.value.push(item);
      }
    }
    searchQuery.value = "";
    items.value = initialItems.value;
    emit("select", item);
    const rawMultiple = rawItemsMap.value.get(item.value);
    if (rawMultiple !== undefined) emit("data", rawMultiple);
    if (inputRef.value) {
      inputRef.value.focus();
    }
    return;
  }
  isSelecting.value = true;
  modelValue.value = item.value;
  handleChange(item.value);
  searchQuery.value = item.label;
  selectedItemData.value = item;
  isOpen.value = false;
  if (inputRef.value) {
    inputRef.value.blur();
  }
  emit("select", item);
  const raw = rawItemsMap.value.get(item.value);
  if (raw !== undefined) emit("data", raw);
};

const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement;
  if (selectRef.value && !selectRef.value.contains(target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  if (multiple) {
    resolveSelectedLabels();
    return;
  }
  if (modelValue.value && modelValue.value !== "") {
    findingItemInServer(modelValue.value as string | number);
  } else if (modelValue.value && selectedItem.value) {
    searchQuery.value = selectedItem.value.label;
    selectedItemData.value = selectedItem.value;
  }
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

watch(modelValue, (newValue, oldValue) => {
  if (multiple) {
    if (isInternalModelUpdate.value) {
      isInternalModelUpdate.value = false;
      return;
    }
    resolveSelectedLabels();
    return;
  }
  if (newValue && newValue !== oldValue) {
    if (selectedItem.value && selectedItem.value.value === newValue) {
      searchQuery.value = selectedItem.value.label;
      if (!selectedItemData.value) {
        selectedItemData.value = selectedItem.value;
      }
    } else if (!selectedItemData.value || selectedItemData.value.value !== newValue) {
      findingItemInServer(newValue as string | number);
    }
  } else if (!newValue) {
    searchQuery.value = "";
    selectedItemData.value = null;
  }
});

const findingItemInServer = async (newValue: string | number) => {
  preventSearch.value = true;
  await fetchInitialData();

  const itemAlreadyExists = items.value.find((item) => item.value === newValue);
  if (itemAlreadyExists) {
    isSelecting.value = true;
    searchQuery.value = itemAlreadyExists.label;
    selectedItemData.value = itemAlreadyExists;
  } else {
    const separator = props.url.includes('?') ? '&' : '?';
    const filterUrl = `${props.url}${separator}filter[${props.valueKey}]=${newValue}`;
    try {
      const { data } = await get<any>(filterUrl);
      if (data.value) {
        const dataArray = Array.isArray(data.value)
          ? data.value
          : data.value.data || [];
        if (dataArray.length > 0) {
          const foundItem: SelectItem = mapToSelectItem(dataArray[0]);
          items.value = [foundItem, ...items.value];
          initialItems.value = [foundItem, ...initialItems.value];
          selectedItemData.value = foundItem;
          isSelecting.value = true;
          searchQuery.value = foundItem.label;
        }
      }
    } catch (error) {
      console.error("Error fetching item by ID:", error);
    }
  }
  preventSearch.value = false;
};
</script>
