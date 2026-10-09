<template>
  <div class="space-y-4">
    <!-- Tab Navigation -->
    <div :class="variant === 'segmented'
      ? 'h-16 flex items-center transition-transform duration-300'
      : ['flex items-center', variant === 'underline' && 'overflow-x-auto']">
      <div
        ref="tabList"
        role="tablist"
        :aria-label="label"
        class="relative flex"
        :class="tabListClasses"
      >
        <!-- Animated background slider -->
        <div
          v-if="variant === 'segmented' && activeTab"
          aria-hidden="true"
          class="absolute top-1 bottom-1 rounded-lg bg-white shadow-sm transition-all duration-300 ease-in-out motion-reduce:transition-none dark:bg-gray-700"
          :style="sliderStyle"
        ></div>

        <div
          v-if="variant !== 'segmented' && indicatorBounds"
          :data-tabs-indicator="variant"
          aria-hidden="true"
          class="pointer-events-none absolute left-0 top-0 bg-primary-600 transition-all duration-300 ease-in-out motion-reduce:transition-none"
          :class="variant === 'pills' ? 'pill-indicator rounded-xl' : 'rounded-full dark:bg-primary-400'"
          :style="measuredIndicatorStyle"
        ></div>

        <!-- Tab buttons -->
        <button
          v-for="(tab, index) in tabs"
          ref="tabButtons"
          :key="tab.id"
          :id="`${componentId}-tab-${index}`"
          type="button"
          role="tab"
          :aria-selected="activeTabIndex === index"
          :aria-controls="`${componentId}-panel-${index}`"
          :disabled="tab.disabled"
          :tabindex="index === focusableTabIndex && !tab.disabled ? 0 : -1"
          class="relative z-10 inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 motion-reduce:transition-none dark:focus-visible:ring-offset-gray-950"
          :class="[tabButtonClasses, tabStateClasses(tab, index)]"
          @click="selectTab(index)"
          @keydown="handleKeydown($event, index)"
        >
          <component
            :is="toRaw(tab.icon)"
            v-if="tab.icon"
            class="h-4 w-4 shrink-0"
            aria-hidden="true"
            focusable="false"
          />
          <span>{{ tab.label }}</span>
        </button>
      </div>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <Transition name="tab-content" mode="out-in" appear>
        <div
          v-if="activeTab"
          :id="`${componentId}-panel-${activeTabIndex}`"
          :key="activeTabIndex"
          role="tabpanel"
          :aria-labelledby="`${componentId}-tab-${activeTabIndex}`"
          tabindex="0"
          class="tab-panel"
        >
          <slot
            :name="`tab-${activeTabIndex}`"
            :active-tab="tabs[activeTabIndex]"
            :active-tab-index="activeTabIndex"
          >
            <!-- Default content if no slot is provided -->
            <div class="text-gray-500 dark:text-gray-400 text-center py-8">
              No content available for this tab
            </div>
          </slot>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResizeObserver } from '@vueuse/core';
import { computed, onMounted, ref, toRaw, useId, watch } from 'vue';
import type { Tab, TabsVariant } from '../types/Tabs';

interface Props {
  tabs: Tab[];
  modelValue?: number;
  variant?: TabsVariant;
  label?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  variant: 'segmented',
  label: 'Tabs',
});

const emit = defineEmits<{
  'update:modelValue': [value: number];
  change: [tab: Tab, index: number];
}>();

const componentId = useId();
const tabList = ref<HTMLDivElement | null>(null);
const tabButtons = ref<HTMLButtonElement[]>([]);
const indicatorBounds = ref<{ left: number; top: number; width: number; height: number } | null>(null);

const tabListClasses = computed(() => ({
  segmented: 'w-full space-x-2 rounded-lg bg-gray-200 px-3 py-2 dark:bg-gray-800',
  pills: 'pill-tab-list flex-wrap items-center gap-2',
  underline: 'w-full min-w-max items-center gap-2 border-b border-gray-200 dark:border-gray-800',
})[props.variant]);
const tabButtonClasses = computed(() => ({
  segmented: 'flex-1 rounded-lg px-3 py-2',
  pills: 'shrink-0 rounded-xl px-4 py-2.5',
  underline: '-mb-px shrink-0 whitespace-nowrap rounded-t-lg border-b-2 px-4 py-2.5 focus-visible:ring-inset',
})[props.variant]);

const activeTabIndex = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const activeTab = computed(() => props.tabs[activeTabIndex.value]);
const focusableTabIndex = computed(() => activeTab.value && !activeTab.value.disabled
  ? activeTabIndex.value
  : props.tabs.findIndex(tab => !tab.disabled));
const sliderStyle = computed(() => ({
  left: `${1 + activeTabIndex.value * (98 / props.tabs.length)}%`,
  width: `${98 / props.tabs.length}%`,
}));

const measuredIndicatorStyle = computed(() => indicatorBounds.value ? {
  transform: `translate3d(${indicatorBounds.value.left}px, ${props.variant === 'underline'
    ? indicatorBounds.value.top + indicatorBounds.value.height - 2
    : indicatorBounds.value.top}px, 0)`,
  width: `${indicatorBounds.value.width}px`,
  height: `${props.variant === 'underline' ? 2 : indicatorBounds.value.height}px`,
} : {});

function tabStateClasses(tab: Tab, index: number) {
  const selected = activeTabIndex.value === index;
  const underlineBorder = props.variant === 'underline'
    ? selected && !tab.disabled && !indicatorBounds.value
      ? 'border-primary-600 dark:border-primary-400'
      : 'border-transparent'
    : '';
  if (tab.disabled) return [underlineBorder, 'cursor-not-allowed text-gray-400 dark:text-gray-600'];
  if (props.variant === 'underline') return [underlineBorder, selected
    ? 'cursor-pointer text-primary-600 dark:text-primary-400'
    : 'cursor-pointer text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white'];
  if (props.variant === 'pills') return selected
    ? ['cursor-pointer text-white', !indicatorBounds.value && 'bg-primary-600 hover:bg-primary-700']
    : 'cursor-pointer text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white';
  return selected
    ? 'cursor-pointer text-gray-900 dark:text-white'
    : 'cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300';
}

function updateMeasuredIndicator() {
  if (props.variant === 'segmented' || !activeTab.value || activeTab.value.disabled) {
    indicatorBounds.value = null;
    return;
  }

  // Query DOM order: Vue does not guarantee the order of refs collected by v-for.
  const button = tabList.value?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[activeTabIndex.value];
  if (!button || !button.offsetWidth || !button.offsetHeight) {
    indicatorBounds.value = null;
    return;
  }

  const nextBounds = {
    left: button.offsetLeft,
    top: button.offsetTop,
    width: button.offsetWidth,
    height: button.offsetHeight,
  };
  const previous = indicatorBounds.value;
  if (!previous || previous.left !== nextBounds.left || previous.top !== nextBounds.top
    || previous.width !== nextBounds.width || previous.height !== nextBounds.height) {
    indicatorBounds.value = nextBounds;
  }
}

onMounted(updateMeasuredIndicator);
watch(
  [activeTabIndex, () => props.variant, () => props.tabs.map(tab => [tab.id, tab.label, tab.icon, tab.disabled])],
  updateMeasuredIndicator,
  { flush: 'post' },
);
useResizeObserver(
  computed(() => props.variant !== 'segmented' ? [tabList.value, ...tabButtons.value] : []),
  updateMeasuredIndicator,
  { box: 'border-box' },
);

function selectTab(index: number) {
  if (!props.tabs[index] || props.tabs[index].disabled) return;
  if (activeTabIndex.value !== index) {
    activeTabIndex.value = index;
    emit("change", props.tabs[index], index);
  }
}

function handleKeydown(event: KeyboardEvent, index: number) {
  const enabledIndexes = props.tabs.flatMap((tab, index) => tab.disabled ? [] : [index]);
  if (!enabledIndexes.length) return;

  const position = enabledIndexes.indexOf(index);
  let nextIndex: number;
  switch (event.key) {
    case 'ArrowRight':
      nextIndex = enabledIndexes[(position + 1) % enabledIndexes.length];
      break;
    case 'ArrowLeft':
      nextIndex = enabledIndexes[(position - 1 + enabledIndexes.length) % enabledIndexes.length];
      break;
    case 'Home':
      nextIndex = enabledIndexes[0];
      break;
    case 'End':
      nextIndex = enabledIndexes[enabledIndexes.length - 1];
      break;
    default:
      return;
  }

  event.preventDefault();
  selectTab(nextIndex);
  tabList.value?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[nextIndex]?.focus();
}
</script>

<style scoped>
.pill-tab-list:has([role="tab"][aria-selected="true"]:hover) .pill-indicator {
  background-color: var(--ds-color-primary-700);
}

/* Tab content transition animations */
.tab-content-enter-active,
.tab-content-leave-active {
  transition: all 0.3s ease-in-out;
}

.tab-content-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.tab-content-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.tab-content-enter-to,
.tab-content-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/* Ensure smooth transitions */
.tab-panel {
  width: 100%;
}

@media (prefers-reduced-motion: reduce) {
  .tab-content-enter-active,
  .tab-content-leave-active {
    transition: none;
  }

  .tab-content-enter-from,
  .tab-content-leave-to {
    transform: none;
  }
}
</style>
