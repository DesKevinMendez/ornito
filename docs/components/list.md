# List

A reusable container for `Item` rows, with shared rounded corners, row dividers,
light and dark surfaces, and an optional outer border.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `border` | `boolean` | No | `false` |
| `pagination` | `ListPagination \| null` | No | — (static list) |
| `scrollDistance` | `number` (pixels from the bottom) | No | `50` |
| `loading` | `boolean` | No | `false` |

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

## Infinite scroll

Supply `pagination` to enable infinite scroll, powered by VueUse's
`useInfiniteScroll`. Give the list a constrained height, such as `class="max-h-80"`,
so the `ul` itself scrolls. Scrolling a surrounding page is not tracked.

`ListPagination` uses the same names as Ornito's API pagination:

```ts
type ListPagination = { current_page: number; last_page: number }
```

When the list is within `scrollDistance` pixels of the bottom, `request` emits
the next page number. The default is `50`; use `:scroll-distance="20"`,
`:scroll-distance="30"`, or another non-negative number to change it.
`0` requests at the bottom. Distance changes are reactive.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Item, List, type ListPagination } from 'ornito'

interface Driver { id: number; title: string; subtitle: string }

// Start with the rows and pagination returned by the first API request.
const drivers = ref<Driver[]>(initialResponse.data)
const pagination = ref<ListPagination>(initialResponse.pagination)
const loading = ref(false)
const error = ref('')

async function loadNextPage(page: number) {
  loading.value = true
  error.value = ''
  try {
    const response = await fetch(`/api/drivers?page=${page}`)
    if (!response.ok) throw new Error('Unable to load more drivers')
    const result = await response.json()
    drivers.value.push(...result.data)
    pagination.value = result.pagination
  } catch {
    error.value = 'Unable to load more drivers. Scroll again to retry.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <List
    border
    class="max-h-80"
    aria-label="Drivers"
    :pagination="pagination"
    :loading="loading"
    :scroll-distance="50"
    @request="loadNextPage"
  >
    <li v-for="driver in drivers" :key="driver.id">
      <Item v-bind="driver" />
    </li>
  </List>
  <p v-if="loading" role="status">Loading more drivers…</p>
  <p v-if="error" role="alert">{{ error }}</p>
</template>
```

The consumer fetches data, appends rows, updates pagination after success and
sets `loading` during the request. `List` never mutates pagination or performs
HTTP requests. It prevents duplicate requests for a pending page, pauses while
loading, and stops when `current_page >= last_page`.

VueUse also checks when the list becomes visible. Short lists can request more
pages without scrolling until the visible area fills. After success, the list
rechecks its position using the updated DOM. After failure, setting `loading`
back to `false` allows retry on another scroll, not an automatic retry loop.
For a new dataset that starts on the same page, remount using a different `:key`.

## Dark mode and Storybook

An ancestor's `.dark` class activates dark backgrounds, borders and dividers.
`Item` handles its own dark text and hover colors. Storybook's
`Components/Primitives/List` section includes borderless and bordered lists,
notification lists, dark mode, clickable rows that emit only their IDs, and
`InfiniteScroll` / `DarkInfiniteScroll` with simulated paginated requests.
