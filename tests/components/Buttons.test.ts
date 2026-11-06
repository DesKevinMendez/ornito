import { mount } from '@vue/test-utils'
import { Form } from 'vee-validate'
import { defineComponent, h, ref } from 'vue'
import { describe, expect, it } from 'vitest'

import BaseButton from '../../src/components/BaseButton.vue'
import BaseButtonIcon from '../../src/components/BaseButtonIcon.vue'
import FormInput from '../../src/components/FormInput.vue'
import IconButton from '../../src/components/IconButton.vue'

const TestIcon = defineComponent({
  name: 'TestIcon',
  setup() {
    return () => h('svg')
  },
})

const inputTypes = ['text', 'email', 'password', 'tel', 'number'] as const

function mountSmallInput(type: (typeof inputTypes)[number]) {
  const modelValue = ref<string | number>('Value')

  const Host = defineComponent({
    setup() {
      return () =>
        h(Form, {}, {
          default: () =>
            h(FormInput, {
              id: 'small-field',
              name: 'smallField',
              label: 'Field',
              type,
              small: true,
              modelValue: modelValue.value,
              'onUpdate:modelValue': (value: string | number) => {
                modelValue.value = value
              },
            }),
        })
    },
  })

  return mount(Host)
}

describe('small control sizing', () => {
  it.each(inputTypes)('keeps FormInput type=%s on compact vertical padding', (type) => {
    const wrapper = mountSmallInput(type)

    expect(wrapper.get('input').classes()).toContain('px-4')
    expect(wrapper.get('input').classes()).toContain('py-2')
  })

  it('sizes small text buttons to match compact form controls', () => {
    const filled = mount(BaseButton, { props: { size: 'small', variant: 'primary' } })
    const outlined = mount(BaseButton, { props: { size: 'small', variant: 'outline' } })

    expect(filled.classes()).toContain('py-[11px]')
    expect(outlined.classes()).toContain('py-2.5')
  })

  it('keeps small icon-only buttons square at the compact control height', () => {
    const filled = mount(BaseButtonIcon, {
      props: { icon: TestIcon, size: 'sm', variant: 'primary' },
    })
    const outlined = mount(BaseButtonIcon, {
      props: { icon: TestIcon, size: 'sm', variant: 'outline' },
    })
    const iconButton = mount(IconButton, { props: { icon: TestIcon } })

    expect(filled.classes()).toContain('px-[13px]')
    expect(filled.classes()).toContain('py-[13px]')
    expect(outlined.classes()).toContain('px-[11px]')
    expect(outlined.classes()).toContain('py-[11px]')
    expect(iconButton.classes()).toContain('w-[42px]')
    expect(iconButton.classes()).toContain('h-[42px]')
  })
})
