# Card

## Card

Generic bordered container with an optional header (`title`/`subtitle`) and
a `headerButtons` slot. Content goes in the default slot.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `title` | `string` | No | — header is only rendered if `title`, `subtitle`, or the `headerButtons` slot is present |
| `subtitle` | `string` | No | — |
| `colInMobile` | `boolean` | No | `false` — stacks the header into a column on mobile, row on `sm+` |
| `noPadding` | `boolean` | No | `false` — removes the default body padding, useful when the slot content (e.g. a table) needs to manage its own edges |

```vue
<Card title="Vehicles" subtitle="12 total">
  <template #headerButtons>
    <BaseButton size="auto">Add</BaseButton>
  </template>
  ...
</Card>
```

## CardPaginations

Server-side pagination controls (page numbers + prev/next), styled for use
inside a `Card`. Emits `page-change` — pagination state itself lives in the
parent.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `pagination` | `tApiPagination \| null` — `{ total, per_page, current_page, from, to, last_page }` | Yes | — |
