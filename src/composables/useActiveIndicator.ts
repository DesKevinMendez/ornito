import { ref, onMounted, onUnmounted, watch, nextTick, type Ref } from 'vue';
import { useRoute } from 'vue-router';

export function useActiveIndicator(navRef: Readonly<Ref<HTMLElement | null>>) {
  const route = useRoute();
  const isInitialized = ref(false);
  const isAnimating = ref(false);
  const activeIndicatorStyle = ref({
    top: '0px',
    height: '0px',
    opacity: 0
  });
  let animationFrameId: number | null = null;

  const isItemVisible = (item: HTMLElement, nav: HTMLElement) => {
    const overflowParent = item.closest('.overflow-hidden') as HTMLElement | null;
    if (!overflowParent || !nav.contains(overflowParent)) return true;
    const parentRect = overflowParent.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    return itemRect.bottom <= parentRect.bottom + 1 && itemRect.top >= parentRect.top - 1;
  };

  const syncIndicatorPosition = () => {
    if (!navRef.value) return;

    const activeItem = navRef.value.querySelector('[data-active="true"]') as HTMLElement;
    if (activeItem && isItemVisible(activeItem, navRef.value)) {
      const navRect = navRef.value.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();

      if (itemRect.height > 0) {
        activeIndicatorStyle.value = {
          top: `${itemRect.top - navRect.top}px`,
          height: `${itemRect.height}px`,
          opacity: 1
        };
      } else {
        activeIndicatorStyle.value = { ...activeIndicatorStyle.value, opacity: 0 };
      }
    } else {
      activeIndicatorStyle.value = { ...activeIndicatorStyle.value, opacity: 0 };
    }
  };

  const trackAnimation = () => {
    isAnimating.value = true;
    const startTime = performance.now();
    const duration = 350;

    const tick = () => {
      syncIndicatorPosition();
      if (performance.now() - startTime < duration) {
        animationFrameId = requestAnimationFrame(tick);
      } else {
        isAnimating.value = false;
      }
    };
    animationFrameId = requestAnimationFrame(tick);
  };

  const updateIndicator = async (retries = 3) => {
    await nextTick();
    if (!navRef.value) return;

    const activeItem = navRef.value.querySelector('[data-active="true"]') as HTMLElement;
    if (activeItem) {
      const navRect = navRef.value.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();

      if (itemRect.height > 0) {
        activeIndicatorStyle.value = {
          top: `${itemRect.top - navRect.top}px`,
          height: `${itemRect.height}px`,
          opacity: 1
        };
      } else if (retries > 0) {
        requestAnimationFrame(() => updateIndicator(retries - 1));
      }
    } else if (retries > 0) {
      requestAnimationFrame(() => updateIndicator(retries - 1));
    } else {
      activeIndicatorStyle.value = { ...activeIndicatorStyle.value, opacity: 0 };
    }
  };

  onMounted(async () => {
    await nextTick();
    updateIndicator();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        isInitialized.value = true;
      });
    });
  });

  onUnmounted(() => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
  });

  watch(() => route.path, () => {
    updateIndicator();
  });

  return {
    isInitialized,
    isAnimating,
    activeIndicatorStyle,
    trackAnimation
  };
}
