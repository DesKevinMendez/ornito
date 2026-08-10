<template>
  <div class="space-y-4">
    <!-- Tab Navigation -->
    <div class="h-16 flex items-center transition-transform duration-300">
      <div
        class="flex space-x-2 bg-gray-200 dark:bg-gray-800 rounded-lg py-2 px-3 w-full relative"
      >
        <!-- Animated background slider -->
        <div
          class="absolute top-1 bottom-1 bg-white dark:bg-gray-700 rounded-lg transition-all duration-300 ease-in-out shadow-sm"
          :style="{
            left: `${
              1 + activeTabIndex * ((98 - 98 / tabs.length) / (tabs.length - 1))
            }%`,
            width: `${98 / tabs.length}%`,
          }"
        ></div>

        <!-- Tab buttons -->
        <button
          v-for="(tab, index) in tabs"
          :key="tab.id"
          class="relative flex-1 py-2 px-3 text-sm font-medium transition-colors duration-200 z-10"
          :class="[
            activeTabIndex === index
              ? 'text-gray-900 dark:text-white'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300',
          ]"
          @click="selectTab(index)"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <Transition name="tab-content" mode="out-in" appear>
        <div :key="activeTabIndex" class="tab-panel">
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
import { computed } from "vue";

interface Tab {
  id: string;
  label: string;
}

interface Props {
  tabs: Tab[];
  modelValue?: number;
}

interface Emits {
  (e: "update:modelValue", value: number): void;
  (e: "change", tab: Tab, index: number): void;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
});

const emit = defineEmits<Emits>();

const activeTabIndex = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

function selectTab(index: number) {
  if (activeTabIndex.value !== index) {
    activeTabIndex.value = index;
    emit("change", props.tabs[index], index);
  }
}
</script>

<style scoped>
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
</style>
