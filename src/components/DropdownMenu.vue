<template>
  <div ref="menuRef" class="relative" :class="{ 'z-[9999]': isOpen }">
    <BaseButtonIcon
      :icon="icon"
      :variant="buttonVariant"
      :aria-label="ariaLabel"
      @click="isOpen = !isOpen"
    />

    <Teleport to="body">
      <DropdownAnimation>
        <div
          v-if="isOpen"
          ref="dropdownRef"
          :style="{ ...dropdownStyle, visibility: isPositioned ? 'visible' : 'hidden' }"
          class="fixed z-[10000] max-h-[calc(100vh-1rem)] w-48 overflow-y-auto rounded-xl border border-default bg-white py-1 shadow-lg dark:bg-gray-800"
        >
          <button
            v-for="item in items"
            :key="item.action"
            type="button"
            class="flex w-full cursor-pointer items-center space-x-2 px-4 py-2 text-left text-sm transition-colors duration-150 hover:bg-gray-100 dark:hover:bg-gray-700/30"
            :class="[
              item.variant === 'danger'
                ? 'text-danger-600 dark:text-danger-400'
                : item.variant === 'success'
                  ? 'text-success-600 dark:text-success-400'
                  : 'text-gray-700 dark:text-gray-200'
            ]"
            @click="handleItemClick(item)"
          >
            <component v-if="item.icon" :is="item.icon" class="h-4 w-4" />
            <span>{{ item.label }}</span>
          </button>
        </div>
      </DropdownAnimation>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { IconDotsVertical } from "@tabler/icons-vue";
import { onClickOutside } from "@vueuse/core";
import { nextTick, onUnmounted, ref, watch } from "vue";

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
const dropdownRef = ref<HTMLElement | null>(null);
const dropdownStyle = ref({ top: "0px", left: "0px" });
const isPositioned = ref(false);

onClickOutside(menuRef, () => {
  isOpen.value = false;
}, { ignore: [dropdownRef] });

watch(isOpen, async (open) => {
  if (!open) {
    isPositioned.value = false;
    stopPositionTracking();
    return;
  }

  await nextTick();
  if (!isOpen.value) return;

  updateDropdownPosition();
  isPositioned.value = true;
  window.addEventListener("resize", updateDropdownPosition);
  window.addEventListener("scroll", updateDropdownPosition, true);
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(stopPositionTracking);

function updateDropdownPosition() {
  const trigger = menuRef.value?.querySelector("button");
  const dropdown = dropdownRef.value;
  if (!trigger || !dropdown) return;

  const triggerRect = trigger.getBoundingClientRect();
  const dropdownRect = dropdown.getBoundingClientRect();
  const viewportPadding = 8;
  const gap = 4;

  let left = position === "bottom-right"
    ? triggerRect.right - dropdownRect.width
    : triggerRect.left;
  left = Math.max(
    viewportPadding,
    Math.min(left, window.innerWidth - dropdownRect.width - viewportPadding),
  );

  let top = triggerRect.bottom + gap;
  const fitsBelow = top + dropdownRect.height <= window.innerHeight - viewportPadding;
  const fitsAbove = triggerRect.top - dropdownRect.height - gap >= viewportPadding;
  if (!fitsBelow && fitsAbove) {
    top = triggerRect.top - dropdownRect.height - gap;
  } else {
    top = Math.max(
      viewportPadding,
      Math.min(top, window.innerHeight - dropdownRect.height - viewportPadding),
    );
  }

  dropdownStyle.value = { top: `${top}px`, left: `${left}px` };
}

function stopPositionTracking() {
  window.removeEventListener("resize", updateDropdownPosition);
  window.removeEventListener("scroll", updateDropdownPosition, true);
  window.removeEventListener("keydown", handleKeydown);
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key !== "Escape" || !isOpen.value) return;

  isOpen.value = false;
  menuRef.value?.querySelector("button")?.focus();
}

function handleItemClick(item: MenuItem) {
  emit("select", item);
  isOpen.value = false;
}
</script>
