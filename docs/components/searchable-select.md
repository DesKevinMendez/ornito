# SearchableSelect

Async, searchable select that fetches options from a request factory provided by
the consuming app through `useRequestKey`. It supports initial loading, text
search, and resolving an existing value by id.

## Live preview

This demo mounts the real component with an in-memory request implementation, so
it works without API credentials. Click **Validate selection** before choosing a
vehicle to see the Yup required validation.

<SearchableSelectDemo />

<script setup>
import SearchableSelectDemo from '../.vuepress/components/SearchableSelectDemo.vue'
</script>

## Props

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
| `localSearchFirst` | `boolean` | No | `false` — when `true`, typed searches check loaded initial options by label/subtitles before calling the server |

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

Use `local-search-first` when the initial option set is useful as a client-side
cache but the server should still be queried for misses:

```vue
<SearchableSelect
  v-model="form.driver_id"
  url="/api/v1/drivers"
  search-by="name"
  label-key="name"
  subtitle-key="license_number"
  local-search-first
/>
```
