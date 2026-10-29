# Theming Ornito

Every color Ornito renders is a runtime CSS variable. An app re-skins the design
system by overriding variables on `:root` in its own CSS — no fork, no rebuild, no
component edits. Exact names and defaults: [tokens.md](tokens.md).

## Contents

- [Token layers](#token-layers)
- [Brand color: one key color per palette](#brand-color-one-key-color-per-palette)
- [One component, one mode](#one-component-one-mode)
- [Where overrides go](#where-overrides-go)
- [Dark mode](#dark-mode)
- [Font](#font)
- [Colors in the app's own markup](#colors-in-the-apps-own-markup)
- [Recipes](#recipes)

## Token layers

Values only point downwards: component → semantic → primitive. Only primitives hold
raw colors.

| Layer | Grammar | Example |
| --- | --- | --- |
| Primitive | `--ds-color-{palette}` (key color) and `--ds-color-{palette}-{shade}` | `--ds-color-primary`, `--ds-color-primary-600`, `--ds-color-neutral-800-alpha-30` |
| Semantic | `--ds-color-border-{role}[-{modifier}]-{mode}` | `--ds-color-border-default-light`, `--ds-color-border-danger-subtle-dark` |
| Component | `--ds-color-{component}-{element…}-{property}-{state…}-{mode}` | `--ds-color-button-primary-bg-hover-light`, `--ds-color-sidebar-tab-bg-active-dark` |

- `property` is `bg`, `text`, `border`, `ring` or `ring-offset`; `state` follows it
  (`hover`, `active`, `focus`, `disabled`, `inactive`, `on`, `off`); `mode` is always
  last and every component or semantic token has both `-light` and `-dark`.
- Override the lowest layer that matches the intent: a primitive changes everything
  that uses it, a semantic token one role across components, a component token one
  part of one component.

## Brand color: one key color per palette

Each palette has a key color, its 600 shade (primary button, active switch,
selected tab, focus rings, sidebar active tab…). The other shades are derived from it
with CSS relative colors, so one variable recolors the palette and everything that
uses it, in both modes:

```css
:root {
  --ds-color-primary: #16a34a;
}
```

Key colors: `--ds-color-primary` (indigo), `--ds-color-secondary` (follows
informative), `--ds-color-tertiary` (violet), `--ds-color-informative` (sky),
`--ds-color-success` (emerald), `--ds-color-warning` (amber), `--ds-color-error` (red;
the `danger` utilities and button variants use it), `--ds-color-neutral` (gray) and
`--ds-color-pink`.

- Give the key color the 600-level tone of the brand, not its lightest tint: shades
  50–500 are derived lighter and 700–950 darker from it.
- To pin one shade after setting the key color, override it too
  (`--ds-color-primary-50: #f0fdf4;`).
- Browsers without relative color syntax (Chrome < 119, Safari < 18, Firefox < 128)
  only recolor the 600 shade; set the shades explicitly if they matter.
- `--ds-color-neutral` recolors the grays inside Ornito's components, but an app's
  own `gray-*` utilities are plain Tailwind and won't follow it.

## One component, one mode

Search [tokens.md](tokens.md) for the component and part, then set the `-light`
and/or `-dark` token. The other mode keeps its default.

```css
:root {
  /* only dark mode: sidebar active tab and switch track in orange */
  --ds-color-sidebar-tab-bg-active-dark: #f97316;
  --ds-color-switch-input-track-bg-on-dark: #f97316;

  /* both modes: card surface */
  --ds-color-card-bg-light: #f8fafc;
  --ds-color-card-bg-dark: #0f172a;

  /* a semantic role across every component that uses it */
  --ds-color-border-default-light: #d4d4d8;
}
```

Prefer pointing a component token at a primitive (`var(--ds-color-primary-500)`)
over a hex value when the color belongs to a palette, so it keeps following the key
color.

## Where overrides go

- On `:root` (or `html`), in the app's Tailwind entry CSS after
  `@import 'ornito/theme.css'`. Component and semantic tokens resolve their
  `var(--ds-color-…)` references on `:root`; an override on a nested element only
  reaches utilities that read a primitive directly.
- Dark values go next to the light ones on `:root`, not under `.dark`: the `dark:`
  variant already switches to the `-dark` token.
- At runtime (a color picker, per-tenant branding):
  `document.documentElement.style.setProperty('--ds-color-primary', color)`.
- A misspelled variable is silently ignored; `check_ornito_usage.py app.css`
  reports token names that don't exist.

## Dark mode

Dark mode is the `.dark` class on `<html>`, read through Tailwind's `dark:` variant.

```ts
import { initTheme, useTheme } from 'ornito'

initTheme()                                  // once, before mount
const { isDarkMode, toggleTheme } = useTheme()  // isDarkMode: Ref<boolean>, persisted in localStorage "darkMode"
```

- The default is dark (`true`) until the user toggles it.
- `Sidebar` already includes a theme toggle; call `toggleTheme()` for another one
  (e.g. in a settings view or the navbar's `#right` slot).
- Write every custom color with both modes: `text-gray-900 dark:text-white`,
  `bg-card-bg-light dark:bg-card-bg-dark`.

## Font

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --ds-font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
}
```

Load the font in the app first (Google Fonts, `@font-face`, a package). Ornito maps
`--ds-font-family` to Tailwind's `font-sans`, so the app's own text follows it too.

## Colors in the app's own markup

| Need | Use |
| --- | --- |
| Brand / status color | DS palettes: `text-primary-600 dark:text-primary-400`, `bg-success-50 dark:bg-success-900/30`, `text-error-600`, `border-warning-200` |
| The same color as a component part | Its token utility: `bg-card-bg-light dark:bg-card-bg-dark`, `text-card-subtitle-text-light dark:text-card-subtitle-text-dark` |
| Borders and dividers | Semantic borders: `border border-default-light dark:border-default-dark`, `divide-y divide-default-light dark:divide-default-dark` |
| Neutral text and surfaces | `gray-*` with both modes, or a component token as above |
| Inside `<style>` | `color: var(--ds-color-primary-600);` |

Avoid: `#hex`, `rgb()`, `bg-[#…]`, and raw Tailwind palettes the theme can't recolor
(`indigo`, `violet`, `purple`, `sky`, `blue`, `cyan`, `emerald`, `green`, `teal`,
`amber`, `yellow`, `orange`, `red`, `rose`). `success`, `warning`, `error` and
`danger` have no 300 or 950 shade: `text-danger-300` generates no CSS (use 200 or
400). The full list of color names is at the end of [tokens.md](tokens.md).

## Recipes

Green brand with Inter, everything else default:

```css
:root {
  --ds-font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --ds-color-primary: #16a34a;
}
```

Custom dark surfaces that match a navy brand (sidebar, cards, navbar, modals):

```css
:root {
  --ds-color-sidebar-bg-dark: #0b1120;
  --ds-color-navbar-bg-dark: #0b1120;
  --ds-color-card-bg-dark: #111a2e;
  --ds-color-modal-panel-bg-dark: #111a2e;
  --ds-color-table-header-bg-dark: #16213a;
}
```

Danger in a brand red instead of Tailwind red:

```css
:root {
  --ds-color-error: #c81e1e; /* danger buttons, Alert danger, Badge danger, validation borders */
}
```
