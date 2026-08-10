# FormTextarea

VeeValidate-wired `<textarea>` with an optional character counter. Uses
`v-model` for the value.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `modelValue` (`v-model`) | `string \| undefined \| null` | Yes | — |
| `label` | `string` | Yes | — |
| `id` | `string` | Yes | — |
| `name` | `string` | Yes | — VeeValidate field name |
| `placeholder` | `string` | No | `''` |
| `rules` | `any` | No | — VeeValidate validation rules |
| `small` | `boolean` | No | `false` |
| `rows` | `number` | No | `3` |
| `maxLength` | `number` | No | — when set, shows a `count / maxLength` counter below the field |

```vue
<FormTextarea v-model="form.notes" id="notes" name="notes" label="Notes" :rows="5" :max-length="500" />
```
