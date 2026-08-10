# Tabs

Animated tab switcher. Content for each tab goes in a `tab-{index}` scoped
slot. Uses `v-model` for the active tab index. Emits `change` in addition
to `update:modelValue`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `modelValue` (`v-model`) | `number` | No | `0` — active tab index |
| `tabs` | `Tab[]` — `{ id: string; label: string }` | Yes | — |

```vue
<Tabs v-model="activeTab" :tabs="[{ id: 'info', label: 'Info' }, { id: 'history', label: 'History' }]">
  <template #tab-0>Info content</template>
  <template #tab-1>History content</template>
</Tabs>
```
