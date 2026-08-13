# SearchableSelect

Async, searchable select that fetches options from an API endpoint as the
user types. Requires a request factory to be provided by the consuming app
via `useRequestKey` (see the composables section of the design system).
Uses `v-model` for the value.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `modelValue` (`v-model`) | `string \| number \| (string \| number)[] \| undefined \| null` | Yes | — array when `multiple` is `true` |
| `url` | `string` | Yes | — endpoint queried as the user types |
| `searchBy` | `string` | Yes | — query param name sent with the search text |
| `placeholder` | `string` | No | `'Buscar...'` |
| `leftIcon` | `any` (component) | No | — |
| `id` | `string` | No | `'searchable-select'` |
| `name` | `string` | No | `id` — field name used by VeeValidate when `rules` is set |
| `label` | `string` | No | — field label used in validation messages |
| `rules` | `any` | No | — VeeValidate validation rules |
| `small` | `boolean` | No | `false` |
| `labelKey` | `string` | No | `'label'` — field read from each result to display |
| `valueKey` | `string` | No | `'value'` — field read from each result to use as the value |
| `subtitleKey` | `string \| string[]` | No | — optional secondary text field(s) per option |
| `disabled` | `boolean` | No | `false` |
| `multiple` | `boolean` | No | `false` — allows selecting more than one item |

```vue
<SearchableSelect
  v-model="form.driver_id"
  url="/api/v1/drivers"
  search-by="name"
  placeholder="Search driver..."
  name="driver_id"
  rules="required"
/>
```
