<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { IconArrowUpRight } from '@tabler/icons-vue';

interface Props {
  to: string;
  name: string;
  icon: any;
  isCollapsed: boolean;
  hasExternalIcon?: boolean;
  hasBadge?: boolean;
  badgeText?: string;
  textFitContent?: boolean;
  showActiveBackground?: boolean;
  useExternalIndicator?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  hasExternalIcon: false,
  hasBadge: false,
  badgeText: '',
  textFitContent: false,
  showActiveBackground: false,
  useExternalIndicator: false
});

const route = useRoute();

const isActive = computed(() => {
  return route.path === props.to;
});
</script>

<template>
  <RouterLink
    :to="to"
    :data-active="isActive"
    class="group relative flex items-center gap-3 py-2.5 px-3 rounded-xl w-full transition-all duration-200 focus:outline-none"
    :class="[
      isActive
        ? showActiveBackground
          ? 'bg-sidebar-tab-bg-active-light text-sidebar-tab-text-active-light dark:bg-sidebar-tab-bg-active-dark dark:text-sidebar-tab-text-active-dark'
          : useExternalIndicator
            ? 'bg-sidebar-tab-bg-active-light text-sidebar-tab-text-active-light dark:bg-sidebar-tab-bg-active-dark dark:text-sidebar-tab-text-active-dark lg:bg-transparent lg:dark:bg-transparent'
            : 'text-sidebar-tab-text-active-light dark:text-sidebar-tab-text-active-dark'
        : 'text-sidebar-tab-text-inactive-light hover:bg-sidebar-tab-bg-hover-light dark:text-sidebar-tab-text-inactive-dark dark:hover:bg-sidebar-tab-bg-hover-dark'
    ]"
  >
    <component
      :is="icon"
      class="w-5 h-5 shrink-0 transition-colors duration-200"
      :class="[
        isActive
          ? 'text-sidebar-tab-text-active-light dark:text-sidebar-tab-text-active-dark'
          : 'text-sidebar-tab-icon-text-light group-hover:text-sidebar-tab-icon-text-hover-light dark:text-sidebar-tab-icon-text-dark dark:group-hover:text-sidebar-tab-icon-text-hover-dark'
      ]"
    />
    <div
      class="overflow-hidden transition-all duration-300 flex items-center gap-2"
      :class="isCollapsed ? 'w-0' : textFitContent ? 'w-fit' : 'w-48'"
    >
      <span
        class="whitespace-nowrap"
        :class="isActive ? 'font-medium' : 'font-normal'"
      >
        {{ name }}
      </span>
      <IconArrowUpRight
        v-if="hasExternalIcon"
        class="w-3.5 h-3.5 shrink-0 opacity-50"
      />
      <span
        v-if="hasBadge"
        class="text-[10px] font-medium px-1.5 py-0.5 rounded-full shrink-0 tabular-nums"
        :class="[
          isActive
            ? 'bg-sidebar-tab-badge-bg-active-light text-sidebar-tab-badge-text-light dark:bg-sidebar-tab-badge-bg-active-dark dark:text-sidebar-tab-badge-text-dark'
            : 'bg-sidebar-tab-badge-bg-light text-sidebar-tab-badge-text-light dark:bg-sidebar-tab-badge-bg-dark dark:text-sidebar-tab-badge-text-dark'
        ]"
      >
        {{ badgeText }}
      </span>
    </div>
  </RouterLink>
</template>
