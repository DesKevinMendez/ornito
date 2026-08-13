<template>
  <div class="searchable-select-demo">
    <Form
      :validation-schema="validationSchema"
      @submit="submitDemo"
      class="demo-form"
    >
      <SearchableSelect
        v-model="selectedVehicleId"
        url="/demo/vehicles"
        search-by="name"
        id="vehicle_id"
        name="vehicle_id"
        label="Vehicle"
        placeholder="Search by plate, driver, or model..."
        label-key="name"
        value-key="id"
        :localSearchFirst="true"
        :subtitle-key="['plate', '{driver} · {model}']"
        @data="selectedVehicle = $event"
      />

      <button type="submit" class="demo-button">Validate selection</button>
    </Form>

    <p class="demo-result">
      Selected:
      <strong>{{ selectedVehicle?.name ?? "None" }}</strong>
      <span v-if="selectedVehicle"> — {{ selectedVehicle.plate }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import { Form } from "vee-validate";
import * as yup from "yup";
import "../styles/index.css";
import SearchableSelect from "../../../src/components/SearchableSelect.vue";
import { useRequestKey } from "../../../src/composables/useDataRequest";

interface Vehicle {
  id: number;
  name: string;
  plate: string;
  driver: string;
  model: string;
}

const vehicles: Vehicle[] = [
  { id: 1, name: "Hilux 01", plate: "P-1023", driver: "Ana Rivera", model: "Toyota Hilux" },
  { id: 2, name: "Box Truck 07", plate: "C-7781", driver: "Marco Soto", model: "Isuzu NPR" },
  { id: 3, name: "Service Van 12", plate: "N-4410", driver: "Lucía Pérez", model: "Ford Transit" },
  { id: 4, name: "Pickup 18", plate: "P-8902", driver: "Diego Cruz", model: "Nissan Frontier" },
  { id: 5, name: "Refrigerated 03", plate: "C-2201", driver: "Sofía Mejía", model: "Hino 300" },
];

const selectedVehicleId = ref<number | null>(null);
const selectedVehicle = ref<Vehicle | null>(null);

const wait = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

provide(useRequestKey, () => ({
  async get(url) {
    await wait(250);

    const request = new URL(url, window.location.origin);
    const id = request.searchParams.get("filter[id]");
    const search = request.searchParams.get("name")?.toLowerCase().trim();

    let data = vehicles;
    if (id) {
      data = vehicles.filter((vehicle) => String(vehicle.id) === id);
    } else if (search) {
      data = vehicles.filter((vehicle) =>
        [vehicle.name, vehicle.plate, vehicle.driver, vehicle.model].some(
          (value) => value.toLowerCase().includes(search)
        )
      );
    }

    return { data: ref({ data }) };
  },
}));

const validationSchema = yup.object({
  vehicle_id: yup
    .number()
    .nullable()
    .required("Select one vehicle."),
});

const submitDemo = () => {
  selectedVehicle.value = vehicles.find(
    (vehicle) => vehicle.id === selectedVehicleId.value
  ) ?? null;
};
</script>

<style scoped>
.searchable-select-demo {
  max-width: 32rem;
  padding: 1rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 0.75rem;
  background: var(--vp-c-bg-soft);
}

.demo-form {
  display: grid;
  gap: 0.75rem;
}

.demo-button {
  width: max-content;
  border: 0;
  border-radius: 0.5rem;
  background: var(--ds-color-primary-600);
  color: white;
  cursor: pointer;
  font-weight: 600;
  padding: 0.625rem 1rem;
}

.demo-result {
  margin: 1rem 0 0;
}
</style>
