<template>
  <div class="space-y-4">
    <!-- Tab Navigation -->
    <div :class="variant === 'pills' ? 'flex items-center' : 'h-16 flex items-center transition-transform duration-300'">
      <div
        ref="tabList"
        role="tablist"
        :aria-label="label"
        class="relative flex"
        :class="variant === 'pills'
          ? 'pill-tab-list flex-wrap items-center gap-2'
          : 'w-full space-x-2 rounded-lg bg-gray-200 px-3 py-2 dark:bg-gray-800'"
      >
        <!-- Animated background slider -->
        <div
          v-if="variant === 'segmented' && activeTab"
          aria-hidden="true"
          class="absolute top-1 bottom-1 rounded-lg bg-white shadow-sm transition-all duration-300 ease-in-out motion-reduce:transition-none dark:bg-gray-700"
          :style="sliderStyle"
        ></div>

        <div
          v-if="variant === 'pills' && pillBounds"
          data-tabs-indicator="pills"
          aria-hidden="true"
          class="pill-indicator pointer-events-none absolute left-0 top-0 rounded-xl bg-primary-600 transition-all duration-300 ease-in-out motion-reduce:transition-none"
          :style="pillSliderStyle"
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
          :class="[
            variant === 'pills' ? 'shrink-0 rounded-xl px-4 py-2.5' : 'flex-1 rounded-lg px-3 py-2',
            tab.disabled
              ? 'cursor-not-allowed text-gray-400 dark:text-gray-600'
              : variant === 'pills'
                ? activeTabIndex === index
                  ? ['cursor-pointer text-white', !pillBounds && 'bg-primary-600 hover:bg-primary-700']
                  : 'cursor-pointer text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white'
                : activeTabIndex === index
                  ? 'cursor-pointer text-gray-900 dark:text-white'
                  : 'cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300',
          ]"
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
const pillBounds = ref<{ left: number; top: number; width: number; height: number } | null>(null);

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

const pillSliderStyle = computed(() => pillBounds.value ? {
  transform: `translate3d(${pillBounds.value.left}px, ${pillBounds.value.top}px, 0)`,
  width: `${pillBounds.value.width}px`,
  height: `${pillBounds.value.height}px`,
} : {});

function updatePillIndicator() {
  if (props.variant !== 'pills' || !activeTab.value || activeTab.value.disabled) {
    pillBounds.value = null;
    return;
  }

  // Query DOM order: Vue does not guarantee the order of refs collected by v-for.
  const button = tabList.value?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[activeTabIndex.value];
  if (!button || !button.offsetWidth || !button.offsetHeight) {
    pillBounds.value = null;
    return;
  }

  const nextBounds = {
    left: button.offsetLeft,
    top: button.offsetTop,
    width: button.offsetWidth,
    height: button.offsetHeight,
  };
  const previous = pillBounds.value;
  if (!previous || previous.left !== nextBounds.left || previous.top !== nextBounds.top
    || previous.width !== nextBounds.width || previous.height !== nextBounds.height) {
    pillBounds.value = nextBounds;
  }
}

onMounted(updatePillIndicator);
watch(
  [activeTabIndex, () => props.variant, () => props.tabs.map(tab => [tab.id, tab.label, tab.icon, tab.disabled])],
  updatePillIndicator,
  { flush: 'post' },
);
useResizeObserver(
  computed(() => props.variant === 'pills' ? [tabList.value, ...tabButtons.value] : []),
  updatePillIndicator,
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
