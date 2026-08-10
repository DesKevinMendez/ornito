# Ornito

Vue 3 design system for the **deskevinmendez** dashboard, packaged as an installable
library and consumed by dashboards

## Development

```bash
pnpm dev          # playground app (src/App.vue) for local component work
pnpm build:lib    # fast build: JS + CSS to dist/ (no .d.ts) — use while iterating
pnpm build:types  # full build: JS + CSS + .d.ts to dist/ — use before publishing
                   # or whenever the dashboard needs updated types
pnpm docs:dev     # component docs, served locally
pnpm docs:build   # production docs build
```

`build:lib` skips type declaration generation (`unplugin-dts`), which is the
slowest part of the build (~80% of build time), so it stays fast for local
iteration. It never empties `dist/`, so `.d.ts` files from a previous
`build:types` run are preserved. Run `build:types` whenever you need
`dist/index.d.ts` refreshed — it does a full clean rebuild (JS + CSS + types)
in one pass.

## Documentation

See `docs/` (served via `pnpm docs:dev`) for the full component prop
reference and theming guide.

See the documentation in the web: [Ornito Docs](https://deskevinmendez.github.io/ornito)
