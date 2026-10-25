<template>
  <nav class="flex mb-6" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="inline-flex items-center"
      >
        <div v-if="index > 0" class="flex items-center">
          <svg
            class="w-3 h-3 text-breadcrumb-separator-light dark:text-breadcrumb-separator-dark mx-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </div>

        <RouterLink
          v-if="item.to && index < items.length - 1"
          :to="item.to"
          class="inline-flex items-center text-sm font-medium text-breadcrumb-link-light dark:text-breadcrumb-link-dark hover:text-breadcrumb-link-hover-light dark:hover:text-breadcrumb-link-hover-dark transition-colors"
        >
          <component
            v-if="item.icon"
            :is="item.icon"
            class="w-4 h-4 mr-2"
          />
          {{ item.label }}
        </RouterLink>

        <span
          v-else
          class="inline-flex items-center text-sm font-medium"
          :class="index === items.length - 1 ? 'text-breadcrumb-current-light dark:text-breadcrumb-current-dark' : 'text-breadcrumb-item-light dark:text-breadcrumb-item-dark'"
        >
          <component
            v-if="item.icon"
            :is="item.icon"
            class="w-4 h-4 mr-2"
          />
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { BreadcrumbItem } from '../types/Breadcrumb';

interface Props {
  items: BreadcrumbItem[];
}

defineProps<Props>();
</script>
