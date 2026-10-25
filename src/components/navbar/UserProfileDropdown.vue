<template>
  <div class="flex items-center gap-2 sm:gap-3">
    <div v-if="showNotifications" class="relative" ref="notificationDropdownRef">
      <button
        @click.stop="handleNotificationClick"
        class="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-profile-notification-trigger-bg-light hover:bg-profile-notification-trigger-hover-bg-light dark:bg-profile-notification-trigger-bg-dark dark:hover:bg-profile-notification-trigger-hover-bg-dark relative cursor-pointer"
        aria-label="Show notifications"
      >
        <IconBell class="w-5 h-5 text-profile-notification-trigger-icon-light dark:text-profile-notification-trigger-icon-dark" />
        <div
          v-if="unreadNotificationsCount > 0"
          class="absolute -top-1 -right-1 bg-danger-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium tabular-nums"
        >
          {{ unreadNotificationsCount > 9 ? '9+' : unreadNotificationsCount }}
        </div>
      </button>
      <DropdownAnimation>
        <div
          v-if="isNotificationDropdownOpen && !isMobile"
          class="absolute right-0 top-14 w-80 bg-profile-panel-bg-light dark:bg-profile-panel-bg-dark backdrop-blur-sm border border-default dark:border-default/50 rounded-lg shadow-lg z-50"
        >
          <div class="py-2 px-4 border-b border-default text-sm text-profile-notification-title-light dark:text-profile-notification-title-dark font-semibold">
            Notificaciones
          </div>
          <div class="max-h-96 overflow-y-auto">
            <slot name="notifications" />
          </div>
          <div
            v-if="unreadNotificationsCount > 0"
            class="py-2 px-4 border-t border-default text-center"
          >
            <button
              @click="emit('mark-all-read')"
              class="text-xs font-medium text-primary-600 dark:text-primary-400 hover:underline focus:outline-none cursor-pointer"
            >
              Marcar todo como leído
            </button>
          </div>
        </div>
      </DropdownAnimation>
    </div>

    <div class="items-center cursor-pointer relative" ref="profileDropdownRef">
      <div class="flex items-center" @click="toggleDropdown">
        <div
          class="w-10 h-10 bg-profile-avatar-bg-light dark:bg-profile-avatar-bg-dark rounded-full flex items-center justify-center sm:mr-3 overflow-hidden"
        >
          <slot name="avatar">
            <span class="text-profile-avatar-text-light dark:text-profile-avatar-text-dark text-lg">
              {{ userInitials }}
            </span>
          </slot>
        </div>
        <div class="hidden sm:flex items-center" style="gap: 0">
          <div class="mr-3">
            <div class="text-profile-name-light dark:text-profile-name-dark font-medium">{{ userName }}</div>
            <div class="flex items-center">
              <span class="text-sm text-profile-role-light dark:text-profile-role-dark">{{ userRole }}</span>
            </div>
          </div>
          <IconChevronDown
            class="w-4 h-4 text-profile-chevron-light dark:text-profile-chevron-dark"
            :class="
              isDropdownOpen
                ? 'rotate-180 transition-transform duration-200'
                : 'transition-transform duration-200'
            "
          />
        </div>
        <IconChevronDown
          class="sm:hidden w-4 h-4 text-profile-chevron-light dark:text-profile-chevron-dark ml-2"
          :class="
            isDropdownOpen
              ? 'rotate-180 transition-transform duration-200'
              : 'transition-transform duration-200'
          "
        />
      </div>
    <DropdownAnimation>
      <div
        v-if="isDropdownOpen"
        class="absolute right-0 top-14 w-56 sm:w-full bg-profile-panel-bg-light dark:bg-profile-panel-bg-dark backdrop-blur-sm border border-default dark:border-default/50 rounded-lg shadow-lg z-50"
      >
        <ul class="py-2">
          <DropdownItem
            v-for="item in menuItems"
            :key="item.label"
            :label="item.label"
            :icon="item.icon"
            :class="item.class"
            :to="item.to"
            @click="handleMenuItemClick(item)"
          />
        </ul>
      </div>
    </DropdownAnimation>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { IconChevronDown, IconBell } from "@tabler/icons-vue";
import { useMobile, isMobile } from "../../composables/useMobile";
import type { DropdownMenuItem } from "@/types/DropdownMenuItem";

interface Props {
  userName: string;
  userInitials: string;
  userRole: string;
  menuItems: DropdownMenuItem[];
  showNotifications?: boolean;
  unreadNotificationsCount?: number;
}

const props = withDefaults(defineProps<Props>(), {
  showNotifications: true,
  unreadNotificationsCount: 0,
});

const emit = defineEmits<{
  "bell-click": [];
  "panel-open": [];
  "mark-all-read": [];
}>();

useMobile();

const isDropdownOpen = ref(false);
const profileDropdownRef = ref<HTMLElement | null>(null);

const isNotificationDropdownOpen = ref(false);
const notificationDropdownRef = ref<HTMLElement | null>(null);

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
  if (isDropdownOpen.value) {
    isNotificationDropdownOpen.value = false;
  }
}

function closeDropdown() {
  isDropdownOpen.value = false;
}

function handleMenuItemClick(item: DropdownMenuItem) {
  closeDropdown();
  item.onClick?.();
}

function handleNotificationClick() {
  emit("bell-click");
  if (isMobile.value) return;
  const wasOpen = isNotificationDropdownOpen.value;
  toggleNotificationDropdown();
  if (!wasOpen && isNotificationDropdownOpen.value) {
    emit("panel-open");
  }
}

function toggleNotificationDropdown() {
  isNotificationDropdownOpen.value = !isNotificationDropdownOpen.value;
  if (isNotificationDropdownOpen.value) {
    isDropdownOpen.value = false;
  }
}

function closeNotificationDropdown() {
  isNotificationDropdownOpen.value = false;
}

onClickOutside(profileDropdownRef, closeDropdown);
onClickOutside(notificationDropdownRef, closeNotificationDropdown);

function handleEscKey(event: KeyboardEvent) {
  if (event.key === "Escape") {
    if (isDropdownOpen.value) {
      closeDropdown();
    }
    if (isNotificationDropdownOpen.value) {
      closeNotificationDropdown();
    }
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleEscKey);
});
onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleEscKey);
});
</script>
