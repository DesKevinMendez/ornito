# StatCard

`Card`-based KPI display with a value, an optional change indicator, and an
optional help tooltip.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `title` | `string` | Yes | — |
| `value` | `string \| number \| null` | Yes | — `null` renders "Sin datos" instead of the value |
| `change` | `string \| number` | No | — |
| `changeType` | `'positive' \| 'negative' \| 'neutral' \| 'info'` (see below) | No | `'neutral'` |
| `description` | `string` | No | `''` — text shown next to `change` |
| `help` | `string` | No | — shown in a `HelpTooltip` next to the title |

### Variants (`changeType`)

- `positive` — green text.
- `negative` — red text.
- `neutral` — amber text. Default.
- `info` — blue text (secondary palette).

```vue
<StatCard title="Active vehicles" value="42" change="+3" change-type="positive" description="vs. last month" />
```
