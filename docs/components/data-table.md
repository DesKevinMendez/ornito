# DataTable

## DataTable

Table with client-side (`data`) or server-side (`url`) data, built-in
search, sorting, and pagination. Purely presentational regarding column
visibility — the parent must pre-filter `columns` before passing them (the
table itself has no concept of permissions). Requires a request factory to
be provided by the consuming app via `useRequestKey` when `url` is used.
Emits `row-selected`, `pagination-loaded`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `columns` | `TableField<T>[]` (see below) | Yes | — |
| `data` | `T[]` | No | — client-side mode; omit when using `url` |
| `url` | `string` | No | — server-side mode; omit when using `data` |
| `showSearch` | `boolean` | No | — |
| `searchPlaceholder` | `string` | No | — |
| `actionsLabel` | `string` | No | — header label for the actions column |
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
