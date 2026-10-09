# List

A reusable container for `Item` rows, with shared rounded corners, row dividers,
light and dark surfaces, and an optional outer border.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `border` | `boolean` | No | `false` |

## Usage

```vue
<script setup lang="ts">
import { Item, List, type ItemId } from 'ornito'

const drivers = [
  { id: 'driver-42', title: 'Ana Rivera', subtitle: 'Assigned driver' },
  { id: 'driver-43', title: 'Luis Torres', subtitle: 'Available for deliveries' },
]

function aFunctionCalled(id: ItemId | undefined) {
  console.log(id)
}
</script>

<template>
  <List border aria-label="Drivers" class="max-w-sm">
    <li v-for="driver in drivers" :key="driver.id">
      <Item v-bind="driver" clickable @click="aFunctionCalled" />
    </li>
  </List>
</template>
```

Omit `border` or use `:border="false"` to hide only the outer border.
Row dividers remain visible in either case. Leave each `Item`'s `border` off;
`List` provides the shared outline and removes individual row rounding.

## Default slot

`List` renders a native `ul`. Supply `li` elements through its default slot,
with an `Item` or custom row content inside each one. The list does not own
the row data or emit selection events: listen to each `Item`'s `@click` to
receive its ID. Images, titles, subtitles, icons and their slots stay on `Item`.

Add `aria-label` or `aria-labelledby` to name the list when useful.
Native attributes and additional classes are forwarded to the `ul`.

## Dark mode and Storybook

An ancestor's `.dark` class activates dark backgrounds, borders and dividers.
`Item` handles its own dark text and hover colors. Storybook's
`Components/Primitives/List` section includes borderless and bordered lists,
notification lists, dark mode, and clickable rows that emit only their IDs.
