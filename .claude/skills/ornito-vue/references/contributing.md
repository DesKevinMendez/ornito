# Changing the ornito repo

For work inside DesKevinMendez/ornito itself: a new component, a new prop, a new
token, a fix. Apps never copy or patch Ornito components; the change goes here and
ships as a new version.

## Layout

```
src/
├── components/      # one SFC per component (subfolders: Sidebar/, Snack/, Table/, Skeletons/, navbar/)
├── composables/     # useTheme, useSidebar, useMobile, useMessages, useTable, useDataRequest…
├── types/           # shared prop types (ButtonVariant, TableField…)
├── index.ts         # the public API: every export lives here
├── tokens.css       # every --ds-* token (primitives, semantic borders, component tokens)
├── theme.css        # @theme inline: maps tokens to Tailwind colors
├── style.css        # package stylesheet entry (dark variant, theme import)
└── stories/         # Storybook stories by category (primitives, forms, data, layout, navigation)
docs/                # VuePress docs: docs/components/<name>.md and docs/theming.md
tests/components/    # Vitest + @vue/test-utils (happy-dom)
```

## Commands

```bash
pnpm dev            # playground (src/App.vue)
pnpm storybook      # stories on :6006
pnpm test           # vitest run
pnpm lint           # oxlint (also the pre-push hook)
pnpm build:lib      # fast build to dist/ without .d.ts
pnpm build:types    # full build with .d.ts (what CI runs)
pnpm docs:dev       # docs site
```

Node is pinned in `.nvmrc`; pnpm comes from `packageManager`.

## Adding or changing a component

1. **Component** in `src/components/`, `<script setup lang="ts">`, typed
   `defineProps<Props>()` with `withDefaults` or destructured defaults,
   `defineModel` for `v-model`, typed `defineEmits`. Vue and vue-router functions
   are auto-imported inside the repo (`ref`, `computed`, `useRoute`), but import
   them explicitly when in doubt.
2. **Texts** are props with Spanish defaults (`placeholder = 'Buscar...'`), so apps
   can translate them.
3. **Colors** only through tokens, never Tailwind palette names or hex in the
   template:
   - add `--ds-color-{component}-{element…}-{property}-{state…}-{light|dark}` pairs
     to `tokens.css`, in a section for the component, defaulting to a primitive or
     semantic token (`var(--ds-color-neutral-200)`, `var(--ds-color-border-default-light)`);
   - map each one in `theme.css`: `--color-{name}: var(--ds-color-{name});`;
   - use both modes in the template: `bg-{name}-light dark:bg-{name}-dark`.
   Keep the grammar: `property` is `bg|text|border|ring|ring-offset`, states follow
   it, mode is last.
4. **Export** it from `src/index.ts` (and its public types with `export type`).
5. **Story** in `src/stories/components/<category>/<Name>.stories.ts` with light
   and dark variants; **test** in `tests/components/<Name>.test.ts` for behavior
   (events, v-model, states).
6. **Docs**: a page or section in `docs/components/` with a prop table, usage and a
   "CSS color variants" section listing its tokens; link it from
   `docs/components/README.md` and the sidebar in `docs/.vuepress/config.js`;
   mention new token groups in `docs/theming.md`.
7. **Skill references**: run
   `python3 .claude/skills/ornito-vue/scripts/gen_api_reference.py` and commit the
   regenerated `references/api.md`, `tokens.md` and `api.json`. If usage changed
   (a new pattern, a renamed prop), update the hand-written references too.
8. **Verify**: `pnpm lint`, `pnpm test`, `pnpm build:types`, and
   `python3 .claude/skills/ornito-vue/scripts/check_ornito_usage.py src docs` (it
   flags invented props, unknown tokens and theme leaks in stories and docs too).
   For visual changes, compare the stories against `main` in both modes.

## Changing tokens

- Renaming or removing a token breaks apps that override it: keep the old name as an
  alias (`--old: var(--new)`) for a version, or call it out in the release.
- Changing a default should keep the current look unless that's the point; the
  defaults mirror the dashboards' Tailwind colors.
- Key colors (`--ds-color-{palette}`) derive the shades at the bottom of
  `tokens.css` (`@supports (color: oklch(from …))`); a new palette needs its key
  color, static fallback shades and the derived block.

## Releasing

Bump `version` in `package.json` in the same PR. On merge to `main`, CI builds,
pushes the package to the `builds` branch and creates the `v<version>` tag and
release. Never create `v*` tags by hand. See [installation.md](installation.md#releasing-a-new-version-ornito-repo).

## Commits

`type: emoji (Scope) description`, e.g. `feat: 🎸 (Tabs) underline variant`,
`fix: 🐛 (DataTable) …`, `chore: 🤖 (bump) v0.13.0`, `refactor: 💡 …`,
`style: 💄 …`, `docs: ✏️ …`. No `Co-Authored-By` or agent attribution.
