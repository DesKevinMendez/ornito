<template>
  <nav class="bg-navbar-bg-light border-b-2 border-default-light dark:border-default-dark dark:bg-navbar-bg-dark px-6 h-20 flex items-center">
    <div class="flex items-center justify-between w-full">
      <!-- Left Section - Mobile Menu Button -->
      <div class="flex gap-4">
        <div class="flex items-center lg:hidden">
          <button
            @click="$emit('toggle-mobile-sidebar')"
            class="w-10 h-10 bg-navbar-mobile-menu-bg-light hover:bg-navbar-mobile-menu-bg-hover-light dark:bg-navbar-mobile-menu-bg-dark dark:hover:bg-navbar-mobile-menu-bg-hover-dark rounded-lg flex items-center justify-center transition-colors"
          >
            <IconMenu2 class="w-5 h-5 text-navbar-mobile-menu-icon-text-light dark:text-navbar-mobile-menu-icon-text-dark" />
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
