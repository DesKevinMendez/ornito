<template>
  <Teleport to="body">
    <Transition
      name="bottom-modal"
      :duration="transitionDuration"
      appear
      @after-leave="restoreModalState"
    >
      <div
        v-if="open"
        ref="overlayRef"
        class="bottom-modal__overlay fixed inset-0 z-[100] flex h-dvh w-full items-end justify-center overflow-hidden text-left focus:outline-none"
        role="dialog"
        aria-modal="true"
        :aria-label="title || 'Bottom modal'"
        tabindex="-1"
        @keydown="trapFocus"
      >
        <div class="bottom-modal__scrim absolute inset-0" aria-hidden="true" @click="requestClose" />
        <section
          class="bottom-modal__panel relative z-10 flex w-full max-w-none flex-col overflow-hidden rounded-t-3xl bg-white text-[#1d1b20] shadow-[0_-2px_8px_rgba(0,0,0,0.12)] dark:bg-[#1d1b20] dark:text-[#e6e1e5]"
        >
          <header class="shrink-0">
            <div class="flex items-start justify-between gap-4 px-6 pb-5 pt-6">
              <div class="min-w-0 flex-1">
                <h2 v-if="title" class="text-base font-medium text-[#1d1b20] dark:text-[#e6e1e5]">
                  {{ title }}
                </h2>
                <p v-if="subtitle" class="mt-1 text-sm text-[#49454f] dark:text-[#cac4d0]">
                  {{ subtitle }}
                </p>
              </div>
              <button
                class="shrink-0 rounded-full p-2 text-[#49454f] hover:bg-black/5 hover:text-[#1d1b20] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49454f] dark:text-[#cac4d0] dark:hover:bg-white/10 dark:hover:text-[#e6e1e5] dark:focus-visible:ring-[#cac4d0]"
                type="button"
                aria-label="Close"
                @click="requestClose"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </header>

          <div class="bottom-modal__content min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4">
            <slot />
          </div>

          <footer
            v-if="$slots.footer"
            class="shrink-0 px-5 py-4"
            :class="props.showFooterDivider && 'border-t border-[#79747e]/30 dark:border-[#938f99]/30'"
          >
            <slot name="footer" />
          </footer>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = withDefaults(defineProps<{
  open: boolean;
  title?: string;
  subtitle?: string;
  showFooterDivider?: boolean;
}>(), {
  showFooterDivider: true,
});

const emit = defineEmits<{
  (event: 'update:open', value: boolean): void;
  (event: 'close'): void;
}>();

const overlayRef = ref<HTMLDivElement | null>(null);
const motionPreference = typeof window !== 'undefined' && typeof window.matchMedia === 'function'
  ? window.matchMedia('(prefers-reduced-motion: reduce)')
  : null;
const prefersReducedMotion = ref(motionPreference?.matches ?? false);
const transitionDuration = computed(() =>
  prefersReducedMotion.value ? 1 : { enter: 460, leave: 320 },
);
const focusableSelector = [
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

let previouslyFocusedElement: HTMLElement | null = null;
let originalHtmlOverflow = '';
let originalBodyOverflow = '';
let originalBodyPaddingRight = '';
let modalActive = false;

function updateMotionPreference(event: MediaQueryListEvent) {
  prefersReducedMotion.value = event.matches;
}

function getFocusableElements(overlay: HTMLDivElement) {
  return Array.from(overlay.querySelectorAll<HTMLElement>(focusableSelector))
    .filter((element) => element.getClientRects().length > 0);
}

function activateModal() {
  const overlay = overlayRef.value;
  if (!props.open || !overlay || modalActive) return;

  previouslyFocusedElement = document.activeElement instanceof HTMLElement
    ? document.activeElement
    : null;
  originalHtmlOverflow = document.documentElement.style.overflow;
  originalBodyOverflow = document.body.style.overflow;
  originalBodyPaddingRight = document.body.style.paddingRight;

  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  if (scrollbarWidth > 0) {
    const bodyPaddingRight = Number.parseFloat(window.getComputedStyle(document.body).paddingRight) || 0;
    document.body.style.paddingRight = `${bodyPaddingRight + scrollbarWidth}px`;
  }

  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  modalActive = true;

  const initialFocus = getFocusableElements(overlay)[0];
  (initialFocus ?? overlay).focus({ preventScroll: true });
}

function restoreModalState() {
  if (!modalActive) return;

  document.documentElement.style.overflow = originalHtmlOverflow;
  document.body.style.overflow = originalBodyOverflow;
  document.body.style.paddingRight = originalBodyPaddingRight;
  modalActive = false;

  if (previouslyFocusedElement?.isConnected) {
    previouslyFocusedElement.focus({ preventScroll: true });
  }
  previouslyFocusedElement = null;
}

function trapFocus(event: KeyboardEvent) {
  const overlay = overlayRef.value;
  if (!overlay) return;

  if (event.key === 'Escape') {
    event.preventDefault();
    requestClose();
    return;
  }

  if (event.key !== 'Tab') return;

  const focusableElements = getFocusableElements(overlay);
  const first = focusableElements[0];
  const last = focusableElements[focusableElements.length - 1];

  if (!first || !last) {
    event.preventDefault();
    overlay.focus({ preventScroll: true });
  } else if (event.shiftKey && (document.activeElement === first || !overlay.contains(document.activeElement))) {
    event.preventDefault();
    last.focus({ preventScroll: true });
  } else if (!event.shiftKey && (document.activeElement === last || !overlay.contains(document.activeElement))) {
    event.preventDefault();
    first.focus({ preventScroll: true });
  }
}

function requestClose() {
  emit('update:open', false);
  emit('close');
}

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) activateModal();
  },
  { flush: 'post' },
);

onMounted(() => {
  motionPreference?.addEventListener('change', updateMotionPreference);
  activateModal();
});

onBeforeUnmount(() => {
  motionPreference?.removeEventListener('change', updateMotionPreference);
  restoreModalState();
});
</script>

<style scoped>
.bottom-modal__scrim {
  background-color: rgb(0 0 0 / 32%);
  backdrop-filter: blur(8px);
  transition:
    background-color 360ms cubic-bezier(0.2, 0, 0, 1),
    backdrop-filter 360ms cubic-bezier(0.2, 0, 0, 1);
}

.bottom-modal-enter-active .bottom-modal__scrim {
  transition:
    background-color 360ms cubic-bezier(0.2, 0, 0, 1),
    backdrop-filter 360ms cubic-bezier(0.2, 0, 0, 1);
}

.bottom-modal-leave-active .bottom-modal__scrim {
  transition:
    background-color 280ms ease-in,
    backdrop-filter 280ms ease-in;
}

.bottom-modal-enter-from .bottom-modal__scrim,
.bottom-modal-leave-to .bottom-modal__scrim {
  background-color: transparent;
  backdrop-filter: blur(0);
}

.bottom-modal__overlay {
  isolation: isolate;
}

.bottom-modal__panel {
  transform: translateY(0);
  max-height: calc(100dvh - 72px);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
}

.bottom-modal-enter-active .bottom-modal__panel {
  transition: transform 420ms cubic-bezier(0.2, 0, 0, 1);
}

.bottom-modal-leave-active .bottom-modal__panel {
  transition: transform 280ms cubic-bezier(0.4, 0, 1, 1);
}

.bottom-modal-enter-from .bottom-modal__panel,
.bottom-modal-leave-to .bottom-modal__panel {
  transform: translateY(100%);
}

@media (min-width: 641px) {
  .bottom-modal__panel {
    max-height: calc(100dvh - 56px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .bottom-modal-enter-active .bottom-modal__panel,
  .bottom-modal-leave-active .bottom-modal__panel,
  .bottom-modal__scrim,
  .bottom-modal-enter-active .bottom-modal__scrim,
  .bottom-modal-leave-active .bottom-modal__scrim {
    transition-duration: 1ms;
  }
}
</style>
