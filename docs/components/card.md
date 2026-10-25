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

### CSS color variants

The card surface, title, and subtitle use paired light/dark CSS variables.
Defaults preserve the current appearance.

| Part | Variables |
| --- | --- |
| Surface | `--ds-color-card-bg-{light|dark}` |
| Title | `--ds-color-card-title-text-{light|dark}` |
| Subtitle | `--ds-color-card-subtitle-text-{light|dark}` |

Set both the light and dark values on `:root`.

## CardPaginations

Server-side pagination controls (page numbers + prev/next), styled for use
inside a `Card`. Emits `page-change` — pagination state itself lives in the
parent.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `pagination` | `tApiPagination \| null` — `{ total, per_page, current_page, from, to, last_page }` | Yes | — |

### CSS color variants

Summary and page-number text can be overridden separately by mode. The arrow
buttons use their own light/dark variables, defaulting to the primary palette.

| Part | Variables |
| --- | --- |
| Summary and page | `--ds-color-card-pagination-summary-text-{light|dark}`, `--ds-color-card-pagination-page-text-{light|dark}` |
| Arrow buttons | `--ds-color-card-pagination-button-bg-{light|dark}`, `--ds-color-card-pagination-button-bg-hover-{light|dark}`, `--ds-color-card-pagination-button-text-{light|dark}` |
