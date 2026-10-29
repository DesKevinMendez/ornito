<template>
  <div class="relative" ref="dropdownRef">
    <!-- Trigger Button -->
    <BaseButton
      :variant="triggerVariant"
      :size="triggerSize"
      :icon="IconChevronDown"
      iconPosition="right"
      :iconClass="isOpen ? 'rotate-180 transition-transform duration-200' : 'transition-transform duration-200'"
      @click="toggleDropdown"
      class="backdrop-blur-sm focus:ring-0"
      :class="[
        'bg-dropdown-trigger-bg-light dark:bg-dropdown-trigger-bg-dark border-dropdown-trigger-border-light dark:border-dropdown-trigger-border-dark hover:bg-dropdown-trigger-bg-hover-light dark:hover:bg-dropdown-trigger-bg-hover-dark active:bg-dropdown-trigger-bg-active-light dark:active:bg-dropdown-trigger-bg-active-dark focus:border-hover-light dark:focus:border-hover-dark',
        triggerVariant === 'outline' ? 'text-dropdown-trigger-text-light dark:text-dropdown-trigger-text-dark' : '',
        triggerSmall ? 'text-sm' : '',
      ]"
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
  const baseClasses = `absolute w-48 max-h-60 bg-dropdown-panel-bg-light dark:bg-dropdown-panel-bg-dark backdrop-blur-sm border border-dropdown-panel-border-light dark:border-dropdown-panel-border-dark rounded-xl shadow-lg z-[9999]`;

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
