<script setup lang="ts">
import { useActiveIndicator } from "../composables/useActiveIndicator";

interface SidebarItem {
  name: string;
  icon: any;
  to: string;
}

interface Props {
  items: SidebarItem[];
}

defineProps<Props>();

const navRef = useTemplateRef<HTMLElement | null>('navRef');
const { isInitialized, activeIndicatorStyle } = useActiveIndicator(navRef);
</script>

<template>
  <nav
    ref="navRef"
    class="relative space-y-2 flex gap-4 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-hidden"
  >
    <div
      class="absolute left-0 right-0 bg-primary-600 dark:bg-primary-500 rounded-xl hidden lg:block"
      :class="isInitialized ? 'transition-all duration-300 ease-out' : ''"
      :style="{
        top: activeIndicatorStyle.top,
        height: activeIndicatorStyle.height,
        opacity: activeIndicatorStyle.opacity
      }"
    />
    <SidebarItem
      v-for="item in items"
      :key="item.name"
      :name="item.name"
      :icon="item.icon"
      text-fit-content
      :is-collapsed="false"
      :to="item.to"
      use-external-indicator
    />
  </nav>
</template>
