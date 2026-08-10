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
          ? 'bg-primary-600 text-white dark:bg-primary-500'
          : useExternalIndicator
            ? 'bg-primary-600 text-white dark:bg-primary-500 lg:bg-transparent lg:dark:bg-transparent'
            : 'text-white'
        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800/50'
    ]"
  >
    <component
      :is="icon"
      class="w-5 h-5 shrink-0 transition-colors duration-200"
      :class="[
        isActive
          ? 'text-white'
          : 'text-gray-400 group-hover:text-gray-600 dark:text-gray-200 dark:group-hover:text-gray-100'
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
            ? 'bg-white/20 text-white'
            : 'bg-primary-600 text-white dark:bg-primary-500'
        ]"
      >
        {{ badgeText }}
      </span>
    </div>
  </RouterLink>
</template>
