<script setup lang="ts">
import { IconX } from '@tabler/icons-vue';

const props = defineProps({
  message: {
    type: Object,
    required: true,
    validator: (value: {text: string}) => !!value.text,
  },
  error: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['expired', 'cancel']);

const lifetimeMs = 3000; // 3 seconds
const active = ref(false);

onMounted(() => {
  // Small delay to ensure the component is mounted before starting animation
  setTimeout(() => {
    active.value = true;
  }, 50);
});

setTimeout(() => {
  active.value = false;

  // Wait for animation to complete before emitting
  setTimeout(() => {
    emit('expired');
  }, 300); // Match the animation duration
}, lifetimeMs);

const cancel = (event?: Event) => {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  active.value = false;

  // Wait for animation to complete before emitting
  setTimeout(() => {
    emit('cancel', props.message);
  }, 300); // Match the animation duration
};
</script>

<template>
  <transition
    enter-active-class="animate-fade-in-up-fast"
    leave-active-class="animate-fade-out"
  >
          <div
        v-show="active"
        class="min-h-12 mb-4 snack-content flex items-center justify-between rounded-lg pointer-events-auto"
        :class="[
          error
            ? 'border border-danger-200 dark:border-danger-800 bg-danger-50 dark:bg-danger-900'
            : 'border border-success-200 dark:border-success-800 bg-success-50 dark:bg-success-900'
        ]">
      <div
        class="p-4 flex-1"
        :class="[
          error
            ? 'text-danger-700 dark:text-danger-100'
            : 'text-success-700 dark:text-success-100'
        ]">
        {{ message.text }}
      </div>
      <div>
        <button
          class="px-3 py-2 text-center text-sm uppercase font-semibold cursor-pointer hover:opacity-70 transition-opacity"
          :class="[
            error
              ? 'text-danger-700 dark:text-danger-100'
              : 'text-success-700 dark:text-success-100'
          ]"
          @click.stop="cancel"
        >
          <IconX name="close" class="w-4 h-4" />
        </button>
      </div>
    </div>
  </transition>
</template>

<style>
@reference "../../style.css";

.snack-content {
  @apply inline-flex items-center justify-between self-end shadow rounded
 overflow-hidden w-full md:w-auto md:max-w-full
  pointer-events-auto;
  z-index: 1000;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}

.animate-fade-in-up-fast {
  animation: fade-in-up 0.3s ease-out;
}

.animate-fade-out {
  animation: fade-out 0.3s ease-in-out;
}
</style>
