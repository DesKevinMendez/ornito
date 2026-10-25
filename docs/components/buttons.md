# Buttons

## BaseButton

Primary call-to-action button. Renders a `<button>` unless `to` is set, in
which case it renders a `RouterLink`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `type` | `'button' \| 'submit' \| 'reset'` | No | `'button'` |
| `variant` | `ButtonVariant` (see below) | No | `'primary'` |
| `size` | `'full' \| 'auto' \| 'small'` | No | `'full'` |
| `icon` | `any` (component) | No | `null` |
| `iconPosition` | `'left' \| 'right'` | No | `'left'` |
| `iconClass` | `string` | No | `''` |
| `disabled` | `boolean` | No | `false` |
| `loading` | `boolean` | No | `false` — shows a spinner and disables the button |
| `to` | `string \| RouteLocationRaw` | No | — renders as `RouterLink` when set |

### Variants (`ButtonVariant`)

- `primary` — solid primary color, white text. Default.
- `secondary` — solid neutral gray, dark text.
- `outline` — bordered, transparent background, neutral text.
- `primary-outline` — bordered in primary color, primary-colored text; fills solid on hover.
- `danger` — solid danger color, white text. Destructive actions.
- `danger-outline` — bordered in danger color, danger-colored text; fills solid on hover.
- `overlay` — translucent black background, white text. For buttons placed over images/media.

### Sizes

- `full` — `w-full`.
- `auto` — intrinsic width.
- `small` — smaller text (`text-sm`), same padding.

### Semantic color tokens

`BaseButton` and `BaseButtonIcon` use semantic color utilities for every `ButtonVariant` in light and dark mode. These are the available variants:

| Variant | Token segment | Appearance |
| --- | --- | --- |
| `primary` | `primary` | Solid primary background |
| `secondary` | `secondary` | Solid neutral background |
| `outline` | `outline` | Neutral border with transparent background |
| `primary-outline` | `primary-outline` | Primary border and text; fills on hover |
| `danger` | `danger` | Solid destructive background |
| `danger-outline` | `danger-outline` | Destructive border and text; fills on hover |
| `overlay` | `overlay` | Translucent dark background for media |

The utilities include base, hover, and active backgrounds, plus text, border, and focus-ring colors. For example: `bg-btn-primary-light`, `dark:bg-btn-primary-dark`, `hover:bg-btn-primary-light-hover`, and `text-btn-primary-light`.

The corresponding CSS variables live in `src/tokens.css` and follow `--ds-color-btn-{variant}-{light|dark}`. Background states add `-hover` or `-active`; text variables add `-text`, `-text-hover`, or `-text-active`; border variables add `-border`. The danger focus-ring variables add `-focus`. Override these variables to re-skin button variants without editing their components.

```vue
<BaseButton variant="primary" size="auto">Save</BaseButton>
<BaseButton variant="danger-outline" :icon="IconTrash">Delete</BaseButton>
<BaseButton variant="primary" loading>Saving…</BaseButton>
```

## BaseButtonIcon

Icon-only button sharing `ButtonVariant`, sized independently from `BaseButton`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `icon` | `any` (component) | Yes | — |
| `type` | `'button' \| 'submit' \| 'reset'` | No | `'button'` |
| `variant` | `ButtonVariant` (see [BaseButton](#variants-buttonvariant)) | No | — |
| `size` | `'sm' \| 'md' \| 'lg'` | No | — |
| `disabled` | `boolean` | No | `false` |
| `loading` | `boolean` | No | `false` |

## IconButton

Compact icon button with a flat palette of named colors instead of
`ButtonVariant`, and an optional outline mode.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `icon` | `any` (component) | Yes | — |
| `color` | `string` (see below) | No | `'gray'` |
| `to` | `string \| object` | No | — renders as `RouterLink` when set |
| `rounded` | `boolean` | No | `false` — `false` gives rounded corners, `true` gives a full circle |
| `outline` | `boolean` | No | `false` — swaps the filled palette for a bordered/transparent one |

### Colors

`gray` (default), `primary`, `secondary`, `success` / `green` (alias), `danger` / `red` (alias),
`warning` / `yellow` (alias), `pink`. Any other string falls back to `gray`.

```vue
<IconButton :icon="IconEdit" color="primary" />
<IconButton :icon="IconTrash" color="danger" outline rounded />
```

### CSS color variants

The gray and pink colors use component-specific light/dark variables for the
filled and outline styles. The primary, secondary, success, danger, and warning
colors use the corresponding semantic palette variables (and green/red/yellow
remain aliases).

| Color | Component variables |
| --- | --- |
| Gray filled | `--ds-color-icon-button-gray-bg-{light|dark}`, `--ds-color-icon-button-gray-bg-hover-{light|dark}`, `--ds-color-icon-button-gray-text-{light|dark}` |
| Gray outline | `--ds-color-icon-button-gray-outline-text-{light|dark}`, `--ds-color-icon-button-gray-outline-bg-hover-{light|dark}` |
| Pink filled | `--ds-color-icon-button-pink-bg-{light|dark}`, `--ds-color-icon-button-pink-bg-hover-{light|dark}`, `--ds-color-icon-button-pink-text-{light|dark}` |
| Pink outline | `--ds-color-icon-button-pink-outline-text-{light|dark}`, `--ds-color-icon-button-pink-outline-bg-hover-{light|dark}` |
