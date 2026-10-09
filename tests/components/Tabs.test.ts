import { mount } from '@vue/test-utils'
import { defineComponent, h, reactive, ref } from 'vue'
import { afterEach, describe, expect, it, vi } from 'vitest'

import Tabs from '../../src/components/Tabs.vue'
import type { Tab } from '../../src/types/Tabs'

const tabs: Tab[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'activity', label: 'Activity' },
  { id: 'settings', label: 'Settings' },
]
const TestIcon = defineComponent({ setup: () => () => h('svg', { 'data-test': 'tab-icon' }) })
const wrappers: Array<{ unmount: () => void }> = []

function renderTabs(options: Parameters<typeof mount<typeof Tabs>>[1] = {}) {
  const wrapper = mount(Tabs, { ...options, props: { tabs, ...options.props } })
  wrappers.push(wrapper)
  return wrapper
}

afterEach(() => {
  wrappers.splice(0).forEach(wrapper => wrapper.unmount())
  vi.restoreAllMocks()
})

describe('Tabs backwards compatibility and variants', () => {
  it('keeps the original animated segmented appearance by default', () => {
    const wrapper = renderTabs()
    expect(wrapper.get('[role="tablist"]').classes()).toContain('bg-gray-200')
    expect(wrapper.get('[role="tablist"]').classes()).toContain('dark:bg-gray-800')
    expect(wrapper.get('[aria-hidden="true"]').classes()).toContain('transition-all')
    expect(wrapper.findAll('[role="tab"]')).toHaveLength(3)
    expect(wrapper.get('.tab-panel').text()).toBe('No content available for this tab')
  })

  it('renders separate pills with primary selection and light/dark hover states', () => {
    const wrapper = renderTabs({ props: { tabs, variant: 'pills' } })
    const buttons = wrapper.findAll('[role="tab"]')
    expect(wrapper.find('[aria-hidden="true"]').exists()).toBe(false)
    expect(wrapper.get('[role="tablist"]').classes()).toContain('flex-wrap')
    expect(wrapper.get('[role="tablist"]').classes()).not.toContain('bg-gray-200')
    expect(buttons[0].classes()).toContain('bg-primary-600')
    expect(buttons[0].classes()).toContain('text-white')
    expect(buttons[0].classes()).toContain('rounded-xl')
    expect(buttons[1].classes()).toContain('hover:bg-gray-100')
    expect(buttons[1].classes()).toContain('dark:hover:bg-gray-900')
    expect(buttons[1].classes()).toContain('cursor-pointer')
  })

  it('renders underline tabs with a baseline, primary selection and horizontal overflow', () => {
    const wrapper = renderTabs({ props: { tabs, variant: 'underline' } })
    const list = wrapper.get('[role="tablist"]')
    const buttons = wrapper.findAll('[role="tab"]')
    expect(list.classes()).toContain('border-b')
    expect(list.classes()).toContain('dark:border-gray-800')
    expect(list.classes()).toContain('min-w-max')
    expect(list.classes()).not.toContain('flex-wrap')
    expect(list.element.parentElement?.classList.contains('overflow-x-auto')).toBe(true)
    expect(buttons[0].classes()).toContain('border-primary-600')
    expect(buttons[0].classes()).toContain('dark:border-primary-400')
    expect(buttons[0].classes()).toContain('text-primary-600')
    expect(buttons[0].classes()).toContain('dark:text-primary-400')
    expect(buttons[0].classes()).not.toContain('bg-primary-600')
    expect(buttons[0].classes()).toContain('focus-visible:ring-inset')
    expect(buttons[1].classes()).toContain('border-transparent')
    expect(buttons[1].classes()).toContain('hover:bg-gray-50')
    expect(buttons[1].classes()).toContain('dark:hover:bg-gray-900')
    expect(buttons.every(button => button.classes().includes('whitespace-nowrap'))).toBe(true)
  })

  it.each(['segmented', 'pills', 'underline'] as const)('renders optional decorative icons before labels with variant=%s', (variant) => {
    const wrapper = renderTabs({ props: { tabs: [{ ...tabs[0], icon: TestIcon }, tabs[1]], variant } })
    const buttons = wrapper.findAll('[role="tab"]')
    const icon = buttons[0].get('svg')
    expect(icon.attributes('aria-hidden')).toBe('true')
    expect(icon.attributes('focusable')).toBe('false')
    expect(icon.classes()).toContain('h-4')
    expect(buttons[0].element.children[0].tagName.toLowerCase()).toBe('svg')
    expect(buttons[0].text()).toBe('Overview')
    expect(buttons[1].find('svg').exists()).toBe(false)
  })

  it('supports icon components in reactive tab arrays without component-proxy warnings', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const wrapper = renderTabs({ props: { tabs: reactive([{ ...tabs[0], icon: TestIcon }]) } })
    expect(wrapper.get('svg').exists()).toBe(true)
    expect(warn.mock.calls.flat().join(' ')).not.toContain('reactive object')
  })

  it('can switch variants and update icons without replacing the component', async () => {
    const wrapper = renderTabs()
    await wrapper.setProps({ variant: 'pills', tabs: [{ ...tabs[0], icon: TestIcon }] })
    expect(wrapper.get('[role="tab"]').classes()).toContain('bg-primary-600')
    expect(wrapper.get('svg').exists()).toBe(true)
    await wrapper.setProps({ tabs })
    expect(wrapper.find('svg').exists()).toBe(false)
  })

  it('preserves controlled v-model and the change(tab, index) event', async () => {
    const wrapper = renderTabs()
    await wrapper.findAll('[role="tab"]')[1].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toEqual([[1]])
    expect(wrapper.emitted('change')).toEqual([[tabs[1], 1]])
    expect(wrapper.findAll('[role="tab"]')[0].attributes('aria-selected')).toBe('true')
    await wrapper.setProps({ modelValue: 1 })
    expect(wrapper.findAll('[role="tab"]')[1].attributes('aria-selected')).toBe('true')
    await wrapper.findAll('[role="tab"]')[1].trigger('click')
    expect(wrapper.emitted('change')).toHaveLength(1)
  })

  it('preserves indexed scoped slots and updates the active panel', async () => {
    const wrapper = renderTabs({
      slots: {
        'tab-0': ({ activeTab, activeTabIndex }) => h('p', activeTab.label + ' · ' + activeTabIndex),
        'tab-1': '<p>Activity content</p>',
      },
    })
    expect(wrapper.get('.tab-panel').text()).toBe('Overview · 0')
    await wrapper.setProps({ modelValue: 1 })
    expect(wrapper.get('.tab-panel').text()).toBe('Activity content')
  })

  it.each(['segmented', 'pills', 'underline'] as const)('prevents disabled tab activation with variant=%s', async (variant) => {
    const wrapper = renderTabs({ props: { tabs: [tabs[0], { ...tabs[1], disabled: true }], variant } })
    const disabled = wrapper.findAll('[role="tab"]')[1]
    expect(disabled.attributes('disabled')).toBeDefined()
    expect(disabled.attributes('tabindex')).toBe('-1')
    expect(disabled.classes()).toContain('cursor-not-allowed')
    expect(disabled.classes()).toContain('dark:text-gray-600')
    expect(disabled.classes()).not.toContain('dark:hover:bg-gray-900')
    await disabled.trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    expect(wrapper.emitted('change')).toBeUndefined()
  })

  it('links tabs and panels with accessible IDs and roving tabindex', () => {
    const wrapper = renderTabs({ props: { tabs, modelValue: 1, label: 'Workspace sections' } })
    const buttons = wrapper.findAll('[role="tab"]')
    const panel = wrapper.get('[role="tabpanel"]')
    expect(wrapper.get('[role="tablist"]').attributes('aria-label')).toBe('Workspace sections')
    expect(buttons.map(button => button.attributes('tabindex'))).toEqual(['-1', '0', '-1'])
    expect(buttons.map(button => button.attributes('aria-selected'))).toEqual(['false', 'true', 'false'])
    expect(buttons[1].attributes('aria-controls')).toBe(panel.attributes('id'))
    expect(panel.attributes('aria-labelledby')).toBe(buttons[1].attributes('id'))
    expect(panel.attributes('tabindex')).toBe('0')
    expect(buttons.every(button => button.attributes('type') === 'button')).toBe(true)
  })

  it('generates distinct IDs for multiple instances in the same app', () => {
    const host = defineComponent({ components: { Tabs }, setup: () => ({ tabs }), template: '<Tabs :tabs="tabs" /><Tabs :tabs="tabs" />' })
    const wrapper = mount(host)
    wrappers.push(wrapper)
    const ids = wrapper.findAll('[role="tab"], [role="tabpanel"]').map(node => node.attributes('id'))
    expect(new Set(ids).size).toBe(ids.length)
  })

  it.each(['segmented', 'pills', 'underline'] as const)('supports arrows, wraparound, Home/End and skips disabled tabs with variant=%s', async (variant) => {
    const host = defineComponent({
      components: { Tabs },
      setup: () => ({ active: ref(0), variant, tabs: [tabs[0], { ...tabs[1], disabled: true }, tabs[2]] }),
      template: '<Tabs v-model="active" :tabs="tabs" :variant="variant" />',
    })
    const wrapper = mount(host, { attachTo: document.body })
    wrappers.push(wrapper)
    const buttons = wrapper.findAll('[role="tab"]')
    await buttons[0].trigger('keydown', { key: 'ArrowRight' })
    expect(buttons[2].attributes('aria-selected')).toBe('true')
    expect(document.activeElement).toBe(buttons[2].element)
    await buttons[2].trigger('keydown', { key: 'ArrowRight' })
    expect(buttons[0].attributes('aria-selected')).toBe('true')
    await buttons[0].trigger('keydown', { key: 'ArrowLeft' })
    expect(buttons[2].attributes('aria-selected')).toBe('true')
    await buttons[2].trigger('keydown', { key: 'Home' })
    expect(buttons[0].attributes('aria-selected')).toBe('true')
    await buttons[0].trigger('keydown', { key: 'End' })
    expect(buttons[2].attributes('aria-selected')).toBe('true')
  })

  it('leaves unrelated keyboard keys alone', async () => {
    const wrapper = renderTabs()
    await wrapper.findAll('[role="tab"]')[0].trigger('keydown', { key: 'ArrowDown' })
    expect(wrapper.emitted('change')).toBeUndefined()
  })

  it('renders a single segmented tab without NaN or Infinity in its slider', () => {
    const wrapper = renderTabs({ props: { tabs: [tabs[0]] } })
    const style = wrapper.get('[aria-hidden="true"]').attributes('style')
    expect(style).toContain('left: 1%')
    expect(style).toContain('width: 98%')
    expect(style).not.toMatch(/NaN|Infinity/)
  })

  it('handles an empty tab array without rendering invalid slider or panel styles', () => {
    const wrapper = renderTabs({ props: { tabs: [] } })
    expect(wrapper.findAll('[role="tab"]')).toHaveLength(0)
    expect(wrapper.find('[role="tabpanel"]').exists()).toBe(false)
    expect(wrapper.find('[aria-hidden="true"]').exists()).toBe(false)
  })

  it.each([-1, 99])('handles an invalid modelValue=%s gracefully', (modelValue) => {
    const wrapper = renderTabs({ props: { tabs, modelValue } })
    expect(wrapper.find('[role="tabpanel"]').exists()).toBe(false)
    expect(wrapper.find('[aria-hidden="true"]').exists()).toBe(false)
    expect(wrapper.findAll('[role="tab"]')[0].attributes('tabindex')).toBe('0')
  })
})
