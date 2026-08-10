# Snackbar

## SnackBar

Fixed-position toast stack, rendered from the shared `useMessages()` queue —
push a message via that composable and it appears here automatically. No
props are needed for basic usage; `active` exists but is unused internally.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `active` | `boolean` | No | — |

```vue
<SnackBar />
```

## SnackBarItem

Single toast, used internally by `SnackBar`. Auto-dismisses after 3
seconds. Emits `expired`, `cancel`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `message` | `{ text: string }` | Yes | — |
| `error` | `boolean` | Yes | — `true` renders the danger palette, `false` renders the success palette |
