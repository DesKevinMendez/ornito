---
name: ornito-vue
description: Build Vue 3 + Tailwind v4 UI with Ornito, the user's personal design system (package `ornito`, repo DesKevinMendez/ornito, installed from GitHub tags). Use this skill whenever the task touches the frontend of a Vue dashboard — pages, views, forms and validation, inputs, selects, searchable selects, date pickers, tables (server-side or local), lists, cards, stat cards, modals and confirmations, alerts, badges, toasts, tabs, dropdowns, sidebar, navbar, layouts, theming (brand color, dark mode, fonts, CSS tokens) — in DteSales, Gento Fit, Rutely's dashboard, trafic-analytics or any Vue app that uses or should use Ornito, even if the user doesn't say "Ornito". Also use it to install or upgrade the package in an app, re-skin it with CSS variables, or add or change components, tokens or docs in the ornito repo. For Android/Jetpack Compose use ornito-android instead.
---

# Ornito (Vue)

Ornito is a Vue 3 design system built on Tailwind v4: about 45 components, a few
composables and a token layer of runtime CSS variables. Every color is a token with a
`-light` and a `-dark` value, one key color recolors a whole palette, and an app
re-skins it from its own CSS without rebuilding the package. Texts default to Spanish.

| Area | Exports |
| --- | --- |
| Actions | `BaseButton`, `BaseButtonIcon`, `IconButton` |
| Forms (vee-validate) | `FormInput` (text, email, password, tel, number, date, datetime, time, money, range), `FormSelect`, `FormTextarea`, `SearchableSelect`, `SwitchInput` |
| Feedback | `Alert`, `WarningAlert`, `Badge`, `Modal`, `BottomModal`, `ConfirmationModal`, `SnackBar`, `LoadingSVG`, `HelpTooltip`, `ImageLightbox` |
| Layout | `ViewHeader`, `Card`, `CardPaginations`, `StatCard`, `InfoItem`, `Divider`, `CollapseTransition` |
| Navigation | `Sidebar`, `Navbar`, `UserProfileDropdown`, `SidebarNav`, `Tabs`, `Breadcrumb`, `Dropdown`, `DropdownMenu` |
| Data | `DataTable`, `List`, `Item`, `UserAvatar`, `UserAvatars`, `TableSkeleton`, `TablePagination` |
| Composables | `initTheme`, `useTheme`, `useSidebar`, `useMobile`, `useMessages`, `useTable`, `useRequestKey`, `yup` |

Icons are [Tabler](https://tabler.io/icons) Vue components passed as values:
`import { IconPlus } from '@tabler/icons-vue'` then `:icon="IconPlus"`.

## How to work with it

1. **Use Ornito first.** Build views from Ornito components instead of hand-made
   Tailwind markup or another UI kit: `BaseButton` instead of `<button class="bg-…">`,
   `FormInput` instead of `<input>`, `Card`, `DataTable`, `Modal`, `Badge`, `Alert`.
   They already carry the tokens, dark mode, Spanish texts, loading states and the
   dashboards' look, so every app stays consistent and re-themable from one place.
   Write custom markup only for what Ornito lacks, and color it with DS utilities
   (rule 3). If an app's AGENTS.md says to ask before inventing a UI element, ask.
2. **Check signatures, don't guess.** [references/api.md](references/api.md) is
   generated from the sources and lists every prop (type, required, default),
   `v-model`, event and slot. Search it (`grep -n "### FormInput" -A40 references/api.md`)
   before using a component you're unsure about: invented props are silently
   dropped (`<BaseButton small>`, `<FormInput required>` do nothing) and invented
   slots never render (`ViewHeader` has `#right`, not `#actions`). After writing UI
   code, run `python3 <this skill>/scripts/check_ornito_usage.py <files or dirs>`.
3. **Colors come from the theme.** Never hardcode `#hex`, `rgb()` or raw Tailwind
   palettes that the theme can't recolor (`indigo-*`, `red-*`, `green-*`, `amber-*`,
   `sky-*`, `violet-*`…). Use the DS palettes `primary`, `secondary`, `tertiary`,
   `informative`, `success`, `warning`, `error` (alias `danger`) — e.g.
   `text-error-600 dark:text-error-400` — or a component token utility such as
   `bg-card-bg-light dark:bg-card-bg-dark`. `success`, `warning` and `error` have no
   950 shade, so `text-danger-950` renders nothing. Neutral text and borders
   may use `gray-*` (the DS neutral defaults to gray) or the semantic borders
   `border-default-light dark:border-default-dark`. Always pair the two modes.
4. **Customize at the right level.** App-wide (brand color, a component's color in
   one mode, font) → CSS variables on `:root` in the app's CSS; one key color such as
   `--ds-color-primary` recolors every shade, button, switch, tab and focus ring. One
   instance → props, slots or a `class`. Never edit a copy of an Ornito component in
   the app. See [references/theming.md](references/theming.md).
5. **Texts are props.** Pass every user-facing text in the app's language: labels,
   placeholders, `actions-label` (DataTable defaults to English "Actions"),
   `search-placeholder`, `true-label`/`false-label`, modal titles. Defaults are Spanish
   ("Buscar...", "Selecciona una opción", "Activo", "Confirmar Acción").
6. **Forms are vee-validate.** Put inputs inside vee-validate's `<Form @submit>`;
   every `FormInput`, `FormSelect` and `FormTextarea` needs `id`, `name`, `label` and
   `v-model`. Validate with `:rules` built from `yup` (re-exported by `ornito`) and
   write the messages in the app's language. Submit with
   `<BaseButton type="submit" :loading="saving">` (buttons default to `type="button"`).
7. **Server data goes through `useRequestKey`.** The app provides its request
   factory once (`app.provide(useRequestKey, useRequest)`); then `DataTable url=…`
   paginates and searches the server (`page`, `per_page`, `filter[field]`, response
   `{ data, pagination }`) and `SearchableSelect url=… search-by=…` searches and
   resolves values. Pass `:data` instead of `url` for rows already in memory. Both
   debounce searches 500ms and show their own loading state; don't add another.
   Details in [references/components.md](references/components.md#server-data).
8. **Views follow one shape.** `ViewHeader` (title, subtitle, primary action in
   `#right`) → content in `Card`s. A create action is a `BaseButton size="auto"`
   with `IconPlus` in the header; row actions are `IconButton`s with `aria-label` in
   the table's `#actions` slot; destructive actions go through `ConfirmationModal`;
   results are reported with `useMessages().pushMessage(text, isError)` (the layout
   renders one `<SnackBar />`) and inline failures with `<Alert type="danger">`.
   Layout and recipes in [references/layout.md](references/layout.md) and
   [references/recipes.md](references/recipes.md).

## Quick start

Install from a release tag (each tag contains the built `dist/`; `main` does not):

```bash
pnpm add "ornito@git+https://github.com/DesKevinMendez/ornito.git#v0.12.1"
pnpm add vue-router vee-validate yup @vueuse/core @tabler/icons-vue   # peers + icons
```

```css
/* resources/css/app.css (the app's Tailwind entry) */
@import 'tailwindcss';
@import 'ornito/theme.css';
@source '../../node_modules/ornito/dist';

@custom-variant dark (&:is(.dark *));

:root {
  --ds-color-primary: #16a34a; /* optional: brand color, recolors the primary palette */
}
```

```ts
// app.ts
import { createApp } from 'vue'
import { initTheme, useRequestKey } from 'ornito'
import 'ornito/style.css'
import '../css/app.css'
import App from './App.vue'
import router from './router'
import { useRequest } from './core/composables/useRequest'

initTheme() // applies the saved light/dark choice (dark by default) to <html>

createApp(App).use(router).provide(useRequestKey, useRequest).mount('#app')
```

A typical view:

```vue
<script setup lang="ts">
import { IconEdit, IconPlus } from '@tabler/icons-vue'
import { BaseButton, Card, DataTable, IconButton, ViewHeader, type TableField } from 'ornito'

interface Vehicle { id: number; plate: string; brand: string }

const columns: TableField<Vehicle>[] = [
  { label: 'Placa', key: 'plate' },
  { label: 'Marca', key: 'brand' },
]
</script>

<template>
  <div class="space-y-6">
    <ViewHeader title="Vehículos" subtitle="Administra la flota.">
      <template #right>
        <BaseButton size="auto" :icon="IconPlus" :to="{ name: 'vehicles.create' }">Nuevo vehículo</BaseButton>
      </template>
    </ViewHeader>
    <Card>
      <DataTable url="/api/v1/vehicles" :columns="columns" search-by="plate" search-placeholder="Buscar placa..." actions-label="Acciones">
        <template #actions="{ row }">
          <IconButton :icon="IconEdit" color="primary" :to="{ name: 'vehicles.edit', params: { id: row.id } }" aria-label="Editar vehículo" />
        </template>
      </DataTable>
    </Card>
  </div>
</template>
```

## Where to look

| Task | Read |
| --- | --- |
| Install or upgrade in an app (pnpm, CSS imports, `@source`, auto-import resolver, request factory), release a new version | [installation.md](references/installation.md) |
| Brand colors, dark mode, fonts, a component's color per mode, token grammar | [theming.md](references/theming.md) |
| Pick and use a component: buttons, forms and validation, selects, tables, lists, modals, feedback, tabs, menus | [components.md](references/components.md) |
| App shell: sidebar, mobile sidebar, navbar, profile menu, theme toggle, view structure | [layout.md](references/layout.md) |
| Full views: server table, create/edit form, form in a modal, detail page, dashboard, infinite list, delete with confirmation | [recipes.md](references/recipes.md) |
| Adding or changing a component, token or doc inside the ornito repo | [contributing.md](references/contributing.md) |
| Exact props, models, events and slots of everything exported | [api.md](references/api.md) (generated) |
| Every token's default value and the Tailwind color names | [tokens.md](references/tokens.md) (generated) |

## Verifying

- Check usage: `python3 <this skill>/scripts/check_ornito_usage.py resources/js`
  (also takes `.vue`, `.ts`, `.css` and Markdown files). It reports unknown imports,
  props, events, slots and tokens, missing required props and colors that bypass the
  theme. Fix what it reports in the code you wrote; mention pre-existing findings in
  other files instead of rewriting them unasked.
- Type-check and build with the app's own scripts (`pnpm build`, `vue-tsc`), unless
  the project's rules say to ask before running them.
- To see a view, use the app's dev server and check both modes (toggle `.dark` on
  `<html>` or call `useTheme().toggleTheme()`).
- In the ornito repo: `pnpm lint`, `pnpm test`, `pnpm build:types`; after changing
  props, emits, slots, exports or tokens, regenerate the references with
  `python3 .claude/skills/ornito-vue/scripts/gen_api_reference.py`.
