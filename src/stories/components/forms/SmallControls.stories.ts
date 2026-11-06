import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { IconArrowRight, IconCheck, IconSettings } from '@tabler/icons-vue';
import { Form } from 'vee-validate';
import { provide, ref, type Ref } from 'vue';

import BaseButton from '../../../components/BaseButton.vue';
import BaseButtonIcon from '../../../components/BaseButtonIcon.vue';
import FormInput from '../../../components/FormInput.vue';
import FormSelect from '../../../components/FormSelect.vue';
import IconButton from '../../../components/IconButton.vue';
import SearchableSelect from '../../../components/SearchableSelect.vue';
import { useRequestKey, type UseRequestFactory } from '../../../composables/useDataRequest';

const destinations = [
  { value: 'sv', label: 'El Salvador' },
  { value: 'gt', label: 'Guatemala' },
  { value: 'hn', label: 'Honduras' },
];

const mockRequest: UseRequestFactory = () => ({
  async get<T>() {
    return { data: ref({ data: destinations }) as Ref<T | null> };
  },
});

const meta = {
  title: 'Components/Forms/SmallControls',
  render: () => ({
    components: {
      BaseButton,
      BaseButtonIcon,
      Form,
      FormInput,
      FormSelect,
      IconButton,
      SearchableSelect,
    },
    setup() {
      provide(useRequestKey, mockRequest);

      return {
        inputValue: ref('Ada Lovelace'),
        selectValue: ref('gt'),
        searchableValue: ref('sv'),
        destinations,
        IconArrowRight,
        IconCheck,
        IconSettings,
      };
    },
    template: `
      <Form class="max-w-2xl space-y-4 p-6">
        <div class="flex items-center gap-3">
          <div class="min-w-0 flex-1">
            <FormInput
              v-model="inputValue"
              id="small-name"
              name="smallName"
              label="Nombre"
              placeholder="Nombre"
              small
            />
          </div>
          <BaseButton size="small">Guardar</BaseButton>
          <BaseButtonIcon
            :icon="IconCheck"
            variant="outline"
            size="sm"
            aria-label="Confirmar"
          />
          <IconButton
            :icon="IconSettings"
            outline
            aria-label="Configuración"
          />
        </div>

        <div class="flex items-center gap-3">
          <div class="min-w-0 flex-1">
            <FormSelect
              v-model="selectValue"
              id="small-country"
              name="smallCountry"
              label="País"
              :options="destinations"
              small
            />
          </div>
          <BaseButton size="small" variant="outline">Filtrar</BaseButton>
        </div>

        <div class="flex items-center gap-3">
          <div class="min-w-0 flex-1">
            <SearchableSelect
              v-model="searchableValue"
              id="small-destination"
              name="smallDestination"
              label="Destino"
              url="/demo/destinations"
              search-by="label"
              label-key="label"
              value-key="value"
              placeholder="Buscar destino"
              small
            />
          </div>
          <BaseButtonIcon
            :icon="IconArrowRight"
            variant="primary"
            size="sm"
            aria-label="Continuar"
          />
        </div>
      </Form>
    `,
  }),
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {};
