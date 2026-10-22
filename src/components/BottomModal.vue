<template>
  <Teleport to="body">
    <Transition name="bottom-modal" appear>
      <dialog
        v-if="open"
        ref="dialogRef"
        class="fixed inset-0 z-[100] m-0 flex h-dvh w-full max-h-none max-w-none items-end justify-center overflow-hidden border-0 bg-transparent p-0 text-left focus:outline-none"
        :aria-label="title || 'Bottom modal'"
        @click.self="requestClose"
        @cancel.prevent="requestClose"
      >
        <section
          class="bottom-modal__panel flex max-h-[90dvh] w-full flex-col overflow-hidden rounded-t-3xl border-t border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900"
        >
          <header class="shrink-0">
            <div class="flex justify-center pt-3" aria-hidden="true">
              <span class="h-1 w-10 rounded-full bg-gray-300 dark:bg-gray-600" />
            </div>
            <div class="flex items-start justify-between gap-4 px-5 pb-4 pt-3">
              <div class="min-w-0 flex-1">
                <h2 v-if="title" class="text-lg font-semibold text-gray-900 dark:text-white">
                  {{ title }}
                </h2>
                <p v-if="subtitle" class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {{ subtitle }}
                </p>
              </div>
              <button
                class="shrink-0 rounded-lg p-1 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                type="button"
                aria-label="Close"
                @click="requestClose"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="border-t border-gray-200 dark:border-gray-700" />
          </header>

          <div class="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4">
            <slot />
          </div>

          <footer v-if="$slots.footer" class="shrink-0 border-t border-gray-200 px-5 py-4 dark:border-gray-700">
            <slot name="footer" />
          </footer>
        </section>
      </dialog>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = defineProps<{
  open: boolean;
  title?: string;
  subtitle?: string;
}>();

const emit = defineEmits<{
  (event: 'update:open', value: boolean): void;
  (event: 'close'): void;
}>();

const dialogRef = ref<HTMLDialogElement | null>(null);

function showDialog() {
  const dialog = dialogRef.value;
  if (props.open && dialog && !dialog.open) {
    dialog.showModal();
  }
}

function requestClose() {
  emit('update:open', false);
  emit('close');
}

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) showDialog();
  },
  { flush: 'post' },
);

onMounted(showDialog);

onBeforeUnmount(() => {
  if (dialogRef.value?.open) {
    dialogRef.value.close();
  }
});
</script>

<style scoped>
dialog::backdrop {
  background: rgb(0 0 0 / 38%);
  backdrop-filter: blur(8px);
  transition:
    background-color 360ms cubic-bezier(0.2, 0, 0, 1),
    backdrop-filter 360ms cubic-bezier(0.2, 0, 0, 1);
}

.bottom-modal-enter-from::backdrop,
.bottom-modal-leave-to::backdrop {
  background: transparent;
  backdrop-filter: blur(0);
}

.bottom-modal-enter-active {
  transition: opacity 360ms cubic-bezier(0.2, 0, 0, 1);
}

.bottom-modal-leave-active {
  transition: opacity 280ms ease-in;
}

.bottom-modal-leave-active::backdrop {
  transition-duration: 280ms;
  transition-timing-function: ease-in;
}

.bottom-modal__panel {
  transform: translateY(0);
}

.bottom-modal-enter-from,
.bottom-modal-leave-to {
  opacity: 0;
}

.bottom-modal-enter-active .bottom-modal__panel {
  transition: transform 360ms cubic-bezier(0.2, 0, 0, 1);
}

.bottom-modal-leave-active .bottom-modal__panel {
  transition: transform 280ms cubic-bezier(0.4, 0, 1, 1);
}

.bottom-modal-enter-from .bottom-modal__panel {
  transform: translateY(100%);
}

.bottom-modal-leave-to .bottom-modal__panel {
  transform: translateY(100%);
}

@media (prefers-reduced-motion: reduce) {
  .bottom-modal-enter-active,
  .bottom-modal-leave-active,
  .bottom-modal-enter-active .bottom-modal__panel,
  .bottom-modal-leave-active .bottom-modal__panel,
  dialog::backdrop {
    transition-duration: 1ms;
  }
}
</style>
