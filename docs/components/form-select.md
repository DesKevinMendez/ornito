# FormSelect

VeeValidate-wired native `<select>` with a fixed list of `Option`s. Uses
`v-model` for the value.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `modelValue` (`v-model`) | `string \| number \| undefined \| null` | Yes | — |
| `label` | `string` | Yes | — |
| `id` | `string` | Yes | — |
| `name` | `string` | Yes | — VeeValidate field name |
| `options` | `Option[]` — `{ value: string \| number; label: string }` | Yes | — |
| `placeholder` | `string` | No | — shown as a disabled first option when set |
| `leftIcon` | `any` (component) | No | — |
| `rules` | `any` | No | — VeeValidate validation rules |
| `small` | `boolean` | No | `false` |

```vue
<FormSelect
  v-model="form.status"
  id="status"
  name="status"
  label="Status"
  :options="[
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
  ]"
/>
```
