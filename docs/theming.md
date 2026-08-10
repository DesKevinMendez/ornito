# CSS variables configuration

`ornito` ships its color palette as real, runtime CSS custom
properties — not just build-time Tailwind values. Any consuming app can
override them after loading the package's stylesheet to re-skin the design
system without rebuilding it.

## How it works

- `src/tokens.css` defines every color on `:root` as a `--ds-color-*`
  variable (e.g. `--ds-color-primary-500: #6366f1;`).
- `src/style.css` maps Tailwind's theme onto those variables with
  `@theme inline`, so utilities like `.bg-primary-500` compile to
  `background-color: var(--ds-color-primary-500)` instead of a literal hex
  value.

Because the utilities reference the variable and not its value, changing
`--ds-color-primary-500` anywhere above a component in the DOM changes what
that component renders — no rebuild required.

## Overriding from a consuming app

Import the package's compiled stylesheet, then set your own values for any
of the variables below on `:root` (or any ancestor scope):

```css
@import 'ornito/style.css';

:root {
  --ds-color-primary-500: #16a34a;
  --ds-color-primary-600: #15803d;
}
```

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

Each palette follows the standard Tailwind shade scale (50 = lightest, 950 =
darkest). `primary`/`secondary`/`tertiary` define the full 50–950 range;
the semantic status palettes (`success`/`warning`/`danger`) only define the
shades currently used by the components (300, 800 and 950 are intentionally
absent).

## Known limitation

These tokens are currently duplicated from the main dashboard's
`resources/css/app.css`. Until both are consolidated into a single source,
changes to the brand palette need to be applied in both places.
