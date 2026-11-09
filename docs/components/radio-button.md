# RadioButton

Radio option displayed as a selectable card, matching the plan selector in Gento Fit. Each option contains a native radio input. Give related options the same `name` and bind them to the same `v-model`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `modelValue` (`v-model`) | `string \| number \| null` | Yes | — |
| `name` | `string` | Yes | — |
| `value` | `string \| number` | Yes | — |
| `label` | `string` | Yes | — |
| `id` | `string` | No | — |
| `disabled` | `boolean` | No | `false` |

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { RadioButton } from 'ornito'

const planId = ref<string | null>(null)
</script>

<template>
  <fieldset>
    <legend>Planes disponibles</legend>
    <div class="grid gap-2 sm:grid-cols-2">
      <RadioButton v-model="planId" name="plan" value="monthly" label="Plan mensual" />
      <RadioButton v-model="planId" name="plan" value="annual" label="Plan anual" />
    </div>
  </fieldset>
</template>
```

## CSS color variants

The card and native radio colors use paired light and dark tokens. Override these in your app's CSS to customize the component.

| Role | Variables |
| --- | --- |
| Card border | `--ds-color-radio-button-card-border-{light\|dark}`, `--ds-color-radio-button-card-border-hover-{light\|dark}`, `--ds-color-radio-button-card-border-selected-{light\|dark}` |
| Card background | `--ds-color-radio-button-card-bg-{light\|dark}`, `--ds-color-radio-button-card-bg-selected-{light\|dark}` |
| Card text | `--ds-color-radio-button-card-text-{light\|dark}`, `--ds-color-radio-button-card-text-selected-{light\|dark}` |
| Selected card ring | `--ds-color-radio-button-card-ring-selected-{light\|dark}` |
| Native control | `--ds-color-radio-button-control-bg-{light\|dark}`, `--ds-color-radio-button-control-ring-focus-{light\|dark}`, `--ds-color-radio-button-control-ring-offset-focus-{light\|dark}` |
