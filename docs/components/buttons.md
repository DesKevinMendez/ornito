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

The utilities include base, hover, and active backgrounds, plus text, border, and focus-ring colors. For example: `bg-button-primary-bg-light`, `dark:bg-button-primary-bg-dark`, `hover:bg-button-primary-bg-hover-light`, and `text-button-primary-text-light`.

The corresponding CSS variables live in `src/tokens.css` and follow the shared token grammar `--ds-color-button-{variant}-{property}[-{state}]-{light|dark}`: `--ds-color-button-{variant}-bg-{light|dark}`, `-bg-hover-`, `-bg-active-`, `-text-`, `-text-hover-`, `-text-active-`, `-border-`, and `--ds-color-button-danger-ring-focus-{light|dark}`. Loading spinners use `--ds-color-button-{variant}-spinner-text-{light|dark}` (`BaseButton`) and `--ds-color-button-icon-{variant}-spinner-text-{light|dark}` (`BaseButtonIcon`). Active states default to their hover tokens. Override these variables to re-skin button variants without editing their components.

Default values reference design-system color primitives, including
`--ds-color-primary-*`, `--ds-color-error-*`, `--ds-color-neutral-*`, and
`--ds-color-white` (see the primitive palettes in the theming guide). The
`danger` button variant continues to use the `error` palette.

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

Every color uses component-specific light/dark variables for the filled and
outline styles. Their defaults reference the Tailwind palette variables, keeping
the current colors while allowing each IconButton color to be overridden
independently. `green`, `red`, and `yellow` use the same tokens as `success`,
`danger`, and `warning`.

| Style | Variables |
| --- | --- |
| Filled | `--ds-color-icon-button-{color}-bg-{light|dark}`, `--ds-color-icon-button-{color}-bg-hover-{light|dark}`, `--ds-color-icon-button-{color}-text-{light|dark}` |
| Outline | `--ds-color-icon-button-{color}-outline-border-{light|dark}`, `--ds-color-icon-button-{color}-outline-text-{light|dark}`, `--ds-color-icon-button-{color}-outline-bg-hover-{light|dark}` |

`{color}` can be `gray`, `primary`, `secondary`, `success`, `danger`,
`warning`, or `pink`.

```css
:root {
  --ds-color-icon-button-primary-bg-light: var(--ds-color-secondary-600);
  --ds-color-icon-button-primary-bg-hover-light: var(--ds-color-secondary-500);
  --ds-color-icon-button-primary-outline-text-light: var(--ds-color-secondary-600);

  --ds-color-icon-button-primary-bg-dark: var(--ds-color-secondary-700);
  --ds-color-icon-button-primary-bg-hover-dark: var(--ds-color-secondary-600);
  --ds-color-icon-button-primary-outline-text-dark: var(--ds-color-secondary-400);
}
```
