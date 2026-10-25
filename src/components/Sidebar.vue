<template>
  <aside
    class="h-screen flex flex-col border-r-2 transition-all duration-300 bg-sidebar-bg-light dark:bg-sidebar-bg-dark text-sidebar-title-light dark:text-sidebar-title-dark border-default-light dark:border-default-dark"
    :class="sidebarClasses"
  >
    <!-- Top Section with Window Controls and Branding -->
    <div class="p-4 border-b-2 border-default-light dark:border-default-dark h-20 flex items-center">
      <!-- Stakent Branding -->
      <div class="flex items-center w-full" :class="props.isCollapsed ? 'justify-center' : 'justify-between'">
        <div v-if="!props.isCollapsed" class="flex items-center space-x-2">
          <div class="w-8 h-8">
            <img :src="logo" :alt="title" class="w-full h-full object-contain">
          </div>
          <div class="overflow-hidden transition-all duration-300 w-auto">
            <h1 class="text-lg font-semibold whitespace-nowrap text-sidebar-title-light dark:text-sidebar-title-dark">
              {{ title }}
            </h1>
            <p class="text-sm whitespace-nowrap text-sidebar-subtitle-light dark:text-sidebar-subtitle-dark">
              {{ subtitle }}
            </p>
          </div>
        </div>

        <!-- Mobile Close Button -->
        <button
          v-if="isMobile"
          @click="$emit('close')"
          class="w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 bg-sidebar-collapse-bg-light hover:bg-sidebar-collapse-bg-hover-light dark:bg-sidebar-collapse-bg-dark dark:hover:bg-sidebar-collapse-bg-hover-dark"
        >
          <IconX class="w-4 h-4 text-sidebar-collapse-icon-light dark:text-sidebar-collapse-icon-dark" />
        </button>

        <!-- Desktop Collapse/Expand Button -->
        <button
          v-else-if="!props.isCollapsed"
          @click="toggleCollapse"
          class="w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ml-auto bg-sidebar-collapse-bg-light hover:bg-sidebar-collapse-bg-hover-light dark:bg-sidebar-collapse-bg-dark dark:hover:bg-sidebar-collapse-bg-hover-dark"
        >
          <IconChevronLeft class="w-4 h-4 text-sidebar-collapse-icon-light dark:text-sidebar-collapse-icon-dark" />
        </button>
        <button
          v-else
          @click="toggleCollapse"
          class="w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 bg-sidebar-collapse-bg-light hover:bg-sidebar-collapse-bg-hover-light dark:bg-sidebar-collapse-bg-dark dark:hover:bg-sidebar-collapse-bg-hover-dark"
        >
          <IconChevronRight class="w-4 h-4 text-sidebar-collapse-icon-light dark:text-sidebar-collapse-icon-dark" />
        </button>
      </div>
    </div>

    <!-- Menu Items -->
    <div class="flex-1 overflow-y-auto">
      <SidebarList :is-collapsed="props.isCollapsed" :menu-items="menuItems" />
    </div>

    <p
      v-if="!props.isCollapsed"
      class="px-4 pb-1 text-left text-[10px] text-sidebar-version-light dark:text-sidebar-version-dark"
    >
      v{{ version }}
    </p>

    <!-- Bottom Section - Theme Toggle -->
    <div class="p-4 border-t-2 border-default-light dark:border-default-dark">
      <button
        @click="toggleTheme"
        class="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors bg-sidebar-theme-toggle-bg-light hover:bg-sidebar-theme-toggle-bg-hover-light dark:bg-sidebar-theme-toggle-bg-dark dark:hover:bg-sidebar-theme-toggle-bg-hover-dark"
        :class="props.isCollapsed ? 'justify-center' : ''"
        aria-label="Toggle theme"
      >
        <component :is="themeIcon" class="w-5 h-5 text-sidebar-theme-toggle-content-light dark:text-sidebar-theme-toggle-content-dark flex-shrink-0" />
        <span v-if="!props.isCollapsed" class="text-sm text-sidebar-theme-toggle-content-light dark:text-sidebar-theme-toggle-content-dark whitespace-nowrap">
          {{ isDarkMode ? 'Modo claro' : 'Modo oscuro' }}
        </span>
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { isMobile } from '../composables/useMobile';
import { useTheme } from '../composables/useTheme';
import type { RoutesLink } from '@/types/RoutesLink';
import {
  IconChevronLeft,
  IconChevronRight,
  IconX,
  IconSun,
  IconMoon
} from '@tabler/icons-vue';

interface Props {
  isCollapsed: boolean;
  logo: string;
  title: string;
  subtitle: string;
  version: string;
  menuItems: RoutesLink[];
}

const props = defineProps<Props>();
const { logo, title, subtitle, version, menuItems } = props;
const emit = defineEmits<{
  'toggle-collapse': [];
  'close': [];
}>();

const { isDarkMode, toggleTheme } = useTheme();

const themeIcon = computed(() => {
  return isDarkMode.value ? IconSun : IconMoon;
});

const sidebarClasses = computed(() => {
  return props.isCollapsed ? 'w-20' : 'lg:w-64 xl:w-72';
});

const toggleCollapse = () => {
  emit('toggle-collapse');
};
</script>
