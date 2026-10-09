import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { describe, expect, it } from 'vitest'

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
    expect(wrapper.findAll('p')).toHaveLength(1)
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
    expect(wrapper.findAll('p')).toHaveLength(1)
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
})
