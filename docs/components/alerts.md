# Alerts

## Alert

Dismissible inline banner with an icon matching its `type`. Content goes in
the default slot.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `type` | `AlertType` (see below) | Yes | — |
| `show` | `boolean` | No | `true` — toggling animates the alert in/out |

### Variants (`AlertType`)

- `warning` — amber, `IconAlertTriangle`. Fallback for unrecognized values too.
- `danger` — red, `IconAlertCircle`.
- `info` — blue (secondary palette), `IconInfoCircle`.
- `success` — green, `IconShieldCheck`.

```vue
<Alert type="danger">Something went wrong.</Alert>
<Alert type="success" :show="wasSaved">Saved successfully.</Alert>
```

## WarningAlert

Fixed-style warning banner (always amber, always `IconAlertTriangle`) — a
simpler alternative to `<Alert type="warning">` with no variant prop.
Content goes in the default slot.

This component takes **no props**.

```vue
<WarningAlert>Review this before continuing.</WarningAlert>
```
