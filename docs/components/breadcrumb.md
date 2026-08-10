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
