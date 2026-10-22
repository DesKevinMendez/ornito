import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import BottomModal from '../../src/components/BottomModal.vue'

const dialogPrototype = Object.getPrototypeOf(document.createElement('dialog')) as object
const mountedWrappers: Array<{ unmount: () => void }> = []
let originalShowModal: PropertyDescriptor | undefined
let originalClose: PropertyDescriptor | undefined
let showModal: ReturnType<typeof vi.fn>

function restoreDialogMethod(name: string, descriptor: PropertyDescriptor | undefined) {
  if (descriptor) {
    Object.defineProperty(dialogPrototype, name, descriptor)
  } else {
    Reflect.deleteProperty(dialogPrototype, name)
  }
}

beforeEach(() => {
  originalShowModal = Object.getOwnPropertyDescriptor(dialogPrototype, 'showModal')
  originalClose = Object.getOwnPropertyDescriptor(dialogPrototype, 'close')
  showModal = vi.fn(function (this: HTMLDialogElement) {
    this.setAttribute('open', '')
  })

  Object.defineProperty(dialogPrototype, 'showModal', { configurable: true, value: showModal })
  Object.defineProperty(dialogPrototype, 'close', {
    configurable: true,
    value: vi.fn(function (this: HTMLDialogElement) {
      this.removeAttribute('open')
    }),
  })
})

afterEach(() => {
  mountedWrappers.splice(0).forEach(wrapper => wrapper.unmount())
  restoreDialogMethod('showModal', originalShowModal)
  restoreDialogMethod('close', originalClose)
  document.body.innerHTML = ''
  vi.restoreAllMocks()
})

describe('BottomModal opening', () => {
  it('opens the full-width bottom sheet when open becomes true', async () => {
    const wrapper = mount(BottomModal, {
      attachTo: document.body,
      props: { open: false, title: 'Choose an option' },
      slots: { default: 'Sheet content' },
    })
    mountedWrappers.push(wrapper)

    expect(document.body.querySelector('dialog')).toBeNull()

    await wrapper.setProps({ open: true })

    const dialog = document.body.querySelector('dialog') as HTMLDialogElement | null
    expect(dialog).not.toBeNull()
    expect(dialog?.classList.contains('items-end')).toBe(true)
    expect(dialog?.querySelector('.bottom-modal__panel')?.classList.contains('w-full')).toBe(true)
    expect(dialog?.querySelector('.bottom-modal__panel')?.classList.contains('rounded-t-3xl')).toBe(true)
    expect(dialog?.querySelector('button')?.classList.contains('focus-visible:ring-2')).toBe(true)
    expect(dialog?.querySelector('button')?.classList.contains('focus:ring-2')).toBe(false)

    expect(showModal).toHaveBeenCalledTimes(1)
    expect(dialog?.open).toBe(true)
    expect(dialog?.textContent).toContain('Sheet content')
  })
})
