import { InjectionKey, Ref } from 'vue';
export type GetFn = <T = any>(url: string) => Promise<{
    data: Ref<T | null>;
}>;
export type UseRequestFactory = () => {
    get: GetFn;
};
export declare const useRequestKey: InjectionKey<UseRequestFactory>;
