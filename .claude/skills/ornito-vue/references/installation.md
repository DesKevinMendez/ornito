# Installing Ornito in an app

Ornito isn't on npm. Its CI publishes each version to the `builds` branch of
DesKevinMendez/ornito (with `dist/`, `src/tokens.css`, `src/theme.css` and
`package.json`) and tags it `v<version>`. Apps install a tag; `main` has no `dist/`,
so installing it without a tag gives an empty package.

## Contents

- [Dependency](#dependency)
- [CSS](#css)
- [Entry file](#entry-file)
- [Request factory](#request-factory)
- [Auto-importing components (optional)](#auto-importing-components-optional)
- [Upgrading](#upgrading)
- [Releasing a new version (ornito repo)](#releasing-a-new-version-ornito-repo)
- [Troubleshooting](#troubleshooting)

## Dependency

```bash
# exact tag (DteSales)
pnpm add "ornito@git+https://github.com/DesKevinMendez/ornito.git#v0.12.0"
# or a semver range over the tags (Gento Fit, Rutely) — needs SSH access to GitHub
pnpm add "ornito@git+ssh://git@github.com:DesKevinMendez/ornito#semver:^0.12.0"
```

Peer dependencies the app must have: `vue` ^3.5, `vue-router` ^4.6 (buttons and
links render `RouterLink`), `vee-validate` ^4.15, `yup` ^1.7 and `@vueuse/core`
^12.8 or ^13. Ornito bundles its own `@tabler/icons-vue`, `@vuepic/vue-datepicker`,
`date-fns`, `maska` and `v-money3`; add `@tabler/icons-vue` to the app too, to pass
icons to components. The app needs Tailwind v4 (`@tailwindcss/vite`).

## CSS

In the app's Tailwind entry CSS:

```css
@import 'tailwindcss';
@import 'ornito/theme.css';   /* tokens + @theme inline mapping (bg-primary-600, bg-card-bg-light…) */
@source '../../node_modules/ornito/dist';   /* let Tailwind see the classes inside Ornito's components */

@custom-variant dark (&:is(.dark *));   /* dark mode is the .dark class on <html> */
```

- `theme.css` has to go through the app's own Tailwind build: it defines the
  `--ds-*` tokens and maps them to Tailwind colors, so the app can write
  `text-primary-600` or `bg-card-bg-light` and so overrides reach every utility.
- `@source` is needed because `dist/` is inside `node_modules`, which Tailwind skips.
  Adjust the relative path from the CSS file to `node_modules`.
- The components' compiled styles are `ornito/style.css`: import it once, either
  in the entry script (`import 'ornito/style.css'`) or in this CSS file after
  `theme.css` (`@import 'ornito/style.css';`).
- Put the app's token overrides (`:root { --ds-color-primary: … }`) in this same
  file, after the imports. See [theming.md](theming.md).

## Entry file

```ts
import { createApp } from 'vue'
import { initTheme, useRequestKey } from 'ornito'
import 'ornito/style.css'
import '../css/app.css'
import App from '@/App.vue'
import router from '@/router'
import { useRequest } from '@/core/composables/useRequest'

initTheme() // puts .dark on <html> from localStorage "darkMode" (true by default)

const app = createApp(App)
app.use(router)
app.provide(useRequestKey, useRequest)
app.mount('#app')
```

`initTheme()` must run before mount so the first paint has the right mode. The
choice is shared with `useTheme()` (the sidebar's toggle uses it) and persisted.

## Request factory

`DataTable` (with `url`), `SearchableSelect` and `useTable` don't call `fetch`: they
inject a factory so requests carry the app's base URL, auth token and headers. The
contract (`GetFn`, `UseRequestFactory` are exported types):

```ts
type GetFn = <T = any>(url: string) => Promise<{ data: Ref<T | null> }>
type UseRequestFactory = () => { get: GetFn }
```

Most dashboards already have a `useRequest()` composable with `get/post/put/del`
whose `get` returns `{ data, statusCode, isLoading, error }`; provide it as is. A
minimal one:

```ts
import { ref, type Ref } from 'vue'

export function useRequest() {
  const get = async <T = any>(url: string): Promise<{ data: Ref<T | null> }> => {
    const response = await fetch(url, {
      headers: { Accept: 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    if (!response.ok) throw new Error(`Request failed (${response.status})`)
    return { data: ref(await response.json()) as Ref<T | null> }
  }
  return { get }
}
```

Without the provider, `SearchableSelect` throws on setup and a server `DataTable`
shows "no request instance provided". Local tables (`:data`) don't need it.

## Auto-importing components (optional)

Apps that use `unplugin-vue-components` can resolve Ornito tags without imports
(Gento Fit does this). Explicit `import { … } from 'ornito'` is the default
everywhere else and what the checker understands best.

```ts
// vite.config.ts
const ornitoComponents = new Set(['Alert', 'BaseButton', 'Card', /* … every component name … */])

Components({
  dts: true,
  resolvers: [(name: string) => (ornitoComponents.has(name) ? { name, from: 'ornito' } : undefined)],
})
```

If the app also uses `unplugin-auto-import`, exclude Ornito's bundle from its
transform: `exclude: [/[\\/]node_modules[\\/]/, /[\\/]ornito[\\/]dist[\\/]/]`.

## Upgrading

1. Check the latest tag: `git ls-remote --tags https://github.com/DesKevinMendez/ornito.git`.
2. Change the tag (or range) in `package.json` and run `pnpm install`
   (`pnpm update ornito` for a `semver:` range).
3. Run the app's build and `check_ornito_usage.py` on its views: a renamed prop or
   token shows up there.

## Releasing a new version (ornito repo)

`.github/workflows/build.yml` runs on every push to `main`: it builds with
`pnpm build:types`, pushes the release package to `builds`, and creates the GitHub
Release and tag `v<package.json version>` if it doesn't exist yet. To ship:

1. Bump `version` in `package.json` in the same change (commit
   `feat: 🎸 (bump) new version` or similar).
2. Merge to `main`. Never create `v*` tags by hand: the workflow tags the `builds`
   commit that contains `dist/`.
3. Point the apps at the new tag.

Docs (`docs/`) deploy to GitHub Pages on pushes to `main` that touch `docs/**`.

## Troubleshooting

| Symptom | Cause |
| --- | --- |
| Components render unstyled or with missing colors | `@source` doesn't reach `node_modules/ornito/dist`, or `theme.css` isn't imported in the Tailwind entry |
| `text-primary-600` is the old indigo after changing `--ds-color-primary` | The override is on a nested element; set it on `:root` |
| Dark styles never apply | Missing `@custom-variant dark (&:is(.dark *))` or `initTheme()` |
| "SearchableSelect: no request instance provided" / "useTable: no request instance provided" | `app.provide(useRequestKey, useRequest)` missing |
| `Cannot find module 'ornito'` after install | Installed `main` (no `dist/`) instead of a `#v…` tag |
