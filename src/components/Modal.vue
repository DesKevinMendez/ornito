<template>
  <Teleport to="body">
  <Transition name="modal-fade" appear>
    <dialog
      v-if="open"
      ref="dialogRef"
      class="rutely-modal fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-0 m-0 border-0 w-full h-full focus:outline-none"
      @close="emitClose"
      @click.self="handleBackdropClick"
      @keydown="handleKeydown"
    >
      <div
        class="relative bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full p-6 transform transition-all duration-300 border border-gray-200 dark:border-gray-700"
        :class="[sizeClass, open ? 'scale-100 opacity-100' : 'scale-95 opacity-0']"
      >
        <div >
          <div class="flex items-start justify-between">
            <div class="flex-1 min-w-0">
              <div v-if="title" class="text-lg font-semibold text-gray-900 dark:text-white">{{ title }}</div>
              <div v-if="subtitle" class="text-sm text-gray-600 dark:text-gray-400 mt-1">{{ subtitle }}</div>
            </div>
            <button
              @click="emitClose"
              aria-label="Cerrar"
              class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-gray-500 ml-4"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <Divider />
        </div>
        <div class="overflow-y-auto max-h-[70vh] p-0.5 -m-0.5">
          <slot />
        </div>
      </div>
    </dialog>
  </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue';

const props = defineProps<{ open: boolean; title?: string; subtitle?: string; size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' }>();

const sizeClass = computed(() => {
  const sizes: Record<string, string> = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    '2xl': 'max-w-6xl',
  };
  return sizes[props.size ?? 'md'];
});
const emit = defineEmits(['update:open', 'close']);
const dialogRef = ref<HTMLDialogElement | null>(null);

function emitClose() {
  emit('update:open', false);
  emit('close');
}

function handleBackdropClick(e: MouseEvent) {
  if (e.target === dialogRef.value) {
    emitClose();
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    emitClose();
  }
}

watch(
  () => props.open,
  async (val) => {
    if (val) {
      dialogRef.value?.showModal();
      await nextTick();
      dialogRef.value?.focus();
    } else {
      dialogRef.value?.close();
    }
  }
);

onMounted(async () => {
  if (props.open) {
    dialogRef.value?.showModal();
    await nextTick();
    dialogRef.value?.focus();
  }
});

onBeforeUnmount(() => {
  if (dialogRef.value?.open) {
    dialogRef.value.close();
  }
});
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.modal-fade-enter-to,
.modal-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
.rutely-modal:focus,
.rutely-modal:focus-visible {
  outline: none !important;
  box-shadow: none !important;
}
</style>

<style>
.rutely-modal[open] {
  animation: none !important;
}
</style>
