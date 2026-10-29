import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import Dropdown from '../../src/components/Dropdown.vue'

const items = [
  { label: 'Activos', value: 'active' },
  { label: 'Inactivos', value: 'inactive' },
]

describe('Dropdown', () => {
  it('uses small text on the trigger when triggerSmall is set', () => {
    const wrapper = mount(Dropdown, { props: { items, triggerSmall: true } })
    const trigger = wrapper.get('button')

    expect(trigger.classes()).toContain('text-sm')
    expect(trigger.attributes('small')).toBeUndefined()
  })

  it('keeps the default text size and the requested width otherwise', () => {
    const wrapper = mount(Dropdown, { props: { items, triggerSize: 'full' } })
    const trigger = wrapper.get('button')

    expect(trigger.classes()).not.toContain('text-sm')
    expect(trigger.classes()).toContain('w-full')
  })
})
