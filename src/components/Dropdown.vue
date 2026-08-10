<template>
  <div class="relative" ref="dropdownRef">
    <!-- Trigger Button -->
    <BaseButton
      :variant="triggerVariant"
      :size="triggerSize"
      :icon="IconChevronDown"
      iconPosition="right"
      :small="triggerSmall"
      :iconClass="isOpen ? 'rotate-180 transition-transform duration-200' : 'transition-transform duration-200'"
      @click="toggleDropdown"
      class="bg-white dark:bg-gray-800/70 backdrop-blur-sm border-gray-300 dark:border-gray-700/70 hover:bg-gray-50 dark:hover:bg-gray-700/70 focus:ring-0 focus:border-gray-400 dark:focus:border-gray-600"
    >
      {{ selectedItem?.label || placeholder }}
    </BaseButton>

    <!-- Dropdown Menu -->
    <DropdownAnimation>
      <div
        v-if="isOpen"
        :class="dropdownClasses"
      >
        <div class="py-1">
          <DropdownItem
            v-for="item in items"
            :key="item.value"
            :label="item.label"
            :icon="item.icon"
            :active="selectedItem?.value === item.value"
            @click="selectItem(item)"
          />
        </div>
      </div>
    </DropdownAnimation>
  </div>
</template>

<script setup lang="ts">
import { IconChevronDown } from '@tabler/icons-vue';

interface DropdownItem {
  label: string;
  value: string;
  icon?: any;
}

interface Props {
  items: DropdownItem[];
  placeholder?: string;
  triggerVariant?: 'primary' | 'secondary' | 'outline';
  triggerSize?: 'full' | 'auto';
  triggerSmall?: boolean;
  // Dropdown positioning props
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Select an option',
  triggerVariant: 'outline',
  triggerSize: 'auto',
  triggerSmall: false,
  position: 'bottom-left'
});

const modelValue = defineModel<string>();

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement>();

const selectedItem = computed(() => {
  return props.items.find(item => item.value === modelValue.value);
});

const dropdownClasses = computed(() => {
  const baseClasses = `absolute w-48 max-h-60 bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl shadow-lg z-[9999]`;

  const positionClasses = {
    'bottom-left': 'left-0 top-full mt-2',
    'bottom-right': 'right-0 top-full mt-2',
    'top-left': 'left-0 bottom-full mb-2',
    'top-right': 'right-0 bottom-full mb-2'
  };

  return `${baseClasses} ${positionClasses[props.position]}`;
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};

const selectItem = (item: DropdownItem) => {
  modelValue.value = item.value;
  closeDropdown();
};

// Close dropdown when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement;

  if (dropdownRef.value && !dropdownRef.value.contains(target)) {
    closeDropdown();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
