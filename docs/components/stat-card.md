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

### CSS color variants

The title, value, empty state, description, and all four change states have
paired light/dark variables. Override light values on `:root` and dark values
under `.dark`.

| Part | Variables |
| --- | --- |
| Title and value | `--ds-color-stat-card-title-{light|dark}`, `--ds-color-stat-card-value-{light|dark}` |
| Empty state and description | `--ds-color-stat-card-empty-{light|dark}`, `--ds-color-stat-card-description-{light|dark}` |
| Change states | `--ds-color-stat-card-change-{positive|negative|neutral|info}-{light|dark}` |

```vue
<StatCard title="Active vehicles" value="42" change="+3" change-type="positive" description="vs. last month" />
```
