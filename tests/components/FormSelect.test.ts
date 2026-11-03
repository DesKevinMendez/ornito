import { mount, flushPromises } from "@vue/test-utils";
import { Form } from "vee-validate";
import { defineComponent, h, ref } from "vue";
import { describe, expect, it, vi } from "vitest";

import FormSelect from "../../src/components/FormSelect.vue";

const options = [
  { value: "sv", label: "El Salvador" },
  { value: 2, label: "Guatemala" },
];

function mountFormSelect(props: {
  modelValue?: string | number | null;
  options?: typeof options;
  label?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  leftIcon?: object;
  rules?: (value: unknown) => true | string;
  small?: boolean;
} = {}) {
  const selected = ref<string | number | null>(props.modelValue ?? null);
  const onSubmit = vi.fn();

  const Host = defineComponent({
    setup() {
      return () =>
        h(
          Form,
          { onSubmit },
          {
            default: () =>
              h(FormSelect, {
                id: props.id ?? "country",
                name: props.name ?? "country",
                label: props.label ?? "Country",
                options: props.options ?? options,
                modelValue: selected.value,
                "onUpdate:modelValue": (value: string | number | null) => {
                  selected.value = value;
                },
                placeholder: props.placeholder,
                leftIcon: props.leftIcon,
                rules: props.rules,
                small: props.small,
              }),
          },
        );
    },
  });

  return { wrapper: mount(Host), selected, onSubmit };
}

describe("FormSelect", () => {
  it("renders the label, placeholder, and padded custom chevron", () => {
    const { wrapper } = mountFormSelect();
    const select = wrapper.get("select");

    expect(wrapper.get("label").text()).toBe("Country");
    expect(wrapper.get("label").attributes("for")).toBe("country");
    expect(select.attributes("id")).toBe("country");
    expect(select.attributes("name")).toBe("country");
    expect(select.find("option:disabled").text()).toBe("Selecciona una opción");
    expect(select.classes()).toContain("appearance-none");
    expect(select.classes()).toContain("pr-10");
    expect(wrapper.findAll("svg")).toHaveLength(1);
    expect(wrapper.get("svg").classes()).toContain("h-5");
    expect(wrapper.get("svg").classes()).toContain("w-5");
    expect(wrapper.get("svg path").exists()).toBe(true);
    expect(wrapper.get("svg").element.parentElement?.className).toContain("right-0");
    expect(wrapper.get("svg").element.parentElement?.className).toContain("pr-3");
  });

  it("uses the placeholder prop and keeps the initial selected value", () => {
    const { wrapper } = mountFormSelect({
      modelValue: "sv",
      label: "Billing country",
      placeholder: "Choose a country",
      id: "billing-country",
      name: "billing_country",
    });
    const select = wrapper.get("select");

    expect(select.attributes("id")).toBe("billing-country");
    expect(select.attributes("name")).toBe("billing_country");
    expect(wrapper.get("label").text()).toBe("Billing country");
    expect(select.find("option:disabled").text()).toBe("Choose a country");
    expect((select.element as HTMLSelectElement).value).toBe("sv");
  });

  it("updates v-model and the vee-validate form with the selected option value", async () => {
    const { wrapper, selected, onSubmit } = mountFormSelect();
    const select = wrapper.get("select");

    await select.setValue("2");
    expect(selected.value).toBe(2);

    await wrapper.get("form").trigger("submit");
    await flushPromises();

    expect(onSubmit).toHaveBeenCalledWith({ country: 2 }, expect.anything());
  });

  it("uses compact spacing and hides the label when small is true", () => {
    const { wrapper } = mountFormSelect({ small: true });
    const select = wrapper.get("select");
    const chevron = wrapper.get("svg");

    expect(wrapper.find("label").exists()).toBe(false);
    expect(select.classes()).toContain("py-2");
    expect(select.classes()).not.toContain("py-3");
    expect(chevron.classes()).toContain("h-4");
    expect(chevron.classes()).toContain("w-4");
  });

  it("adds left padding and renders the supplied leading icon", () => {
    const leftIcon = defineComponent({
      render: () => h("svg", { "data-test": "leading-icon" }),
    });
    const { wrapper } = mountFormSelect({ leftIcon });

    expect(wrapper.get("select").classes()).toContain("pl-10");
    expect(wrapper.find('[data-test="leading-icon"]').exists()).toBe(true);
    expect(wrapper.findAll("svg")).toHaveLength(2);
  });

  it("shows a validation message after submitting an empty selection", async () => {
    const { wrapper } = mountFormSelect({
      rules: (value) => (value ? true : "Select a country."),
    });

    await wrapper.get("form").trigger("submit");
    await flushPromises();

    expect(wrapper.text()).toContain("Select a country.");
    expect(wrapper.get("select").classes()).toContain("border-danger-light");
  });
});
