import { mount, flushPromises } from '@vue/test-utils'
import { Form } from 'vee-validate'
import { defineComponent, h, nextTick, ref } from 'vue'
import { afterEach, describe, expect, it, vi } from 'vitest'

import SearchableSelect from '../../src/components/SearchableSelect.vue'
import { useRequestKey } from '../../src/composables/useDataRequest'

const rawOptions = [
  { id: 1, name: 'Ada Lovelace', role: 'Engineer' },
  { id: 2, name: 'Grace Hopper', role: 'Admiral' },
]

const DropdownAnimationStub = defineComponent({
  name: 'DropdownAnimation',
  setup(_, { slots }) {
    return () => h('div', { 'data-test': 'dropdown-animation' }, slots.default?.())
  },
})

const LoadingSVGStub = defineComponent({
  name: 'LoadingSVG',
  template: '<span data-test="loading" />',
})

function mountSearchableSelect(options: {
  modelValue?: string | number | (string | number)[] | null
  rules?: unknown
  multiple?: boolean
  placeholder?: string
  id?: string
  small?: boolean
  labelKey?: string
  valueKey?: string
  items?: Array<Record<string, unknown>>
  searchItems?: Array<Record<string, unknown>>
  localSearchFirst?: boolean
} = {}) {
  const get = vi.fn(async (url: string) => ({
    data: ref(url.includes('?') ? (options.searchItems ?? options.items ?? rawOptions) : (options.items ?? rawOptions)),
  }))
  const selected = ref(options.modelValue)

  const Host = defineComponent({
    components: { Form, SearchableSelect },
    setup() {
      return {
        selected,
        rules: options.rules,
        multiple: options.multiple ?? false,
        placeholder: options.placeholder,
        id: options.id ?? 'user',
        small: options.small ?? false,
        localSearchFirst: options.localSearchFirst ?? false,
        labelKey: options.labelKey ?? 'name',
        valueKey: options.valueKey ?? 'id',
      }
    },
    template: `
      <Form>
        <SearchableSelect
          v-model="selected"
          url="/users"
          search-by="filter[name]"
          :placeholder="placeholder"
          :id="id"
          :small="small"
          :local-search-first="localSearchFirst"
          :label-key="labelKey"
          :value-key="valueKey"
          subtitle-key="role"
          name="user"
          :multiple="multiple"
          :rules="rules"
        />
      </Form>
    `,
  })

  const wrapper = mount(Host, {
    global: {
      provide: {
        [useRequestKey as symbol]: () => ({ get }),
      },
      stubs: {
        DropdownAnimation: DropdownAnimationStub,
        LoadingSVG: LoadingSVGStub,
      },
    },
  })

  return { wrapper, get, selected }
}

function mountSearchableSelectWithDefaults() {
  const get = vi.fn(async () => ({
    data: ref([{ label: 'Default option', value: 'default' }]),
  }))
  const selected = ref<string | number>()

  const Host = defineComponent({
    components: { Form, SearchableSelect },
    setup() {
      return { selected }
    },
    template: `
      <Form>
        <SearchableSelect
          v-model="selected"
          url="/users"
          search-by="name"
          name="user"
        />
      </Form>
    `,
  })

  const wrapper = mount(Host, {
    global: {
      provide: {
        [useRequestKey as symbol]: () => ({ get }),
      },
      stubs: {
        DropdownAnimation: DropdownAnimationStub,
        LoadingSVG: LoadingSVGStub,
      },
    },
  })

  return { wrapper, get, selected }
}

async function focusAndResolveInitialRequest(wrapper: ReturnType<typeof mount>) {
  await wrapper.get('input').trigger('focus')
  await flushPromises()
  await nextTick()
}

async function primeSearchWatcher(wrapper: ReturnType<typeof mount>) {
  await wrapper.get('input').setValue('__prime__')
  await vi.advanceTimersByTimeAsync(500)
  await flushPromises()
  await nextTick()
}

async function searchFor(wrapper: ReturnType<typeof mount>, query: string) {
  await wrapper.get('input').setValue(query)
  await vi.advanceTimersByTimeAsync(500)
  await flushPromises()
  await nextTick()
}

describe('SearchableSelect', () => {
  afterEach(() => {
    vi.useRealTimers()
  })
  it('throws when the request provider is missing', () => {
    expect(() =>
      mount(SearchableSelect, {
        props: {
          url: '/users',
          searchBy: 'name',
        },
      }),
    ).toThrow(
      'SearchableSelect: no request instance provided. Call app.provide(useRequestKey, useRequest) in the consuming app.',
    )
  })

  it('uses the default prop values', async () => {
    const { wrapper, selected } = mountSearchableSelectWithDefaults()

    expect(wrapper.get('input').attributes('id')).toBe('searchable-select')
    expect(wrapper.get('input').attributes('placeholder')).toBe('Buscar...')
    expect(wrapper.get('input').classes()).toContain('py-3')
    expect(wrapper.get('input').classes()).not.toContain('py-2')

    await focusAndResolveInitialRequest(wrapper)
    await wrapper.find('.cursor-pointer').trigger('click')
    await nextTick()

    expect(selected.value).toBe('default')
    expect(wrapper.get('input').element.value).toBe('Default option')
    expect(wrapper.findAll('button')).toHaveLength(0)
  })

  it('uses overridden prop values and custom label/value keys', async () => {
    const { wrapper, selected } = mountSearchableSelect({
      placeholder: 'Pick a person',
      id: 'person-picker',
      small: true,
      labelKey: 'displayName',
      valueKey: 'code',
      items: [
        { code: 'grace', displayName: 'Grace Hopper', role: 'Admiral' },
      ],
    })

    expect(wrapper.get('input').attributes('id')).toBe('person-picker')
    expect(wrapper.get('input').attributes('placeholder')).toBe('Pick a person')
    expect(wrapper.get('input').classes()).toContain('py-2')
    expect(wrapper.get('input').classes()).not.toContain('py-3')

    await focusAndResolveInitialRequest(wrapper)
    await wrapper.find('.cursor-pointer').trigger('click')
    await nextTick()

    expect(selected.value).toBe('grace')
    expect(wrapper.get('input').element.value).toBe('Grace Hopper')
  })

  it('focus triggers initial request and renders options', async () => {
    const { wrapper, get } = mountSearchableSelect()

    await focusAndResolveInitialRequest(wrapper)

    expect(get).toHaveBeenCalledTimes(1)
    expect(get).toHaveBeenCalledWith('/users')
    expect(wrapper.text()).toContain('Ada Lovelace')
    expect(wrapper.text()).toContain('Grace Hopper')
  })

  it('selecting an option updates v-model and emits select/data', async () => {
    const { wrapper, selected } = mountSearchableSelect()

    await focusAndResolveInitialRequest(wrapper)
    await wrapper.get('input').trigger('focus')
    await wrapper.findAll('.cursor-pointer')[1].trigger('click')
    await nextTick()

    const searchableSelect = wrapper.getComponent(SearchableSelect)

    expect(selected.value).toBe(2)
    expect(wrapper.get('input').element.value).toBe('Grace Hopper')
    expect(searchableSelect.emitted('select')?.[0]).toEqual([
      { label: 'Grace Hopper', value: 2, icon: undefined, subtitles: ['Admiral'] },
    ])
    expect(searchableSelect.emitted('data')?.[0]).toEqual([rawOptions[1]])
  })

  it('resolves an initial value and sets its label in the input', async () => {
    const { wrapper, get, selected } = mountSearchableSelect({ modelValue: 2 })

    await flushPromises()
    await nextTick()

    expect(selected.value).toBe(2)
    expect(get).toHaveBeenCalledWith('/users')
    expect(wrapper.get('input').element.value).toBe('Grace Hopper')
  })

  it('multiple selection adds a value, clears the input, and emits select/data', async () => {
    const { wrapper, selected } = mountSearchableSelect({
      modelValue: [],
      multiple: true,
    })

    await focusAndResolveInitialRequest(wrapper)
    await wrapper.findAll('.cursor-pointer')[0].trigger('click')
    await nextTick()

    const searchableSelect = wrapper.getComponent(SearchableSelect)

    expect(selected.value).toEqual([1])
    expect(wrapper.get('input').element.value).toBe('')
    expect(searchableSelect.emitted('select')?.[0]).toEqual([
      { label: 'Ada Lovelace', value: 1, icon: undefined, subtitles: ['Engineer'] },
    ])
    expect(searchableSelect.emitted('data')?.[0]).toEqual([rawOptions[0]])
  })

  it('multiple selection removes an existing value and emits select/data again', async () => {
    const { wrapper, selected } = mountSearchableSelect({
      modelValue: [1],
      multiple: true,
    })

    await focusAndResolveInitialRequest(wrapper)
    await wrapper.findAll('.cursor-pointer')[0].trigger('click')
    await nextTick()

    const searchableSelect = wrapper.getComponent(SearchableSelect)

    expect(selected.value).toEqual([])
    expect(wrapper.get('input').element.value).toBe('')
    expect(searchableSelect.emitted('select')?.[0]).toEqual([
      { label: 'Ada Lovelace', value: 1, icon: undefined, subtitles: ['Engineer'] },
    ])
    expect(searchableSelect.emitted('data')?.[0]).toEqual([rawOptions[0]])
  })


  it('keeps server search behavior when localSearchFirst is omitted', async () => {
    vi.useFakeTimers()
    const { wrapper, get } = mountSearchableSelect({
      searchItems: [{ id: 3, name: 'Ada Byron', role: 'Mathematician' }],
    })

    await focusAndResolveInitialRequest(wrapper)
    await primeSearchWatcher(wrapper)
    await searchFor(wrapper, 'Ada')

    expect(get).toHaveBeenCalledTimes(2)
    expect(get).toHaveBeenLastCalledWith('/users?filter[name]=Ada')
    expect(wrapper.text()).toContain('Ada Byron')
    expect(wrapper.text()).not.toContain('Ada Lovelace')

    await wrapper.find('.cursor-pointer').trigger('click')
    await nextTick()

    const searchableSelect = wrapper.getComponent(SearchableSelect)
    expect(wrapper.get('input').element.value).toBe('Ada Byron')
    expect(searchableSelect.emitted('select')?.[0]).toEqual([
      { label: 'Ada Byron', value: 3, icon: undefined, subtitles: ['Mathematician'] },
    ])
    expect(searchableSelect.emitted('data')?.[0]).toEqual([
      { id: 3, name: 'Ada Byron', role: 'Mathematician' },
    ])

    vi.useRealTimers()
  })

  it('returns a local match without a second request when localSearchFirst is true', async () => {
    vi.useFakeTimers()
    const { wrapper, get } = mountSearchableSelect({ localSearchFirst: true })

    await focusAndResolveInitialRequest(wrapper)
    await primeSearchWatcher(wrapper)
    await searchFor(wrapper, 'admiral')

    expect(get).toHaveBeenCalledTimes(1)
    expect(wrapper.text()).toContain('Grace Hopper')
    expect(wrapper.text()).not.toContain('Ada Lovelace')

    await wrapper.find('.cursor-pointer').trigger('click')
    await nextTick()

    const searchableSelect = wrapper.getComponent(SearchableSelect)
    expect(wrapper.get('input').element.value).toBe('Grace Hopper')
    expect(searchableSelect.emitted('select')?.[0]).toEqual([
      { label: 'Grace Hopper', value: 2, icon: undefined, subtitles: ['Admiral'] },
    ])
    expect(searchableSelect.emitted('data')?.[0]).toEqual([rawOptions[1]])

    vi.useRealTimers()
  })

  it('falls back to server search when localSearchFirst is true and there is no local match', async () => {
    vi.useFakeTimers()
    const { wrapper, get } = mountSearchableSelect({
      localSearchFirst: true,
      searchItems: [{ id: 3, name: 'Linus Torvalds', role: 'Maintainer' }],
    })

    await focusAndResolveInitialRequest(wrapper)
    await primeSearchWatcher(wrapper)
    await searchFor(wrapper, 'Linus')

    expect(get).toHaveBeenCalledTimes(2)
    expect(get).toHaveBeenLastCalledWith('/users?filter[name]=Linus')
    expect(wrapper.text()).toContain('Linus Torvalds')
    expect(wrapper.text()).not.toContain('Ada Lovelace')

    await wrapper.find('.cursor-pointer').trigger('click')
    await nextTick()

    const searchableSelect = wrapper.getComponent(SearchableSelect)
    expect(wrapper.get('input').element.value).toBe('Linus Torvalds')
    expect(searchableSelect.emitted('select')?.[0]).toEqual([
      { label: 'Linus Torvalds', value: 3, icon: undefined, subtitles: ['Maintainer'] },
    ])
    expect(searchableSelect.emitted('data')?.[0]).toEqual([
      { id: 3, name: 'Linus Torvalds', role: 'Maintainer' },
    ])

    vi.useRealTimers()
  })

  it('an empty required rule shows the Field/ErrorMessage validation error after blur', async () => {
    const { wrapper } = mountSearchableSelect({
      modelValue: null,
      rules: (value: unknown) => (value ? true : 'Selection is required'),
    })

    await wrapper.get('input').trigger('focus')
    await wrapper.get('input').trigger('blur')
    await flushPromises()
    await nextTick()

    expect(wrapper.text()).toContain('Selection is required')
  })

  it.each([
    ['undefined', undefined],
    ['null', null],
    ['an empty string', ''],
  ])('does not throw when rules is %s', async (_, rules) => {
    const mountSelect = () => mountSearchableSelect({ rules })

    expect(mountSelect).not.toThrow()
  })
})
