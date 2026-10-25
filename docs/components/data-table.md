# DataTable

## DataTable

Responsive table with local array or server-side data. When `data` is passed,
it is the reactive source for both desktop and mobile layouts. This mode does
not require `url` or a request provider, and it does not make requests. If
both `data` and `url` are passed, `data` takes precedence. Local mode displays
all supplied rows and hides the server-side search, page-size, and pagination
controls.

When `data` is omitted, `url` enables server-side loading, search, and
pagination. In that mode the consuming app must provide a request factory via
`useRequestKey`. Column visibility is presentational: the parent must
pre-filter `columns` before passing them. Emits `row-selected` and
`pagination-loaded`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `columns` | `TableField<T>[]` (see below) | Yes | — |
| `data` | `T[]` | No | — reactive local rows; takes precedence over `url` |
| `url` | `string` | No | — server-side mode when `data` is omitted |
| `showSearch` | `boolean` | No | `true` — server-side search and page-size controls |
| `searchPlaceholder` | `string` | No | `Buscar...` |
| `actionsLabel` | `string` | No | `Actions` — header label for the actions column |
| `searchBy` | `string[] \| string` | No | — field(s) sent as the search query param(s) in server-side mode |

### `TableField<T>`

| Field | Type | Required |
| --- | --- | --- |
| `label` | `string` | Yes |
| `key` | `keyof T` | Yes |
| `format` | `(row: T) => string` | No |
| `slot` | `string` | No — named slot to render instead of the plain value |
| `width` | `string \| number` | No |
| `sortable` | `boolean` | No |
| `searchable` | `boolean` | No |

```vue
<script setup lang="ts">
import { ref } from 'vue'
import type { TableField } from 'ornito'

interface Vehicle {
  id: number
  name: string
  status: string
}

const vehicles = ref<Vehicle[]>([
  { id: 1, name: 'Civic', status: 'Available' },
  { id: 2, name: 'Corolla', status: 'In service' },
])

const columns: TableField<Vehicle>[] = [
  { label: 'Vehicle', key: 'name' },
  { label: 'Code', key: 'id', format: (row) => `VH-${row.id}` },
  { label: 'Status', key: 'status', slot: 'status' },
]
</script>

<template>
  <DataTable :columns="columns" :data="vehicles" :show-search="false">
    <template #status="{ row }">
      <span>{{ row.status }}</span>
    </template>
  </DataTable>
</template>
```

`data` can be replaced or updated reactively; the table reflects those changes
without a request. `format` and named slots work in both the desktop table and
the mobile card layout.

## Server-side data

```vue
<DataTable
  :columns="[
    { label: 'Name', key: 'name', sortable: true },
    { label: 'Status', key: 'status', slot: 'status' },
  ]"
  url="/api/v1/vehicles"
  search-by="name"
>
  <template #status="{ row }">
    <Badge :variant="statusVariant(row.status)">{{ row.status }}</Badge>
  </template>
</DataTable>
```

The local array example does not need `useRequestKey`. For server-side data,
provide it as shown below:

```ts
import { provide } from 'vue'
import { useRequestKey } from 'ornito'

provide(useRequestKey, useRequest)
```

## useTable

`useTable` is the public composable for building custom server-side tables.
It is exported from `ornito` and requires the consuming app to provide a
request factory through `useRequestKey`.

```ts
import { provide } from 'vue'
import { useRequestKey, useTable } from 'ornito'

// `useRequest` must return an object with a `get` method. The method returns
// `{ data }`, where `data` is a ref containing the server response below.
provide(useRequestKey, useRequest)

const {
  isLoading,
  error,
  internalData,
  internalPaginationServer,
  fetchData,
  refreshTable,
} = useTable()

await fetchData('/api/v1/vehicles', 1, '10', 'sedan', ['name', 'status'])
refreshTable()
```

`fetchData` adds `page` and `per_page` query parameters. When a search query
and `searchBy` are provided, it also adds one `filter[field]` parameter per
field. The request must resolve to this shape:

```ts
{
  data: Vehicle[]
  pagination: {
    total: number
    per_page: number
    current_page: number
    from: number
    to: number
    last_page: number
  }
}
```

### `useTable` return values

| Value | Type | Description |
| --- | --- | --- |
| `isLoading` | `Ref<boolean>` | Whether a request is in progress |
| `error` | `Ref<string \| null>` | Last request error, if any |
| `internalData` | `Ref<any[]>` | Rows returned by the last successful request |
| `internalPaginationServer` | `Ref<tApiPagination>` | Pagination returned by the server |
| `fetchData` | `(url, currentPage, selectedPageSize, searchQuery?, searchBy?) => Promise<void>` | Fetches a page of server-side data |
| `refreshData` | `Ref<boolean>` | Brief refresh signal toggled by `refreshTable` |
| `refreshTable` | `() => void` | Emits a short refresh signal for consumers |

## TableHeader

Renders just the `<thead>` row for a table using the same `TableField`
shape as `DataTable` — useful when composing a custom table body.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `columns` | `TableField<T>[]` | Yes | — |
| `showActions` | `boolean` | No | — |
| `actionsLabel` | `string` | No | — |

## TablePagination

Server-side pagination footer for tables.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `internalPaginationServer` | `tApiPagination` | Yes | — |

## CSS color variants

DataTable colors have separate light and dark variables for the header, body,
and footer. Override these runtime CSS variables to match the consuming app's
theme; the defaults preserve the existing table appearance.

| Area | Variables |
| --- | --- |
| Header | `--ds-color-table-header-bg-light`, `--ds-color-table-header-bg-dark`, `--ds-color-table-header-text-light`, `--ds-color-table-header-text-dark` |
| Body | `--ds-color-table-body-bg-light`, `--ds-color-table-body-bg-dark`, `--ds-color-table-body-text-light`, `--ds-color-table-body-text-dark`, `--ds-color-table-body-hover-bg-light`, `--ds-color-table-body-hover-bg-dark` |
| Footer | `--ds-color-table-footer-bg-light`, `--ds-color-table-footer-bg-dark`, `--ds-color-table-footer-text-light`, `--ds-color-table-footer-text-dark` |
| Loading placeholders | `--ds-color-table-skeleton-placeholder-bg-{light|dark}` |

Set light values on `:root` and dark values under `.dark`:

```css
:root {
  --ds-color-table-header-bg-light: #eff6ff;
  --ds-color-table-header-text-light: #1e3a8a;
  --ds-color-table-body-bg-light: #fff;
  --ds-color-table-body-hover-bg-light: #f8fafc;
  --ds-color-table-footer-text-light: #475569;
}

.dark {
  --ds-color-table-header-bg-dark: #172554;
  --ds-color-table-header-text-dark: #dbeafe;
  --ds-color-table-body-bg-dark: #0f172a;
  --ds-color-table-body-hover-bg-dark: #1e293b;
  --ds-color-table-footer-text-dark: #94a3b8;
}
```

The `table-body-hover-bg` variables also control the hover color of the mobile
cards. The footer variables cover the result count and server-side pagination.
The skeleton placeholder variable is shared by `TableSkeleton` and the mobile
loading cards in `DataTable`.

## ResultCount

"Showing X–Y of Z" summary text.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `internalPaginationServer` | `tApiPagination` | Yes | — |
| `totalItems` | `number` | Yes | — |

## TableSkeleton

Animated placeholder rows shown while table data is loading.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `columns` | `TableField<any>[]` | Yes | — used only for column count/width, not rendered |
| `rows` | `number` | No | `10` |
| `showActions` | `boolean` | No | — adds a placeholder actions column |
