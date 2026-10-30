# Sidebar

## Sidebar

Collapsible app sidebar. Fully presentational — branding, menu items, and
version string are passed in as props; no dashboard-specific data is
resolved internally. Emits `toggle-collapse`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `isCollapsed` | `boolean` | Yes | — |
| `logo` | `string` | Yes | — image URL |
| `title` | `string` | Yes | — |
| `subtitle` | `string` | Yes | — |
| `version` | `string` | Yes | — e.g. app version string |
| `menuItems` | `RoutesLink[]` — `{ route, name, icon, active?, children?: RoutesLink[] }` | Yes | — supports one level of nested children |

Each item is active on an exact path match by default. Set `active` to choose a
different path rule. This is useful when a detail route should keep its parent
tab selected, such as `/customer/42` keeping `/customer` active.

```ts
const menuItems: RoutesLink[] = [
  {
    route: '/customer',
    name: 'Customer',
    icon: IconUsers,
    active: { starts_with: '/customer' },
  },
]
```

`active` accepts one of these matchers:

- `starts_with`: the current path starts with the value.
- `ends_with`: the current path ends with the value.
- `exact`: exact path match against the value.
- `regex`: the current path matches the regular expression string.

When an item has children, its active state and expansion follow the active
child. A custom `active` matcher on the group itself can also keep the group
label selected.

```vue
<Sidebar
  :is-collapsed="isCollapsed"
  logo="/logo.png"
  title="Rutely.biz"
  subtitle="Fleet management"
  :version="appVersion"
  :menu-items="menuItems"
  @toggle-collapse="toggleCollapse"
/>
```

### CSS color variants

Sidebar colors are runtime CSS variables. Override the light and dark tokens
independently in the consuming app; the current colors remain the defaults.

```css
:root {
  --ds-color-sidebar-bg-light: #f8fafc;
  --ds-color-sidebar-tab-bg-active-light: #ea580c;
  --ds-color-sidebar-collapse-bg-light: #e2e8f0;

  --ds-color-sidebar-bg-dark: #111827;
  --ds-color-sidebar-tab-bg-active-dark: #f97316;
  --ds-color-sidebar-theme-toggle-bg-dark: #292524;
}
```

Token groups:

- `--ds-color-sidebar-{bg,title-text,subtitle-text,version-text}-{light|dark}` — surface and text.
- `--ds-color-sidebar-collapse-{bg,bg-hover,icon-text}-{light|dark}` — close/collapse controls.
- `--ds-color-sidebar-theme-toggle-{bg,bg-hover,content-text}-{light|dark}` — theme toggle.
- `--ds-color-sidebar-tab-{bg-active,text-active,text-inactive,bg-hover,icon-text,icon-text-hover,group-text-active}-{light|dark}`
  — menu links and active group labels.
- `--ds-color-sidebar-tab-badge-{bg,text,bg-active}-{light|dark}` — notification badges.

## SidebarNav

Simpler, non-collapsible nav list (flat items only, no children/groups),
used e.g. in mobile or secondary navigation contexts.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `items` | `SidebarItem[]` — `{ name, icon, to }` | Yes | — |

## SidebarItem

Single nav link, used internally by `SidebarNav` but also usable directly.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `to` | `string` | Yes | — |
| `name` | `string` | Yes | — |
| `icon` | `any` (component) | Yes | — |
| `isCollapsed` | `boolean` | Yes | — |
| `hasExternalIcon` | `boolean` | No | `false` — shows a small "opens externally" arrow |
| `hasBadge` | `boolean` | No | `false` |
| `badgeText` | `string` | No | `''` |
| `textFitContent` | `boolean` | No | `false` — label width shrinks to content instead of a fixed width |
| `showActiveBackground` | `boolean` | No | `false` — forces a solid active background regardless of `useExternalIndicator` |
| `useExternalIndicator` | `boolean` | No | `false` — on large screens, active state is shown by an external indicator instead of a background fill |

## SidebarList

Grouped nav list supporting collapsible children, used internally by
`Sidebar`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `isCollapsed` | `boolean` | Yes | — |
| `menuItems` | `RoutesLink[]` | Yes | — |
