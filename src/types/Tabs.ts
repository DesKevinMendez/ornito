import type { Component } from 'vue';

export type TabsVariant = 'segmented' | 'pills';

export interface Tab {
  id: string;
  label: string;
  icon?: Component;
  disabled?: boolean;
}
