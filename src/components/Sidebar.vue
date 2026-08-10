<template>
  <aside
    class="h-screen flex flex-col border-r-2 transition-all duration-300 bg-white text-gray-900 border-gray-200 dark:bg-gray-900 dark:text-white dark:border-gray-700"
    :class="sidebarClasses"
  >
    <!-- Top Section with Window Controls and Branding -->
    <div class="p-4 border-b-2 border-gray-200 dark:border-gray-700 h-20 flex items-center">
      <!-- Stakent Branding -->
      <div class="flex items-center w-full" :class="props.isCollapsed ? 'justify-center' : 'justify-between'">
        <div v-if="!props.isCollapsed" class="flex items-center space-x-2">
          <div class="w-8 h-8">
            <img :src="logo" :alt="title" class="w-full h-full object-contain">
          </div>
          <div class="overflow-hidden transition-all duration-300 w-auto">
            <h1 class="text-lg font-semibold whitespace-nowrap text-gray-900 dark:text-white">
              {{ title }}
            </h1>
            <p class="text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
              {{ subtitle }}
            </p>
          </div>
        </div>

        <!-- Mobile Close Button -->
        <button
          v-if="isMobile"
          @click="$emit('close')"
          class="w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <IconX class="w-4 h-4 text-gray-600 dark:text-gray-400" />
        </button>

        <!-- Desktop Collapse/Expand Button -->
        <button
          v-else-if="!props.isCollapsed"
          @click="toggleCollapse"
          class="w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ml-auto bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <IconChevronLeft class="w-4 h-4 text-gray-600 dark:text-gray-400" />
        </button>
        <button
          v-else
          @click="toggleCollapse"
          class="w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <IconChevronRight class="w-4 h-4 text-gray-600 dark:text-gray-400" />
        </button>
      </div>
    </div>

    <!-- Menu Items -->
    <div class="flex-1 overflow-y-auto">
      <SidebarList :is-collapsed="props.isCollapsed" :menu-items="menuItems" />
    </div>

    <p
      v-if="!props.isCollapsed"
      class="px-4 pb-1 text-left text-[10px] text-gray-400 dark:text-gray-500"
    >
      v{{ version }}
    </p>

    <!-- Bottom Section - Theme Toggle -->
    <div class="p-4 border-t-2 border-gray-200 dark:border-gray-700">
      <button
        @click="toggleTheme"
        class="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
        :class="props.isCollapsed ? 'justify-center' : ''"
        aria-label="Toggle theme"
      >
        <component :is="themeIcon" class="w-5 h-5 text-gray-900 dark:text-white flex-shrink-0" />
        <span v-if="!props.isCollapsed" class="text-sm text-gray-900 dark:text-white whitespace-nowrap">
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
