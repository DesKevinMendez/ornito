# Badge

Small pill-shaped status label.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `variant` | `BadgeVariant` (see below) | Yes* | `'neutral'` |
| `text` | `'xs' \| 'sm' \| 'base'` | No | `'base'` — controls font size |

\* Marked required by the type, but `withDefaults` supplies `'neutral'` if omitted.

### Variants (`BadgeVariant`)

- `success` — green background/text. Active, confirmed, completed states.
- `warning` — amber background/text. Pending, needs-attention states.
- `danger` — red background/text. Errors, inactive, blocked states.
- `info` — blue background/text (secondary palette). Neutral informational states.
- `neutral` — gray background/text. Default fallback.

```vue
<Badge variant="success">Active</Badge>
<Badge variant="danger" text="sm">Suspended</Badge>
```
