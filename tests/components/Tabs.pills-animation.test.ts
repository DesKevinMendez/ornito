import { mount } from '@vue/test-utils'
import { defineComponent, h, nextTick } from 'vue'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import Tabs from '../../src/components/Tabs.vue'

const tabs = [
  { id: 'one', label: 'One' },
  { id: 'two', label: 'A longer label' },
  { id: 'three', label: 'Third tab' },
]
const observers: TestResizeObserver[] = []
const wrappers: Array<{ unmount: () => void }> = []

class TestResizeObserver {
  callback: ResizeObserverCallback
  targets = new Set<Element>()
  constructor(callback: ResizeObserverCallback) {
    this.callback = callback
    observers.push(this)
  }
  observe = vi.fn((element: Element) => { this.targets.add(element) })
  disconnect = vi.fn(() => { this.targets.clear() })
  unobserve = vi.fn((element: Element) => { this.targets.delete(element) })
  trigger() { this.callback([], this as unknown as ResizeObserver) }
}

async function renderPills(props: Partial<InstanceType<typeof Tabs>['$props']> = {}) {
  const geometry = [
    { left: 0, top: 0, width: 64, height: 40 },
    { left: 72, top: 0, width: 142, height: 40 },
    { left: 222, top: 0, width: 98, height: 40 },
  ]
  const wrapper = mount(Tabs, { props: { tabs, variant: 'pills', ...props } })
  wrappers.push(wrapper)
  const buttons = wrapper.findAll('[role="tab"]')
  buttons.forEach((button, index) => {
    for (const [property, key] of [['offsetLeft', 'left'], ['offsetTop', 'top'], ['offsetWidth', 'width'], ['offsetHeight', 'height']] as const) {
      Object.defineProperty(button.element, property, { configurable: true, get: () => geometry[index][key] })
    }
  })
  await nextTick()
  const resize = async () => {
    observers.filter(observer => observer.targets.size).forEach(observer => observer.trigger())
    await nextTick()
  }
  await resize()
  return { wrapper, geometry, buttons, resize }
}

beforeEach(() => {
  observers.length = 0
  vi.stubGlobal('ResizeObserver', TestResizeObserver)
})
afterEach(() => {
  wrappers.splice(0).forEach(wrapper => wrapper.unmount())
  vi.unstubAllGlobals()
})

describe('Pills magnetic background', () => {
  it('renders one animated backdrop while keeping the selected button transparent', async () => {
    const { wrapper, buttons } = await renderPills()
    const indicator = wrapper.get('[data-tabs-indicator="pills"]')
    expect(indicator.classes()).toContain('bg-primary-600')
    expect(indicator.classes()).toContain('transition-all')
    expect(indicator.classes()).toContain('duration-300')
    expect(indicator.classes()).toContain('ease-in-out')
    expect(indicator.classes()).toContain('motion-reduce:transition-none')
    expect(indicator.classes()).toContain('pointer-events-none')
    expect(indicator.attributes('aria-hidden')).toBe('true')
    expect(indicator.attributes('style')).toContain('width: 64px')
    expect(indicator.attributes('style')).toContain('height: 40px')
    expect(buttons[0].classes()).not.toContain('bg-primary-600')
    expect(buttons[0].classes()).not.toContain('hover:bg-primary-700')
    expect(buttons[0].classes()).toContain('text-white')
    expect(wrapper.findAll('[data-tabs-indicator="pills"]')).toHaveLength(1)
  })

  it('moves and resizes the same indicator instead of teleporting backgrounds between buttons', async () => {
    const { wrapper, buttons } = await renderPills()
    const element = wrapper.get('[data-tabs-indicator="pills"]').element
    await buttons[1].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toEqual([[1]])
    expect(wrapper.emitted('change')).toEqual([[tabs[1], 1]])
    await wrapper.setProps({ modelValue: 1 })
    const indicator = wrapper.get('[data-tabs-indicator="pills"]')
    expect(indicator.element).toBe(element)
    expect(indicator.attributes('style')).toContain('translate3d(72px, 0px, 0)')
    expect(indicator.attributes('style')).toContain('width: 142px')
    expect(buttons[1].classes()).not.toContain('bg-primary-600')
  })

  it('follows the selected pill onto a wrapped row', async () => {
    const { wrapper, geometry } = await renderPills()
    geometry[2].left = 0
    geometry[2].top = 48
    await wrapper.setProps({ modelValue: 2 })
    expect(wrapper.get('[data-tabs-indicator="pills"]').attributes('style')).toContain('translate3d(0px, 48px, 0)')
  })

  it('observes both container and buttons and recomputes bounds after resize', async () => {
    const { wrapper, geometry, buttons, resize } = await renderPills({ modelValue: 1 })
    const observed = new Set(observers.flatMap(observer => [...observer.targets]))
    expect(observed.has(wrapper.get('[role="tablist"]').element)).toBe(true)
    expect(buttons.every(button => observed.has(button.element))).toBe(true)
    geometry[1] = { left: 88, top: 48, width: 180, height: 44 }
    await resize()
    const style = wrapper.get('[data-tabs-indicator="pills"]').attributes('style')
    expect(style).toContain('translate3d(88px, 48px, 0)')
    expect(style).toContain('width: 180px')
    expect(style).toContain('height: 44px')
    expect(wrapper.emitted('change')).toBeUndefined()
  })

  it('accounts for labels and icons changed at the same active index', async () => {
    const { wrapper, geometry } = await renderPills()
    const Icon = defineComponent({ setup: () => () => h('svg') })
    geometry[0].width = 88
    await wrapper.setProps({ tabs: [{ ...tabs[0], icon: Icon }, tabs[1], tabs[2]] })
    expect(wrapper.find('svg').exists()).toBe(true)
    expect(wrapper.get('[data-tabs-indicator="pills"]').attributes('style')).toContain('width: 88px')
    geometry[0].width = 132
    await wrapper.setProps({ tabs: [{ ...tabs[0], label: 'A wider first tab', icon: Icon }, tabs[1], tabs[2]] })
    expect(wrapper.get('[data-tabs-indicator="pills"]').attributes('style')).toContain('width: 132px')
  })

  it('uses actual DOM order after keyed tabs reorder, not the v-for ref array order', async () => {
    const { wrapper, geometry } = await renderPills()
    geometry[2].left = 0
    geometry[0].left = 256
    await wrapper.setProps({ tabs: [tabs[2], tabs[1], tabs[0]] })
    const style = wrapper.get('[data-tabs-indicator="pills"]').attributes('style')
    expect(style).toContain('translate3d(0px, 0px, 0)')
    expect(style).toContain('width: 98px')
  })

  it('keeps a static selection until hidden pills have measurable dimensions', async () => {
    const { wrapper, geometry, buttons, resize } = await renderPills()
    geometry[0].width = 0
    geometry[0].height = 0
    await resize()
    expect(wrapper.find('[data-tabs-indicator="pills"]').exists()).toBe(false)
    expect(buttons[0].classes()).toContain('bg-primary-600')
    geometry[0].width = 64
    geometry[0].height = 40
    await resize()
    expect(wrapper.get('[data-tabs-indicator="pills"]').attributes('style')).toContain('width: 64px')
    expect(buttons[0].classes()).not.toContain('bg-primary-600')
  })

  it('keeps the original segmented indicator and restores pills on variant changes', async () => {
    const { wrapper } = await renderPills({ modelValue: 1 })
    await wrapper.setProps({ variant: 'segmented' })
    expect(wrapper.find('[data-tabs-indicator="pills"]').exists()).toBe(false)
    const slider = wrapper.get('[aria-hidden="true"]')
    expect(slider.classes()).toContain('bg-white')
    expect(slider.attributes('style')).toContain('width: 32.666')
    await wrapper.setProps({ variant: 'pills' })
    expect(wrapper.get('[data-tabs-indicator="pills"]').attributes('style')).toContain('width: 142px')
  })

  it.each([-1, 99])('removes the pill indicator for invalid modelValue=%s', async (modelValue) => {
    const { wrapper } = await renderPills()
    await wrapper.setProps({ modelValue })
    expect(wrapper.find('[data-tabs-indicator="pills"]').exists()).toBe(false)
  })

  it('removes the indicator for empty or disabled selections', async () => {
    const { wrapper } = await renderPills()
    await wrapper.setProps({ tabs: [{ ...tabs[0], disabled: true }, tabs[1], tabs[2]] })
    expect(wrapper.find('[data-tabs-indicator="pills"]').exists()).toBe(false)
    await wrapper.setProps({ tabs: [] })
    expect(wrapper.find('[data-tabs-indicator="pills"]').exists()).toBe(false)
  })

  it('cleans up VueUse resize observers when unmounted', async () => {
    const { wrapper } = await renderPills()
    const activeObservers = observers.filter(observer => observer.targets.size)
    wrapper.unmount()
    expect(activeObservers.every(observer => observer.disconnect.mock.calls.length > 0)).toBe(true)
  })
})
