# Item

A horizontal row with an optional image on the left, a title and subtitle
in the center, and an optional icon on the right. Supports light and dark mode.
Long text wraps while the image and icon keep their size.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `title` | `string` | Yes | — |
| `subtitle` | `string` | No | — |
| `image` | `string` (image URL) | No | — |
| `imageAlt` | `string` | No | `''` (decorative image) |
| `icon` | Vue `Component` | No | — |

```vue
<script setup lang="ts">
import { Item } from 'ornito'
import { IconChevronRight } from '@tabler/icons-vue'
</script>

<template>
  <Item
    image="/images/ana.jpg"
    image-alt="Portrait of Ana Rivera"
    title="Ana Rivera"
    subtitle="Assigned driver"
    :icon="IconChevronRight"
  />
</template>
```

## Slots

Each named slot replaces its corresponding prop content. Optional regions
also render when only their slot is provided.

| Slot | Description |
| --- | --- |
| `image` | Leading image or avatar, in a 48 × 48 px rounded container |
| `title` | Custom title content |
| `subtitle` | Custom subtitle content |
| `icon` | Custom trailing icon |

```vue
<Item title="Ana Rivera" subtitle="Assigned driver">
  <template #image>
    <UserAvatar name="Ana Rivera" size="lg" />
  </template>
  <template #icon>
    <IconChevronRight class="h-5 w-5" aria-hidden="true" />
  </template>
</Item>
```

`Item` is presentational: it does not add navigation or button behavior.
The `icon` prop is decorative and hidden from assistive technology. When
using the `icon` slot, provide appropriate accessibility attributes yourself.
Leave `imageAlt` empty for images that simply repeat the title, or supply
descriptive text when the image conveys additional information.
