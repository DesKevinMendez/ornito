<script setup lang="ts">
import { useRoute } from "vue-router";
import { useSidebar } from "../../composables/useSidebar";
import { useActiveIndicator } from "../../composables/useActiveIndicator";
import { IconChevronDown } from "@tabler/icons-vue";
import type { RoutesLink } from "@/types/RoutesLink";

interface Props {
  isCollapsed: boolean;
  menuItems: RoutesLink[];
}

const props = defineProps<Props>();

const route = useRoute();
const { expand } = useSidebar();
const navRef = useTemplateRef<HTMLElement | null>('navRef');
const { isInitialized, isAnimating, activeIndicatorStyle, trackAnimation } = useActiveIndicator(navRef);

const expandedGroups = ref<Set<string>>(new Set());
const collapsedGroups = ref<Set<string>>(new Set());

const isChildActive = (item: RoutesLink) =>
  item.children?.some(c => route.path === c.route || route.path.startsWith(c.route + '/')) ?? false;

const isGroupExpanded = (item: RoutesLink) => {
  if (collapsedGroups.value.has(item.route)) return false;
  return expandedGroups.value.has(item.route) || isChildActive(item);
};

const toggleGroup = (routePath: string) => {
  if (props.isCollapsed) {
    expand();
    expandedGroups.value.add(routePath);
    collapsedGroups.value.delete(routePath);
    trackAnimation();
    return;
  }

  if (isGroupExpanded({ route: routePath } as RoutesLink)) {
    expandedGroups.value.delete(routePath);
    collapsedGroups.value.add(routePath);
  } else {
    expandedGroups.value.add(routePath);
    collapsedGroups.value.delete(routePath);
  }
  trackAnimation();
};

watch(() => route.path, () => {
  collapsedGroups.value.clear();
});

watch(() => props.isCollapsed, () => {
  trackAnimation();
});
</script>

<template>
  <nav ref="navRef" class="flex-1 px-3 py-2 relative">
    <div
      class="absolute left-3 right-3 bg-primary-600 dark:bg-primary-500 rounded-xl"
      :class="isInitialized ? (isAnimating ? 'transition-opacity duration-150 ease-out' : 'transition-all duration-300 ease-out') : ''"
      :style="{
        top: activeIndicatorStyle.top,
        height: activeIndicatorStyle.height,
        opacity: activeIndicatorStyle.opacity
      }"
    />
    <ul class="space-y-0.5 relative">
      <li v-for="item in props.menuItems" :key="item.route">
        <template v-if="item.children?.length">
          <button
            class="group relative flex items-center gap-3 py-2.5 px-3 rounded-xl w-full transition-all duration-200 outline-none"
            :class="[
              isChildActive(item)
                ? 'text-primary-500 dark:text-primary-400'
                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800/50'
            ]"
            @click="toggleGroup(item.route)"
          >
            <component
              :is="item.icon"
              class="w-5 h-5 shrink-0 transition-colors duration-200"
              :class="[
                isChildActive(item)
                  ? 'text-primary-500 dark:text-primary-400'
                  : 'text-gray-400 group-hover:text-gray-600 dark:text-gray-200 dark:group-hover:text-gray-100'
              ]"
            />
            <div
              class="overflow-hidden transition-all duration-300 flex items-center justify-between flex-1"
              :class="isCollapsed ? 'w-0' : 'w-48'"
            >
              <span :class="isChildActive(item) ? 'font-medium' : 'font-normal'" class="whitespace-nowrap">
                {{ item.name }}
              </span>
              <IconChevronDown
                class="w-4 h-4 shrink-0 transition-transform duration-300 ease-in-out"
                :class="isGroupExpanded(item) ? 'rotate-180' : ''"
              />
            </div>
          </button>

          <div
            class="grid transition-all duration-300 ease-in-out"
            :class="isGroupExpanded(item) && !isCollapsed ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
          >
            <div class="overflow-hidden">
              <ul class="pl-6 space-y-0.5 pt-1 pb-1">
                <li v-for="child in item.children" :key="child.route">
                  <SidebarItem
                    :to="child.route"
                    :name="child.name"
                    :icon="child.icon"
                    :is-collapsed="isCollapsed"
                    use-external-indicator
                  />
                </li>
              </ul>
            </div>
          </div>
        </template>

        <template v-else>
          <SidebarItem
            :to="item.route"
            :name="item.name"
            :icon="item.icon"
            :is-collapsed="isCollapsed"
            use-external-indicator
          />
        </template>
      </li>
    </ul>
  </nav>
</template>
