<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Form } from 'vee-validate'
import { IconDownload, IconPlus } from '@tabler/icons-vue'
import { Badge, BaseButton, Card, DataTable, FormInput, Modal, ViewHeader, type TableField } from 'ornito'

interface Invoice {
  id: number
  number: string
  client: string
  total: number
  status: 'paid' | 'overdue'
}

const columns: TableField<Invoice>[] = [
  { label: 'Número', key: 'number' },
  { label: 'Cliente', key: 'client' },
  { label: 'Total', key: 'total', format: (row) => `$${row.total.toFixed(2)}` },
  { label: 'Estado', key: 'status', slot: 'status' },
]

const createOpen = ref(false)
const form = reactive({ client: '' })

function exportCsv() {
  window.open('/api/v1/invoices/export')
}

function save() {
  createOpen.value = false
}
</script>

<template>
  <div class="space-y-6">
    <ViewHeader title="Facturas" subtitle="Facturas emitidas este mes.">
      <template #actions>
        <BaseButton size="auto" :icon="IconPlus" @click="createOpen = true">Nueva factura</BaseButton>
      </template>
    </ViewHeader>

    <Card title="Listado">
      <template #headerButtons>
        <BaseButton variant="outline" small :icon="IconDownload" @click="exportCsv">Exportar</BaseButton>
      </template>
      <p class="mb-4 text-sm text-indigo-600 dark:text-indigo-400">Los montos incluyen IVA.</p>
      <DataTable url="/api/v1/invoices" :columns="columns" search-by="filter[number]" search-placeholder="Buscar factura..." actions-label="Acciones">
        <template #status="{ row }">
          <Badge v-if="row.status === 'paid'" variant="success">Pagada</Badge>
          <Badge v-else variant="error">Vencida</Badge>
          <span v-if="row.status === 'overdue'" class="ml-2 text-xs text-danger-300">Revisar</span>
        </template>
      </DataTable>
    </Card>

    <Modal :open="createOpen" title="Nueva factura" @close="createOpen = false">
      <Form class="space-y-4" @submit="save">
        <FormInput id="invoice-client" v-model="form.client" name="client" label="Cliente" required />
        <p class="text-sm text-red-600">Todos los campos son obligatorios.</p>
        <BaseButton type="submit" size="auto">Guardar</BaseButton>
      </Form>
    </Modal>
  </div>
</template>
