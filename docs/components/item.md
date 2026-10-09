# Item

A horizontal row with an optional circular image on the left, a title and subtitle
in the center, and an optional icon on the right. Supports light and dark mode,
an optional border, and a background color transition on hover.
Long text wraps while the image and icon keep their size.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `title` | `string` | Yes | — |
| `subtitle` | `string` | No | — |
| `image` | `string` (image URL) | No | — |
| `imageAlt` | `string` | No | `''` (decorative image) |
| `icon` | Vue `Component` | No | — |
| `border` | `boolean` | No | `false` |
| `hoverable` | `boolean` | No | `true` |

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
    border
  />
</template>
```

Omit `border` or set `:border="false"` for a borderless item. The hover
background is available with or without a border, in both light and dark mode.
Set `:hoverable="false"` to disable the hover background and transition.

## Lists and dark mode

Compose items inside a shared container for a notification list. Apply the
border and row dividers to the container, leaving each item's `border` off.
The child selector removes individual row rounding; the container clips the
outer corners. Use the `title` slot for inline emphasis and the `subtitle`
slot for timestamps or other secondary content.

```vue
<ul class="m-0 list-none divide-y divide-gray-200 overflow-hidden rounded-xl border border-gray-200 p-0 dark:divide-gray-700 dark:border-gray-700 [&>li>div]:rounded-none">
  <li v-for="notification in notifications" :key="notification.id">
    <Item :title="notification.name" :image="notification.image" :hoverable="true">
      <template #title>
        <span class="font-normal text-gray-500 dark:text-gray-400">
          <strong class="font-medium text-gray-900 dark:text-white">{{ notification.name }}</strong>
          {{ notification.message }}
        </span>
      </template>
      <template #subtitle>
        <span class="text-xs text-secondary-600 dark:text-secondary-400">{{ notification.time }}</span>
      </template>
    </Item>
  </li>
</ul>
```

As with other Ornito components, a `.dark` class on an ancestor activates
dark surfaces, text, borders, dividers, and hover colors. Storybook includes
`NotificationsList` and `DarkNotificationsList` examples.

## Slots

Each named slot replaces its corresponding prop content. Optional regions
also render when only their slot is provided.

| Slot | Description |
| --- | --- |
| `image` | Leading image or avatar, clipped to a 48 × 48 px circular container |
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
