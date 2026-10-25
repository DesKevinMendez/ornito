# Navbar

## Navbar

Top app bar with a mobile menu toggle and a `right` slot for actions
(notifications, profile dropdown, etc.). Takes **no props**; emits
`toggle-mobile-sidebar`.

```vue
<Navbar @toggle-mobile-sidebar="toggleMobileSidebar">
  <template #right>
    <UserProfileDropdown ... />
  </template>
</Navbar>
```

### CSS color variants

The navbar surface and mobile menu button use paired light/dark variables.
Override both the light and dark values on `:root`.

| Part | Variables |
| --- | --- |
| Navbar surface | `--ds-color-navbar-bg-{light|dark}` |
| Mobile menu button | `--ds-color-navbar-mobile-menu-bg-{light|dark}`, `--ds-color-navbar-mobile-menu-bg-hover-{light|dark}`, `--ds-color-navbar-mobile-menu-icon-text-{light|dark}` |

## UserProfileDropdown

Presentational user menu — avatar, name/role, a list of menu items, and an
optional notification bell. Business logic (auth, routing, fetching
notifications) stays in the consuming app; this component only renders what
it's given. Emits `bell-click`, `panel-open`, `mark-all-read`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `userName` | `string` | Yes | — |
| `userInitials` | `string` | Yes | — fallback avatar content when the `avatar` slot isn't used |
| `userRole` | `string` | Yes | — |
| `menuItems` | `DropdownMenuItem[]` — `{ label, icon?, to?, class?, onClick? }` | Yes | — |
| `showNotifications` | `boolean` | No | `true` |
| `unreadNotificationsCount` | `number` | No | `0` |

### Slots

- `avatar` — replaces the initials circle (e.g. with a profile photo).
- `notifications` — content of the notifications panel; only rendered while
  the panel is open.

```vue
<UserProfileDropdown
  :user-name="userName"
  :user-initials="userInitials"
  :user-role="userRole"
  :menu-items="menuItems"
  :unread-notifications-count="unreadCount"
  @panel-open="fetchNotifications"
>
  <template #avatar><img :src="photo" /></template>
  <template #notifications><NotificationsList :notifications="notifications" /></template>
</UserProfileDropdown>
```

### CSS color variants

The notification trigger, dropdown panel, notification heading, avatar,
profile text, and chevron use paired light/dark variables. Menu rows inherit
the shared `DropdownItem` tokens documented in
[Dropdown](./dropdown.md#css-color-variants).

| Part | Variables |
| --- | --- |
| Notification trigger | `--ds-color-profile-notification-trigger-bg-{light|dark}`, `--ds-color-profile-notification-trigger-bg-hover-{light|dark}`, `--ds-color-profile-notification-trigger-icon-text-{light|dark}` |
| Dropdown panel and notification heading | `--ds-color-profile-panel-bg-{light|dark}`, `--ds-color-profile-notification-title-text-{light|dark}` |
| Avatar | `--ds-color-profile-avatar-bg-{light|dark}`, `--ds-color-profile-avatar-text-{light|dark}` |
| Profile text | `--ds-color-profile-name-text-{light|dark}`, `--ds-color-profile-role-text-{light|dark}`, `--ds-color-profile-chevron-text-{light|dark}` |
