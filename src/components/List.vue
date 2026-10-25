<template>
  <ul
    ref="listElement"
    class="m-0 w-full list-none divide-y divide-default-light dark:divide-default-dark rounded-xl bg-list-bg-light p-0 dark:bg-list-bg-dark [&>li>*]:rounded-none"
    :class="{
      'border border-default-light dark:border-default-dark': border,
      'border-0': !border,
      'overflow-x-hidden overflow-y-auto': pagination,
      'overflow-hidden': !pagination,
    }"
    :aria-busy="pagination ? loading : undefined"
    :tabindex="pagination ? 0 : undefined"
  >
    <slot />
  </ul>
</template>

<script setup lang="ts">
import { useInfiniteScroll } from '@vueuse/core';
import { computed, effectScope, onScopeDispose, ref, watch } from 'vue';
import type { EffectScope } from 'vue';
import type { ListPagination } from '../types/List';

interface Props {
  border?: boolean;
  pagination?: ListPagination | null;
  scrollDistance?: number;
  loading?: boolean;
}

const {
  border = false,
  pagination,
  scrollDistance = 50,
  loading = false,
} = defineProps<Props>();

const emit = defineEmits<{
  request: [page: number];
}>();

const listElement = ref<HTMLUListElement | null>(null);
const distance = computed(() => Number.isFinite(scrollDistance) ? Math.max(0, scrollDistance) : 50);
let requestedPage: number | undefined;
let retryOnScroll = false;
let scrollScope: EffectScope | undefined;
let resetScroll: (() => void) | undefined;

const canRequestMore = (element: HTMLUListElement | null) => {
  if (!element || !pagination || loading || element.clientHeight <= 0) return false;

  const { current_page, last_page } = pagination;
  if (!Number.isInteger(current_page) || !Number.isInteger(last_page)
    || current_page < 1 || current_page >= last_page) return false;

  return requestedPage !== current_page + 1;
};

// VueUse 13 reads distance at initialization; recreate its scope when it changes.
watch(
  [distance, () => !!pagination],
  ([scrollDistance, enabled]) => {
    scrollScope?.stop();
    resetScroll = undefined;
    if (!enabled) return;

    scrollScope = effectScope();
    scrollScope.run(() => {
      let active = true;
      onScopeDispose(() => { active = false; });

      const { reset } = useInfiniteScroll(
        listElement,
        () => {
          if (!canRequestMore(listElement.value) || !pagination) return;
          requestedPage = pagination.current_page + 1;
          retryOnScroll = false;
          emit('request', requestedPage);
        },
        {
          distance: scrollDistance,
          direction: 'bottom',
          canLoadMore: element => active && canRequestMore(element),
          onScroll: () => {
            if (!retryOnScroll || loading) return;
            retryOnScroll = false;
            requestedPage = undefined;
            resetScroll?.();
          },
        },
      );
      resetScroll = reset;
    });
  },
  { immediate: true, flush: 'post' },
);

onScopeDispose(() => scrollScope?.stop());

watch(
  () => [pagination?.current_page, pagination?.last_page, loading] as const,
  ([currentPage, , isLoading], [previousPage, , wasLoading]) => {
    const pageChanged = currentPage !== previousPage;
    if (pageChanged) {
      requestedPage = undefined;
      retryOnScroll = false;
    }

    if (wasLoading && !isLoading && !pageChanged) {
      const pageLoaded = requestedPage === undefined
        || (currentPage !== undefined && currentPage >= requestedPage);
      // Failed requests can retry on the next scroll, but never in an automatic loop.
      if (!pageLoaded) {
        retryOnScroll = true;
        return;
      }
    }

    resetScroll?.();
  },
  { flush: 'post' },
);
</script>
