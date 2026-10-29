import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { h, nextTick, ref } from 'vue'

import DataTable from '../../src/components/DataTable.vue'
import { useRequestKey } from '../../src/composables/useDataRequest'
import type { TableField } from '../../src/types/Table'

interface Employee {
  id: number
  name: string
  status: string
}

const employees: Employee[] = [
  { id: 1, name: 'Ana Rivera', status: 'Active' },
]

const columns: TableField<Employee>[] = [
  { label: 'Employee ID', key: 'id', format: (row) => `EMP-${row.id}` },
  { label: 'Name', key: 'name' },
  { label: 'Status', key: 'status', slot: 'status' },
]

const mountedWrappers: Array<{ unmount: () => void }> = []
const originalInnerWidthDescriptor = Object.getOwnPropertyDescriptor(window, 'innerWidth')

function setViewportWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', { configurable: true, get: () => width })
}

function mountTable(options: {
  data?: Employee[]
  url?: string
  width?: number
  get?: ReturnType<typeof vi.fn>
} = {}) {
  setViewportWidth(options.width ?? 1024)

  const global = options.get
    ? {
        provide: {
          [useRequestKey as symbol]: () => ({ get: options.get }),
        },
      }
    : undefined

  const wrapper = mount(DataTable, {
    props: {
      columns,
      data: options.data ?? employees,
      url: options.url,
      showSearch: false,
    },
    slots: {
      status: ({ row }: { row: Employee }) => h('span', { 'data-test': 'status-slot' }, row.status),
    },
    global,
  })

  mountedWrappers.push(wrapper)
  return wrapper
}

beforeEach(() => {
  vi.stubGlobal('ResizeObserver', class {
    observe() {}
    disconnect() {}
  })
})

afterEach(() => {
  mountedWrappers.splice(0).forEach((wrapper) => wrapper.unmount())
  if (originalInnerWidthDescriptor) {
    Object.defineProperty(window, 'innerWidth', originalInnerWidthDescriptor)
  } else {
    Reflect.deleteProperty(window, 'innerWidth')
  }
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})

describe('DataTable local data', () => {
  it('renders local rows, format and slot content on desktop without a request provider', () => {
    const wrapper = mountTable()

    expect(wrapper.find('table').exists()).toBe(true)
    expect(wrapper.find('tbody').text()).toContain('EMP-1')
    expect(wrapper.find('tbody').text()).toContain('Ana Rivera')
    expect(wrapper.get('[data-test="status-slot"]').text()).toBe('Active')
    expect(wrapper.text()).toContain('Mostrando 1 de 1 resultados')
  })

  it('renders the same formatted and slotted local rows in the mobile card view', async () => {
    const wrapper = mountTable({ width: 375 })
    await nextTick()

    expect(wrapper.find('table').exists()).toBe(false)
    expect(wrapper.findAll('.rounded-lg.p-4.border')).toHaveLength(1)
    expect(wrapper.text()).toContain('EMP-1')
    expect(wrapper.text()).toContain('Ana Rivera')
    expect(wrapper.get('[data-test="status-slot"]').text()).toBe('Active')
  })

  it('reactively renders replacement arrays passed through the data prop', async () => {
    const wrapper = mountTable()

    await wrapper.setProps({
      data: [{ id: 2, name: 'Marco Soto', status: 'On leave' }],
    })

    expect(wrapper.find('tbody').text()).toContain('EMP-2')
    expect(wrapper.find('tbody').text()).toContain('Marco Soto')
    expect(wrapper.find('tbody').text()).not.toContain('Ana Rivera')
    expect(wrapper.text()).toContain('Mostrando 1 de 1 resultados')
  })

  it('does not request URL data when a local array is provided', () => {
    const get = vi.fn()
    mountTable({ url: '/employees', get })

    expect(get).not.toHaveBeenCalled()
  })
})

describe('DataTable server search', () => {
  it('shows the searchPlaceholder prop in the search input', async () => {
    setViewportWidth(1024)
    const get = vi.fn().mockResolvedValue({
      data: ref({
        data: [],
        pagination: { total: 0, per_page: 10, current_page: 1, from: 0, to: 0, last_page: 1 },
      }),
    })
    const wrapper = mount(DataTable, {
      props: { columns, url: '/employees', searchPlaceholder: 'Buscar empleado...' },
      global: { provide: { [useRequestKey as symbol]: () => ({ get }) } },
    })
    mountedWrappers.push(wrapper)
    await nextTick()

    expect(wrapper.get('#table-search').attributes('placeholder')).toBe('Buscar empleado...')
  })
})
