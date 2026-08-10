import { useStorage } from '@vueuse/core';

const sidebarCollapsedKey = 'sidebarCollapsed';
const isCollapsed = useStorage<boolean>(sidebarCollapsedKey, false);

export function useSidebar() {
  const toggleCollapse = () => {
    isCollapsed.value = !isCollapsed.value;
  };

  const expand = () => {
    isCollapsed.value = false;
  };

  return {
    isCollapsed,
    toggleCollapse,
    expand
  };
}
