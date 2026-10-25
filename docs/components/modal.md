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

### CSS color variants

The scrim, panel, title, subtitle, and close control have paired light/dark
variables. Override light values on `:root` and dark values under `.dark`.

| Part | Variables |
| --- | --- |
| Scrim and panel | `--ds-color-modal-scrim-bg-{light|dark}`, `--ds-color-modal-panel-bg-{light|dark}` |
| Title and subtitle | `--ds-color-modal-title-{light|dark}`, `--ds-color-modal-subtitle-{light|dark}` |
| Close control | `--ds-color-modal-close-text-{light|dark}`, `--ds-color-modal-close-hover-text-{light|dark}`, `--ds-color-modal-close-focus-{light|dark}` |

## BottomModal

Android-style bottom sheet, teleported to `body`, using the native `<dialog>`
element. It slides up from the bottom and blurs the page behind it. The body
scrolls inside the sheet; an optional footer stays below it. Emits
`update:open`, `close`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `open` | `boolean` | Yes | — |
| `title` | `string` | No | — |
| `subtitle` | `string` | No | — |
| `showFooterDivider` | `boolean` | No | `true` — controls the line between the body and footer |

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BottomModal } from 'ornito'

const isOpen = ref(false)
</script>

<template>
  <button type="button" @click="isOpen = true">Choose an option</button>

  <BottomModal
    v-model:open="isOpen"
    title="Choose an option"
    subtitle="Select the action you want to take."
    :show-footer-divider="false"
  >
    <p>Place the sheet content here.</p>

    <template #footer>
      <button type="button" @click="isOpen = false">Cancel</button>
      <button type="button" @click="isOpen = false">Continue</button>
    </template>
  </BottomModal>
</template>
```

Clicking the backdrop, the close button or pressing `Escape` emits
`update:open` with `false` and emits `close`. Use the `footer` slot for actions
that should remain below the scrollable body. The sheet supports dark mode and
is limited to 90% of the viewport height.

### CSS color variants

The scrim, panel, title, subtitle, and close control have paired light/dark
variables. The footer divider uses the shared `border-divider` token.

| Part | Variables |
| --- | --- |
| Scrim and panel | `--ds-color-bottom-modal-scrim-bg-{light|dark}`, `--ds-color-bottom-modal-panel-bg-{light|dark}`, `--ds-color-bottom-modal-text-{light|dark}` |
| Title and subtitle | `--ds-color-bottom-modal-title-{light|dark}`, `--ds-color-bottom-modal-subtitle-{light|dark}` |
| Close control | `--ds-color-bottom-modal-close-text-{light|dark}`, `--ds-color-bottom-modal-close-hover-bg-{light|dark}`, `--ds-color-bottom-modal-close-hover-text-{light|dark}`, `--ds-color-bottom-modal-close-focus-{light|dark}` |

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
