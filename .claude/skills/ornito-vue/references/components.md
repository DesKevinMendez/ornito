# Choosing and using components

How each component is meant to be used, with the gotchas that aren't obvious from
its props. Exact signatures are in [api.md](api.md); this file says which one to
pick and how to wire it.

## Contents

- [Picking a component](#picking-a-component)
- [Buttons](#buttons)
- [Forms](#forms)
- [Server data](#server-data)
- [Lists](#lists)
- [Dialogs](#dialogs)
- [Feedback](#feedback)
- [Layout pieces](#layout-pieces)
- [Navigation pieces](#navigation-pieces)

## Picking a component

| Need | Use | Not |
| --- | --- | --- |
| Main or form action | `BaseButton` | `<button class="bg-…">` |
| Small icon action in a row or toolbar | `IconButton` (with `aria-label`) | `BaseButton` with only an icon |
| Icon-only button with the button variants | `BaseButtonIcon` | |
| Text, email, password, number, phone, date, time, money, range | `FormInput` with `type` | `<input>`, another date picker |
| Fixed options | `FormSelect` (form) or `Dropdown` (filter outside a form) | `<select>` |
| Options from the server, with search | `SearchableSelect` (or `FormInput` with `url` + `search-by`) | Loading all rows into a `FormSelect` |
| On/off setting | `SwitchInput` | checkbox markup |
| Paginated server rows, or a table of local rows | `DataTable` | hand-made `<table>` |
| Stack of rows with avatar/title/subtitle, infinite scroll | `List` + `Item` | |
| Read-only label/value pairs (detail views) | `InfoItem` inside a `Card` | `<dl>` markup |
| KPI numbers | `StatCard` | |
| Page title + actions | `ViewHeader` | an `<h1>` block |
| Grouped content | `Card` | `<div class="rounded-lg border…">` |
| Status label | `Badge` | colored `<span>` |
| Inline message (error, success, info) | `Alert` | colored `<div>` |
| Toast after an action | `useMessages().pushMessage` + `<SnackBar />` | `alert()` |
| Dialog | `Modal` (desktop) or `BottomModal` (mobile sheet) | |
| Confirm a destructive action | `ConfirmationModal` | `confirm()` |
| Row "⋮" menu | `DropdownMenu` | |
| Switch between sections of one view | `Tabs` | |

Ornito has no checkbox, radio group, file upload, pagination-only component for
custom lists (besides `CardPaginations`/`TablePagination`), chart or toast with
actions. For those, write markup with DS colors (or ask, if the app's rules say so).

## Buttons

```vue
<BaseButton size="auto" :icon="IconPlus" @click="openCreate">Nuevo conductor</BaseButton>
<BaseButton variant="outline" size="auto" @click="cancel">Cancelar</BaseButton>
<BaseButton type="submit" size="auto" :loading="saving">Guardar</BaseButton>
<BaseButton variant="danger-outline" size="auto" :icon="IconTrash" @click="askDelete">Eliminar</BaseButton>
<BaseButton variant="primary-outline" size="auto" :to="{ name: 'drivers.show', params: { id } }">Ver perfil</BaseButton>
```

- `variant`: `primary` (default), `secondary`, `outline`, `primary-outline`,
  `danger`, `danger-outline`, `overlay` (over images).
- `size`: `full` is the default (`w-full`), so toolbar and header buttons need
  `size="auto"`. `small` only shrinks the text; there is no `small` boolean prop.
- `type` defaults to `button`: a form submit needs `type="submit"`.
- `loading` shows a spinner and disables the button; `disabled` disables it.
- `to` renders a `RouterLink`; otherwise listen with `@click` (native, falls
  through).
- `icon` takes a component; `icon-position="right"` moves it after the text.

`IconButton` is the compact action for tables and toolbars:

```vue
<IconButton :icon="IconEdit" color="primary" :to="{ name: 'drivers.edit', params: { id: row.id } }" aria-label="Editar" />
<IconButton :icon="IconTrash" color="danger" outline rounded aria-label="Eliminar" @click="askDelete(row)" />
```

`color`: `gray` (default), `primary`, `secondary`, `success`, `danger`, `warning`,
`pink` (`green`/`red`/`yellow` are aliases). It has no `variant` or `size`; `outline`
and `rounded` are booleans. Always give it an `aria-label`: it has no text.

## Forms

The form components wrap vee-validate's `Field`, so they validate and show their
error message only inside a vee-validate `<Form>`:

```vue
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Form } from 'vee-validate'
import { BaseButton, FormInput, FormSelect, FormTextarea, SwitchInput, yup } from 'ornito'

const form = reactive({ name: '', email: '', role: '', notes: '', active: true })
const saving = ref(false)

const rules = {
  name: yup.string().required('El nombre es requerido.'),
  email: yup.string().required('El correo es requerido.').email('Ingresa un correo válido.'),
  role: yup.string().required('Selecciona un rol.'),
}
const roles = [
  { value: 'admin', label: 'Administrador' },
  { value: 'driver', label: 'Conductor' },
]

async function submit() {
  saving.value = true
  try { /* await post('/api/v1/users', form) */ } finally { saving.value = false }
}
</script>

<template>
  <Form class="space-y-5" @submit="submit">
    <div class="grid gap-5 sm:grid-cols-2">
      <FormInput id="user-name" v-model="form.name" name="name" label="Nombre" :rules="rules.name" />
      <FormInput id="user-email" v-model="form.email" name="email" type="email" label="Correo" :rules="rules.email" />
    </div>
    <FormSelect id="user-role" v-model="form.role" name="role" label="Rol" :options="roles" placeholder="Selecciona un rol" :rules="rules.role" />
    <FormTextarea id="user-notes" v-model="form.notes" name="notes" label="Notas" :rows="4" :max-length="500" />
    <SwitchInput v-model="form.active" label="Estado" true-label="Activo" false-label="Inactivo" />
    <div class="flex justify-end gap-3">
      <BaseButton variant="outline" size="auto" @click="$emit('cancel')">Cancelar</BaseButton>
      <BaseButton type="submit" size="auto" :loading="saving">Guardar</BaseButton>
    </div>
  </Form>
</template>
```

- Required on `FormInput`, `FormSelect`, `FormTextarea`: `id` (unique on the page),
  `name` (the vee-validate field), `label`, `v-model`. `label` is also used in
  default validation messages.
- Rules: pass a yup schema per field in `:rules`, or a `:validation-schema` object
  on `<Form>`. String rules (`rules="required|email"`) only work if the app
  registered `@vee-validate/rules` globally; yup works everywhere and is exported by
  `ornito` (`import { yup } from 'ornito'`).
- vee-validate only calls `@submit` when every field is valid. Server-side errors:
  `@submit="(values, { setErrors }) => …"` then `setErrors({ email: 'Ya existe' })`,
  keyed by `name`.
- There is no `required`, `maxlength` or `hint` prop: use a rule, `max-length`
  (textarea counter) and `help` (FormInput text under the field). Unknown attributes
  land on a wrapper `<div>` and do nothing.
- `FormInput` types:
  - `password` adds a show/hide toggle.
  - `date` → `'yyyy-MM-dd'`, `time` → `'HH:mm'`, `datetime` → ISO string in
    `v-model` (shown as local `yyyy-MM-dd HH:mm`). `min-date`, `max-date` and
    `disabled-dates` restrict the picker. The picker is in Spanish.
  - `money` keeps an integer number of **cents** in `v-model` and shows a formatted
    amount; divide by 100 to display or send units if the API expects them.
  - `range` uses `min`, `max`, `step` and shows the value.
  - `mask="+503 #### ####"` formats as the user types (maska syntax).
  - `left-icon` / `right-icon` take components; `loading` shows a spinner; `small`
    reduces the height.
- `FormSelect` options are `{ value, label }`; `placeholder` becomes a disabled
  first option (default "Selecciona una opción").
- `SwitchInput` is not a vee-validate field: it only has `v-model`, `label`,
  `true-label`, `false-label`, `show-label`, `disabled`.
- `SearchableSelect` inside a `<Form>` validates when it has `name` and `rules`.

### SearchableSelect

```vue
<SearchableSelect
  id="driver"
  v-model="form.driver_id"
  name="driver_id"
  label="Conductor"
  url="/api/v1/drivers"
  search-by="filter[name]"
  label-key="name"
  value-key="id"
  :subtitle-key="['license_number', '{phone} · {email}']"
  placeholder="Buscar conductor..."
  :rules="yup.number().required('Selecciona un conductor.')"
  @data="selectedDriver = $event"
/>
```

- `search-by` is the **whole query parameter name**: typing "ana" requests
  `url?filter[name]=ana` here (or `url?name=ana` with `search-by="name"`). Use what
  the API filters by.
- It loads `url` on mount for the initial options and accepts an array or
  `{ data: [...] }` as the response. When `v-model` already has a value (edit forms)
  it resolves the label with `url?filter[{value-key}]={value}`.
- `label-key` / `value-key` pick fields of each result (defaults `label` / `value`);
  `subtitle-key` takes field names or templates like `'{driver} · {model}'`.
- `multiple` makes `v-model` an array. `local-search-first` filters the loaded
  options before asking the server.
- `@select` emits `{ label, value, subtitles }`; `@data` emits the raw API object.
- Searches are debounced 500ms by the component.

`FormInput` with `url` and `search-by` renders this same component inside the
form-field layout (label above, error below).

## Server data

### DataTable

Two modes:

- **Server** (`url`): requests `url?page=1&per_page=10`, adds
  `filter[{field}]={query}` for each `search-by` field while the user searches
  (debounced 500ms), and shows the search box, page-size select (10/25/50), result
  count, pagination and a skeleton while loading. The response must be
  `{ data: Row[], pagination: { total, per_page, current_page, from, to, last_page } }`.
  Needs the request factory ([installation.md](installation.md#request-factory)).
- **Local** (`:data="rows"`): renders the array reactively, no requests, no search
  or pagination controls. `data` wins if both are passed.

```vue
<DataTable
  url="/api/v1/drivers"
  :columns="columns"
  :search-by="['name', 'license_number']"
  search-placeholder="Buscar conductor..."
  actions-label="Acciones"
>
  <template #status="{ row }">
    <Badge :variant="row.active ? 'success' : 'neutral'">{{ row.active ? 'Activo' : 'Inactivo' }}</Badge>
  </template>
  <template #actions="{ row }">
    <IconButton :icon="IconEye" color="primary" :to="`/drivers/${row.id}`" aria-label="Ver conductor" />
  </template>
</DataTable>
```

```ts
const columns: TableField<Driver>[] = [
  { label: 'Nombre', key: 'name' },
  { label: 'Licencia', key: 'license_number' },
  { label: 'Vehículo', key: 'vehicle.plate' as keyof Driver },       // dotted paths work
  { label: 'Alta', key: 'created_at', format: (row) => formatDate(row.created_at) },
  { label: 'Estado', key: 'active', slot: 'status' },                 // rendered by #status
]
```

- `search-by` on a DataTable is a **field name** (or array), wrapped as
  `filter[field]`. Don't pass `filter[name]`: that requests `filter[filter[name]]`.
  (On `SearchableSelect` it is the opposite: the full parameter.)
- A column with `slot: 'x'` renders `<template #x="{ row, value }">`. The
  `#actions="{ row }"` slot adds an actions column titled `actions-label` — pass it
  in the app's language, the default is "Actions".
- `columns` are presentational: filter them before passing to hide columns.
- To reload server tables after creating, editing or deleting a row, call
  `useTable().refreshTable()` (it signals every mounted server `DataTable`) or change
  the `url` (e.g. a filter in the query string) or the component `:key`.
- `@pagination-loaded` emits the pagination after each server load.
- In v0.12.0 the search box always shows "Buscar...": `search-placeholder` is
  declared but not wired yet. Pass it anyway (it will apply once fixed), but don't
  promise the user a custom placeholder.
- Put it inside a `Card`; it is responsive (cards on mobile).

`useTable()` exposes the same loader for custom layouts
(`fetchData(url, page, perPage, query?, searchBy?)`, `internalData`,
`internalPaginationServer`, `isLoading`, `error`). Pair it with `CardPaginations`
(`:pagination`, `@page-change`) or `TablePagination`.

## Lists

`List` is a `<ul>` with shared border, dividers and corners; put `<li>` rows inside,
usually with `Item`:

```vue
<List border aria-label="Conductores" class="max-h-96" :pagination="pagination" :loading="loading" @request="loadPage">
  <li v-for="driver in drivers" :key="driver.id">
    <Item :id="driver.id" :title="driver.name" :subtitle="driver.phone" :image="driver.photo_url" :icon="IconChevronRight" clickable @click="openDriver" />
  </li>
</List>
```

- `Item` emits only its `id` on `@click`, and only with `clickable`.
- Slots `#image`, `#title`, `#subtitle`, `#icon` replace the props (e.g. a
  `UserAvatar` in `#image`).
- Infinite scroll: pass `pagination` (`{ current_page, last_page }`) and a fixed
  height; `@request` emits the next page number. The parent fetches, appends rows,
  updates `pagination` and toggles `loading`; `List` never fetches.

## Dialogs

```vue
<Modal :open="isOpen" title="Nuevo conductor" subtitle="Completa los datos." size="lg" @close="isOpen = false">
  <DriverForm @saved="onSaved" @cancel="isOpen = false" />
</Modal>

<BottomModal v-model:open="sheetOpen" title="Filtrar">
  …
  <template #footer>
    <BaseButton size="auto" @click="sheetOpen = false">Aplicar</BaseButton>
  </template>
</BottomModal>

<ConfirmationModal
  :open="pendingDelete !== null"
  :loading="deleting"
  title="Eliminar conductor"
  subtitle="Esta acción no se puede deshacer. Escribe 'Confirmar' para continuar."
  @close="pendingDelete = null"
  @confirm="deleteDriver"
/>
```

- `Modal` and `BottomModal` close on backdrop, Escape and the close button by
  emitting `update:open` (false) and `close`; use `v-model:open` or `:open` +
  `@close`. They teleport to `body`. `Modal` sizes: `sm`, `md` (default), `lg`,
  `xl`, `2xl`.
- `ConfirmationModal` makes the user type "Confirmar" before enabling its button.
  It emits `confirm` but doesn't close itself: close it (`open` false) when the
  action finishes. `loading` disables both buttons and closing.

## Feedback

- `Alert type="danger|warning|info|success"` with the message in the default slot;
  `:show` animates it in and out. `WarningAlert` is a fixed warning banner.
- `Badge variant="success|warning|danger|info|neutral"` and `text="xs|sm|base"`
  (there is no `size`).
- Toasts: render `<SnackBar />` once in the layout, then from anywhere
  `const { pushMessage } = useMessages(); pushMessage('Conductor guardado.')` or
  `pushMessage('No se pudo guardar.', true)` for an error. Each lasts 3 seconds.
- `LoadingSVG` is a spinner (`custom-class` replaces its size and color classes);
  buttons, tables and selects already have their own loading states.
- `HelpTooltip tooltip="…"` is a "?" with a hover tooltip; `StatCard` has a `help`
  prop for it.
- `ImageLightbox :open :src @close` shows one image full screen.

## Layout pieces

- `ViewHeader` requires `title` and `subtitle`; actions go in `#right`;
  `badge-text` adds a neutral badge.
- `Card`: `title`, `subtitle`, `#headerButtons` (camelCase name) for header actions,
  `no-padding` for edge-to-edge content, `col-in-mobile` to stack the header on
  phones.
- `StatCard`: `title`, `value` (`null` shows "Sin datos"), `change`, `change-type`
  (`positive`, `negative`, `neutral`, `info`), `description`, `help`. Lay several out
  in a grid (`grid gap-4 sm:grid-cols-2 xl:grid-cols-4`).
- `InfoItem label="Placa"` with the value in the default slot; `:column="false"`
  puts label and value on one line. Group them in a `Card` with a grid.
- `Divider` (no props) and `CollapseTransition` (wrap a `v-if` block to animate its
  height).

## Navigation pieces

- `Tabs v-model="index"` (a number) with `:tabs="[{ id, label, icon?, disabled? }]"`;
  content goes in `#tab-0`, `#tab-1`… slots. `variant`: `segmented` (default),
  `pills`, `underline`. `@change` emits `(tab, index)`.
- `Breadcrumb :items="[{ label, to?, icon? }]"`: the last item is the current page.
- `Dropdown v-model="value" :items="[{ label, value, icon? }]"` is a select-like
  menu for filters (`trigger-variant`, `trigger-size`, `position`).
- `DropdownMenu :items="[{ action, label, icon?, variant? }]" @select="onAction"` is a
  "⋮" action menu; `variant: 'danger'` colors destructive items.
- `UserAvatar name="Ana Rivera" :image-url="photo" size="sm|md|lg|xl"` falls back to
  initials; `UserAvatars :users="[{ initials, name }]"` stacks them.
- `Sidebar`, `Navbar`, `UserProfileDropdown`, `SidebarNav`: see
  [layout.md](layout.md).
