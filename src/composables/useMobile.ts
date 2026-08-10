import { ref, onMounted, onUnmounted } from 'vue';

export const isMobile = ref(false);
export const isTablet = ref(false);
export const isDesktop = ref(false);

export function useMobile() {
  const checkScreenSize = () => {
    const width = window.innerWidth;

    isMobile.value = width < 1024;
    isTablet.value = width >= 768 && width < 1024;
    isDesktop.value = width >= 1024;
  };

  onMounted(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkScreenSize);
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
    checkScreenSize
  };
}
