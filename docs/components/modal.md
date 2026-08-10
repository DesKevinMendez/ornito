# Modal

## Modal

Base dialog, teleported to `body`, using the native `<dialog>` element.
Content goes in the default slot. Emits `update:open`, `close`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `open` | `boolean` | Yes | — |
| `title` | `string` | No | — |
| `subtitle` | `string` | No | — |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | No | `'md'` |

### Sizes

- `sm` — `max-w-sm`
- `md` — `max-w-lg` (default)
- `lg` — `max-w-2xl`
- `xl` — `max-w-4xl`
- `2xl` — `max-w-6xl`

```vue
<Modal :open="isOpen" title="Edit vehicle" size="lg" @close="isOpen = false">
  ...
</Modal>
```

## ConfirmationModal

Preset confirmation dialog requiring the user to type "Confirmar" before
the action is enabled. Built on top of `Modal` + `FormInput`. Emits
`close`, `confirm`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `open` | `boolean` | Yes | — |
| `loading` | `boolean` | No | `false` — disables the confirm button and the close action |
| `title` | `string` | No | `'Confirmar Acción'` |
| `subtitle` | `string` | No | `'Esta acción no se puede deshacer. Escribe \'Confirmar\' para continuar.'` |

```vue
<ConfirmationModal :open="isOpen" :loading="isDeleting" @confirm="deleteItem" @close="isOpen = false" />
```
