# App shell and view structure

Ornito's shell is presentational: the app owns routes, auth and data and passes
them in. The dashboards (DteSales, Gento Fit, Rutely) all use the layout below.

## Contents

- [Authenticated layout](#authenticated-layout)
- [Sidebar](#sidebar)
- [Navbar and profile menu](#navbar-and-profile-menu)
- [View structure](#view-structure)
- [Responsive helpers](#responsive-helpers)

## Authenticated layout

Desktop sidebar (collapsible, persisted), mobile sidebar as an overlay opened from
the navbar, the routed view in `<main>`, and one `SnackBar` for the whole app:

```vue
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { IconCar, IconDashboard, IconLogout, IconSettings, IconUser, IconUsers } from '@tabler/icons-vue'
import { Navbar, Sidebar, SnackBar, UserProfileDropdown, useSidebar } from 'ornito'
import type { DropdownMenuItem, RoutesLink } from 'ornito'

const route = useRoute()
const router = useRouter()
const { isCollapsed, toggleCollapse } = useSidebar()
const mobileOpen = ref(false)

const menu: RoutesLink[] = [
  { route: '/dashboard', name: 'Dashboard', icon: IconDashboard },
  { route: '/vehicles', name: 'Vehículos', icon: IconCar },
  {
    route: '/people', name: 'Personas', icon: IconUsers,
    children: [
      { route: '/drivers', name: 'Conductores', icon: IconUser },
      { route: '/users', name: 'Usuarios', icon: IconUsers },
    ],
  },
  { route: '/settings', name: 'Configuración', icon: IconSettings },
]

const userMenu = computed<DropdownMenuItem[]>(() => [
  { label: 'Mi perfil', icon: IconUser, to: '/my-profile' },
  { label: 'Cerrar sesión', icon: IconLogout, onClick: () => router.push({ name: 'login' }) },
])

watch(() => route.path, () => { mobileOpen.value = false })
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
    <div class="flex h-screen">
      <div class="hidden lg:block">
        <Sidebar
          :is-collapsed="isCollapsed"
          logo="/logo.png"
          title="Mi Dashboard"
          subtitle="Panel de administración"
          :version="appVersion"
          :menu-items="menu"
          @toggle-collapse="toggleCollapse"
        />
      </div>

      <div v-if="mobileOpen" class="fixed inset-0 z-40 bg-black/30 lg:hidden" @click="mobileOpen = false" />
      <div
        class="fixed top-0 left-0 z-50 h-full w-64 transition-transform duration-300 lg:hidden"
        :class="mobileOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <Sidebar
          :is-collapsed="false"
          logo="/logo.png"
          title="Mi Dashboard"
          subtitle="Panel de administración"
          :version="appVersion"
          :menu-items="menu"
          @toggle-collapse="toggleCollapse"
          @close="mobileOpen = false"
        />
      </div>

      <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Navbar @toggle-mobile-sidebar="mobileOpen = !mobileOpen">
          <template #right>
            <UserProfileDropdown
              :user-name="user.name"
              :user-initials="initials"
              :user-role="user.role"
              :menu-items="userMenu"
              :show-notifications="false"
            />
          </template>
        </Navbar>
        <main class="flex-1 overflow-y-auto p-4 sm:p-6">
          <RouterView />
        </main>
      </div>
    </div>
    <SnackBar />
  </div>
</template>
```

`appVersion`, `user` and `initials` come from the app (e.g. `__APP_VERSION__`
defined in `vite.config.ts`, the auth store).

## Sidebar

- Props (all required): `is-collapsed`, `logo` (image URL), `title`, `subtitle`,
  `version`, `menu-items`. Events: `@toggle-collapse`, `@close` (the mobile close
  button).
- `RoutesLink` is `{ route, name, icon, children? }`; one level of `children`
  makes a collapsible group. `route` is a path string, not a route name.
- A link is active when `route.path` equals its `route` exactly, so a detail page
  (`/vehicles/12`) doesn't highlight `/vehicles`; a group opens when the path starts
  with a child's route.
- The sidebar already has the light/dark toggle (`useTheme`) and the collapse
  button; `useSidebar()` persists `isCollapsed` in localStorage.
- Colors: `--ds-color-sidebar-*` tokens ([theming.md](theming.md)).
- `SidebarNav :items="[{ name, icon, to }]"` is a flat, non-collapsible nav for
  secondary menus (e.g. settings sections).

## Navbar and profile menu

- `Navbar` has no props: `@toggle-mobile-sidebar` (its menu button shows below the
  `lg` breakpoint) and a `#right` slot for actions.
- `UserProfileDropdown` requires `user-name`, `user-initials`, `user-role` and
  `menu-items` (`{ label, icon?, to?, class?, onClick? }`). Notifications: leave
  `show-notifications` on, pass `unread-notifications-count`, fill the
  `#notifications` slot, and load them on `@panel-open`. `#avatar` replaces the
  initials with a photo.
- Other navbar actions (environment switch, theme toggle, search) go in `#right`
  before the profile menu, built from Ornito buttons where possible.

## View structure

Each routed view:

```vue
<template>
  <div class="space-y-6">
    <Breadcrumb :items="[{ label: 'Vehículos', to: '/vehicles' }, { label: vehicle.plate }]" />  <!-- sub-pages only -->
    <ViewHeader title="Vehículos" subtitle="Administra la flota." badge-text="Beta">
      <template #right>
        <BaseButton size="auto" :icon="IconPlus" @click="openCreate">Nuevo vehículo</BaseButton>
      </template>
    </ViewHeader>

    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><!-- optional KPIs -->
      <StatCard title="Activos" :value="stats.active" />
    </div>

    <Card title="Listado" subtitle="Todos los vehículos registrados">
      <!-- DataTable, List, form, InfoItems… -->
    </Card>
  </div>
</template>
```

- One `ViewHeader` per view, first. Its `#right` holds the main action and filters;
  secondary actions go in each `Card`'s `#headerButtons`.
- Spacing between blocks: `space-y-6` (or `gap-6` in grids).
- Forms for creating or editing open in a `Modal` when short, or in their own route
  when long. Detail views show `InfoItem`s inside `Card`s, with edit/delete actions
  in the header.

## Responsive helpers

`useMobile()` (call it once in a component that's always mounted, e.g. the layout)
keeps the shared refs `isMobile` (< 1024px), `isTablet` and `isDesktop` updated;
import those refs anywhere. Use them for behavior (open a `BottomModal` instead of a
`Modal` on phones); use Tailwind breakpoints for layout.
