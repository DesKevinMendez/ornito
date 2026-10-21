import { mount, flushPromises } from "@vue/test-utils";
import { Form } from "vee-validate";
import { defineComponent, h, ref } from "vue";
import { describe, expect, it, vi } from "vitest";

import FormInput from "../../src/components/FormInput.vue";

describe("FormInput money validation", () => {
  it("validates and submits an initial value without requiring interaction", async () => {
    const onSubmit = vi.fn();
    const price = ref<number | null>(987);
    const priceRules = (value: unknown) =>
      value !== null && value !== undefined && value !== ""
        ? true
        : "Price is required.";

    const Host = defineComponent({
      setup() {
        return () =>
          h(
            Form,
            { onSubmit },
            {
              default: () => [
                h(FormInput, {
                  id: "price",
                  name: "price",
                  label: "Price",
                  type: "money",
                  rules: priceRules,
                  modelValue: price.value,
                  "onUpdate:modelValue": (value: number | null) => {
                    price.value = value;
                  },
                }),
                h("button", { type: "submit" }, "Validate input"),
              ],
            },
          );
      },
    });

    const wrapper = mount(Host);

    expect((wrapper.get('input[type="text"]').element as HTMLInputElement).value)
      .toBe("9.87");

    await wrapper.get("form").trigger("submit");
    await flushPromises();

    expect(wrapper.text()).not.toContain("Price is required.");
    expect(onSubmit).toHaveBeenCalledWith({ price: 987 }, expect.anything());
    expect(price.value).toBe(987);
  });

  it("updates the VeeValidate field with the entered amount in cents", async () => {
    const onSubmit = vi.fn();
    const price = ref<number | null>(null);
    const priceRules = (value: unknown) =>
      value !== null && value !== undefined && value !== ""
        ? true
        : "Price is required.";

    const Host = defineComponent({
      setup() {
        return () =>
          h(
            Form,
            { onSubmit },
            {
              default: () =>
                h(FormInput, {
                  id: "price",
                  name: "price",
                  label: "Price",
                  type: "money",
                  rules: priceRules,
                  modelValue: price.value,
                  "onUpdate:modelValue": (value: number | null) => {
                    price.value = value;
                  },
                }),
            },
          );
      },
    });

    const wrapper = mount(Host);

    await wrapper.get("form").trigger("submit");
    await flushPromises();
    expect(wrapper.text()).toContain("Price is required.");

    const input = wrapper.get('input[type="text"]');
    input.element.value = "10.00";
    await input.trigger("input");
    await flushPromises();

    expect(wrapper.text()).not.toContain("Price is required.");
    expect(price.value).toBe(1000);

    await wrapper.get("form").trigger("submit");
    await flushPromises();

    expect(onSubmit).toHaveBeenCalledWith({ price: 1000 }, expect.anything());
  });
});
