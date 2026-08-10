import { Ref } from 'vue';
export declare function useActiveIndicator(navRef: Readonly<Ref<HTMLElement | null>>): {
    isInitialized: Ref<boolean, boolean>;
    isAnimating: Ref<boolean, boolean>;
    activeIndicatorStyle: Ref<{
        top: string;
        height: string;
        opacity: number;
    }, {
        top: string;
        height: string;
        opacity: number;
    } | {
        top: string;
        height: string;
        opacity: number;
    }>;
    trackAnimation: () => void;
};
