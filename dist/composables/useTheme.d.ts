export declare function initTheme(): void;
export declare function useTheme(): {
    isDarkMode: import('@vueuse/core').RemovableRef<boolean>;
    toggleTheme: () => void;
    applyTheme: () => void;
};
