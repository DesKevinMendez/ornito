# Tabs

Animated tab switcher with the original segmented style and optional
`pills` and `underline` variants. All styles support optional leading icons, disabled tabs,
light/dark mode and keyboard navigation.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `modelValue` (`v-model`) | `number` | No | `0` — active tab index |
| `tabs` | `Tab[]` | Yes | — |
| `variant` | `'segmented' \| 'pills' \| 'underline'` | No | `'segmented'` |
| `label` | `string` — accessible name of the tab list | No | `'Tabs'` |

## Backwards compatibility

Existing usage does not need to change. Omitting `variant` keeps the original
segmented background and animated slider. Arrays containing only `{ id, label }`
are still valid, `v-model` still uses a numeric index, and `change` still emits
`(tab, index)`. Content continues to use the same `tab-{index}` scoped slots,
with `activeTab` and `activeTabIndex` slot props.

```vue
<Tabs v-model="activeTab" :tabs="[{ id: 'info', label: 'Info' }, { id: 'history', label: 'History' }]">
  <template #tab-0>Info content</template>
  <template #tab-1>History content</template>
</Tabs>
```

## Pills and icons

`variant="pills"` renders individual rounded buttons without a shared track.
The selected pill uses Ornito's primary theme tokens; inactive pills show a
neutral hover background. The active background slides between pills with the
same 300ms easing as the segmented variant, resizing to fit each label and icon.
Pills wrap when the available width is small; the indicator follows the selected
row and stays aligned when buttons or the container resize.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Tabs, type Tab } from 'ornito'
import { IconChartBar, IconActivity, IconSettings } from '@tabler/icons-vue'

const activeTab = ref(0)
const tabs: Tab[] = [
  { id: 'overview', label: 'Overview', icon: IconChartBar },
  { id: 'activity', label: 'Activity', icon: IconActivity },
  { id: 'settings', label: 'Settings', icon: IconSettings, disabled: true },
]
</script>

<template>
  <Tabs v-model="activeTab" :tabs="tabs" variant="pills" label="Workspace sections">
    <template #tab-0>Overview content</template>
    <template #tab-1>Recent activity</template>
    <template #tab-2>Settings content</template>
  </Tabs>
</template>
```

Omit `icon` for text-only tabs. Icons work with all variants and are decorative:
the visible `label` remains the accessible name. `Tab` and `TabsVariant` are
exported from `ornito` for typed consumers.

| Tab field | Type | Required |
| --- | --- | --- |
| `id` | `string` | Yes |
| `label` | `string` | Yes |
| `icon` | Vue `Component` | No |
| `disabled` | `boolean` | No |

Disabled tabs do not activate by click or keyboard and are skipped during
navigation. Prefer an enabled tab as the initial `modelValue`.

## Underline

`variant="underline"` renders tabs on a neutral bottom border, without an active
background. The selected label and its 2px underline use the primary theme
tokens. A single indicator slides and resizes between tabs in 300ms, including
tabs with icons. The underline stays aligned when labels or the container resize.

```vue
<Tabs v-model="activeTab" :tabs="tabs" variant="underline" label="Workspace sections">
  <template #tab-0>Overview content</template>
  <template #tab-1>Recent activity</template>
  <template #tab-2>Settings content</template>
</Tabs>
```

Underline tabs remain on one row and scroll horizontally on narrow containers.
The same `v-model`, events, slots, disabled states and keyboard navigation apply.

## Keyboard and accessibility

Tab lists, tabs and panels have linked ARIA roles and unique IDs per instance.
Only the active enabled tab is in the tab sequence; Arrow Left/Right switch
between enabled tabs and wrap at the ends. Home/End select the first/last enabled
tab. These interactions follow the [WAI-ARIA tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).

Buttons use `type="button"` and do not submit parent forms. Keyboard focus is
visible, and users who prefer reduced motion do not get the sliding transitions.
An ancestor's `.dark` class activates the dark theme. Storybook includes
`Pills`, `WithIcons`, `PillsWithIcons`, `Underline`, `UnderlineWithIcons` and their
dark variants, plus narrow-container examples, alongside the
existing default and initially selected tab examples.
