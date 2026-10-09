import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import List from '../../src/components/List.vue'

const wrappers: Array<{ unmount: () => void }> = []
const observers: VisibleIntersectionObserver[] = []

class VisibleIntersectionObserver {
  private callback: IntersectionObserverCallback

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    observers.push(this)
  }

  observe(target: Element) {
    this.callback(
      [{ target, isIntersecting: true, time: 0 } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    )
  }

  disconnect = vi.fn()
  unobserve = vi.fn()
}

async function mountList(
  props: Partial<InstanceType<typeof List>['$props']> = {},
  geometry: Partial<{ clientHeight: number; scrollHeight: number; scrollTop: number }> = {},
) {
  const metrics = { clientHeight: 200, scrollHeight: 800, scrollTop: 0, ...geometry }
  const wrapper = mount(List, {
    props: { pagination: { current_page: 1, last_page: 3 }, ...props },
    slots: { default: '<li>Notification</li>' },
  })
  wrappers.push(wrapper)
  for (const key of ['clientHeight', 'scrollHeight', 'scrollTop'] as const) {
    Object.defineProperty(wrapper.element, key, { configurable: true, get: () => metrics[key] })
  }
  await nextTick()
  await nextTick()
  return { wrapper, metrics }
}

describe('List infinite scroll with VueUse', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.stubGlobal('IntersectionObserver', VisibleIntersectionObserver)
    observers.length = 0
  })

  afterEach(async () => {
    wrappers.splice(0).forEach(wrapper => wrapper.unmount())
    await vi.runOnlyPendingTimersAsync()
    vi.unstubAllGlobals()
    vi.useRealTimers()
  })

  it('requests only the next page within the default 50px bottom distance', async () => {
    const onRequest = vi.fn()
    const { wrapper, metrics } = await mountList({ onRequest })

    metrics.scrollTop = 548 // 52px remain: outside VueUse's 1px rounding tolerance.
    await wrapper.trigger('scroll')
    expect(wrapper.emitted('request')).toBeUndefined()

    metrics.scrollTop = 550
    await wrapper.trigger('scroll')

    expect(wrapper.emitted('request')).toEqual([[2]])
    expect(onRequest.mock.calls).toEqual([[2]])
    expect(wrapper.classes()).toContain('overflow-y-auto')
    expect(wrapper.classes()).not.toContain('overflow-hidden')
    expect(wrapper.attributes('tabindex')).toBe('0')
  })

  it.each([0, 20, 30, 100])('uses scrollDistance=%s in pixels', async (scrollDistance) => {
    const { wrapper, metrics } = await mountList({ scrollDistance })

    metrics.scrollTop = 600 - scrollDistance - 2
    await wrapper.trigger('scroll')
    expect(wrapper.emitted('request')).toBeUndefined()

    metrics.scrollTop = 600 - scrollDistance
    await wrapper.trigger('scroll')
    expect(wrapper.emitted('request')).toEqual([[2]])
  })

  it.each([undefined, null])('does not request or enable scrolling without pagination=%s', async (pagination) => {
    const { wrapper } = await mountList({ pagination }, { scrollTop: 600 })

    await wrapper.trigger('scroll')

    expect(wrapper.emitted('request')).toBeUndefined()
    expect(wrapper.classes()).toContain('overflow-hidden')
    expect(wrapper.classes()).not.toContain('overflow-y-auto')
    expect(wrapper.attributes('tabindex')).toBeUndefined()
    expect(observers).toHaveLength(0)
  })

  it.each([
    { current_page: 3, last_page: 3 },
    { current_page: 4, last_page: 3 },
    { current_page: 1, last_page: 0 },
    { current_page: 0, last_page: 3 },
    { current_page: 1.5, last_page: 3 },
    { current_page: 1, last_page: Number.NaN },
  ])('does not request when pagination is exhausted or invalid: %o', async (pagination) => {
    const { wrapper } = await mountList({ pagination }, { scrollTop: 600 })

    await wrapper.trigger('scroll')
    await vi.advanceTimersByTimeAsync(300)

    expect(wrapper.emitted('request')).toBeUndefined()
  })

  it('blocks requests while loading and rechecks when loading ends', async () => {
    const { wrapper } = await mountList({ loading: true }, { scrollTop: 600 })

    await wrapper.trigger('scroll')
    expect(wrapper.emitted('request')).toBeUndefined()
    expect(wrapper.attributes('aria-busy')).toBe('true')

    await wrapper.setProps({ loading: false })
    await nextTick()

    expect(wrapper.emitted('request')).toEqual([[2]])
    expect(wrapper.attributes('aria-busy')).toBe('false')
  })

  it('never repeats a pending page, even without a loading prop', async () => {
    const { wrapper } = await mountList({}, { scrollTop: 600 })

    await wrapper.trigger('scroll')
    await wrapper.trigger('scroll')
    await vi.advanceTimersByTimeAsync(500)
    await wrapper.setProps({ pagination: { current_page: 1, last_page: 3 } })
    await wrapper.trigger('scroll')

    expect(wrapper.emitted('request')).toEqual([[2]])
  })

  it('requests subsequent pages after rows are appended and stops at the last page', async () => {
    const { wrapper, metrics } = await mountList({}, { scrollTop: 600 })
    expect(wrapper.emitted('request')).toEqual([[2]])

    metrics.scrollHeight = 1600
    await wrapper.setProps({ pagination: { current_page: 2, last_page: 3 } })
    await vi.advanceTimersByTimeAsync(110)
    expect(wrapper.emitted('request')).toEqual([[2]])

    metrics.scrollTop = 1400
    await wrapper.trigger('scroll')
    expect(wrapper.emitted('request')).toEqual([[2], [3]])

    await wrapper.setProps({ pagination: { current_page: 3, last_page: 3 } })
    await vi.advanceTimersByTimeAsync(300)
    await wrapper.trigger('scroll')
    expect(wrapper.emitted('request')).toEqual([[2], [3]])
  })

  it('automatically fills a short list and avoids duplicate requests on batched completion', async () => {
    const { wrapper } = await mountList({}, { clientHeight: 400, scrollHeight: 200 })
    expect(wrapper.emitted('request')).toEqual([[2]])

    await wrapper.setProps({ loading: true })
    await wrapper.setProps({ loading: false, pagination: { current_page: 2, last_page: 3 } })
    await vi.advanceTimersByTimeAsync(110)
    await wrapper.trigger('scroll')

    expect(wrapper.emitted('request')).toEqual([[2], [3]])
  })

  it('rechecks a successful page received before loading becomes false', async () => {
    const { wrapper } = await mountList({}, { scrollTop: 600 })
    await wrapper.setProps({ loading: true })
    await wrapper.setProps({ pagination: { current_page: 2, last_page: 3 } })
    await vi.advanceTimersByTimeAsync(110)
    expect(wrapper.emitted('request')).toEqual([[2]])

    await wrapper.setProps({ loading: false })
    await nextTick()
    expect(wrapper.emitted('request')).toEqual([[2], [3]])
  })

  it('allows failed requests to retry on another scroll, without automatic retry loops', async () => {
    const { wrapper } = await mountList({}, { scrollTop: 600 })
    await wrapper.setProps({ loading: true })
    await wrapper.setProps({ loading: false })
    await vi.advanceTimersByTimeAsync(500)
    expect(wrapper.emitted('request')).toEqual([[2]])

    await wrapper.trigger('scroll')
    await nextTick()
    expect(wrapper.emitted('request')).toEqual([[2], [2]])
  })

  it('reactively changes the VueUse distance and disposes its previous observer', async () => {
    const { wrapper } = await mountList({ scrollDistance: 20 }, { scrollTop: 560 })
    expect(wrapper.emitted('request')).toBeUndefined()
    const previousObserver = observers[0]

    await wrapper.setProps({ scrollDistance: 50 })
    await nextTick()

    expect(previousObserver.disconnect).toHaveBeenCalled()
    expect(wrapper.emitted('request')).toEqual([[2]])
  })

  it('does not let a disposed VueUse scope request with the previous distance', async () => {
    const { wrapper } = await mountList({}, { scrollTop: 560 })
    expect(wrapper.emitted('request')).toEqual([[2]])

    await wrapper.setProps({ scrollDistance: 0 })
    await wrapper.setProps({ pagination: { current_page: 2, last_page: 3 } })
    await vi.advanceTimersByTimeAsync(300)

    expect(wrapper.emitted('request')).toEqual([[2]])
  })

  it('supports enabling and disabling pagination without changing the list instance', async () => {
    const { wrapper } = await mountList({ pagination: null }, { scrollTop: 600 })
    await wrapper.setProps({ pagination: { current_page: 1, last_page: 3 } })
    await nextTick()
    expect(wrapper.emitted('request')).toEqual([[2]])

    await wrapper.setProps({ pagination: null })
    await vi.advanceTimersByTimeAsync(300)
    await wrapper.trigger('scroll')
    expect(wrapper.emitted('request')).toEqual([[2]])
    expect(wrapper.classes()).toContain('overflow-hidden')
  })

  it('does not request for a zero-height hidden list', async () => {
    const { wrapper } = await mountList({}, { clientHeight: 0, scrollTop: 800 })
    await wrapper.trigger('scroll')
    expect(wrapper.emitted('request')).toBeUndefined()
  })

  it('disposes VueUse observers and listeners when unmounted', async () => {
    const { wrapper } = await mountList()
    const element = wrapper.element
    wrapper.unmount()
    expect(observers.every(observer => observer.disconnect.mock.calls.length > 0)).toBe(true)

    Object.defineProperty(element, 'scrollTop', { value: 600 })
    element.dispatchEvent(new Event('scroll'))
    await vi.advanceTimersByTimeAsync(300)
    expect(wrapper.emitted('request')).toBeUndefined()
  })
})
