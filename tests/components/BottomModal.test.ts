import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'

import BottomModal from '../../src/components/BottomModal.vue'

const mountedWrappers: Array<{ unmount: () => void }> = []

afterEach(() => {
  mountedWrappers.splice(0).forEach(wrapper => wrapper.unmount())
  document.body.innerHTML = ''
  vi.restoreAllMocks()
})

describe('BottomModal opening', () => {
  it('renders the accessible bottom sheet when open becomes true', async () => {
    const wrapper = mount(BottomModal, {
      attachTo: document.body,
      props: { open: false, title: 'Choose an option' },
      slots: { default: 'Sheet content' },
    })
    mountedWrappers.push(wrapper)

    expect(document.body.querySelector('[role="dialog"]')).toBeNull()

    await wrapper.setProps({ open: true })

    const overlay = document.body.querySelector('[role="dialog"]')
    expect(overlay).not.toBeNull()
    expect(overlay?.getAttribute('aria-modal')).toBe('true')
    expect(overlay?.classList.contains('items-end')).toBe(true)
    expect(overlay?.querySelector('.bottom-modal__panel')?.classList.contains('w-full')).toBe(true)
    expect(overlay?.querySelector('.bottom-modal__panel')?.classList.contains('rounded-t-3xl')).toBe(true)
    expect(overlay?.querySelector('button')?.classList.contains('focus-visible:ring-2')).toBe(true)
    expect(overlay?.querySelector('button')?.classList.contains('focus:ring-2')).toBe(false)
    expect(overlay?.textContent).toContain('Sheet content')
  })
})
