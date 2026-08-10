export declare const isMobile: globalThis.Ref<boolean, boolean>;
export declare const isTablet: globalThis.Ref<boolean, boolean>;
export declare const isDesktop: globalThis.Ref<boolean, boolean>;
export declare function useMobile(): {
    isMobile: globalThis.Ref<boolean, boolean>;
    isTablet: globalThis.Ref<boolean, boolean>;
    isDesktop: globalThis.Ref<boolean, boolean>;
    checkScreenSize: () => void;
};
