<template>
  <div ref="menuRef" class="relative" :class="{ 'z-[9999]': isOpen }">
    <BaseButtonIcon
      :icon="icon"
      :variant="buttonVariant"
      :aria-label="ariaLabel"
      @click="isOpen = !isOpen"
    />

    <DropdownAnimation>
      <div
        v-if="isOpen"
        :class="[
          'absolute w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-10 py-1',
          position === 'bottom-right' ? 'right-0 top-full mt-1' : 'left-0 top-full mt-1',
        ]"
      >
        <button
          v-for="item in items"
          :key="item.action"
          type="button"
          class="w-full text-left px-4 py-2 text-sm transition-colors duration-150 flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700/30 cursor-pointer"
          :class="[
            item.variant === 'danger'
              ? 'text-danger-600 dark:text-danger-400'
              : item.variant === 'success'
              ? 'text-success-600 dark:text-success-400'
              : 'text-gray-700 dark:text-gray-200'
          ]"
          @click="handleItemClick(item)"
        >
          <component v-if="item.icon" :is="item.icon" class="w-4 h-4" />
          <span>{{ item.label }}</span>
        </button>
      </div>
    </DropdownAnimation>
  </div>
</template>

<script setup lang="ts">
import { IconDotsVertical } from "@tabler/icons-vue";
import { onClickOutside } from "@vueuse/core";

interface MenuItem {
  action: string;
  label: string;
  icon?: any;
  variant?: "default" | "danger" | "success";
}

const { ariaLabel = "Opciones", position = "bottom-right", buttonVariant = "outline", icon = IconDotsVertical } = defineProps<{
  items: MenuItem[];
  ariaLabel?: string;
  position?: "bottom-left" | "bottom-right";
  buttonVariant?: "outline" | "secondary";
  icon?: any;
}>();

const emit = defineEmits<{
  select: [item: MenuItem];
}>();

const isOpen = ref(false);
const menuRef = ref<HTMLElement | null>(null);

onClickOutside(menuRef, () => {
  isOpen.value = false;
});

function handleItemClick(item: MenuItem) {
  emit("select", item);
  isOpen.value = false;
}
</script>
