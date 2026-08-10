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
| `menuItems` | `RoutesLink[]` — `{ route, name, icon, children?: RoutesLink[] }` | Yes | — supports one level of nested children |

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
