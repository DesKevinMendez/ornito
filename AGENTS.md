# AGENTS.md

Guidance for coding agents working in this repository.

## Project

Ornito: a Vue 3 + Tailwind v4 design system for the deskevinmendez dashboards
(DteSales, Gento Fit, Rutely, trafic-analytics). It ships as a library built to
`dist/` and is installed by the apps from GitHub release tags.

## Commands

```bash
pnpm test          # vitest
pnpm lint          # oxlint (pre-push hook)
pnpm build:lib     # fast build, no .d.ts
pnpm build:types   # full build with .d.ts (CI)
pnpm storybook     # component stories on :6006
pnpm docs:dev      # VuePress docs
```

## Token conventions

- Colors live in three layers in `src/tokens.css`: primitives (`--ds-color-{palette}`
  key colors and shades, the only raw colors) → semantic borders → component tokens.
  Values only point downwards. `src/theme.css` maps them to Tailwind colors.
- Component tokens follow `--ds-color-{component}-{element…}-{property}-{state…}-{mode}`;
  every one has a `-light` and a `-dark` value and templates use both
  (`bg-card-bg-light dark:bg-card-bg-dark`).
- Never hardcode colors or Tailwind palette names in components: add a token.
- User-facing texts are props with Spanish defaults.

## Releases

`.github/workflows/build.yml` runs on every push to `main`: it builds, publishes
the package to the `builds` branch and creates `v<package.json version>` if that
release doesn't exist. Bump `version` in `package.json` to ship; never create `v*`
tags by hand.

## Skill

The `ornito-vue` skill for this library lives in a separate repository: `DesKevinMendez/skills` (folder `ornito-vue/`).

## Commits

- Convention: `type: emoji (Scope) description`, e.g. `feat: 🎸 (tokens) …`,
  `fix: 🐛`, `chore: 🤖`, `refactor: 💡`, `style: 💄`, `docs: ✏️`.
- Never add `Co-Authored-By` trailers or any other agent attribution to commit
  messages.
