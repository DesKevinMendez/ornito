import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import TablePagination from '../../src/components/TablePagination.vue'

describe('TablePagination', () => {
  it('renders its buttons with small text', () => {
    const wrapper = mount(TablePagination, {
      props: {
        internalPaginationServer: { total: 30, per_page: 10, current_page: 2, from: 11, to: 20, last_page: 3 },
      },
    })
    const buttons = wrapper.findAll('button')

    expect(buttons.length).toBeGreaterThan(0)
    for (const button of buttons) {
      expect(button.classes()).toContain('text-sm')
      expect(button.attributes('small')).toBeUndefined()
    }
  })
})
