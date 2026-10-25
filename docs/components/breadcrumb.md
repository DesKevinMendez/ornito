# Breadcrumb

Navigation trail showing the current page's position in the hierarchy.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `items` | `BreadcrumbItem[]` — `{ label, to?, icon? }` | Yes | — |

- The **last** item in `items` is always rendered as plain text (the
  current page), even if it has a `to`.
- Earlier items render as a `RouterLink` when `to` is set, or as plain text
  otherwise.
- `icon` renders before the label when set.

```vue
<Breadcrumb :items="[
  { label: 'Vehicles', to: '/vehicles', icon: IconCar },
  { label: 'Toyota Corolla' },
]" />
```

### CSS color variants

Light and dark colors are independently configurable with the
`--ds-color-breadcrumb-*` tokens for the separator, links, hover state, current
page, and plain items. For example, override
`--ds-color-breadcrumb-current-text-light` and
`--ds-color-breadcrumb-current-text-dark`, both on `:root`.
