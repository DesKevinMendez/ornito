import { mount } from '@vue/test-utils';
import { defineComponent, h, ref } from 'vue';
import { describe, expect, it } from 'vitest';

import RadioButton from '../../src/components/RadioButton.vue';

function mountGroup(initialValue: string | number | null = null) {
  const selected = ref<string | number | null>(initialValue);
  const Host = defineComponent({
    setup() {
      return () => h('fieldset', [
        h('legend', 'Planes disponibles'),
        ...[
          { id: 'monthly', value: 'monthly', label: 'Plan mensual' },
          { id: 'annual', value: 'annual', label: 'Plan anual' },
        ].map((option) => h(RadioButton, {
          ...option,
          name: 'plan',
          modelValue: selected.value,
          'onUpdate:modelValue': (value: string | number | null) => { selected.value = value; },
        })),
      ]);
    },
  });

  return { wrapper: mount(Host), selected };
}

describe('RadioButton', () => {
  it('renders labeled native radios in one group and marks the current selection', () => {
    const { wrapper } = mountGroup('annual');
    const inputs = wrapper.findAll('input[type="radio"]');

    expect(inputs).toHaveLength(2);
    expect(inputs.map((input) => input.attributes('name'))).toEqual(['plan', 'plan']);
    expect(inputs.map((input) => input.attributes('id'))).toEqual(['monthly', 'annual']);
    expect(wrapper.findAll('label').map((label) => label.text())).toEqual(['Plan mensual', 'Plan anual']);
    expect((inputs[0].element as HTMLInputElement).checked).toBe(false);
    expect((inputs[1].element as HTMLInputElement).checked).toBe(true);
    expect(wrapper.findAll('label')[1].classes()).toContain('border-radio-button-card-border-selected-light');
  });

  it('updates v-model and the selected card when another radio changes', async () => {
    const { wrapper, selected } = mountGroup('annual');

    await wrapper.findAll('input')[0].setValue();

    expect(selected.value).toBe('monthly');
    expect((wrapper.findAll('input')[0].element as HTMLInputElement).checked).toBe(true);
    expect((wrapper.findAll('input')[1].element as HTMLInputElement).checked).toBe(false);
    expect(wrapper.findAll('label')[0].classes()).toContain('bg-radio-button-card-bg-selected-light');
  });

  it('preserves numeric values when selected', async () => {
    const wrapper = mount(RadioButton, {
      props: { name: 'plan', value: 42, label: 'Plan 42', modelValue: null },
    });

    await wrapper.get('input').setValue();

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([42]);
  });

  it('does not change a disabled option', async () => {
    const wrapper = mount(RadioButton, {
      props: { name: 'plan', value: 'monthly', label: 'Plan mensual', modelValue: null, disabled: true },
    });

    const input = wrapper.get('input');
    expect(input.attributes('disabled')).toBeDefined();
    expect(wrapper.get('label').classes()).toContain('cursor-not-allowed');
    await input.trigger('change');
    expect(wrapper.emitted('update:modelValue')).toBeUndefined();
  });
});
