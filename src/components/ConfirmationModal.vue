<template>
  <Modal
    :open="open"
    :title="title"
    :subtitle="subtitle"
    @close="handleClose"
  >
    <Form @submit="handleConfirm" class="space-y-4" :initial-values="form" :validation-schema="validationSchema">
      <!-- Confirmation Input -->
      <div>
        <FormInput
          v-model="form.confirmation"
          id="confirmation"
          name="confirmation"
          label="Confirmación"
          placeholder="Escribe 'Confirmar'"
        />
      </div>

      <!-- Buttons -->
      <div class="flex justify-end space-x-3 pt-4">
        <BaseButton
          type="button"
          variant="outline"
          @click="handleClose"
          :disabled="loading"
        >
          Cancelar
        </BaseButton>
        <BaseButton
          type="submit"
          variant="danger"
          :loading="loading"
          :disabled="loading"
        >
          Confirmar
        </BaseButton>
      </div>
    </Form>
  </Modal>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";
import { Form } from "vee-validate";
import * as yup from "yup";

// Define validation schema
const validationSchema = yup.object({
  confirmation: yup
    .string()
    .required("La confirmación es requerida")
    .oneOf(["Confirmar"], "Debes escribir 'Confirmar' exactamente"),
});

interface Emits {
  (e: "close"): void;
  (e: "confirm"): void;
}

const {
  open,
  loading = false,
  title = 'Confirmar Acción',
  subtitle = 'Esta acción no se puede deshacer. Escribe \'Confirmar\' para continuar.'
} = defineProps<{
  open: boolean;
  loading?: boolean;
  title?: string;
  subtitle?: string;
}>();

const emit = defineEmits<Emits>();

const form = reactive({
  confirmation: "",
});

const handleClose = () => {
  if (loading) return;

  form.confirmation = "";
  emit("close");
};

const handleConfirm = () => {
  emit("confirm");
};

watch(() => open, (isOpen) => {
  if (!isOpen) {
    form.confirmation = "";
  }
});
</script>
