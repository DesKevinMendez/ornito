export default function useMessages(): {
    messages: globalThis.Ref<{
        ts: number;
        text: string;
        error: boolean;
    }[], {
        ts: number;
        text: string;
        error: boolean;
    }[] | {
        ts: number;
        text: string;
        error: boolean;
    }[]>;
    pushMessage: (text: string, error?: boolean) => void;
    shiftMessage: () => void;
};
