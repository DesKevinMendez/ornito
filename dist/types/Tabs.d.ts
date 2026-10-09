import { Component } from 'vue';
export type TabsVariant = 'segmented' | 'pills' | 'underline';
export interface Tab {
    id: string;
    label: string;
    icon?: Component;
    disabled?: boolean;
}
