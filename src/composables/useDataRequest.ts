import type { InjectionKey, Ref } from 'vue'

export type GetFn = <T = any>(url: string) => Promise<{ data: Ref<T | null> }>
export type UseRequestFactory = () => { get: GetFn }

export const useRequestKey: InjectionKey<UseRequestFactory> = Symbol('useRequest')
