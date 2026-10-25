# CSS variables configuration

`ornito` ships its color palette as real, runtime CSS custom
properties — not just build-time Tailwind values. Any consuming app can
override them after loading the package's stylesheet to re-skin the design
system without rebuilding it.

## How it works

- `src/tokens.css` defines the color palette and semantic tokens as
  `--ds-color-*` variables (e.g. `--ds-color-primary-500: #6366f1;`), along
  with `--ds-font-family` for the shared typeface.
- Semantic border tokens have explicit `-light` and `-dark` values. The
  existing unsuffixed border utilities remain mode-aware through aliases.
- Sidebar, `Tabs`, `DataTable`, `Dropdown`, form controls, `SwitchInput`, and dashboard
  component colors have paired `-light` and `-dark` tokens, so each mode can
  be configured independently
  while retaining the current appearance by default.
- `src/style.css` maps Tailwind's theme onto those variables with
  `@theme inline`, so utilities like `.bg-primary-500` compile to
  `background-color: var(--ds-color-primary-500)` instead of a literal hex
  value. The shared font family is mapped to Tailwind's `font-sans` theme token.
- Border utilities use the shorter semantic names, such as `.border-default`
  and `.border-danger-subtle`, while resolving to `--ds-color-border-*` at
  runtime.

Because the utilities reference the variable and not its value, changing
`--ds-color-primary-500` anywhere above a component in the DOM changes what
that component renders — no rebuild required.

## Overriding from a consuming app

Import the package's compiled stylesheet, then set your own values for any
of the variables below on `:root` (or any ancestor scope):

```css
@import 'ornito/style.css';

:root {
  --ds-font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
  --ds-color-primary-500: #16a34a;
  --ds-color-primary-600: #15803d;
  --ds-color-border-default-light: #d4d4d8;
  --ds-color-border-input-light: #a1a1aa;
  --ds-color-sidebar-bg-light: #f8fafc;
  --ds-color-sidebar-tab-bg-active-light: #ea580c;
  --ds-color-tabs-pills-active-bg-light: #ea580c;
}

.dark {
  --ds-color-border-default-dark: #52525b;
  --ds-color-border-input-dark: #3f3f46;
  --ds-color-sidebar-bg-dark: #111827;
  --ds-color-sidebar-tab-bg-active-dark: #f97316;
  --ds-color-tabs-pills-active-bg-dark: #f97316;
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

The package's `dark:` variant matches `.dark` on an ancestor
(`@variant dark (&:is(.dark *));`), so scope overrides the same way:

```css
.dark {
  --ds-color-primary-500: #22c55e;
  --ds-color-border-default-dark: #52525b;
}
```

### At runtime (JavaScript)

```js
document.documentElement.style.setProperty('--ds-color-primary-500', '#16a34a')
```

## Available variables

| Palette | Shades | Variables |
| --- | --- | --- |
| `primary` (indigo) | 50–950 | `--ds-color-primary-50` … `--ds-color-primary-950` |
| `secondary` (sky) | 50–950 | `--ds-color-secondary-50` … `--ds-color-secondary-950` |
| `tertiary` (violet) | 50–950 | `--ds-color-tertiary-50` … `--ds-color-tertiary-950` |
| `success` (emerald) | 50, 100, 200, 400, 500, 600, 700, 900 | `--ds-color-success-50` … `--ds-color-success-900` |
| `warning` (amber) | 50, 100, 200, 400, 500, 600, 700, 900 | `--ds-color-warning-50` … `--ds-color-warning-900` |
| `danger` (red) | 50, 100, 200, 400, 500, 600, 700, 900 | `--ds-color-danger-50` … `--ds-color-danger-900` |
| — | — | `--ds-color-whatsapp` |
| — | — | `--ds-color-datepicker-dark-bg` |
| Typography | — | `--ds-font-family` |

### Semantic border variables

These variables keep the current component border colors as their defaults.
Each role has paired `-light` and `-dark` tokens, so a consuming app can
override either mode independently. The existing unsuffixed tokens still
select the active mode for utilities such as `border-default`.

| Role | Variables |
| --- | --- |
| Neutral and component | `--ds-color-border-{default|input|muted|strong|hover|tooltip|card|divider|avatar}-{light|dark}` |
| Primary and secondary | `--ds-color-border-{primary|primary-active|primary-subtle|secondary|secondary-subtle}-{light|dark}` |
| Status | `--ds-color-border-{success|success-subtle|success-muted|warning|warning-subtle|warning-muted|danger|danger-emphasis|danger-subtle|danger-muted|pink}-{light|dark}` |

The corresponding Tailwind classes use the role directly, for example
`border-default`, `border-input`, `border-danger`, and `border-danger-subtle`.
Paired utilities are also available when a class needs an explicit mode, such
as `border-default-light` and `border-default-dark`.

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
the semantic status palettes (`success`/`warning`/`danger`) only define the
shades currently used by the components (300, 800 and 950 are intentionally
absent).

## Known limitation

These tokens are currently duplicated from the main dashboard's
`resources/css/app.css`. Until both are consolidated into a single source,
changes to the brand palette need to be applied in both places.
