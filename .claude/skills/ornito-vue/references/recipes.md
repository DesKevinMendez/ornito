# Recipes

Complete views built the Ornito way. Adapt names, routes and endpoints; keep the
structure. Every snippet passes `check_ornito_usage.py`.

## Contents

- [Server table with create, edit and delete](#server-table-with-create-edit-and-delete)
- [Form in a modal](#form-in-a-modal)
- [Create/edit form in its own route](#createedit-form-in-its-own-route)
- [Detail view](#detail-view)
- [Dashboard with KPIs](#dashboard-with-kpis)
- [Local table with filters](#local-table-with-filters)
- [Infinite list](#infinite-list)
- [Tabs inside a view](#tabs-inside-a-view)

## Server table with create, edit and delete

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { IconEdit, IconPlus, IconTrash } from '@tabler/icons-vue'
import {
  Badge, BaseButton, Card, ConfirmationModal, DataTable, IconButton, Modal, ViewHeader,
  useMessages, useTable, type TableField,
} from 'ornito'
import DriverForm from '../components/DriverForm.vue'
import { useRequest } from '@/core/composables/useRequest'

interface Driver { id: number; name: string; license_number: string; phone: string; active: boolean }

const columns: TableField<Driver>[] = [
  { label: 'Nombre', key: 'name' },
  { label: 'Licencia', key: 'license_number' },
  { label: 'Teléfono', key: 'phone' },
  { label: 'Estado', key: 'active', slot: 'status' },
]

const { pushMessage } = useMessages()
const { refreshTable } = useTable()
const { del } = useRequest()

const formOpen = ref(false)
const editing = ref<Driver | null>(null)
const pendingDelete = ref<Driver | null>(null)
const deleting = ref(false)

function openCreate() { editing.value = null; formOpen.value = true }
function openEdit(driver: Driver) { editing.value = driver; formOpen.value = true }

function onSaved() {
  formOpen.value = false
  pushMessage(editing.value ? 'Conductor actualizado.' : 'Conductor creado.')
  refreshTable()
}

async function confirmDelete() {
  if (!pendingDelete.value) return
  deleting.value = true
  try {
    await del(`/api/v1/drivers/${pendingDelete.value.id}`)
    pushMessage('Conductor eliminado.')
    refreshTable()
    pendingDelete.value = null
  } catch {
    pushMessage('No se pudo eliminar el conductor.', true)
  } finally {
    deleting.value = false
  }
}
</script>

<template>
  <div class="space-y-6">
    <ViewHeader title="Conductores" subtitle="Administra los conductores de la flota.">
      <template #right>
        <BaseButton size="auto" :icon="IconPlus" @click="openCreate">Nuevo conductor</BaseButton>
      </template>
    </ViewHeader>

    <Card>
      <DataTable
        url="/api/v1/drivers"
        :columns="columns"
        :search-by="['name', 'license_number']"
        search-placeholder="Buscar por nombre o licencia..."
        actions-label="Acciones"
      >
        <template #status="{ row }">
          <Badge :variant="row.active ? 'success' : 'neutral'">{{ row.active ? 'Activo' : 'Inactivo' }}</Badge>
        </template>
        <template #actions="{ row }">
          <div class="flex gap-2">
            <IconButton :icon="IconEdit" color="primary" aria-label="Editar conductor" @click="openEdit(row)" />
            <IconButton :icon="IconTrash" color="danger" outline aria-label="Eliminar conductor" @click="pendingDelete = row" />
          </div>
        </template>
      </DataTable>
    </Card>

    <Modal
      :open="formOpen"
      :title="editing ? 'Editar conductor' : 'Nuevo conductor'"
      size="lg"
      @close="formOpen = false"
    >
      <DriverForm :driver="editing" @saved="onSaved" @cancel="formOpen = false" />
    </Modal>

    <ConfirmationModal
      :open="pendingDelete !== null"
      :loading="deleting"
      title="Eliminar conductor"
      :subtitle="`Se eliminará a ${pendingDelete?.name}. Escribe 'Confirmar' para continuar.`"
      @close="pendingDelete = null"
      @confirm="confirmDelete"
    />
  </div>
</template>
```

`useRequest` is the app's own request composable (the one provided with
`useRequestKey`); use whatever the app already has for POST/PUT/DELETE and adapt
the error handling to it (some return an `error` ref instead of throwing).

## Form in a modal

`DriverForm.vue`, used above. The form owns its fields, validation and submit; the
parent owns the modal.

```vue
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Form } from 'vee-validate'
import { IconId, IconPhone, IconUser } from '@tabler/icons-vue'
import { Alert, BaseButton, FormInput, SwitchInput, yup } from 'ornito'
import { useRequest } from '@/core/composables/useRequest'

const props = defineProps<{ driver: { id: number; name: string; license_number: string; phone: string; active: boolean } | null }>()
const emit = defineEmits<{ saved: []; cancel: [] }>()

const { post, put } = useRequest()
const form = reactive({
  name: props.driver?.name ?? '',
  license_number: props.driver?.license_number ?? '',
  phone: props.driver?.phone ?? '',
  active: props.driver?.active ?? true,
})
const saving = ref(false)
const error = ref<string | null>(null)

const rules = {
  name: yup.string().required('El nombre es requerido.').max(255, 'Máximo 255 caracteres.'),
  license: yup.string().required('La licencia es requerida.'),
  phone: yup.string().required('El teléfono es requerido.'),
}

async function submit() {
  saving.value = true
  error.value = null
  try {
    if (props.driver) await put(`/api/v1/drivers/${props.driver.id}`, form)
    else await post('/api/v1/drivers', form)
    emit('saved')
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'No se pudo guardar.'
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <Form class="space-y-5" @submit="submit">
    <FormInput id="driver-name" v-model="form.name" name="name" label="Nombre" :left-icon="IconUser" :rules="rules.name" />
    <div class="grid gap-5 sm:grid-cols-2">
      <FormInput id="driver-license" v-model="form.license_number" name="license_number" label="Licencia" :left-icon="IconId" :rules="rules.license" />
      <FormInput id="driver-phone" v-model="form.phone" name="phone" type="tel" label="Teléfono" mask="+503 #### ####" :left-icon="IconPhone" :rules="rules.phone" />
    </div>
    <SwitchInput v-model="form.active" label="Estado" true-label="Activo" false-label="Inactivo" />

    <Alert type="danger" :show="error !== null">{{ error }}</Alert>

    <div class="flex justify-end gap-3 border-t border-default-light pt-4 dark:border-default-dark">
      <BaseButton variant="outline" size="auto" :disabled="saving" @click="emit('cancel')">Cancelar</BaseButton>
      <BaseButton type="submit" size="auto" :loading="saving">Guardar</BaseButton>
    </div>
  </Form>
</template>
```

## Create/edit form in its own route

For long forms: a view with a `Breadcrumb`, a `ViewHeader`, the form in one or more
`Card`s, and the submit buttons at the end of the `Form`. Selects whose options come
from the server use `SearchableSelect` so edit mode resolves the saved value:

```vue
<template>
  <div class="space-y-6">
    <Breadcrumb :items="[{ label: 'Vehículos', to: '/vehicles' }, { label: isEdit ? 'Editar' : 'Nuevo' }]" />
    <ViewHeader :title="isEdit ? 'Editar vehículo' : 'Nuevo vehículo'" subtitle="Datos generales y asignación." />

    <Form class="space-y-6" @submit="submit">
      <Card title="Datos generales">
        <div class="grid gap-5 md:grid-cols-2">
          <FormInput id="plate" v-model="form.plate" name="plate" label="Placa" :rules="rules.plate" />
          <FormSelect id="type" v-model="form.type" name="type" label="Tipo" :options="vehicleTypes" :rules="rules.type" />
          <FormInput id="bought_at" v-model="form.bought_at" name="bought_at" type="date" label="Fecha de compra" :max-date="new Date()" />
          <FormInput id="price" v-model="form.price_cents" name="price" type="money" label="Precio" help="En dólares; se guarda en centavos." />
        </div>
      </Card>
      <Card title="Asignación">
        <SearchableSelect
          id="driver"
          v-model="form.driver_id"
          name="driver_id"
          label="Conductor"
          url="/api/v1/drivers"
          search-by="filter[name]"
          label-key="name"
          value-key="id"
          subtitle-key="license_number"
          placeholder="Buscar conductor..."
        />
      </Card>
      <div class="flex justify-end gap-3">
        <BaseButton variant="outline" size="auto" :to="{ name: 'vehicles.index' }">Cancelar</BaseButton>
        <BaseButton type="submit" size="auto" :loading="saving">Guardar</BaseButton>
      </div>
    </Form>
  </div>
</template>
```

## Detail view

```vue
<template>
  <div class="space-y-6">
    <Breadcrumb :items="[{ label: 'Conductores', to: '/drivers' }, { label: driver.name }]" />
    <ViewHeader :title="driver.name" subtitle="Perfil del conductor">
      <template #right>
        <div class="flex gap-3">
          <BaseButton variant="outline" size="auto" :icon="IconEdit" :to="`/drivers/${driver.id}/edit`">Editar</BaseButton>
          <BaseButton variant="danger-outline" size="auto" :icon="IconTrash" @click="pendingDelete = true">Eliminar</BaseButton>
        </div>
      </template>
    </ViewHeader>

    <Card title="Información">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <InfoItem label="Licencia">{{ driver.license_number }}</InfoItem>
        <InfoItem label="Teléfono">{{ driver.phone }}</InfoItem>
        <InfoItem label="Estado">
          <Badge :variant="driver.active ? 'success' : 'neutral'">{{ driver.active ? 'Activo' : 'Inactivo' }}</Badge>
        </InfoItem>
      </div>
    </Card>

    <Card title="Vehículos asignados" no-padding>
      <DataTable :data="driver.vehicles" :columns="vehicleColumns" />
    </Card>
  </div>
</template>
```

While the record loads, show the header and card titles for real and put a
`LoadingSVG` (or `TableSkeleton` for tables) only where server data goes; on a
failed load show `<Alert type="danger">` with a retry `BaseButton`.

## Dashboard with KPIs

```vue
<template>
  <div class="space-y-6">
    <ViewHeader title="Dashboard" subtitle="Resumen de los últimos 30 días.">
      <template #right>
        <Dropdown v-model="period" :items="periods" trigger-size="auto" position="bottom-right" />
      </template>
    </ViewHeader>

    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard title="Viajes" :value="stats.trips" change="+12%" change-type="positive" description="vs. mes anterior" />
      <StatCard title="Ingresos" :value="formatMoney(stats.revenue)" change="-3%" change-type="negative" description="vs. mes anterior" />
      <StatCard title="Vehículos activos" :value="stats.activeVehicles" help="Con al menos un viaje en el periodo." />
      <StatCard title="Incidencias" :value="stats.incidents ?? null" />
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <Card title="Últimos viajes">
        <List aria-label="Últimos viajes">
          <li v-for="trip in recentTrips" :key="trip.id">
            <Item :id="trip.id" :title="trip.route" :subtitle="trip.date" clickable @click="openTrip" />
          </li>
        </List>
      </Card>
      <Card title="Alertas">
        <div class="space-y-3">
          <Alert v-for="alert in alerts" :key="alert.id" :type="alert.level">{{ alert.message }}</Alert>
        </div>
      </Card>
    </div>
  </div>
</template>
```

## Local table with filters

Rows already in memory (a report, a computed list) go to `:data`; filters are plain
Ornito controls that compute the rows:

```vue
<script setup lang="ts">
import { computed, ref } from 'vue'
import { Card, DataTable, Dropdown, ViewHeader, type TableField } from 'ornito'

interface Payment { id: number; client: string; amount: number; status: 'paid' | 'pending' }

const props = defineProps<{ payments: Payment[] }>()
const status = ref('all')
const statuses = [
  { label: 'Todos', value: 'all' },
  { label: 'Pagados', value: 'paid' },
  { label: 'Pendientes', value: 'pending' },
]
const rows = computed(() => props.payments.filter((p) => status.value === 'all' || p.status === status.value))
const columns: TableField<Payment>[] = [
  { label: 'Cliente', key: 'client' },
  { label: 'Monto', key: 'amount', format: (row) => `$${row.amount.toFixed(2)}` },
]
</script>

<template>
  <div class="space-y-6">
    <ViewHeader title="Pagos" subtitle="Pagos del mes.">
      <template #right>
        <Dropdown v-model="status" :items="statuses" trigger-size="auto" />
      </template>
    </ViewHeader>
    <Card>
      <DataTable :data="rows" :columns="columns" />
    </Card>
  </div>
</template>
```

## Infinite list

```vue
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Card, Item, List, useMessages, type ListPagination } from 'ornito'
import { useRequest } from '@/core/composables/useRequest'

interface Notification { id: number; title: string; time: string }

const { get } = useRequest()
const { pushMessage } = useMessages()
const items = ref<Notification[]>([])
const pagination = ref<ListPagination | null>(null)
const loading = ref(false)

async function load(page: number) {
  loading.value = true
  try {
    const { data } = await get<{ data: Notification[]; pagination: ListPagination }>(`/api/v1/notifications?page=${page}`)
    if (data.value) {
      items.value.push(...data.value.data)
      pagination.value = data.value.pagination
    }
  } catch {
    pushMessage('No se pudieron cargar las notificaciones.', true)
  } finally {
    loading.value = false
  }
}

onMounted(() => load(1))
</script>

<template>
  <Card title="Notificaciones" no-padding>
    <List class="max-h-[32rem]" aria-label="Notificaciones" :pagination="pagination" :loading="loading" @request="load">
      <li v-for="n in items" :key="n.id">
        <Item :id="n.id" :title="n.title" :subtitle="n.time" />
      </li>
    </List>
  </Card>
</template>
```

## Tabs inside a view

```vue
<Tabs v-model="activeTab" :tabs="tabs" variant="underline" label="Secciones del vehículo">
  <template #tab-0><VehicleSummary :vehicle="vehicle" /></template>
  <template #tab-1><VehicleTrips :vehicle-id="vehicle.id" /></template>
  <template #tab-2><VehicleDocuments :vehicle-id="vehicle.id" /></template>
</Tabs>
```

```ts
const activeTab = ref(0)
const tabs: Tab[] = [
  { id: 'summary', label: 'Resumen', icon: IconInfoCircle },
  { id: 'trips', label: 'Viajes', icon: IconRoute },
  { id: 'documents', label: 'Documentos', icon: IconFileText },
]
```
