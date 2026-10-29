# CSS variables configuration

`ornito` ships its color palette as real, runtime CSS custom
properties — not just build-time Tailwind values. Any consuming app can
override them after loading the package's stylesheet to re-skin the design
system without rebuilding it.

## How it works

- `src/tokens.css` defines primitive palettes and semantic tokens as
  `--ds-color-*` variables (e.g. `--ds-color-primary-500: #6366f1;`), along
  with `--ds-font-family` for the shared typeface.
- Semantic border tokens have explicit `-light` and `-dark` values. Components
  always pair them, e.g. `border-default-light dark:border-default-dark`.
- Sidebar, `Tabs`, `DataTable`, `Dropdown`, form controls, `SwitchInput`,
  `Breadcrumb`, `InfoItem`, `LoadingSVG`, and dashboard component colors have
  paired `-light` and `-dark` tokens, so each mode can be configured
  independently while retaining the current appearance by default.
- `src/style.css` maps Tailwind's theme onto those variables with
  `@theme inline`, so utilities like `.bg-primary-500` compile to
  `background-color: var(--ds-color-primary-500)` instead of a literal hex
  value. The shared font family is mapped to Tailwind's `font-sans` theme token.
- Border utilities use the semantic role plus the mode, such as
  `border-default-light` and `dark:border-danger-subtle-dark`, while resolving
  to `--ds-color-border-*-{light|dark}` at runtime.

Because the utilities reference the variable and not its value, overriding a
token on `:root` changes what every component renders — no rebuild required.
Override tokens on `:root` (or on `<html>`, where the `.dark` class lives):
component tokens resolve their references there, so an override on a nested
element only reaches utilities that use a primitive directly.

## Change a color in one place

Each palette has a key color, `--ds-color-{palette}`, which is its 600 shade
(the color of the primary button, the active switch, the selected tab…). Every
other shade is derived from it with CSS relative colors, keeping the lightness,
chroma and hue steps of the default palette. Changing the key color recolors the
whole palette, and every semantic and component token that uses it, in light
and dark mode:

```css
:root {
  --ds-color-primary: #16a34a; /* button, switch, tabs, sidebar, focus rings… */
}
```

Key colors: `--ds-color-primary`, `--ds-color-informative`, `--ds-color-secondary`
(defaults to informative), `--ds-color-tertiary`, `--ds-color-success`,
`--ds-color-warning`, `--ds-color-error`, `--ds-color-neutral`, and
`--ds-color-pink`. With their default values the derived shades are identical to
the static palette. Browsers without relative color syntax (Chrome < 119,
Safari < 18, Firefox < 128) keep the default shades; only the 600 shade follows
the key color there. A single shade can still be overridden after the key color,
e.g. `--ds-color-primary-50`.

## Overriding from a consuming app

Import the package's compiled stylesheet, then set your own values for any
of the variables below on `:root`:

```css
@import 'ornito/style.css';

:root {
  --ds-font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
  --ds-color-primary: #16a34a;
  --ds-color-border-default-light: #d4d4d8;
  --ds-color-border-input-light: #a1a1aa;
  --ds-color-sidebar-bg-light: #f8fafc;
  --ds-color-sidebar-tab-bg-active-light: #ea580c;
  --ds-color-tabs-pills-bg-active-light: #ea580c;

  --ds-color-border-default-dark: #52525b;
  --ds-color-border-input-dark: #3f3f46;
  --ds-color-sidebar-bg-dark: #111827;
  --ds-color-sidebar-tab-bg-active-dark: #f97316;
  --ds-color-tabs-pills-bg-active-dark: #f97316;
}
```

`--ds-font-family` accepts a normal CSS font stack. Load any custom font in the
consuming app before selecting it here. The DS's typography inherits this
shared family through Tailwind's sans-serif base and `font-sans` utility.

### Registering ornito with the consuming app's Tailwind build

The consuming app's own Tailwind entry CSS always needs both
`ornito/theme.css` and `ornito/style.css` imported, alongside a `@source`
pointing at `ornito`, so Tailwind picks up the utility classes used inside
the package's components:

```css
@import 'tailwindcss';
@import 'ornito/theme.css';
@import 'ornito/style.css';

/* dist/ is gitignored inside the package, so it needs an explicit @source */
@source '../../node_modules/ornito';
```

Adjust the relative path to match where your Tailwind CSS file lives.

### Per dark-mode override

Dark mode has its own `-dark` tokens, read only through the `dark:` variant
(`@variant dark (&:is(.dark *));`). Declare them on `:root` next to their
`-light` pair; no `.dark` selector is needed:

```css
:root {
  --ds-color-border-default-light: #d4d4d8;
  --ds-color-border-default-dark: #52525b;
  --ds-color-switch-input-track-bg-on-dark: #22c55e;
}
```

### At runtime (JavaScript)

```js
document.documentElement.style.setProperty('--ds-color-primary', '#16a34a')
```

## Token naming convention

Every color token belongs to one of three layers, and each layer has a single
naming grammar. Values only point downwards: components reference semantic or
primitive tokens, semantic tokens reference primitives, and only primitives
hold raw colors or Tailwind variables.

| Layer | Grammar | Example |
| --- | --- | --- |
| Primitive | `--ds-color-{palette}` (key color) and `--ds-color-{palette}-{shade}[-alpha-{n}]` | `--ds-color-primary`, `--ds-color-primary-600`, `--ds-color-neutral-800-alpha-30` |
| Semantic | `--ds-color-border-{role}[-{modifier}]-{mode}` | `--ds-color-border-danger-subtle-dark` |
| Component | `--ds-color-{component}-{element…}-{property}-{state…}-{mode}` | `--ds-color-button-primary-bg-hover-light` |

- `property` is what the token colors: `bg`, `text`, `border`, `ring`, or
  `ring-offset`. Every component token names it, e.g.
  `--ds-color-sidebar-title-text-light`.
- `state` follows the property: `hover`, `active`, `focus`, `disabled`,
  `inactive`, `on`, or `off`, e.g. `--ds-color-tabs-pills-bg-active-hover-dark`.
- `mode` is always the last segment, and every token has both its `-light` and
  `-dark` pair.
- The Tailwind utility uses the same name without `--ds-color-`:
  `bg-button-primary-bg-hover-light`. Semantic border utilities drop the
  `border-` prefix: `border-danger-subtle-light`.

## Available variables

| Palette | Shades | Variables |
| --- | --- | --- |
| Key colors | 600 | `--ds-color-{primary\|informative\|secondary\|tertiary\|success\|warning\|error\|neutral\|pink}` |
| `primary` (indigo) | 50–950 | `--ds-color-primary-50` … `--ds-color-primary-950` |
| `informative` (sky) | 50–950 | `--ds-color-informative-50` … `--ds-color-informative-950` |
| `secondary` (defaults to informative) | 50–950 | `--ds-color-secondary-50` … `--ds-color-secondary-950` |
| `tertiary` (violet) | 50–950 | `--ds-color-tertiary-50` … `--ds-color-tertiary-950` |
| `success` (emerald) | 50–900 | `--ds-color-success-50` … `--ds-color-success-900` |
| `warning` (amber) | 50–900 | `--ds-color-warning-50` … `--ds-color-warning-900` |
| `error` (red) | 50–900 | `--ds-color-error-50` … `--ds-color-error-900` |
| `neutral` | 50–950 | `--ds-color-neutral-50` … `--ds-color-neutral-950` |
| `pink` | 50–950 | `--ds-color-pink-50` … `--ds-color-pink-950` |
| — | — | `--ds-color-whatsapp` |
| Neutral | — | `--ds-color-white`, `--ds-color-black` |
| `material-neutral` / `material-neutral-variant` | 10, 90 / 30, 50, 60, 80 | `--ds-color-material-neutral-10` … `--ds-color-material-neutral-variant-80` |
| — | — | `--ds-color-midnight` |
| Datepicker | — | `--ds-color-datepicker-{bg|primary-bg}-{light|dark}` |
| Typography | — | `--ds-font-family` |

### Primitive color tokens

Primitive palettes use design-system names and keep exactly the colors the
components rendered before tokenization. `primary` (indigo), `informative`
(sky, also the default for `secondary`), `tertiary` (violet), `success`
(emerald), `warning` (amber), and `error` (red) hold Tailwind's v3 hex values,
as the original `--ds-color-*` palette did. `neutral` (gray), `pink`, `white`,
and `black` reference Tailwind's base variables, because components used those
utilities directly. `BottomModal` uses the `material-neutral` and
`material-neutral-variant` tones, and the datepicker's dark surface uses
`--ds-color-midnight`. For example, the table header and body hover both default
to `--ds-color-neutral-50`. Changing that primitive updates its defaults; an
individual component token can still be overridden on its own.

```css
:root {
  /* Changes all defaults that reference this shared primitive. */
  --ds-color-neutral-50: #f5f7fa;

  /* Changes only this role; neutral-300 stays unchanged. */
  --ds-color-border-strong-light: #9ca3af;

  /* Changes only this table state, without changing neutral-50. */
  --ds-color-table-body-bg-hover-light: #eef2f7;
}
```

Component tokens reference design-system primitives such as `neutral-300`;
they do not depend on Tailwind names. To change one role, override its semantic
token directly, such as `--ds-color-border-strong-light`. To change all roles
that use a primitive, override that primitive instead.

Tailwind palettes remain the source of these defaults, and each palette is
derived from its key color (see "Change a color in one place"). `outline` names
a button style, not a color palette; outlined buttons use the palette selected
for their variant. Translucent primitives such as
`--ds-color-neutral-800-alpha-30` are derived from their base color, so changing
the base palette also updates the translucent states.

### Semantic border variables

These variables keep the current component border colors as their defaults.
Each role has paired `-light` and `-dark` tokens, so a consuming app can
override either mode independently. There are no unsuffixed, mode-switching
aliases: every usage names its mode explicitly.

| Role | Variables |
| --- | --- |
| Neutral and component | `--ds-color-border-{default|input|muted|strong|hover|tooltip|card|divider|avatar}-{light|dark}` |
| Primary and secondary | `--ds-color-border-{primary|primary-active|primary-subtle|secondary|secondary-subtle}-{light|dark}` |
| Status | `--ds-color-border-{success|success-subtle|success-muted|warning|warning-subtle|warning-muted|danger|danger-emphasis|danger-subtle|danger-muted|pink}-{light|dark}` |

The corresponding Tailwind classes always pair both modes, for example
`border-default-light dark:border-default-dark`,
`border-input-light dark:border-input-dark`, or
`divide-default-light dark:divide-default-dark`.

### Component color variables

Sidebar tokens use the `--ds-color-sidebar-*-{light|dark}` pattern. They cover
the sidebar surface and text, collapse control, theme toggle, and navigation
tab states. `Tabs` tokens use `--ds-color-tabs-*-{light|dark}` and cover the
segmented, pills, and underline variants, shared disabled labels, and focus
colors. DataTable tokens use `--ds-color-table-*-{light|dark}` for header,
body, and footer surfaces and text, including body row hover. The component
guides list each state token. Dropdown tokens use
`--ds-color-dropdown-*-{light|dark}` for its trigger, panel, and item states;
`DropdownMenu` uses the same item colors with a separate panel surface token.
Form control tokens use `--ds-color-form-*-{light|dark}` and
are shared by `FormInput`, `FormSelect`, `FormTextarea`, and `SearchableSelect`.
`SwitchInput` has separate tokens for labels, on/off track states, and the
thumb using the `--ds-color-switch-input-*-{light|dark}` pattern.
Dashboard and shared component tokens cover `ViewHeader`, `StatCard`,
`Card`, `Navbar`, `UserProfileDropdown`, `DropdownMenu`, `Modal`,
`BottomModal`, `Item`, `List`, `HelpTooltip`, `IconButton`,
`CardPaginations`, and table loading placeholders.
See the component guides for the available token groups:
[Sidebar](components/sidebar.md#css-color-variants),
[Tabs](components/tabs.md#css-color-variants),
[DataTable](components/data-table.md#css-color-variants),
[Dropdown](components/dropdown.md#css-color-variants),
[FormInput](components/form-input.md#css-color-variants),
[SwitchInput](components/switch-input.md#css-color-variants),
[ViewHeader](components/layout.md#css-color-variants),
[Card](components/card.md#css-color-variants),
[StatCard](components/stat-card.md#css-color-variants),
[Navbar](components/navbar.md#css-color-variants),
[Modals](components/modal.md#css-color-variants),
[Item](components/item.md#css-color-variants),
[List](components/list.md#css-color-variants),
[HelpTooltip](components/help-tooltip.md#css-color-variants),
[IconButton](components/buttons.md#css-color-variants), and
[Card and CardPaginations](components/card.md).

Each palette follows the standard Tailwind shade scale (50 = lightest, 950 =
darkest). `primary`/`secondary`/`tertiary` define the full 50–950 range;
the semantic status palettes (`success`/`warning`/`error`, with `danger` as an
alias of `error`) define 50–900; 950 is intentionally absent.

## Known limitation

These tokens are currently duplicated from the main dashboard's
`resources/css/app.css`. Until both are consolidated into a single source,
changes to the brand palette need to be applied in both places.
