<template>
  <nav class="bg-white border-b-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700 px-6 h-20 flex items-center">
    <div class="flex items-center justify-between w-full">
      <!-- Left Section - Mobile Menu Button -->
      <div class="flex gap-4">
        <div class="flex items-center lg:hidden">
          <button
            @click="$emit('toggle-mobile-sidebar')"
            class="w-10 h-10 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
          >
            <IconMenu2 class="w-5 h-5 text-gray-900 dark:text-white" />
          </button>
        </div>
        <!-- Search Bar -->
        <!-- <div class="relative hidden md:block">
                    <FormInput
                        v-model="searchQuery"
                        label=""
                        id="search"
                        name="search"
                        placeholder="Search.."
                        :rightIcon="IconSearch"
                        small
                    />
                </div> -->
      </div>

      <!-- Right Section - Utility Actions -->
      <div class="flex items-center space-x-4">
        <slot name="right" />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { IconMenu2 } from "@tabler/icons-vue";

defineEmits<{
  "toggle-mobile-sidebar": [];
}>();
</script>
