import { IconInfoCircle } from '@tabler/icons-vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import HelpTooltip from '../../src/components/HelpTooltip.vue'
import StatCard from '../../src/components/StatCard.vue'

const tooltip = 'Calculado con los datos del mes'

describe('HelpTooltip', () => {
  it('uses the question mark when no icon is supplied', () => {
    const wrapper = mount(HelpTooltip, { props: { tooltip } })

    expect(wrapper.get('span').text()).toBe('?')
    expect(wrapper.text()).toContain(tooltip)
  })

  it('reactively replaces the question mark with the supplied icon', async () => {
    const wrapper = mount(HelpTooltip, { props: { tooltip, icon: IconInfoCircle } })

    expect(wrapper.getComponent(IconInfoCircle).attributes('aria-hidden')).toBe('true')
    expect(wrapper.get('span').text()).toBe('')
    expect(wrapper.text()).toContain(tooltip)

    await wrapper.setProps({ icon: undefined })

    expect(wrapper.findComponent(IconInfoCircle).exists()).toBe(false)
    expect(wrapper.get('span').text()).toBe('?')
  })

  it('renders the icon supplied through StatCard', () => {
    const wrapper = mount(StatCard, {
      props: { title: 'Vehículos activos', value: 42, help: tooltip, helpIcon: IconInfoCircle },
    })

    const helpTooltip = wrapper.getComponent(HelpTooltip)
    expect(helpTooltip.findComponent(IconInfoCircle).exists()).toBe(true)
    expect(helpTooltip.text()).toContain(tooltip)
  })
})
