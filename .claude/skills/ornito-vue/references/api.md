# Ornito Vue API reference

Generated from the library sources (v0.12.1) by `scripts/gen_api_reference.py`; don't
edit by hand. Prop names are camelCase here; in templates use either
`:icon-position` or `:iconPosition`. "Required" means Vue warns when the prop is
missing. Events are listened to as `@kebab-case`.

Contents:

- Actions: BaseButton, BaseButtonIcon, IconButton
- Forms: FormInput, FormSelect, FormTextarea, SearchableSelect, SwitchInput
- Feedback: Alert, WarningAlert, Badge, Modal, BottomModal, ConfirmationModal, SnackBar, SnackBarItem, LoadingSVG, HelpTooltip, ImageLightbox
- Layout: Card, CardPaginations, ViewHeader, InfoItem, StatCard, Divider, CollapseTransition
- Navigation: Sidebar, SidebarNav, SidebarItem, SidebarList, Navbar, UserProfileDropdown, Dropdown, DropdownItem, DropdownMenu, DropdownAnimation, Tabs, Breadcrumb
- Data display: DataTable, TableHeader, TablePagination, ResultCount, TableSkeleton, List, Item, UserAvatar, UserAvatars
- Composables: useMobile, isMobile, isTablet, isDesktop, useTheme, initTheme, useSidebar, useActiveIndicator, useMessages, useTable, useRequestKey
- Types: BadgeVariant, BreadcrumbItem, RoutesLink, TableField, DropdownMenuItem, ItemId, ListPagination, Tab, TabsVariant, GetFn, UseRequestFactory

## Actions

### BaseButton

`src/components/BaseButton.vue` · `import { BaseButton } from 'ornito'`

> Primary call-to-action button. Renders a `<button>` unless `to` is set, in which case it renders a `RouterLink`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `type` | `"button" \| "submit" \| "reset"` | no | `"button"` |
| `variant` | `ButtonVariant` | no | `"primary"` |
| `size` | `"full" \| "auto" \| "small"` | no | `"full"` |
| `icon` | `any` | no | `null` |
| `iconPosition` | `"left" \| "right"` | no | `"left"` |
| `iconClass` | `string` | no | `""` |
| `disabled` | `boolean` | no | `false` |
| `loading` | `boolean` | no | `false` |
| `to` | `string \| RouteLocationRaw` | no | — |

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: `#default`

### BaseButtonIcon

`src/components/BaseButtonIcon.vue` · `import { BaseButtonIcon } from 'ornito'`

> Icon-only button sharing `ButtonVariant`, sized independently from `BaseButton`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `icon` | `any` | yes | — |
| `type` | `"button" \| "submit" \| "reset"` | no | — |
| `variant` | `ButtonVariant` | no | `"secondary"` |
| `size` | `Size` | no | `"md"` |
| `disabled` | `boolean` | no | — |
| `loading` | `boolean` | no | — |

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: none

```ts
type Size = "sm" | "md" | "lg";
```

### IconButton

`src/components/IconButton.vue` · `import { IconButton } from 'ornito'`

> Compact icon button with a flat palette of named colors instead of `ButtonVariant`, and an optional outline mode.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `icon` | `any` | yes | — |
| `color` | `string` | no | `"gray"` |
| `to` | `string \| object` | no | — |
| `rounded` | `boolean` | no | `false` |
| `outline` | `boolean` | no | `false` |

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: `#default`

## Forms

### FormInput

`src/components/FormInput.vue` · `import { FormInput } from 'ornito'`

> VeeValidate-wired text input that also covers date/datetime/time pickers, range sliders, masked input, and money input, depending on `type`. Uses `v-model` for the value.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `label` | `string` | yes | — |
| `id` | `string` | yes | — |
| `name` | `string` | yes | — |
| `type` | `"text" \| "email" \| "password" \| "tel" \| "date" \| "datetime" \| "time" \| "number" \| "money" \| "range"` | no | `"text"` |
| `placeholder` | `string` | no | `""` |
| `leftIcon` | `any` | no | — |
| `rightIcon` | `any` | no | — |
| `rules` | `any` | no | — |
| `small` | `boolean` | no | — |
| `min` | `number \| string` | no | — |
| `max` | `number \| string` | no | — |
| `step` | `number \| string` | no | — |
| `mask` | `string` | no | — |
| `help` | `string` | no | — |
| `url` | `string` | no | — |
| `searchBy` | `string` | no | — |
| `labelKey` | `string` | no | — |
| `valueKey` | `string` | no | — |
| `subtitleKey` | `string \| string[]` | no | — |
| `disabled` | `boolean` | no | — |
| `loading` | `boolean` | no | — |
| `minDate` | `Date \| string \| null` | no | — |
| `maxDate` | `Date \| string \| null` | no | — |
| `autocomplete` | `string` | no | `"off"` |
| `disabledDates` | `Date[] \| string[] \| ((date: Date) => boolean)` | no | — |

- `v-model`: `string | number | undefined | null`, required
- Events: `@update:modelValue` (string | number | undefined | null)
- Slots: none

### FormSelect

`src/components/FormSelect.vue` · `import { FormSelect } from 'ornito'`

> VeeValidate-wired native `<select>` with a fixed list of `Option`s. Uses `v-model` for the value.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `label` | `string` | yes | — |
| `id` | `string` | yes | — |
| `name` | `string` | yes | — |
| `placeholder` | `string` | no | `"Selecciona una opción"` |
| `leftIcon` | `any` | no | — |
| `rules` | `any` | no | — |
| `small` | `boolean` | no | — |
| `options` | `Option[]` | yes | — |

- `v-model`: `string | number | undefined | null`, required
- Events: `@update:modelValue` (string | number | undefined | null)
- Slots: none

```ts
interface Option {
  value: string | number;
  label: string;
}
```

### FormTextarea

`src/components/FormTextarea.vue` · `import { FormTextarea } from 'ornito'`

> VeeValidate-wired `<textarea>` with an optional character counter. Uses `v-model` for the value.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `label` | `string` | yes | — |
| `id` | `string` | yes | — |
| `name` | `string` | yes | — |
| `placeholder` | `string` | no | `''` |
| `rules` | `any` | no | — |
| `small` | `boolean` | no | — |
| `rows` | `number` | no | `3` |
| `maxLength` | `number` | no | — |

- `v-model`: `string | undefined | null`, required
- Events: `@update:modelValue` (string | undefined | null)
- Slots: none

### SearchableSelect

`src/components/SearchableSelect.vue` · `import { SearchableSelect } from 'ornito'`

> Async, searchable select that fetches options from a request factory provided by the consuming app through `useRequestKey`. It supports initial loading, text search, and resolving an existing value by id.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `url` | `string` | yes | — |
| `searchBy` | `string` | yes | — |
| `placeholder` | `string` | no | `"Buscar..."` |
| `leftIcon` | `any` | no | — |
| `id` | `string` | no | `"searchable-select"` |
| `name` | `string` | no | — |
| `label` | `string` | no | — |
| `rules` | `any` | no | — |
| `small` | `boolean` | no | — |
| `labelKey` | `string` | no | `"label"` |
| `valueKey` | `string` | no | `"value"` |
| `subtitleKey` | `string \| string[]` | no | — |
| `disabled` | `boolean` | no | — |
| `multiple` | `boolean` | no | `false` |
| `localSearchFirst` | `boolean` | no | — |

- `v-model`: `string | number | (string | number)[] | undefined | null`
- Events: `@update:modelValue` (string | number | (string | number)[] | undefined | null), `@select` (item: SelectItem), `@data` (raw: any)
- Slots: none

```ts
interface SelectItem {
  label: string;
  value: string | number;
  icon?: any;
  subtitles: string[];
}
```

### SwitchInput

`src/components/SwitchInput.vue` · `import { SwitchInput } from 'ornito'`

> Boolean toggle switch. Uses `v-model` for the value.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `label` | `string` | no | — |
| `modelValue` | `boolean` | yes | — |
| `disabled` | `boolean` | no | `false` |
| `trueLabel` | `string` | no | `"Activo"` |
| `falseLabel` | `string` | no | `"Inactivo"` |
| `showLabel` | `boolean` | no | `true` |

- `v-model`: `boolean`, required
- Events: `@update:modelValue` (boolean)
- Slots: none

## Feedback

### Alert

`src/components/Alert.vue` · `import { Alert } from 'ornito'`

> Dismissible inline banner with an icon matching its `type`. Content goes in the default slot.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `type` | `AlertType` | yes | — |
| `show` | `boolean` | no | `true` |

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: `#default`

### WarningAlert

`src/components/WarningAlert.vue` · `import { WarningAlert } from 'ornito'`

> Fixed-style warning banner (always amber, always `IconAlertTriangle`) — a simpler alternative to `<Alert type="warning">` with no variant prop. Content goes in the default slot.

No props.

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: `#default`

### Badge

`src/components/Badge.vue` · `import { Badge } from 'ornito'`

> Small pill-shaped status label.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `variant` | `BadgeVariant` | no | `'neutral'` |
| `text` | `'xs' \| 'sm' \| 'base'` | no | `'base'` |

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: `#default`

### Modal

`src/components/Modal.vue` · `import { Modal } from 'ornito'`

> Base dialog, teleported to `body`, using the native `<dialog>` element. Content goes in the default slot. Emits `update:open`, `close`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `open` | `boolean` | yes | — |
| `title` | `string` | no | — |
| `subtitle` | `string` | no | — |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | no | — |

- Events: `@update:open`, `@close`
- Slots: `#default`

### BottomModal

`src/components/BottomModal.vue` · `import { BottomModal } from 'ornito'`

> Android-style bottom sheet, teleported to `body`, using the native `<dialog>` element. It slides up from the bottom and blurs the page behind it. The body scrolls inside the sheet; an optional footer stays below it. Emits `update:open`, `close`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `open` | `boolean` | yes | — |
| `title` | `string` | no | — |
| `subtitle` | `string` | no | — |
| `showFooterDivider` | `boolean` | no | `true` |

- Events: `@update:open` (value: boolean), `@close`
- Slots: `#default`, `#footer`

### ConfirmationModal

`src/components/ConfirmationModal.vue` · `import { ConfirmationModal } from 'ornito'`

> Preset confirmation dialog requiring the user to type "Confirmar" before the action is enabled. Built on top of `Modal` + `FormInput`. Emits `close`, `confirm`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `open` | `boolean` | yes | — |
| `loading` | `boolean` | no | `false` |
| `title` | `string` | no | `'Confirmar Acción'` |
| `subtitle` | `string` | no | `'Esta acción no se puede deshacer. Escribe \'Confirmar\' para continuar.'` |

- Events: `@close`, `@confirm`
- Slots: none

### SnackBar

`src/components/Snack/SnackBar.vue` · `import { SnackBar } from 'ornito'`

> Fixed-position toast stack, rendered from the shared `useMessages()` queue — push a message via that composable and it appears here automatically. No props are needed for basic usage; `active` exists but is unused internally.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `active` | `Boolean` | no | — |

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: none

### SnackBarItem

`src/components/Snack/SnackBarItem.vue` · `import { SnackBarItem } from 'ornito'`

> Single toast, used internally by `SnackBar`. Auto-dismisses after 3 seconds. Emits `expired`, `cancel`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `message` | `Object` | yes | — |
| `error` | `Boolean` | yes | — |

- Events: `@expired`, `@cancel`
- Slots: none

### LoadingSVG

`src/components/LoadingSVG.vue` · `import { LoadingSVG } from 'ornito'`

> Spinning loading indicator (inline SVG).

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `customClass` | `string` | no | — |

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: none

### HelpTooltip

`src/components/HelpTooltip.vue` · `import { HelpTooltip } from 'ornito'`

> Small help trigger that reveals a tooltip on hover.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `tooltip` | `string` | yes | — |

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: none

### ImageLightbox

`src/components/ImageLightbox.vue` · `import { ImageLightbox } from 'ornito'`

> Full-screen image viewer, teleported to `body`. Closes on backdrop click or `Escape`. Emits `close`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `open` | `boolean` | yes | — |
| `src` | `string \| null` | yes | — |

- Events: `@close`
- Slots: none

## Layout

### Card

`src/components/Card.vue` · `import { Card } from 'ornito'`

> Generic bordered container with an optional header (`title`/`subtitle`) and a `headerButtons` slot. Content goes in the default slot.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `title` | `string` | no | — |
| `subtitle` | `string` | no | — |
| `colInMobile` | `boolean` | no | `false` |
| `noPadding` | `boolean` | no | `false` |

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: `#headerButtons`, `#default`

### CardPaginations

`src/components/CardPaginations.vue` · `import { CardPaginations } from 'ornito'`

> Server-side pagination controls (page numbers + prev/next), styled for use inside a `Card`. Emits `page-change` — pagination state itself lives in the parent.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `pagination` | `tApiPagination \| null` | yes | — |

- Events: `@page-change` (page: number)
- Slots: none

### ViewHeader

`src/components/ViewHeader.vue` · `import { ViewHeader } from 'ornito'`

> Page-level header with title, subtitle, an optional badge, and a `right` slot for filters/actions.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `subtitle` | `string` | yes | — |
| `title` | `string` | yes | — |
| `badgeText` | `string` | no | — |

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: `#right`

### InfoItem

`src/components/InfoItem.vue` · `import { InfoItem } from 'ornito'`

> Label + value pair for read-only detail views. Value goes in the default slot.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `label` | `string` | yes | — |
| `column` | `boolean` | no | `true` |

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: `#default`

### StatCard

`src/components/StatCard.vue` · `import { StatCard } from 'ornito'`

> `Card`-based KPI display with a value, an optional change indicator, and an optional help tooltip.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `title` | `string` | yes | — |
| `value` | `string \| number \| null` | yes | — |
| `change` | `string \| number` | no | — |
| `changeType` | `'positive' \| 'negative' \| 'neutral' \| 'info'` | no | `'neutral'` |
| `description` | `string` | no | `''` |
| `help` | `string` | no | — |

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: none

### Divider

`src/components/Divider.vue` · `import { Divider } from 'ornito'`

> Horizontal rule. Takes **no props**.

No props.

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: none

### CollapseTransition

`src/components/CollapseTransition.vue` · `import { CollapseTransition } from 'ornito'`

> Transition wrapper that animates height + opacity for its slot content (e.g. collapsible sections). Takes **no props**.

No props.

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: `#default`

## Navigation

### Sidebar

`src/components/Sidebar.vue` · `import { Sidebar } from 'ornito'`

> Collapsible app sidebar. Fully presentational — branding, menu items, and version string are passed in as props; no dashboard-specific data is resolved internally. Emits `toggle-collapse`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `isCollapsed` | `boolean` | yes | — |
| `logo` | `string` | yes | — |
| `title` | `string` | yes | — |
| `subtitle` | `string` | yes | — |
| `version` | `string` | yes | — |
| `menuItems` | `RoutesLink[]` | yes | — |

- Events: `@toggle-collapse`, `@close`
- Slots: none

### SidebarNav

`src/components/SidebarNav.vue` · `import { SidebarNav } from 'ornito'`

> Simpler, non-collapsible nav list (flat items only, no children/groups), used e.g. in mobile or secondary navigation contexts.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `items` | `SidebarItem[]` | yes | — |

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: none

```ts
interface SidebarItem {
  name: string;
  icon: any;
  to: string;
}
```

### SidebarItem

`src/components/Sidebar/SidebarItem.vue` · `import { SidebarItem } from 'ornito'`

> Single nav link, used internally by `SidebarNav` but also usable directly.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `to` | `string` | yes | — |
| `name` | `string` | yes | — |
| `icon` | `any` | yes | — |
| `isCollapsed` | `boolean` | yes | — |
| `hasExternalIcon` | `boolean` | no | `false` |
| `hasBadge` | `boolean` | no | `false` |
| `badgeText` | `string` | no | `''` |
| `textFitContent` | `boolean` | no | `false` |
| `showActiveBackground` | `boolean` | no | `false` |
| `useExternalIndicator` | `boolean` | no | `false` |

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: none

### SidebarList

`src/components/Sidebar/SidebarList.vue` · `import { SidebarList } from 'ornito'`

> Grouped nav list supporting collapsible children, used internally by `Sidebar`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `isCollapsed` | `boolean` | yes | — |
| `menuItems` | `RoutesLink[]` | yes | — |

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: none

### Navbar

`src/components/Navbar.vue` · `import { Navbar } from 'ornito'`

> Top app bar with a mobile menu toggle and a `right` slot for actions (notifications, profile dropdown, etc.). Takes **no props**; emits `toggle-mobile-sidebar`.

No props.

- Events: `@toggle-mobile-sidebar`
- Slots: `#right`

### UserProfileDropdown

`src/components/navbar/UserProfileDropdown.vue` · `import { UserProfileDropdown } from 'ornito'`

> Presentational user menu — avatar, name/role, a list of menu items, and an optional notification bell. Business logic (auth, routing, fetching notifications) stays in the consuming app; this component only renders what it's given. Emits `bell-click`, `panel-open`, `mark-all-read`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `userName` | `string` | yes | — |
| `userInitials` | `string` | yes | — |
| `userRole` | `string` | yes | — |
| `menuItems` | `DropdownMenuItem[]` | yes | — |
| `showNotifications` | `boolean` | no | `true` |
| `unreadNotificationsCount` | `number` | no | `0` |

- Events: `@bell-click`, `@panel-open`, `@mark-all-read`
- Slots: `#notifications`, `#avatar`

### Dropdown

`src/components/Dropdown.vue` · `import { Dropdown } from 'ornito'`

> Select-style dropdown backed by a fixed list of `DropdownItem`s. Uses `v-model` for the selected value.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `items` | `DropdownItem[]` | yes | — |
| `placeholder` | `string` | no | `'Select an option'` |
| `triggerVariant` | `'primary' \| 'secondary' \| 'outline'` | no | `'outline'` |
| `triggerSize` | `'full' \| 'auto'` | no | `'auto'` |
| `triggerSmall` | `boolean` | no | `false` |
| `position` | `'bottom-left' \| 'bottom-right' \| 'top-left' \| 'top-right'` | no | `'bottom-left'` |

- `v-model`: `string`
- Events: `@update:modelValue` (string)
- Slots: none

```ts
interface DropdownItem {
  label: string;
  value: string;
  icon?: any;
}
```

### DropdownItem

`src/components/DropdownItem.vue` · `import { DropdownItem } from 'ornito'`

> Single row inside a dropdown/menu (used by `Dropdown` and `UserProfileDropdown`).

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `label` | `string` | yes | — |
| `icon` | `any` | no | — |
| `active` | `boolean` | no | `false` |
| `to` | `string` | no | — |

- Events: `@click` (value: string)
- Slots: none

### DropdownMenu

`src/components/DropdownMenu.vue` · `import { DropdownMenu } from 'ornito'`

> Icon-triggered contextual action menu (e.g. a row's "⋮" menu). Emits `select` with the clicked item.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `items` | `MenuItem[]` | yes | — |
| `ariaLabel` | `string` | no | `"Opciones"` |
| `position` | `"bottom-left" \| "bottom-right"` | no | `"bottom-right"` |
| `buttonVariant` | `"outline" \| "secondary"` | no | `"outline"` |
| `icon` | `any` | no | `IconDotsVertical` |

- Events: `@select` (item: MenuItem)
- Slots: none

```ts
interface MenuItem {
  action: string;
  label: string;
  icon?: any;
  variant?: "default" | "danger" | "success";
}
```

### DropdownAnimation

`src/components/DropdownAnimation.vue` · `import { DropdownAnimation } from 'ornito'`

> Transition wrapper (fade + scale) used internally by dropdown/menu components for the opening/closing menu panel. Takes **no props**.

No props.

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: `#default`

### Tabs

`src/components/Tabs.vue` · `import { Tabs } from 'ornito'`

> Animated tab switcher with the original segmented style and optional `pills` and `underline` variants. All styles support optional leading icons, disabled tabs, light/dark mode and keyboard navigation.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `tabs` | `Tab[]` | yes | — |
| `modelValue` | `number` | no | `0` |
| `variant` | `TabsVariant` | no | `'segmented'` |
| `label` | `string` | no | `'Tabs'` |

- Events: `@update:modelValue` (value: number), `@change` (tab: Tab, index: number)
- Slots: dynamic slot named by `tab-{activeTabIndex}` (slot props: active-tab, active-tab-index)

### Breadcrumb

`src/components/Breadcrumb.vue` · `import { Breadcrumb } from 'ornito'`

> Navigation trail showing the current page's position in the hierarchy.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `items` | `BreadcrumbItem[]` | yes | — |

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: none

## Data display

### DataTable

`src/components/DataTable.vue` · `import { DataTable } from 'ornito'`

> Responsive table with local array or server-side data. When `data` is passed, it is the reactive source for both desktop and mobile layouts. This mode does not require `url` or a request provider, and it does not make requests. If both `data` and `url` are passed, `data` takes precedence. Local mode displays all supplied rows and hides the server-side search, page-size, and pagination controls.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `columns` | `TableField<T>[]` | yes | — |
| `data` | `T[]` | no | — |
| `url` | `string` | no | — |
| `showSearch` | `boolean` | no | `true` |
| `searchPlaceholder` | `string` | no | `"Buscar..."` |
| `actionsLabel` | `string` | no | `"Actions"` |
| `searchBy` | `string[] \| string` | no | — |

- Events: `@row-selected`, `@pagination-loaded`
- Slots: `#actions` (slot props: row), dynamic slot named by `column.slot` (slot props: row, value)

### TableHeader

`src/components/TableHeader.vue` · `import { TableHeader } from 'ornito'`

> Renders just the `<thead>` row for a table using the same `TableField` shape as `DataTable` — useful when composing a custom table body.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `columns` | `TableField<T>[]` | yes | — |
| `showActions` | `boolean` | no | — |
| `actionsLabel` | `string` | no | — |

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: none

### TablePagination

`src/components/TablePagination.vue` · `import { TablePagination } from 'ornito'`

> Server-side pagination footer for tables.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `internalPaginationServer` | `tApiPagination` | yes | — |

- Events: `@page-change` (page: number)
- Slots: none

### ResultCount

`src/components/Table/ResultCount.vue` · `import { ResultCount } from 'ornito'`

> "Showing X–Y of Z" summary text.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `internalPaginationServer` | `tApiPagination` | yes | — |
| `totalItems` | `number` | yes | — |

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: none

### TableSkeleton

`src/components/Skeletons/TableSkeleton.vue` · `import { TableSkeleton } from 'ornito'`

> Animated placeholder rows shown while table data is loading.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `rows` | `number` | no | `10` |
| `columns` | `TableField<any>[]` | yes | — |
| `showActions` | `boolean` | no | — |

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: none

### List

`src/components/List.vue` · `import { List } from 'ornito'`

> A reusable container for `Item` rows, with shared rounded corners, row dividers, light and dark surfaces, and an optional outer border.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `border` | `boolean` | no | `false` |
| `pagination` | `ListPagination \| null` | no | — |
| `scrollDistance` | `number` | no | `50` |
| `loading` | `boolean` | no | `false` |

- Events: `@request` (page: number)
- Slots: `#default`

### Item

`src/components/Item.vue` · `import { Item } from 'ornito'`

> A horizontal row with an optional circular image on the left, a title and subtitle in the center, and an optional icon on the right. Supports light and dark mode, an optional border, and a background color transition with a pointer cursor on hover. Long text wraps while the image and icon keep their size.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `title` | `string` | yes | — |
| `subtitle` | `string` | no | — |
| `image` | `string` | no | — |
| `imageAlt` | `string` | no | `''` |
| `icon` | `Component` | no | — |
| `border` | `boolean` | no | `false` |
| `hoverable` | `boolean` | no | `true` |
| `clickable` | `boolean` | no | `false` |
| `id` | `ItemId` | no | — |

- Events: `@click` (id: ItemId | undefined)
- Slots: `#image`, `#title`, `#subtitle`, `#icon`

### UserAvatar

`src/components/UserAvatar.vue` · `import { UserAvatar } from 'ornito'`

> Circular avatar — shows `imageUrl` if provided, otherwise falls back to initials derived from `name` on a gradient background.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `imageUrl` | `string \| null` | no | `null` |
| `name` | `string` | yes | — |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | no | `'md'` |

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: none

### UserAvatars

`src/components/UserAvatars.vue` · `import { UserAvatars } from 'ornito'`

> Overlapping stack of avatars (e.g. "assigned to" list), rendered from a list of pre-computed initials — it does not fetch or compute anything itself.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `users` | `User[]` | yes | — |

- Events: none declared (native listeners such as `@click` fall through to the root element)
- Slots: none

```ts
interface User {
  initials: string;
  name: string;
}
```

## Composables

### useMobile

`src/composables/useMobile.ts` · `import { useMobile } from 'ornito'`

```ts
function useMobile()
```

Returns: `isMobile`, `isTablet`, `isDesktop`, `checkScreenSize`

### isMobile

`src/composables/useMobile.ts` · `import { isMobile } from 'ornito'`

```ts
const isMobile = ref(false)
```

### isTablet

`src/composables/useMobile.ts` · `import { isTablet } from 'ornito'`

```ts
const isTablet = ref(false)
```

### isDesktop

`src/composables/useMobile.ts` · `import { isDesktop } from 'ornito'`

```ts
const isDesktop = ref(false)
```

### useTheme

`src/composables/useTheme.ts` · `import { useTheme } from 'ornito'`

```ts
function useTheme()
```

Returns: `isDarkMode`, `toggleTheme`, `applyTheme`

### initTheme

`src/composables/useTheme.ts` · `import { initTheme } from 'ornito'`

```ts
function initTheme()
```

### useSidebar

`src/composables/useSidebar.ts` · `import { useSidebar } from 'ornito'`

```ts
function useSidebar()
```

Returns: `isCollapsed`, `toggleCollapse`, `expand`

### useActiveIndicator

`src/composables/useActiveIndicator.ts` · `import { useActiveIndicator } from 'ornito'`

```ts
function useActiveIndicator(navRef: Readonly<Ref<HTMLElement | null>>)
```

### useMessages

`src/composables/useMessages.ts` · `import { useMessages } from 'ornito'`

```ts
function useMessages()
```

### useTable

`src/composables/useTable.ts` · `import { useTable } from 'ornito'`

```ts
function useTable()
```

Returns: `refreshData`, `isLoading`, `error`, `internalData`, `internalPaginationServer`, `fetchData`, `refreshTable`

### useRequestKey

`src/composables/useDataRequest.ts` · `import { useRequestKey } from 'ornito'`

```ts
const useRequestKey: InjectionKey<UseRequestFactory> = Symbol('useRequest')
```

### yup

`export * as yup from 'yup'`: the same instance the form components
validate with, so `import { yup } from 'ornito'` builds rule schemas.

## Types

Import the exported ones with `import type { … } from 'ornito'`. Files
marked "not exported" are shown because props use them; write the same
literal values (e.g. `variant="danger-outline"`) instead of importing them.

### `src/types/Alert.ts` (not exported)

```ts
export type AlertType = "warning" | "danger" | "info" | "success";
```

### `src/types/Badge.ts`

```ts
export type BadgeVariant = 'success' | 'warning' | 'neutral' | 'danger' | 'info';
```

### `src/types/Breadcrumb.ts`

```ts
export interface BreadcrumbItem {
  label: string;
  to?: string;
  icon?: any;
}
```

### `src/types/Button.ts` (not exported)

```ts
export type ButtonVariant = "primary" | "secondary" | "outline" | "primary-outline" | "danger" | "danger-outline" | "overlay";
```

### `src/types/DropdownMenuItem.ts`

```ts
export interface DropdownMenuItem {
  label: string;
  icon?: any;
  to?: string;
  class?: string;
  onClick?: () => void;
}
```

### `src/types/Item.ts`

```ts
export type ItemId = string | number
```

### `src/types/List.ts`

```ts
import type { tApiPagination } from './api';

export type ListPagination = Pick<tApiPagination, 'current_page' | 'last_page'>;
```

### `src/types/RoutesLink.ts`

```ts
export interface RoutesLink {
    route: string;
    name: string;
    icon: any;
    children?: RoutesLink[];
}
```

### `src/types/Table.ts`

```ts
export interface TableField<T> {
  label: string;
  key: keyof T;
  format?: (row: T) => string;
  slot?: string;
  width?: string | number;
  sortable?: boolean;
  searchable?: boolean;
}
```

### `src/types/Tabs.ts`

```ts
import type { Component } from 'vue';

export type TabsVariant = 'segmented' | 'pills' | 'underline';

export interface Tab {
  id: string;
  label: string;
  icon?: Component;
  disabled?: boolean;
}
```

### `src/types/api.ts` (not exported)

```ts
export type tApiPagination = {
  total: number;
  per_page: number;
  current_page: number;
  from: number;
  to: number;
  last_page: number;
};

export type tServerResponse<T> = {
  data: T;
  pagination: tApiPagination;
};

export type tServerErrorResponse = {
  errors: Record<string, string[]>;
  message: string;
};

export type tObjectServerResponse<T> = {
  data: T;
};
```
