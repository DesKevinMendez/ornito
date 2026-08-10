# Dropdown

## Dropdown

Select-style dropdown backed by a fixed list of `DropdownItem`s. Uses
`v-model` for the selected value.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `modelValue` (`v-model`) | `string \| undefined` | No | — |
| `items` | `DropdownItem[]` — `{ label, value, icon? }` | Yes | — |
| `placeholder` | `string` | No | — |
| `triggerVariant` | `'primary' \| 'secondary' \| 'outline'` | No | — style of the trigger button |
| `triggerSize` | `'full' \| 'auto'` | No | — |
| `triggerSmall` | `boolean` | No | — |
| `position` | `'bottom-left' \| 'bottom-right' \| 'top-left' \| 'top-right'` | No | — menu placement relative to the trigger |

## DropdownItem

Single row inside a dropdown/menu (used by `Dropdown` and
`UserProfileDropdown`).

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `label` | `string` | Yes | — |
| `icon` | `any` (component) | No | — |
| `active` | `boolean` | No | `false` — highlights the row as selected |
| `to` | `string` | No | — renders as a `RouterLink` when set |

## DropdownMenu

Icon-triggered contextual action menu (e.g. a row's "⋮" menu). Emits
`select` with the clicked item.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `items` | `MenuItem[]` — `{ action, label, icon?, variant?: 'default' \| 'danger' \| 'success' }` | Yes | — |
| `ariaLabel` | `string` | No | `'Opciones'` |
| `position` | `'bottom-left' \| 'bottom-right'` | No | `'bottom-right'` |
| `buttonVariant` | `'outline' \| 'secondary'` | No | `'outline'` |
| `icon` | `any` (component) | No | `IconDotsVertical` |

### Item variants (`MenuItem.variant`)

- `default` — neutral text color.
- `danger` — red text, for destructive actions.
- `success` — green text.

## DropdownAnimation

Transition wrapper (fade + scale) used internally by dropdown/menu
components for the opening/closing menu panel. Takes **no props**.
