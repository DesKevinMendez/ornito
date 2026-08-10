import { useStorage } from '@vueuse/core';

const darkModeKey = 'darkMode';
const isDarkMode = useStorage<boolean>(darkModeKey, true);

const applyTheme = () => {
  if (typeof window === 'undefined') return;
  
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

export function initTheme() {
  applyTheme();
}

export function useTheme() {
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    applyTheme();
  };

  return {
    isDarkMode,
    toggleTheme,
    applyTheme
  };
}

