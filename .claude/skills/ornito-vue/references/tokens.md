# Ornito Vue token defaults

Generated from `src/tokens.css` and `src/theme.css` (v0.12.0) by
`scripts/gen_api_reference.py`; don't edit by hand. Override any of these on
`:root` in the consuming app's CSS. `-light` tokens are read in light mode and
`-dark` tokens through the `dark:` variant, so set both when a color changes in both
modes. Search this file instead of guessing a name: `grep -n "sidebar-bg" tokens.md`.

Contents: Shared typography, Primitive white and black, Neutral - gray (Tailwind), Pink (Tailwind), Primitive translucent neutral colors, Primary - indigo (Tailwind v3 values, same as main), Informative - sky (Tailwind v3 values, same as main), Secondary - defaults to informative, Tertiary - violet (Tailwind v3 values, same as main), Success - emerald (Tailwind v3 values, same as main), Warning - amber (Tailwind v3 values, same as main), Error - red (Tailwind v3 values, same as main), Utility brand color, Primitive Material 3 neutral tones (BottomModal defaults, same as main), Utility surface color (datepicker dark default, same as main), Button colors - light and dark modes, Button loading spinners - BaseButton, Button loading spinners - BaseButtonIcon, Semantic borders - light and dark, Sidebar colors - light and dark, Tabs colors - segmented, pills and underline variants, DataTable colors - header, body and footer, Dropdown colors - trigger, panel, and items, Form control colors shared by input, select, textarea, and searchable select, SwitchInput colors - light and dark, Dashboard view header colors, Card surface and header text, StatCard labels, values, descriptions, and change states, Navbar surface and mobile menu button, User profile and notification dropdown colors, Menus and overlays colors - light and dark, Item and List colors - light and dark, HelpTooltip colors - light and dark, IconButton colors - light and dark, CardPaginations colors - light and dark, Table loading placeholders colors - light and dark, Breadcrumb colors - light and dark, InfoItem colors - light and dark, LoadingSVG colors - light and dark, Datepicker colors - light and dark, Tailwind color names.

## Shared typography

```css
--ds-font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
```

## Primitive white and black

```css
--ds-color-white: var(--color-white);
--ds-color-black: var(--color-black);
```

## Neutral - gray (Tailwind)

```css
--ds-color-neutral: var(--color-gray-600);
--ds-color-neutral-50: var(--color-gray-50);
--ds-color-neutral-100: var(--color-gray-100);
--ds-color-neutral-200: var(--color-gray-200);
--ds-color-neutral-300: var(--color-gray-300);
--ds-color-neutral-400: var(--color-gray-400);
--ds-color-neutral-500: var(--color-gray-500);
--ds-color-neutral-600: var(--ds-color-neutral);
--ds-color-neutral-700: var(--color-gray-700);
--ds-color-neutral-800: var(--color-gray-800);
--ds-color-neutral-900: var(--color-gray-900);
--ds-color-neutral-950: var(--color-gray-950);
```

## Pink (Tailwind)

```css
--ds-color-pink: var(--color-pink-600);
--ds-color-pink-50: var(--color-pink-50);
--ds-color-pink-100: var(--color-pink-100);
--ds-color-pink-200: var(--color-pink-200);
--ds-color-pink-300: var(--color-pink-300);
--ds-color-pink-400: var(--color-pink-400);
--ds-color-pink-500: var(--color-pink-500);
--ds-color-pink-600: var(--ds-color-pink);
--ds-color-pink-700: var(--color-pink-700);
--ds-color-pink-800: var(--color-pink-800);
--ds-color-pink-900: var(--color-pink-900);
--ds-color-pink-950: var(--color-pink-950);
```

## Primitive translucent neutral colors

```css
--ds-color-black-alpha-5: color-mix(in oklab, var(--ds-color-black) 5%, transparent);
--ds-color-black-alpha-12: color-mix(in oklab, var(--ds-color-black) 12%, transparent);
--ds-color-black-alpha-32: color-mix(in oklab, var(--ds-color-black) 32%, transparent);
--ds-color-black-alpha-40: color-mix(in oklab, var(--ds-color-black) 40%, transparent);
--ds-color-black-alpha-60: color-mix(in oklab, var(--ds-color-black) 60%, transparent);
--ds-color-black-alpha-80: color-mix(in oklab, var(--ds-color-black) 80%, transparent);
--ds-color-black-alpha-90: color-mix(in oklab, var(--ds-color-black) 90%, transparent);
--ds-color-white-alpha-10: color-mix(in oklab, var(--ds-color-white) 10%, transparent);
--ds-color-white-alpha-20: color-mix(in oklab, var(--ds-color-white) 20%, transparent);
--ds-color-neutral-800-alpha-20: color-mix(in oklab, var(--ds-color-neutral-800) 20%, transparent);
--ds-color-neutral-800-alpha-30: color-mix(in oklab, var(--ds-color-neutral-800) 30%, transparent);
--ds-color-neutral-800-alpha-50: color-mix(in oklab, var(--ds-color-neutral-800) 50%, transparent);
--ds-color-neutral-800-alpha-70: color-mix(in oklab, var(--ds-color-neutral-800) 70%, transparent);
--ds-color-neutral-800-alpha-80: color-mix(in oklab, var(--ds-color-neutral-800) 80%, transparent);
--ds-color-neutral-800-alpha-90: color-mix(in oklab, var(--ds-color-neutral-800) 90%, transparent);
--ds-color-neutral-500-alpha-30: color-mix(in oklab, var(--ds-color-neutral-500) 30%, transparent);
--ds-color-neutral-400-alpha-30: color-mix(in oklab, var(--ds-color-neutral-400) 30%, transparent);
--ds-color-neutral-700-alpha-30: color-mix(in oklab, var(--ds-color-neutral-700) 30%, transparent);
--ds-color-neutral-700-alpha-50: color-mix(in oklab, var(--ds-color-neutral-700) 50%, transparent);
--ds-color-neutral-700-alpha-70: color-mix(in oklab, var(--ds-color-neutral-700) 70%, transparent);
```

## Primary - indigo (Tailwind v3 values, same as main)

```css
--ds-color-primary: #4f46e5;
--ds-color-primary-50: #eef2ff;
--ds-color-primary-100: #e0e7ff;
--ds-color-primary-200: #c7d2fe;
--ds-color-primary-300: #a5b4fc;
--ds-color-primary-400: #818cf8;
--ds-color-primary-500: #6366f1;
--ds-color-primary-600: var(--ds-color-primary);
--ds-color-primary-700: #4338ca;
--ds-color-primary-800: #3730a3;
--ds-color-primary-900: #312e81;
--ds-color-primary-950: #1e1b4b;
```

## Informative - sky (Tailwind v3 values, same as main)

```css
--ds-color-informative: #0284c7;
--ds-color-informative-50: #f0f9ff;
--ds-color-informative-100: #e0f2fe;
--ds-color-informative-200: #bae6fd;
--ds-color-informative-300: #7dd3fc;
--ds-color-informative-400: #38bdf8;
--ds-color-informative-500: #0ea5e9;
--ds-color-informative-600: var(--ds-color-informative);
--ds-color-informative-700: #0369a1;
--ds-color-informative-800: #075985;
--ds-color-informative-900: #0c4a6e;
--ds-color-informative-950: #082f49;
```

## Secondary - defaults to informative

```css
--ds-color-secondary: var(--ds-color-informative);
--ds-color-secondary-50: var(--ds-color-informative-50);
--ds-color-secondary-100: var(--ds-color-informative-100);
--ds-color-secondary-200: var(--ds-color-informative-200);
--ds-color-secondary-300: var(--ds-color-informative-300);
--ds-color-secondary-400: var(--ds-color-informative-400);
--ds-color-secondary-500: var(--ds-color-informative-500);
--ds-color-secondary-600: var(--ds-color-secondary);
--ds-color-secondary-700: var(--ds-color-informative-700);
--ds-color-secondary-800: var(--ds-color-informative-800);
--ds-color-secondary-900: var(--ds-color-informative-900);
--ds-color-secondary-950: var(--ds-color-informative-950);
```

## Tertiary - violet (Tailwind v3 values, same as main)

```css
--ds-color-tertiary: #7c3aed;
--ds-color-tertiary-50: #f5f3ff;
--ds-color-tertiary-100: #ede9fe;
--ds-color-tertiary-200: #ddd6fe;
--ds-color-tertiary-300: #c4b5fd;
--ds-color-tertiary-400: #a78bfa;
--ds-color-tertiary-500: #8b5cf6;
--ds-color-tertiary-600: var(--ds-color-tertiary);
--ds-color-tertiary-700: #6d28d9;
--ds-color-tertiary-800: #5b21b6;
--ds-color-tertiary-900: #4c1d95;
--ds-color-tertiary-950: #2e1065;
```

## Success - emerald (Tailwind v3 values, same as main)

```css
--ds-color-success: #059669;
--ds-color-success-50: #ecfdf5;
--ds-color-success-100: #d1fae5;
--ds-color-success-200: #a7f3d0;
--ds-color-success-400: #34d399;
--ds-color-success-500: #10b981;
--ds-color-success-600: var(--ds-color-success);
--ds-color-success-700: #047857;
--ds-color-success-800: #065f46;
--ds-color-success-900: #064e3b;
```

## Warning - amber (Tailwind v3 values, same as main)

```css
--ds-color-warning: #d97706;
--ds-color-warning-50: #fffbeb;
--ds-color-warning-100: #fef3c7;
--ds-color-warning-200: #fde68a;
--ds-color-warning-400: #fbbf24;
--ds-color-warning-500: #f59e0b;
--ds-color-warning-600: var(--ds-color-warning);
--ds-color-warning-700: #b45309;
--ds-color-warning-800: #92400e;
--ds-color-warning-900: #78350f;
```

## Error - red (Tailwind v3 values, same as main)

```css
--ds-color-error: #dc2626;
--ds-color-error-50: #fef2f2;
--ds-color-error-100: #fee2e2;
--ds-color-error-200: #fecaca;
--ds-color-error-400: #f87171;
--ds-color-error-500: #ef4444;
--ds-color-error-600: var(--ds-color-error);
--ds-color-error-700: #b91c1c;
--ds-color-error-800: #991b1b;
--ds-color-error-900: #7f1d1d;
--ds-color-error-900-alpha-50: color-mix(in oklab, var(--ds-color-error-900) 50%, transparent);
```

## Utility brand color

```css
--ds-color-whatsapp: #25d366;
```

## Primitive Material 3 neutral tones (BottomModal defaults, same as main)

```css
--ds-color-material-neutral-10: #1d1b20;
--ds-color-material-neutral-90: #e6e1e5;
--ds-color-material-neutral-variant-30: #49454f;
--ds-color-material-neutral-variant-50: #79747e;
--ds-color-material-neutral-variant-60: #938f99;
--ds-color-material-neutral-variant-80: #cac4d0;
--ds-color-material-neutral-variant-50-alpha-30: color-mix(in oklab, var(--ds-color-material-neutral-variant-50) 30%, transparent);
--ds-color-material-neutral-variant-60-alpha-30: color-mix(in oklab, var(--ds-color-material-neutral-variant-60) 30%, transparent);
```

## Utility surface color (datepicker dark default, same as main)

```css
--ds-color-midnight: #172030;
```

## Button colors - light and dark modes

```css
--ds-color-button-primary-bg-light: var(--ds-color-primary-600);
--ds-color-button-primary-bg-hover-light: var(--ds-color-primary-700);
--ds-color-button-primary-bg-active-light: var(--ds-color-button-primary-bg-hover-light);
--ds-color-button-primary-text-light: var(--ds-color-white);
--ds-color-button-primary-text-hover-light: var(--ds-color-white);
--ds-color-button-primary-text-active-light: var(--ds-color-button-primary-text-hover-light);
--ds-color-button-primary-border-light: var(--ds-color-primary-600);
--ds-color-button-primary-bg-dark: var(--ds-color-primary-500);
--ds-color-button-primary-bg-hover-dark: var(--ds-color-primary-600);
--ds-color-button-primary-bg-active-dark: var(--ds-color-button-primary-bg-hover-dark);
--ds-color-button-primary-text-dark: var(--ds-color-white);
--ds-color-button-primary-text-hover-dark: var(--ds-color-white);
--ds-color-button-primary-text-active-dark: var(--ds-color-button-primary-text-hover-dark);
--ds-color-button-primary-border-dark: var(--ds-color-primary-500);
--ds-color-button-secondary-bg-light: var(--ds-color-neutral-200);
--ds-color-button-secondary-bg-hover-light: var(--ds-color-neutral-300);
--ds-color-button-secondary-bg-active-light: var(--ds-color-button-secondary-bg-hover-light);
--ds-color-button-secondary-text-light: var(--ds-color-neutral-900);
--ds-color-button-secondary-text-hover-light: var(--ds-color-neutral-900);
--ds-color-button-secondary-text-active-light: var(--ds-color-button-secondary-text-hover-light);
--ds-color-button-secondary-border-light: var(--ds-color-neutral-200);
--ds-color-button-secondary-bg-dark: var(--ds-color-neutral-800);
--ds-color-button-secondary-bg-hover-dark: var(--ds-color-neutral-700);
--ds-color-button-secondary-bg-active-dark: var(--ds-color-button-secondary-bg-hover-dark);
--ds-color-button-secondary-text-dark: var(--ds-color-white);
--ds-color-button-secondary-text-hover-dark: var(--ds-color-white);
--ds-color-button-secondary-text-active-dark: var(--ds-color-button-secondary-text-hover-dark);
--ds-color-button-secondary-border-dark: var(--ds-color-neutral-800);
--ds-color-button-outline-bg-light: transparent;
--ds-color-button-outline-bg-hover-light: var(--ds-color-neutral-50);
--ds-color-button-outline-bg-active-light: var(--ds-color-button-outline-bg-hover-light);
--ds-color-button-outline-text-light: var(--ds-color-neutral-900);
--ds-color-button-outline-text-hover-light: var(--ds-color-neutral-900);
--ds-color-button-outline-text-active-light: var(--ds-color-button-outline-text-hover-light);
--ds-color-button-outline-border-light: var(--ds-color-neutral-300);
--ds-color-button-outline-bg-dark: transparent;
--ds-color-button-outline-bg-hover-dark: var(--ds-color-neutral-700);
--ds-color-button-outline-bg-active-dark: var(--ds-color-button-outline-bg-hover-dark);
--ds-color-button-outline-text-dark: var(--ds-color-white);
--ds-color-button-outline-text-hover-dark: var(--ds-color-white);
--ds-color-button-outline-text-active-dark: var(--ds-color-button-outline-text-hover-dark);
--ds-color-button-outline-border-dark: var(--ds-color-neutral-700);
--ds-color-button-primary-outline-bg-light: transparent;
--ds-color-button-primary-outline-bg-hover-light: var(--ds-color-primary-600);
--ds-color-button-primary-outline-bg-active-light: var(--ds-color-button-primary-outline-bg-hover-light);
--ds-color-button-primary-outline-text-light: var(--ds-color-primary-600);
--ds-color-button-primary-outline-text-hover-light: var(--ds-color-white);
--ds-color-button-primary-outline-text-active-light: var(--ds-color-button-primary-outline-text-hover-light);
--ds-color-button-primary-outline-border-light: var(--ds-color-primary-600);
--ds-color-button-primary-outline-bg-dark: transparent;
--ds-color-button-primary-outline-bg-hover-dark: var(--ds-color-primary-500);
--ds-color-button-primary-outline-bg-active-dark: var(--ds-color-button-primary-outline-bg-hover-dark);
--ds-color-button-primary-outline-text-dark: var(--ds-color-primary-400);
--ds-color-button-primary-outline-text-hover-dark: var(--ds-color-primary-400);
--ds-color-button-primary-outline-text-active-dark: var(--ds-color-button-primary-outline-text-hover-dark);
--ds-color-button-primary-outline-border-dark: var(--ds-color-primary-500);
--ds-color-button-danger-bg-light: var(--ds-color-error-600);
--ds-color-button-danger-bg-hover-light: var(--ds-color-error-700);
--ds-color-button-danger-bg-active-light: var(--ds-color-button-danger-bg-hover-light);
--ds-color-button-danger-ring-focus-light: var(--ds-color-error-500);
--ds-color-button-danger-text-light: var(--ds-color-white);
--ds-color-button-danger-text-hover-light: var(--ds-color-white);
--ds-color-button-danger-text-active-light: var(--ds-color-button-danger-text-hover-light);
--ds-color-button-danger-border-light: var(--ds-color-error-600);
--ds-color-button-danger-bg-dark: var(--ds-color-error-500);
--ds-color-button-danger-bg-hover-dark: var(--ds-color-error-600);
--ds-color-button-danger-bg-active-dark: var(--ds-color-button-danger-bg-hover-dark);
--ds-color-button-danger-ring-focus-dark: var(--ds-color-error-500);
--ds-color-button-danger-text-dark: var(--ds-color-white);
--ds-color-button-danger-text-hover-dark: var(--ds-color-white);
--ds-color-button-danger-text-active-dark: var(--ds-color-button-danger-text-hover-dark);
--ds-color-button-danger-border-dark: var(--ds-color-error-500);
--ds-color-button-danger-outline-bg-light: transparent;
--ds-color-button-danger-outline-bg-hover-light: var(--ds-color-error-600);
--ds-color-button-danger-outline-bg-active-light: var(--ds-color-button-danger-outline-bg-hover-light);
--ds-color-button-danger-outline-text-light: var(--ds-color-error-600);
--ds-color-button-danger-outline-text-hover-light: var(--ds-color-white);
--ds-color-button-danger-outline-text-active-light: var(--ds-color-button-danger-outline-text-hover-light);
--ds-color-button-danger-outline-border-light: var(--ds-color-error-600);
--ds-color-button-danger-outline-bg-dark: transparent;
--ds-color-button-danger-outline-bg-hover-dark: var(--ds-color-error-500);
--ds-color-button-danger-outline-bg-active-dark: var(--ds-color-button-danger-outline-bg-hover-dark);
--ds-color-button-danger-outline-text-dark: var(--ds-color-error-400);
--ds-color-button-danger-outline-text-hover-dark: var(--ds-color-white);
--ds-color-button-danger-outline-text-active-dark: var(--ds-color-button-danger-outline-text-hover-dark);
--ds-color-button-danger-outline-border-dark: var(--ds-color-error-500);
--ds-color-button-overlay-bg-light: var(--ds-color-black-alpha-60);
--ds-color-button-overlay-bg-hover-light: var(--ds-color-black-alpha-80);
--ds-color-button-overlay-bg-active-light: var(--ds-color-button-overlay-bg-hover-light);
--ds-color-button-overlay-text-light: var(--ds-color-white);
--ds-color-button-overlay-text-hover-light: var(--ds-color-white);
--ds-color-button-overlay-text-active-light: var(--ds-color-button-overlay-text-hover-light);
--ds-color-button-overlay-border-light: transparent;
--ds-color-button-overlay-bg-dark: var(--ds-color-black-alpha-60);
--ds-color-button-overlay-bg-hover-dark: var(--ds-color-black-alpha-80);
--ds-color-button-overlay-bg-active-dark: var(--ds-color-button-overlay-bg-hover-dark);
--ds-color-button-overlay-text-dark: var(--ds-color-white);
--ds-color-button-overlay-text-hover-dark: var(--ds-color-white);
--ds-color-button-overlay-text-active-dark: var(--ds-color-button-overlay-text-hover-dark);
--ds-color-button-overlay-border-dark: transparent;
```

## Button loading spinners - BaseButton

```css
--ds-color-button-primary-spinner-text-light: var(--ds-color-white);
--ds-color-button-primary-spinner-text-dark: var(--ds-color-white);
--ds-color-button-secondary-spinner-text-light: var(--ds-color-neutral-900);
--ds-color-button-secondary-spinner-text-dark: var(--ds-color-white);
--ds-color-button-outline-spinner-text-light: var(--ds-color-neutral-900);
--ds-color-button-outline-spinner-text-dark: var(--ds-color-white);
--ds-color-button-primary-outline-spinner-text-light: var(--ds-color-neutral-900);
--ds-color-button-primary-outline-spinner-text-dark: var(--ds-color-white);
--ds-color-button-danger-spinner-text-light: var(--ds-color-neutral-900);
--ds-color-button-danger-spinner-text-dark: var(--ds-color-white);
--ds-color-button-danger-outline-spinner-text-light: var(--ds-color-neutral-900);
--ds-color-button-danger-outline-spinner-text-dark: var(--ds-color-white);
--ds-color-button-overlay-spinner-text-light: var(--ds-color-neutral-900);
--ds-color-button-overlay-spinner-text-dark: var(--ds-color-white);
```

## Button loading spinners - BaseButtonIcon

```css
--ds-color-button-icon-primary-spinner-text-light: var(--ds-color-white);
--ds-color-button-icon-primary-spinner-text-dark: var(--ds-color-white);
--ds-color-button-icon-secondary-spinner-text-light: var(--ds-color-neutral-900);
--ds-color-button-icon-secondary-spinner-text-dark: var(--ds-color-white);
--ds-color-button-icon-outline-spinner-text-light: var(--ds-color-neutral-900);
--ds-color-button-icon-outline-spinner-text-dark: var(--ds-color-white);
--ds-color-button-icon-primary-outline-spinner-text-light: var(--ds-color-neutral-900);
--ds-color-button-icon-primary-outline-spinner-text-dark: var(--ds-color-white);
--ds-color-button-icon-danger-spinner-text-light: var(--ds-color-white);
--ds-color-button-icon-danger-spinner-text-dark: var(--ds-color-white);
--ds-color-button-icon-danger-outline-spinner-text-light: var(--ds-color-neutral-900);
--ds-color-button-icon-danger-outline-spinner-text-dark: var(--ds-color-white);
--ds-color-button-icon-overlay-spinner-text-light: var(--ds-color-neutral-900);
--ds-color-button-icon-overlay-spinner-text-dark: var(--ds-color-white);
```

## Semantic borders - light and dark

```css
--ds-color-border-default-light: var(--ds-color-neutral-200);
--ds-color-border-default-dark: var(--ds-color-neutral-700);
--ds-color-border-input-light: var(--ds-color-neutral-300);
--ds-color-border-input-dark: var(--ds-color-neutral-700);
--ds-color-border-muted-light: var(--ds-color-neutral-200);
--ds-color-border-muted-dark: var(--ds-color-neutral-800);
--ds-color-border-strong-light: var(--ds-color-neutral-300);
--ds-color-border-strong-dark: var(--ds-color-neutral-600);
--ds-color-border-hover-light: var(--ds-color-neutral-400);
--ds-color-border-hover-dark: var(--ds-color-neutral-600);
--ds-color-border-tooltip-light: var(--ds-color-neutral-900);
--ds-color-border-tooltip-dark: var(--ds-color-neutral-700);
--ds-color-border-card-light: transparent;
--ds-color-border-card-dark: var(--ds-color-neutral-700);
--ds-color-border-divider-light: var(--ds-color-neutral-500-alpha-30);
--ds-color-border-divider-dark: var(--ds-color-neutral-400-alpha-30);
--ds-color-border-avatar-light: var(--ds-color-white);
--ds-color-border-avatar-dark: var(--ds-color-white);
--ds-color-border-primary-light: var(--ds-color-primary-600);
--ds-color-border-primary-dark: var(--ds-color-primary-500);
--ds-color-border-primary-active-light: var(--ds-color-primary-600);
--ds-color-border-primary-active-dark: var(--ds-color-primary-400);
--ds-color-border-primary-subtle-light: var(--ds-color-primary-500);
--ds-color-border-primary-subtle-dark: var(--ds-color-primary-500);
--ds-color-border-secondary-light: var(--ds-color-secondary-500);
--ds-color-border-secondary-dark: var(--ds-color-secondary-500);
--ds-color-border-secondary-subtle-light: var(--ds-color-secondary-200);
--ds-color-border-secondary-subtle-dark: color-mix(in oklab, var(--ds-color-secondary-900) 50%, transparent);
--ds-color-border-success-light: var(--ds-color-success-500);
--ds-color-border-success-dark: var(--ds-color-success-500);
--ds-color-border-success-subtle-light: var(--ds-color-success-200);
--ds-color-border-success-subtle-dark: color-mix(in oklab, var(--ds-color-success-900) 50%, transparent);
--ds-color-border-success-muted-light: var(--ds-color-success-200);
--ds-color-border-success-muted-dark: var(--ds-color-success-200);
--ds-color-border-warning-light: var(--ds-color-warning-500);
--ds-color-border-warning-dark: var(--ds-color-warning-500);
--ds-color-border-warning-subtle-light: var(--ds-color-warning-200);
--ds-color-border-warning-subtle-dark: color-mix(in oklab, var(--ds-color-warning-900) 50%, transparent);
--ds-color-border-warning-muted-light: var(--ds-color-warning-200);
--ds-color-border-warning-muted-dark: var(--ds-color-warning-200);
--ds-color-border-danger-light: var(--ds-color-error-500);
--ds-color-border-danger-dark: var(--ds-color-error-500);
--ds-color-border-danger-emphasis-light: var(--ds-color-error-600);
--ds-color-border-danger-emphasis-dark: var(--ds-color-error-500);
--ds-color-border-danger-subtle-light: var(--ds-color-error-200);
--ds-color-border-danger-subtle-dark: var(--ds-color-error-900-alpha-50);
--ds-color-border-danger-muted-light: var(--ds-color-error-200);
--ds-color-border-danger-muted-dark: var(--ds-color-error-200);
--ds-color-border-pink-light: var(--ds-color-pink-500);
--ds-color-border-pink-dark: var(--ds-color-pink-500);
```

## Sidebar colors - light and dark

```css
--ds-color-sidebar-bg-light: var(--ds-color-white);
--ds-color-sidebar-bg-dark: var(--ds-color-neutral-900);
--ds-color-sidebar-title-text-light: var(--ds-color-neutral-900);
--ds-color-sidebar-title-text-dark: var(--ds-color-white);
--ds-color-sidebar-subtitle-text-light: var(--ds-color-neutral-500);
--ds-color-sidebar-subtitle-text-dark: var(--ds-color-neutral-400);
--ds-color-sidebar-version-text-light: var(--ds-color-neutral-400);
--ds-color-sidebar-version-text-dark: var(--ds-color-neutral-500);
--ds-color-sidebar-collapse-bg-light: var(--ds-color-neutral-100);
--ds-color-sidebar-collapse-bg-dark: var(--ds-color-neutral-800);
--ds-color-sidebar-collapse-bg-hover-light: var(--ds-color-neutral-200);
--ds-color-sidebar-collapse-bg-hover-dark: var(--ds-color-neutral-700);
--ds-color-sidebar-collapse-icon-text-light: var(--ds-color-neutral-600);
--ds-color-sidebar-collapse-icon-text-dark: var(--ds-color-neutral-400);
--ds-color-sidebar-theme-toggle-bg-light: var(--ds-color-neutral-100);
--ds-color-sidebar-theme-toggle-bg-dark: var(--ds-color-neutral-800);
--ds-color-sidebar-theme-toggle-bg-hover-light: var(--ds-color-neutral-200);
--ds-color-sidebar-theme-toggle-bg-hover-dark: var(--ds-color-neutral-700);
--ds-color-sidebar-theme-toggle-content-text-light: var(--ds-color-neutral-900);
--ds-color-sidebar-theme-toggle-content-text-dark: var(--ds-color-white);
--ds-color-sidebar-tab-bg-active-light: var(--ds-color-primary-600);
--ds-color-sidebar-tab-bg-active-dark: var(--ds-color-primary-500);
--ds-color-sidebar-tab-text-active-light: var(--ds-color-white);
--ds-color-sidebar-tab-text-active-dark: var(--ds-color-white);
--ds-color-sidebar-tab-text-inactive-light: var(--ds-color-neutral-600);
--ds-color-sidebar-tab-text-inactive-dark: var(--ds-color-neutral-200);
--ds-color-sidebar-tab-bg-hover-light: var(--ds-color-neutral-100);
--ds-color-sidebar-tab-bg-hover-dark: var(--ds-color-neutral-800-alpha-50);
--ds-color-sidebar-tab-icon-text-light: var(--ds-color-neutral-400);
--ds-color-sidebar-tab-icon-text-dark: var(--ds-color-neutral-200);
--ds-color-sidebar-tab-icon-text-hover-light: var(--ds-color-neutral-600);
--ds-color-sidebar-tab-icon-text-hover-dark: var(--ds-color-neutral-100);
--ds-color-sidebar-tab-group-text-active-light: var(--ds-color-primary-500);
--ds-color-sidebar-tab-group-text-active-dark: var(--ds-color-primary-400);
--ds-color-sidebar-tab-badge-bg-light: var(--ds-color-primary-600);
--ds-color-sidebar-tab-badge-bg-dark: var(--ds-color-primary-500);
--ds-color-sidebar-tab-badge-text-light: var(--ds-color-white);
--ds-color-sidebar-tab-badge-text-dark: var(--ds-color-white);
--ds-color-sidebar-tab-badge-bg-active-light: var(--ds-color-white-alpha-20);
--ds-color-sidebar-tab-badge-bg-active-dark: var(--ds-color-white-alpha-20);
```

## Tabs colors - segmented, pills and underline variants

```css
--ds-color-tabs-segmented-bg-light: var(--ds-color-neutral-200);
--ds-color-tabs-segmented-bg-dark: var(--ds-color-neutral-800);
--ds-color-tabs-segmented-indicator-bg-light: var(--ds-color-white);
--ds-color-tabs-segmented-indicator-bg-dark: var(--ds-color-neutral-700);
--ds-color-tabs-segmented-text-active-light: var(--ds-color-neutral-900);
--ds-color-tabs-segmented-text-active-dark: var(--ds-color-white);
--ds-color-tabs-segmented-text-inactive-light: var(--ds-color-neutral-500);
--ds-color-tabs-segmented-text-inactive-dark: var(--ds-color-neutral-400);
--ds-color-tabs-segmented-text-inactive-hover-light: var(--ds-color-neutral-700);
--ds-color-tabs-segmented-text-inactive-hover-dark: var(--ds-color-neutral-300);
--ds-color-tabs-pills-bg-active-light: var(--ds-color-primary-600);
--ds-color-tabs-pills-bg-active-dark: var(--ds-color-primary-600);
--ds-color-tabs-pills-bg-active-hover-light: var(--ds-color-primary-700);
--ds-color-tabs-pills-bg-active-hover-dark: var(--ds-color-primary-700);
--ds-color-tabs-pills-text-active-light: var(--ds-color-white);
--ds-color-tabs-pills-text-active-dark: var(--ds-color-white);
--ds-color-tabs-pills-text-inactive-light: var(--ds-color-neutral-600);
--ds-color-tabs-pills-text-inactive-dark: var(--ds-color-neutral-400);
--ds-color-tabs-pills-bg-inactive-hover-light: var(--ds-color-neutral-100);
--ds-color-tabs-pills-bg-inactive-hover-dark: var(--ds-color-neutral-900);
--ds-color-tabs-pills-text-inactive-hover-light: var(--ds-color-neutral-900);
--ds-color-tabs-pills-text-inactive-hover-dark: var(--ds-color-white);
--ds-color-tabs-underline-text-active-light: var(--ds-color-primary-600);
--ds-color-tabs-underline-text-active-dark: var(--ds-color-primary-400);
--ds-color-tabs-underline-text-inactive-light: var(--ds-color-neutral-600);
--ds-color-tabs-underline-text-inactive-dark: var(--ds-color-neutral-400);
--ds-color-tabs-underline-bg-hover-light: var(--ds-color-neutral-50);
--ds-color-tabs-underline-bg-hover-dark: var(--ds-color-neutral-900);
--ds-color-tabs-underline-text-hover-light: var(--ds-color-neutral-900);
--ds-color-tabs-underline-text-hover-dark: var(--ds-color-white);
--ds-color-tabs-underline-indicator-bg-light: var(--ds-color-primary-600);
--ds-color-tabs-underline-indicator-bg-dark: var(--ds-color-primary-400);
--ds-color-tabs-text-disabled-light: var(--ds-color-neutral-400);
--ds-color-tabs-text-disabled-dark: var(--ds-color-neutral-600);
--ds-color-tabs-ring-focus-light: var(--ds-color-primary-500);
--ds-color-tabs-ring-focus-dark: var(--ds-color-primary-500);
--ds-color-tabs-ring-offset-focus-light: var(--ds-color-white);
--ds-color-tabs-ring-offset-focus-dark: var(--ds-color-neutral-950);
--ds-color-tabs-empty-text-light: var(--ds-color-neutral-500);
--ds-color-tabs-empty-text-dark: var(--ds-color-neutral-400);
```

## DataTable colors - header, body and footer

```css
--ds-color-table-header-bg-light: var(--ds-color-neutral-50);
--ds-color-table-header-bg-dark: var(--ds-color-neutral-800-alpha-30);
--ds-color-table-header-text-light: var(--ds-color-neutral-700);
--ds-color-table-header-text-dark: var(--ds-color-neutral-300);
--ds-color-table-body-bg-light: var(--ds-color-white);
--ds-color-table-body-bg-dark: var(--ds-color-neutral-800-alpha-20);
--ds-color-table-body-text-light: var(--ds-color-neutral-900);
--ds-color-table-body-text-dark: var(--ds-color-neutral-300);
--ds-color-table-body-bg-hover-light: var(--ds-color-neutral-50);
--ds-color-table-body-bg-hover-dark: var(--ds-color-neutral-700-alpha-30);
--ds-color-table-footer-bg-light: transparent;
--ds-color-table-footer-bg-dark: transparent;
--ds-color-table-footer-text-light: var(--ds-color-neutral-600);
--ds-color-table-footer-text-dark: var(--ds-color-neutral-400);
--ds-color-table-card-label-text-light: var(--ds-color-neutral-500);
--ds-color-table-card-label-text-dark: var(--ds-color-neutral-400);
--ds-color-table-card-skeleton-bg-light: var(--ds-color-neutral-50);
--ds-color-table-card-skeleton-bg-dark: var(--ds-color-neutral-800-alpha-20);
```

## Dropdown colors - trigger, panel, and items

```css
--ds-color-dropdown-trigger-bg-light: var(--ds-color-white);
--ds-color-dropdown-trigger-bg-dark: var(--ds-color-neutral-800-alpha-70);
--ds-color-dropdown-trigger-text-light: var(--ds-color-neutral-900);
--ds-color-dropdown-trigger-text-dark: var(--ds-color-white);
--ds-color-dropdown-trigger-border-light: var(--ds-color-neutral-300);
--ds-color-dropdown-trigger-border-dark: var(--ds-color-neutral-700-alpha-70);
--ds-color-dropdown-trigger-bg-hover-light: var(--ds-color-neutral-50);
--ds-color-dropdown-trigger-bg-hover-dark: var(--ds-color-neutral-700-alpha-70);
--ds-color-dropdown-trigger-bg-active-light: var(--ds-color-dropdown-trigger-bg-hover-light);
--ds-color-dropdown-trigger-bg-active-dark: var(--ds-color-dropdown-trigger-bg-hover-dark);
--ds-color-dropdown-panel-bg-light: var(--ds-color-white);
--ds-color-dropdown-panel-bg-dark: var(--ds-color-neutral-800-alpha-80);
--ds-color-dropdown-panel-border-light: var(--ds-color-neutral-200);
--ds-color-dropdown-panel-border-dark: var(--ds-color-neutral-700-alpha-50);
--ds-color-dropdown-item-text-light: var(--ds-color-neutral-700);
--ds-color-dropdown-item-text-dark: var(--ds-color-neutral-200);
--ds-color-dropdown-item-bg-hover-light: var(--ds-color-neutral-100);
--ds-color-dropdown-item-bg-hover-dark: var(--ds-color-neutral-700-alpha-30);
--ds-color-dropdown-item-text-hover-light: var(--ds-color-neutral-900);
--ds-color-dropdown-item-text-hover-dark: var(--ds-color-white);
--ds-color-dropdown-item-bg-active-light: var(--ds-color-neutral-100);
--ds-color-dropdown-item-bg-active-dark: var(--ds-color-neutral-700-alpha-50);
--ds-color-dropdown-item-text-active-light: var(--ds-color-neutral-900);
--ds-color-dropdown-item-text-active-dark: var(--ds-color-white);
```

## Form control colors shared by input, select, textarea, and searchable select

```css
--ds-color-form-label-text-light: var(--ds-color-neutral-700);
--ds-color-form-label-text-dark: var(--ds-color-neutral-300);
--ds-color-form-control-bg-light: var(--ds-color-white);
--ds-color-form-control-bg-dark: var(--ds-color-neutral-800);
--ds-color-form-control-text-light: var(--ds-color-neutral-900);
--ds-color-form-control-text-dark: var(--ds-color-white);
--ds-color-form-control-placeholder-text-light: var(--ds-color-neutral-400);
--ds-color-form-control-placeholder-text-dark: var(--ds-color-neutral-400);
--ds-color-form-control-border-focus-light: var(--ds-color-border-primary-subtle-light);
--ds-color-form-control-border-focus-dark: var(--ds-color-border-input-dark);
--ds-color-form-control-icon-text-light: var(--ds-color-neutral-400);
--ds-color-form-control-icon-text-dark: var(--ds-color-neutral-400);
--ds-color-form-control-icon-text-hover-light: var(--ds-color-neutral-600);
--ds-color-form-control-icon-text-hover-dark: var(--ds-color-neutral-300);
--ds-color-form-supporting-text-light: var(--ds-color-neutral-500);
--ds-color-form-supporting-text-dark: var(--ds-color-neutral-400);
--ds-color-form-range-bound-text-light: var(--ds-color-neutral-400);
--ds-color-form-range-bound-text-dark: var(--ds-color-neutral-400);
--ds-color-form-range-value-text-light: var(--ds-color-neutral-600);
--ds-color-form-range-value-text-dark: var(--ds-color-neutral-300);
--ds-color-form-select-placeholder-bg-light: var(--ds-color-white);
--ds-color-form-select-placeholder-bg-dark: var(--ds-color-neutral-500);
--ds-color-form-select-placeholder-text-light: var(--ds-color-neutral-600);
--ds-color-form-select-placeholder-text-dark: var(--ds-color-white);
--ds-color-form-suggestion-panel-bg-light: var(--ds-color-white);
--ds-color-form-suggestion-panel-bg-dark: var(--ds-color-neutral-900);
--ds-color-form-suggestion-bg-hover-light: var(--ds-color-neutral-50);
--ds-color-form-suggestion-bg-hover-dark: var(--ds-color-neutral-700);
--ds-color-form-suggestion-icon-text-light: var(--ds-color-neutral-600);
--ds-color-form-suggestion-icon-text-dark: var(--ds-color-neutral-400);
```

## SwitchInput colors - light and dark

```css
--ds-color-switch-input-label-text-light: var(--ds-color-neutral-700);
--ds-color-switch-input-label-text-dark: var(--ds-color-neutral-300);
--ds-color-switch-input-track-bg-on-light: var(--ds-color-primary-600);
--ds-color-switch-input-track-bg-on-dark: var(--ds-color-primary-600);
--ds-color-switch-input-track-bg-off-light: var(--ds-color-neutral-300);
--ds-color-switch-input-track-bg-off-dark: var(--ds-color-neutral-600);
--ds-color-switch-input-thumb-bg-light: var(--ds-color-white);
--ds-color-switch-input-thumb-bg-dark: var(--ds-color-white);
```

## Dashboard view header colors

```css
--ds-color-view-header-title-text-light: var(--ds-color-neutral-900);
--ds-color-view-header-title-text-dark: var(--ds-color-white);
--ds-color-view-header-subtitle-text-light: var(--ds-color-neutral-600);
--ds-color-view-header-subtitle-text-dark: var(--ds-color-neutral-400);
```

## Card surface and header text

```css
--ds-color-card-bg-light: var(--ds-color-white);
--ds-color-card-bg-dark: var(--ds-color-neutral-900);
--ds-color-card-title-text-light: var(--ds-color-neutral-900);
--ds-color-card-title-text-dark: var(--ds-color-white);
--ds-color-card-subtitle-text-light: var(--ds-color-neutral-500);
--ds-color-card-subtitle-text-dark: var(--ds-color-neutral-400);
```

## StatCard labels, values, descriptions, and change states

```css
--ds-color-stat-card-title-text-light: var(--ds-color-neutral-600);
--ds-color-stat-card-title-text-dark: var(--ds-color-neutral-300);
--ds-color-stat-card-value-text-light: var(--ds-color-neutral-900);
--ds-color-stat-card-value-text-dark: var(--ds-color-white);
--ds-color-stat-card-empty-text-light: var(--ds-color-neutral-400);
--ds-color-stat-card-empty-text-dark: var(--ds-color-neutral-500);
--ds-color-stat-card-description-text-light: var(--ds-color-neutral-500);
--ds-color-stat-card-description-text-dark: var(--ds-color-neutral-400);
--ds-color-stat-card-change-positive-text-light: var(--ds-color-success-600);
--ds-color-stat-card-change-positive-text-dark: var(--ds-color-success-400);
--ds-color-stat-card-change-negative-text-light: var(--ds-color-error-600);
--ds-color-stat-card-change-negative-text-dark: var(--ds-color-error-400);
--ds-color-stat-card-change-neutral-text-light: var(--ds-color-warning-600);
--ds-color-stat-card-change-neutral-text-dark: var(--ds-color-warning-400);
--ds-color-stat-card-change-info-text-light: var(--ds-color-informative-600);
--ds-color-stat-card-change-info-text-dark: var(--ds-color-informative-400);
--ds-color-stat-card-change-default-text-light: var(--ds-color-neutral-600);
--ds-color-stat-card-change-default-text-dark: var(--ds-color-neutral-400);
```

## Navbar surface and mobile menu button

```css
--ds-color-navbar-bg-light: var(--ds-color-white);
--ds-color-navbar-bg-dark: var(--ds-color-neutral-900);
--ds-color-navbar-mobile-menu-bg-light: var(--ds-color-neutral-100);
--ds-color-navbar-mobile-menu-bg-dark: var(--ds-color-neutral-800);
--ds-color-navbar-mobile-menu-bg-hover-light: var(--ds-color-neutral-200);
--ds-color-navbar-mobile-menu-bg-hover-dark: var(--ds-color-neutral-700);
--ds-color-navbar-mobile-menu-icon-text-light: var(--ds-color-neutral-900);
--ds-color-navbar-mobile-menu-icon-text-dark: var(--ds-color-white);
```

## User profile and notification dropdown colors

```css
--ds-color-profile-notification-trigger-bg-light: var(--ds-color-neutral-100);
--ds-color-profile-notification-trigger-bg-dark: var(--ds-color-neutral-800);
--ds-color-profile-notification-trigger-bg-hover-light: var(--ds-color-neutral-200);
--ds-color-profile-notification-trigger-bg-hover-dark: var(--ds-color-neutral-700);
--ds-color-profile-notification-trigger-icon-text-light: var(--ds-color-neutral-900);
--ds-color-profile-notification-trigger-icon-text-dark: var(--ds-color-white);
--ds-color-profile-panel-bg-light: var(--ds-color-white);
--ds-color-profile-panel-bg-dark: var(--ds-color-neutral-800-alpha-90);
--ds-color-profile-notification-title-text-light: var(--ds-color-neutral-900);
--ds-color-profile-notification-title-text-dark: var(--ds-color-white);
--ds-color-profile-avatar-bg-light: var(--ds-color-neutral-300);
--ds-color-profile-avatar-bg-dark: var(--ds-color-neutral-600);
--ds-color-profile-avatar-text-light: var(--ds-color-neutral-900);
--ds-color-profile-avatar-text-dark: var(--ds-color-white);
--ds-color-profile-name-text-light: var(--ds-color-neutral-900);
--ds-color-profile-name-text-dark: var(--ds-color-white);
--ds-color-profile-role-text-light: var(--ds-color-neutral-600);
--ds-color-profile-role-text-dark: var(--ds-color-neutral-400);
--ds-color-profile-chevron-text-light: var(--ds-color-neutral-600);
--ds-color-profile-chevron-text-dark: var(--ds-color-neutral-400);
```

## Menus and overlays colors - light and dark

```css
--ds-color-dropdown-menu-panel-bg-light: var(--ds-color-white);
--ds-color-dropdown-menu-panel-bg-dark: var(--ds-color-neutral-800);
--ds-color-modal-scrim-bg-light: var(--ds-color-black-alpha-40);
--ds-color-modal-scrim-bg-dark: var(--ds-color-black-alpha-40);
--ds-color-modal-panel-bg-light: var(--ds-color-white);
--ds-color-modal-panel-bg-dark: var(--ds-color-neutral-900);
--ds-color-modal-title-text-light: var(--ds-color-neutral-900);
--ds-color-modal-title-text-dark: var(--ds-color-white);
--ds-color-modal-subtitle-text-light: var(--ds-color-neutral-600);
--ds-color-modal-subtitle-text-dark: var(--ds-color-neutral-400);
--ds-color-modal-close-text-light: var(--ds-color-neutral-600);
--ds-color-modal-close-text-dark: var(--ds-color-neutral-400);
--ds-color-modal-close-text-hover-light: var(--ds-color-neutral-900);
--ds-color-modal-close-text-hover-dark: var(--ds-color-neutral-200);
--ds-color-modal-close-ring-focus-light: var(--ds-color-neutral-500);
--ds-color-modal-close-ring-focus-dark: var(--ds-color-neutral-500);
--ds-color-bottom-modal-scrim-bg-light: var(--ds-color-black-alpha-32);
--ds-color-bottom-modal-scrim-bg-dark: var(--ds-color-black-alpha-32);
--ds-color-bottom-modal-panel-bg-light: var(--ds-color-white);
--ds-color-bottom-modal-panel-bg-dark: var(--ds-color-material-neutral-10);
--ds-color-bottom-modal-text-light: var(--ds-color-material-neutral-10);
--ds-color-bottom-modal-text-dark: var(--ds-color-material-neutral-90);
--ds-color-bottom-modal-title-text-light: var(--ds-color-material-neutral-10);
--ds-color-bottom-modal-title-text-dark: var(--ds-color-material-neutral-90);
--ds-color-bottom-modal-subtitle-text-light: var(--ds-color-material-neutral-variant-30);
--ds-color-bottom-modal-subtitle-text-dark: var(--ds-color-material-neutral-variant-80);
--ds-color-bottom-modal-close-text-light: var(--ds-color-material-neutral-variant-30);
--ds-color-bottom-modal-close-text-dark: var(--ds-color-material-neutral-variant-80);
--ds-color-bottom-modal-close-bg-hover-light: var(--ds-color-black-alpha-5);
--ds-color-bottom-modal-close-bg-hover-dark: var(--ds-color-white-alpha-10);
--ds-color-bottom-modal-close-text-hover-light: var(--ds-color-material-neutral-10);
--ds-color-bottom-modal-close-text-hover-dark: var(--ds-color-material-neutral-90);
--ds-color-bottom-modal-close-ring-focus-light: var(--ds-color-material-neutral-variant-30);
--ds-color-bottom-modal-close-ring-focus-dark: var(--ds-color-material-neutral-variant-80);
--ds-color-bottom-modal-divider-border-light: var(--ds-color-material-neutral-variant-50-alpha-30);
--ds-color-bottom-modal-divider-border-dark: var(--ds-color-material-neutral-variant-60-alpha-30);
```

## Item and List colors - light and dark

```css
--ds-color-item-bg-light: var(--ds-color-white);
--ds-color-item-bg-dark: var(--ds-color-neutral-900);
--ds-color-item-bg-hover-light: var(--ds-color-neutral-50);
--ds-color-item-bg-hover-dark: var(--ds-color-neutral-800);
--ds-color-item-title-text-light: var(--ds-color-neutral-900);
--ds-color-item-title-text-dark: var(--ds-color-white);
--ds-color-item-subtitle-text-light: var(--ds-color-neutral-500);
--ds-color-item-subtitle-text-dark: var(--ds-color-neutral-400);
--ds-color-item-icon-text-light: var(--ds-color-neutral-400);
--ds-color-item-icon-text-dark: var(--ds-color-neutral-500);
--ds-color-list-bg-light: var(--ds-color-white);
--ds-color-list-bg-dark: var(--ds-color-neutral-900);
```

## HelpTooltip colors - light and dark

```css
--ds-color-help-tooltip-trigger-bg-light: var(--ds-color-neutral-200);
--ds-color-help-tooltip-trigger-bg-dark: var(--ds-color-neutral-700);
--ds-color-help-tooltip-trigger-text-light: var(--ds-color-neutral-500);
--ds-color-help-tooltip-trigger-text-dark: var(--ds-color-neutral-400);
--ds-color-help-tooltip-panel-bg-light: var(--ds-color-neutral-900);
--ds-color-help-tooltip-panel-bg-dark: var(--ds-color-neutral-700);
--ds-color-help-tooltip-panel-text-light: var(--ds-color-white);
--ds-color-help-tooltip-panel-text-dark: var(--ds-color-white);
```

## IconButton colors - light and dark

```css
--ds-color-icon-button-gray-bg-light: var(--ds-color-neutral-600);
--ds-color-icon-button-gray-bg-dark: var(--ds-color-neutral-700);
--ds-color-icon-button-gray-bg-hover-light: var(--ds-color-neutral-500);
--ds-color-icon-button-gray-bg-hover-dark: var(--ds-color-neutral-600);
--ds-color-icon-button-gray-text-light: var(--ds-color-white);
--ds-color-icon-button-gray-text-dark: var(--ds-color-white);
--ds-color-icon-button-gray-outline-border-light: var(--ds-color-border-input-light);
--ds-color-icon-button-gray-outline-border-dark: var(--ds-color-border-input-dark);
--ds-color-icon-button-gray-outline-text-light: var(--ds-color-neutral-700);
--ds-color-icon-button-gray-outline-text-dark: var(--ds-color-neutral-300);
--ds-color-icon-button-gray-outline-bg-hover-light: var(--ds-color-neutral-100);
--ds-color-icon-button-gray-outline-bg-hover-dark: var(--ds-color-neutral-800);
--ds-color-icon-button-primary-bg-light: var(--ds-color-primary-600);
--ds-color-icon-button-primary-bg-dark: var(--ds-color-primary-700);
--ds-color-icon-button-primary-bg-hover-light: var(--ds-color-primary-500);
--ds-color-icon-button-primary-bg-hover-dark: var(--ds-color-primary-600);
--ds-color-icon-button-primary-text-light: var(--ds-color-white);
--ds-color-icon-button-primary-text-dark: var(--ds-color-white);
--ds-color-icon-button-primary-outline-border-light: var(--ds-color-border-primary-subtle-light);
--ds-color-icon-button-primary-outline-border-dark: var(--ds-color-border-primary-subtle-dark);
--ds-color-icon-button-primary-outline-text-light: var(--ds-color-primary-600);
--ds-color-icon-button-primary-outline-text-dark: var(--ds-color-primary-400);
--ds-color-icon-button-primary-outline-bg-hover-light: var(--ds-color-primary-50);
--ds-color-icon-button-primary-outline-bg-hover-dark: color-mix(in oklab, var(--ds-color-primary-900) 30%, transparent);
--ds-color-icon-button-secondary-bg-light: var(--ds-color-secondary-600);
--ds-color-icon-button-secondary-bg-dark: var(--ds-color-secondary-700);
--ds-color-icon-button-secondary-bg-hover-light: var(--ds-color-secondary-500);
--ds-color-icon-button-secondary-bg-hover-dark: var(--ds-color-secondary-600);
--ds-color-icon-button-secondary-text-light: var(--ds-color-white);
--ds-color-icon-button-secondary-text-dark: var(--ds-color-white);
--ds-color-icon-button-secondary-outline-border-light: var(--ds-color-border-secondary-light);
--ds-color-icon-button-secondary-outline-border-dark: var(--ds-color-border-secondary-dark);
--ds-color-icon-button-secondary-outline-text-light: var(--ds-color-secondary-600);
--ds-color-icon-button-secondary-outline-text-dark: var(--ds-color-secondary-400);
--ds-color-icon-button-secondary-outline-bg-hover-light: var(--ds-color-secondary-50);
--ds-color-icon-button-secondary-outline-bg-hover-dark: color-mix(in oklab, var(--ds-color-secondary-900) 30%, transparent);
--ds-color-icon-button-success-bg-light: var(--ds-color-success-600);
--ds-color-icon-button-success-bg-dark: var(--ds-color-success-700);
--ds-color-icon-button-success-bg-hover-light: var(--ds-color-success-500);
--ds-color-icon-button-success-bg-hover-dark: var(--ds-color-success-600);
--ds-color-icon-button-success-text-light: var(--ds-color-white);
--ds-color-icon-button-success-text-dark: var(--ds-color-white);
--ds-color-icon-button-success-outline-border-light: var(--ds-color-border-success-light);
--ds-color-icon-button-success-outline-border-dark: var(--ds-color-border-success-dark);
--ds-color-icon-button-success-outline-text-light: var(--ds-color-success-600);
--ds-color-icon-button-success-outline-text-dark: var(--ds-color-success-400);
--ds-color-icon-button-success-outline-bg-hover-light: var(--ds-color-success-50);
--ds-color-icon-button-success-outline-bg-hover-dark: color-mix(in oklab, var(--ds-color-success-900) 30%, transparent);
--ds-color-icon-button-danger-bg-light: var(--ds-color-error-100);
--ds-color-icon-button-danger-bg-dark: var(--ds-color-error-900-alpha-50);
--ds-color-icon-button-danger-bg-hover-light: var(--ds-color-error-200);
--ds-color-icon-button-danger-bg-hover-dark: color-mix(in oklab, var(--ds-color-error-900) 80%, transparent);
--ds-color-icon-button-danger-text-light: var(--ds-color-error-700);
--ds-color-icon-button-danger-text-dark: var(--ds-color-error-200);
--ds-color-icon-button-danger-outline-border-light: var(--ds-color-border-danger-light);
--ds-color-icon-button-danger-outline-border-dark: var(--ds-color-border-danger-dark);
--ds-color-icon-button-danger-outline-text-light: var(--ds-color-error-600);
--ds-color-icon-button-danger-outline-text-dark: var(--ds-color-error-400);
--ds-color-icon-button-danger-outline-bg-hover-light: var(--ds-color-error-50);
--ds-color-icon-button-danger-outline-bg-hover-dark: color-mix(in oklab, var(--ds-color-error-900) 30%, transparent);
--ds-color-icon-button-warning-bg-light: var(--ds-color-warning-600);
--ds-color-icon-button-warning-bg-dark: var(--ds-color-warning-700);
--ds-color-icon-button-warning-bg-hover-light: var(--ds-color-warning-500);
--ds-color-icon-button-warning-bg-hover-dark: var(--ds-color-warning-600);
--ds-color-icon-button-warning-text-light: var(--ds-color-white);
--ds-color-icon-button-warning-text-dark: var(--ds-color-white);
--ds-color-icon-button-warning-outline-border-light: var(--ds-color-border-warning-light);
--ds-color-icon-button-warning-outline-border-dark: var(--ds-color-border-warning-dark);
--ds-color-icon-button-warning-outline-text-light: var(--ds-color-warning-600);
--ds-color-icon-button-warning-outline-text-dark: var(--ds-color-warning-400);
--ds-color-icon-button-warning-outline-bg-hover-light: var(--ds-color-warning-50);
--ds-color-icon-button-warning-outline-bg-hover-dark: color-mix(in oklab, var(--ds-color-warning-900) 30%, transparent);
--ds-color-icon-button-pink-bg-light: var(--ds-color-pink-600);
--ds-color-icon-button-pink-bg-dark: var(--ds-color-pink-700);
--ds-color-icon-button-pink-bg-hover-light: var(--ds-color-pink-500);
--ds-color-icon-button-pink-bg-hover-dark: var(--ds-color-pink-600);
--ds-color-icon-button-pink-text-light: var(--ds-color-white);
--ds-color-icon-button-pink-text-dark: var(--ds-color-white);
--ds-color-icon-button-pink-outline-border-light: var(--ds-color-border-pink-light);
--ds-color-icon-button-pink-outline-border-dark: var(--ds-color-border-pink-dark);
--ds-color-icon-button-pink-outline-text-light: var(--ds-color-pink-600);
--ds-color-icon-button-pink-outline-text-dark: var(--ds-color-pink-400);
--ds-color-icon-button-pink-outline-bg-hover-light: var(--ds-color-pink-50);
--ds-color-icon-button-pink-outline-bg-hover-dark: color-mix(in oklab, var(--ds-color-pink-900) 30%, transparent);
```

## CardPaginations colors - light and dark

```css
--ds-color-card-pagination-summary-text-light: var(--ds-color-neutral-500);
--ds-color-card-pagination-summary-text-dark: var(--ds-color-neutral-400);
--ds-color-card-pagination-page-text-light: var(--ds-color-neutral-700);
--ds-color-card-pagination-page-text-dark: var(--ds-color-neutral-300);
--ds-color-card-pagination-button-bg-light: var(--ds-color-primary-600);
--ds-color-card-pagination-button-bg-dark: var(--ds-color-primary-600);
--ds-color-card-pagination-button-bg-hover-light: var(--ds-color-primary-500);
--ds-color-card-pagination-button-bg-hover-dark: var(--ds-color-primary-500);
--ds-color-card-pagination-button-text-light: var(--ds-color-white);
--ds-color-card-pagination-button-text-dark: var(--ds-color-white);
```

## Table loading placeholders colors - light and dark

```css
--ds-color-table-skeleton-placeholder-bg-light: var(--ds-color-neutral-200);
--ds-color-table-skeleton-placeholder-bg-dark: var(--ds-color-neutral-700);
```

## Breadcrumb colors - light and dark

```css
--ds-color-breadcrumb-separator-text-light: var(--ds-color-neutral-500);
--ds-color-breadcrumb-separator-text-dark: var(--ds-color-neutral-500);
--ds-color-breadcrumb-link-text-light: var(--ds-color-neutral-600);
--ds-color-breadcrumb-link-text-dark: var(--ds-color-neutral-500);
--ds-color-breadcrumb-link-text-hover-light: var(--ds-color-neutral-900);
--ds-color-breadcrumb-link-text-hover-dark: var(--ds-color-neutral-300);
--ds-color-breadcrumb-current-text-light: var(--ds-color-neutral-900);
--ds-color-breadcrumb-current-text-dark: var(--ds-color-white);
--ds-color-breadcrumb-item-text-light: var(--ds-color-neutral-600);
--ds-color-breadcrumb-item-text-dark: var(--ds-color-neutral-400);
```

## InfoItem colors - light and dark

```css
--ds-color-info-item-label-text-light: var(--ds-color-neutral-600);
--ds-color-info-item-label-text-dark: var(--ds-color-neutral-400);
--ds-color-info-item-value-text-light: var(--ds-color-neutral-900);
--ds-color-info-item-value-text-dark: var(--ds-color-white);
```

## LoadingSVG colors - light and dark

```css
--ds-color-loading-svg-text-light: var(--ds-color-neutral-900);
--ds-color-loading-svg-text-dark: var(--ds-color-white);
```

## Datepicker colors - light and dark

```css
--ds-color-datepicker-bg-light: var(--ds-color-white);
--ds-color-datepicker-bg-dark: var(--ds-color-midnight);
--ds-color-datepicker-primary-bg-light: var(--ds-color-primary-600);
--ds-color-datepicker-primary-bg-dark: var(--ds-color-primary-600);
```

## Tailwind color names

`theme.css` maps each name below to Tailwind with `@theme inline`, so any color
utility works with it: `bg-`, `text-`, `border-`, `ring-`, `divide-`,
`placeholder-`, `from-`/`to-`, with opacity (`bg-primary-600/10`) and variants
(`hover:`, `dark:`). A name not listed here generates no CSS.

- Palettes (`{palette}-{shade}`): `danger`, `error`, `informative`, `primary`, `secondary`, `success`, `tertiary`, `warning`. `success`, `warning`, `error` and `danger` have no 300 or 950 shade; `danger` is an alias of the `error` palette.
- Every component token `--ds-color-{name}` is the color `{name}`, e.g.
  `--ds-color-card-bg-light` → `bg-card-bg-light`, except `--ds-color-datepicker-bg-light`, `--ds-color-datepicker-bg-dark`, `--ds-color-datepicker-primary-bg-light`, `--ds-color-datepicker-primary-bg-dark` (read through `var()` only).
- Semantic borders drop the `border-` segment (use them with `border-`, `divide-`
  or `outline-`):

| Color name | Token |
| --- | --- |
| `default-light` | `--ds-color-border-default-light` |
| `default-dark` | `--ds-color-border-default-dark` |
| `input-light` | `--ds-color-border-input-light` |
| `input-dark` | `--ds-color-border-input-dark` |
| `muted-light` | `--ds-color-border-muted-light` |
| `muted-dark` | `--ds-color-border-muted-dark` |
| `strong-light` | `--ds-color-border-strong-light` |
| `strong-dark` | `--ds-color-border-strong-dark` |
| `hover-light` | `--ds-color-border-hover-light` |
| `hover-dark` | `--ds-color-border-hover-dark` |
| `tooltip-light` | `--ds-color-border-tooltip-light` |
| `tooltip-dark` | `--ds-color-border-tooltip-dark` |
| `card-light` | `--ds-color-border-card-light` |
| `card-dark` | `--ds-color-border-card-dark` |
| `divider-light` | `--ds-color-border-divider-light` |
| `divider-dark` | `--ds-color-border-divider-dark` |
| `avatar-light` | `--ds-color-border-avatar-light` |
| `avatar-dark` | `--ds-color-border-avatar-dark` |
| `primary-light` | `--ds-color-border-primary-light` |
| `primary-dark` | `--ds-color-border-primary-dark` |
| `primary-active-light` | `--ds-color-border-primary-active-light` |
| `primary-active-dark` | `--ds-color-border-primary-active-dark` |
| `primary-subtle-light` | `--ds-color-border-primary-subtle-light` |
| `primary-subtle-dark` | `--ds-color-border-primary-subtle-dark` |
| `secondary-light` | `--ds-color-border-secondary-light` |
| `secondary-dark` | `--ds-color-border-secondary-dark` |
| `secondary-subtle-light` | `--ds-color-border-secondary-subtle-light` |
| `secondary-subtle-dark` | `--ds-color-border-secondary-subtle-dark` |
| `success-light` | `--ds-color-border-success-light` |
| `success-dark` | `--ds-color-border-success-dark` |
| `success-subtle-light` | `--ds-color-border-success-subtle-light` |
| `success-subtle-dark` | `--ds-color-border-success-subtle-dark` |
| `success-muted-light` | `--ds-color-border-success-muted-light` |
| `success-muted-dark` | `--ds-color-border-success-muted-dark` |
| `warning-light` | `--ds-color-border-warning-light` |
| `warning-dark` | `--ds-color-border-warning-dark` |
| `warning-subtle-light` | `--ds-color-border-warning-subtle-light` |
| `warning-subtle-dark` | `--ds-color-border-warning-subtle-dark` |
| `warning-muted-light` | `--ds-color-border-warning-muted-light` |
| `warning-muted-dark` | `--ds-color-border-warning-muted-dark` |
| `danger-light` | `--ds-color-border-danger-light` |
| `danger-dark` | `--ds-color-border-danger-dark` |
| `danger-emphasis-light` | `--ds-color-border-danger-emphasis-light` |
| `danger-emphasis-dark` | `--ds-color-border-danger-emphasis-dark` |
| `danger-subtle-light` | `--ds-color-border-danger-subtle-light` |
| `danger-subtle-dark` | `--ds-color-border-danger-subtle-dark` |
| `danger-muted-light` | `--ds-color-border-danger-muted-light` |
| `danger-muted-dark` | `--ds-color-border-danger-muted-dark` |
| `pink-light` | `--ds-color-border-pink-light` |
| `pink-dark` | `--ds-color-border-pink-dark` |

`neutral`, `gray`, `pink`, `white` and `black` are not remapped: those utilities
are Tailwind's own. The DS neutral palette (`--ds-color-neutral-*`) defaults to
Tailwind gray, so `gray-*` utilities match it until an app changes
`--ds-color-neutral`.
