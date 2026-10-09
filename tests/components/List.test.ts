import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { describe, expect, it, vi } from 'vitest'

import Item from '../../src/components/Item.vue'
import List from '../../src/components/List.vue'

describe('List', () => {
  it('renders a semantic list with the supplied rows in order', () => {
    const wrapper = mount(List, {
      slots: { default: '<li>First notification</li><li>Second notification</li>' },
    })

    expect(wrapper.element.tagName).toBe('UL')
    expect(wrapper.findAll('li').map(row => row.text())).toEqual(['First notification', 'Second notification'])
  })

  it.each([undefined, false])('omits the outer border when border=%s', (border) => {
    const wrapper = mount(List, { props: { border } })

    expect(wrapper.classes()).not.toContain('border')
    expect(wrapper.classes()).not.toContain('border-gray-200')
    expect(wrapper.classes()).not.toContain('dark:border-gray-700')
    expect(wrapper.classes()).toContain('border-0')
  })

  it('reactively enables and disables the light and dark outer border', async () => {
    const wrapper = mount(List, { props: { border: true } })

    expect(wrapper.classes()).toContain('border')
    expect(wrapper.classes()).toContain('border-gray-200')
    expect(wrapper.classes()).toContain('dark:border-gray-700')
    expect(wrapper.classes()).not.toContain('border-0')

    await wrapper.setProps({ border: false })

    expect(wrapper.classes()).not.toContain('border')
    expect(wrapper.classes()).not.toContain('border-gray-200')
    expect(wrapper.classes()).not.toContain('dark:border-gray-700')
    expect(wrapper.classes()).toContain('border-0')
  })

  it.each([false, true])('keeps row dividers and dark surfaces with border=%s', (border) => {
    const wrapper = mount(List, { props: { border } })

    expect(wrapper.classes()).toContain('divide-y')
    expect(wrapper.classes()).toContain('divide-gray-200')
    expect(wrapper.classes()).toContain('dark:divide-gray-700')
    expect(wrapper.classes()).toContain('bg-white')
    expect(wrapper.classes()).toContain('dark:bg-gray-900')
    expect(wrapper.classes()).toContain('rounded-xl')
    expect(wrapper.classes()).toContain('overflow-hidden')
    expect(wrapper.classes()).toContain('[&>li>*]:rounded-none')
  })

  it('preserves native accessibility attributes and additional classes', () => {
    const wrapper = mount(List, { attrs: { 'aria-label': 'Notifications', class: 'max-w-sm', id: 'notifications' } })

    expect(wrapper.attributes('aria-label')).toBe('Notifications')
    expect(wrapper.attributes('id')).toBe('notifications')
    expect(wrapper.classes()).toContain('max-w-sm')
  })

  it('renders an empty list without inserting placeholder rows', () => {
    const wrapper = mount(List)

    expect(wrapper.findAll('li')).toHaveLength(0)
    expect(wrapper.text()).toBe('')
  })

  it('composes Item rows without changing their id-only click contract', async () => {
    const onClick = vi.fn()
    const host = defineComponent({
      components: { List, Item },
      setup: () => ({ onClick }),
      template: `
        <List border aria-label="Drivers">
          <li><Item :id="0" title="Ana Rivera" clickable :hoverable="false" @click="onClick" /></li>
          <li><Item id="driver-43" title="Luis Torres" :hoverable="false" @click="onClick" /></li>
        </List>
      `,
    })
    const wrapper = mount(host)
    const rows = wrapper.findAllComponents(Item)

    expect(rows.map(row => row.text())).toEqual(['Ana Rivera', 'Luis Torres'])
    expect(rows[0].classes()).toContain('cursor-pointer')
    expect(rows[0].classes()).toContain('focus-visible:ring-inset')
    expect(rows[0].classes()).not.toContain('border')

    await rows[0].trigger('click')
    await rows[1].trigger('click')

    expect(onClick.mock.calls).toEqual([[0]])
    expect(rows[0].emitted('click')).toEqual([[0]])
    expect(rows[1].emitted('click')).toBeUndefined()
  })
})
