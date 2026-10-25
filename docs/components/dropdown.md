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

### CSS color variants

The trigger, panel, and items use paired light/dark runtime CSS variables. Their
defaults preserve the current appearance. Override the variables on `:root`
for light mode and `.dark` for dark mode.

| Part | Variables |
| --- | --- |
| Trigger | `--ds-color-dropdown-trigger-bg-{light\|dark}`, `--ds-color-dropdown-trigger-text-{light\|dark}`, `--ds-color-dropdown-trigger-border-{light\|dark}`, `--ds-color-dropdown-trigger-hover-bg-{light\|dark}` |
| Panel | `--ds-color-dropdown-panel-bg-{light\|dark}`, `--ds-color-dropdown-panel-border-{light\|dark}` |
| Items | `--ds-color-dropdown-item-text-{light\|dark}`, `--ds-color-dropdown-item-hover-bg-{light\|dark}`, `--ds-color-dropdown-item-hover-text-{light\|dark}`, `--ds-color-dropdown-item-active-bg-{light\|dark}`, `--ds-color-dropdown-item-active-text-{light\|dark}` |

```css
:root {
  --ds-color-dropdown-trigger-bg-light: #fff;
  --ds-color-dropdown-trigger-text-light: #1e3a8a;
  --ds-color-dropdown-panel-bg-light: #eff6ff;
  --ds-color-dropdown-item-hover-bg-light: #dbeafe;
  --ds-color-dropdown-item-active-bg-light: #bfdbfe;
}

.dark {
  --ds-color-dropdown-trigger-bg-dark: #172554;
  --ds-color-dropdown-trigger-text-dark: #dbeafe;
  --ds-color-dropdown-panel-bg-dark: #0f172a;
  --ds-color-dropdown-item-hover-bg-dark: #1e3a8a;
  --ds-color-dropdown-item-active-bg-dark: #1d4ed8;
}
```

Item variables also affect `DropdownItem` in `UserProfileDropdown`, where that
row component is shared.

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
