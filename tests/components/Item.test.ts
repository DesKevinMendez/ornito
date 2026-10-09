import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { describe, expect, it, vi } from 'vitest'

import Item from '../../src/components/Item.vue'

const TestIcon = defineComponent({
  name: 'TestIcon',
  setup() {
    return () => h('svg', { 'data-test': 'icon' })
  },
})

describe('Item', () => {
  it('renders only the title when optional props are omitted', () => {
    const wrapper = mount(Item, { props: { title: 'Ana Rivera' } })

    expect(wrapper.text()).toBe('Ana Rivera')
    expect(wrapper.findAll('.break-words')).toHaveLength(1)
    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.find('svg').exists()).toBe(false)
    expect(wrapper.element.children).toHaveLength(1)
  })

  it('renders the image, title, subtitle, and icon in that order', () => {
    const wrapper = mount(Item, {
      props: {
        title: 'Ana Rivera',
        subtitle: 'Assigned driver',
        image: '/ana.jpg',
        imageAlt: 'Portrait of Ana',
        icon: TestIcon,
      },
    })

    const [image, content, icon] = wrapper.element.children
    expect(image.querySelector('img')?.getAttribute('src')).toBe('/ana.jpg')
    expect(image.querySelector('img')?.getAttribute('alt')).toBe('Portrait of Ana')
    expect(content.textContent).toContain('Ana Rivera')
    expect(content.textContent).toContain('Assigned driver')
    expect(icon.querySelector('svg')).not.toBeNull()
    expect(wrapper.get('svg').attributes('aria-hidden')).toBe('true')
    expect(wrapper.get('svg').attributes('focusable')).toBe('false')
    expect(image.classList.contains('shrink-0')).toBe(true)
    expect(content.classList.contains('min-w-0')).toBe(true)
    expect(icon.classList.contains('shrink-0')).toBe(true)
  })

  it('treats the image as decorative when imageAlt is omitted', () => {
    const wrapper = mount(Item, { props: { title: 'Ana Rivera', image: '/ana.jpg' } })

    expect(wrapper.get('img').attributes('alt')).toBe('')
  })

  it('does not render a border by default or when explicitly disabled', () => {
    const defaultItem = mount(Item, { props: { title: 'Ana Rivera' } })
    const borderlessItem = mount(Item, { props: { title: 'Ana Rivera', border: false } })

    for (const wrapper of [defaultItem, borderlessItem]) {
      expect(wrapper.classes()).not.toContain('border')
      expect(wrapper.classes()).not.toContain('border-gray-200')
      expect(wrapper.classes()).not.toContain('dark:border-gray-700')
    }
  })

  it('reactively toggles the light and dark border styles', async () => {
    const wrapper = mount(Item, { props: { title: 'Ana Rivera', border: true } })

    expect(wrapper.classes()).toContain('border')
    expect(wrapper.classes()).toContain('border-gray-200')
    expect(wrapper.classes()).toContain('dark:border-gray-700')

    await wrapper.setProps({ border: false })

    expect(wrapper.classes()).not.toContain('border')
    expect(wrapper.classes()).not.toContain('border-gray-200')
    expect(wrapper.classes()).not.toContain('dark:border-gray-700')
  })

  it.each([false, true])('includes light and dark hover styles with border=%s', (border) => {
    const wrapper = mount(Item, { props: { title: 'Ana Rivera', border } })

    expect(wrapper.classes()).toContain('hover:bg-gray-50')
    expect(wrapper.classes()).toContain('dark:hover:bg-gray-800')
    expect(wrapper.classes()).toContain('transition-colors')
  })

  it.each([false, true])('removes hover styles when hoverable is false with border=%s', (border) => {
    const wrapper = mount(Item, { props: { title: 'Ana Rivera', border, hoverable: false } })

    expect(wrapper.classes()).not.toContain('hover:bg-gray-50')
    expect(wrapper.classes()).not.toContain('dark:hover:bg-gray-800')
    expect(wrapper.classes()).not.toContain('transition-colors')
    expect(wrapper.classes()).toContain('bg-white')
    expect(wrapper.classes()).toContain('dark:bg-gray-900')
  })

  it('reactively enables and disables hover without changing the border', async () => {
    const wrapper = mount(Item, { props: { title: 'Ana Rivera', border: true, hoverable: false } })

    await wrapper.setProps({ hoverable: true })

    expect(wrapper.classes()).toContain('hover:bg-gray-50')
    expect(wrapper.classes()).toContain('dark:hover:bg-gray-800')
    expect(wrapper.classes()).toContain('border')

    await wrapper.setProps({ hoverable: false })

    expect(wrapper.classes()).not.toContain('hover:bg-gray-50')
    expect(wrapper.classes()).not.toContain('dark:hover:bg-gray-800')
    expect(wrapper.classes()).toContain('border')
  })

  it('clips the image and custom image slot to a circular container', () => {
    const imageItem = mount(Item, { props: { title: 'Ana Rivera', image: '/ana.jpg' } })
    const slotItem = mount(Item, { props: { title: 'Ana Rivera' }, slots: { image: '<span>AR</span>' } })

    for (const wrapper of [imageItem, slotItem]) {
      const imageContainer = wrapper.element.children[0]
      expect(imageContainer.classList.contains('rounded-full')).toBe(true)
      expect(imageContainer.classList.contains('overflow-hidden')).toBe(true)
      expect(imageContainer.classList.contains('rounded-lg')).toBe(false)
    }
  })

  it('updates and removes optional content when props change', async () => {
    const wrapper = mount(Item, { props: { title: 'Ana Rivera' } })

    await wrapper.setProps({ title: 'Luis Torres', subtitle: 'Dispatcher', image: '/luis.jpg', icon: TestIcon })

    expect(wrapper.text()).toContain('Luis Torres')
    expect(wrapper.text()).toContain('Dispatcher')
    expect(wrapper.get('img').attributes('src')).toBe('/luis.jpg')
    expect(wrapper.find('svg').exists()).toBe(true)

    await wrapper.setProps({ subtitle: '', image: '', icon: undefined })

    expect(wrapper.text()).toBe('Luis Torres')
    expect(wrapper.findAll('.break-words')).toHaveLength(1)
    expect(wrapper.element.children).toHaveLength(1)
  })

  it('lets named slots replace all prop content', () => {
    const wrapper = mount(Item, {
      props: { title: 'Original title', subtitle: 'Original subtitle', image: '/original.jpg', icon: TestIcon },
      slots: {
        image: '<span data-test="custom-image">AR</span>',
        title: '<strong>Custom title</strong>',
        subtitle: '<span>Custom subtitle</span>',
        icon: '<span data-test="custom-icon">→</span>',
      },
    })

    expect(wrapper.get('[data-test="custom-image"]').text()).toBe('AR')
    expect(wrapper.get('strong').text()).toBe('Custom title')
    expect(wrapper.text()).toContain('Custom subtitle')
    expect(wrapper.get('[data-test="custom-icon"]').text()).toBe('→')
    expect(wrapper.text()).not.toContain('Original')
    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.find('svg').exists()).toBe(false)
  })

  it('renders optional slots without corresponding props', () => {
    const wrapper = mount(Item, {
      props: { title: 'Ana Rivera' },
      slots: {
        image: '<span>AR</span>',
        subtitle: '<span>Available</span>',
        icon: '<span>→</span>',
      },
    })

    expect(wrapper.element.children).toHaveLength(3)
    expect(wrapper.text()).toContain('Available')
    expect(wrapper.text()).toContain('AR')
    expect(wrapper.text()).toContain('→')
  })

  it('preserves native attributes and additional classes on the root', () => {
    const wrapper = mount(Item, {
      props: { title: 'Ana Rivera' },
      attrs: { id: 'driver', class: 'custom-item', 'aria-label': 'Assigned driver' },
    })

    expect(wrapper.attributes('id')).toBe('driver')
    expect(wrapper.attributes('aria-label')).toBe('Assigned driver')
    expect(wrapper.classes()).toContain('custom-item')
    expect(wrapper.classes()).toContain('dark:bg-gray-900')
  })

  it('does not emit a click or call the listener when clickable is omitted or false', async () => {
    for (const clickable of [undefined, false]) {
      const onClick = vi.fn()
      const wrapper = mount(Item, { props: { title: 'Ana Rivera', clickable, onClick } })

      await wrapper.trigger('click')

      expect(wrapper.element.tagName).toBe('DIV')
      expect(wrapper.emitted('click')).toBeUndefined()
      expect(onClick).not.toHaveBeenCalled()
      expect(wrapper.classes()).not.toContain('cursor-pointer')
    }
  })

  it('emits only the id once through the click listener', async () => {
    const onClick = vi.fn()
    const wrapper = mount(Item, {
      props: {
        id: 'driver-42',
        title: 'Ana Rivera',
        subtitle: 'Assigned driver',
        image: '/ana.jpg',
        imageAlt: 'Portrait of Ana',
        icon: TestIcon,
        clickable: true,
        onClick,
      },
    })

    await wrapper.trigger('click')

    expect(wrapper.element.tagName).toBe('BUTTON')
    expect(wrapper.attributes('type')).toBe('button')
    expect(wrapper.attributes('id')).toBe('driver-42')
    expect(wrapper.classes()).toContain('focus-visible:ring-2')
    expect(wrapper.emitted('click')).toEqual([['driver-42']])
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalledWith('driver-42')
  })

  it.each([0, 42, 'notification-1', undefined])('preserves optional id=%s in the click payload', async (id) => {
    const wrapper = mount(Item, { props: { title: 'Notification', id, clickable: true } })

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')?.[0]).toEqual([id])
    expect(wrapper.attributes('id')).toBe(id === undefined ? undefined : String(id))
  })

  it('forces light and dark hover when clickable is true even if hoverable is false', async () => {
    const wrapper = mount(Item, { props: { title: 'Ana Rivera', clickable: true, hoverable: false } })

    expect(wrapper.classes()).toContain('hover:bg-gray-50')
    expect(wrapper.classes()).toContain('dark:hover:bg-gray-800')
    expect(wrapper.classes()).toContain('cursor-pointer')

    await wrapper.setProps({ clickable: false })

    expect(wrapper.element.tagName).toBe('DIV')
    expect(wrapper.classes()).not.toContain('hover:bg-gray-50')
    expect(wrapper.classes()).not.toContain('dark:hover:bg-gray-800')
    expect(wrapper.classes()).not.toContain('cursor-pointer')
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('emits the latest id after updates without including display props', async () => {
    const wrapper = mount(Item, { props: { title: 'Ana Rivera', id: 1, clickable: true } })

    await wrapper.setProps({ title: 'Luis Torres', subtitle: 'Dispatcher', image: '/luis.jpg', id: 2 })
    await wrapper.trigger('click')

    expect(wrapper.emitted('click')?.[0]).toEqual([2])
  })

  it('emits only the id when content is customized with slots', async () => {
    const wrapper = mount(Item, {
      props: { title: 'Ana Rivera', id: 'driver-42', clickable: true },
      slots: { subtitle: '<span>Available · 10 minutes ago</span>' },
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')?.[0]).toEqual(['driver-42'])
  })

  it('calls the listener exactly once per activation', async () => {
    const onClick = vi.fn()
    const wrapper = mount(Item, { props: { title: 'Notification', id: 42, clickable: true, onClick } })

    await wrapper.trigger('click')
    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toEqual([[42], [42]])
    expect(onClick.mock.calls).toEqual([[42], [42]])
  })

  it('does not submit its parent form when clicked', async () => {
    const onSubmit = vi.fn()
    const host = defineComponent({
      components: { Item },
      setup: () => ({ onSubmit }),
      template: '<form @submit.prevent="onSubmit"><Item title="Ana Rivera" clickable /></form>',
    })
    const wrapper = mount(host)

    await wrapper.get('button').trigger('click')

    expect(onSubmit).not.toHaveBeenCalled()
  })
})
