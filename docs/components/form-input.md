# FormInput

VeeValidate-wired text input that also covers date/datetime/time pickers,
range sliders, masked input, and money input, depending on `type`. Uses
`v-model` for the value.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `modelValue` (`v-model`) | `string \| number \| undefined \| null` | Yes | — |
| `label` | `string` | Yes | — |
| `id` | `string` | Yes | — |
| `name` | `string` | Yes | — VeeValidate field name |
| `type` | `InputType` (see below) | No | `'text'` |
| `placeholder` | `string` | No | `''` |
| `leftIcon` | `any` (component) | No | — |
| `rightIcon` | `any` (component) | No | — |
| `rules` | `any` | No | — VeeValidate validation rules |
| `small` | `boolean` | No | `false` — reduces vertical padding |
| `min` / `max` / `step` | `number \| string` | No | — used when `type="range"` |
| `mask` | `string` | No | — passed to `v-maska` |
| `help` | `string` | No | — help text under the input |
| `url` / `searchBy` | `string` | No | — when both are set, renders a `SearchableSelect` instead of a plain input |
| `labelKey` / `valueKey` | `string` | No | — forwarded to `SearchableSelect` |
| `subtitleKey` | `string \| string[]` | No | — forwarded to `SearchableSelect` |
| `disabled` | `boolean` | No | `false` |
| `loading` | `boolean` | No | `false` — shows a spinner icon |
| `minDate` / `maxDate` | `Date \| string \| null` | No | — for date/datetime/time types |
| `disabledDates` | `Date[] \| string[] \| ((date: Date) => boolean)` | No | — for date/datetime/time types |
| `autocomplete` | `string` | No | `'off'` |

### Variants (`type`)

- `text` (default), `email`, `tel`, `number` — plain `<input>`, masked with `mask` if provided.
- `password` — adds a show/hide toggle button.
- `date` — `VueDatePicker` in date-only mode.
- `datetime` — `VueDatePicker` with time enabled, stored as `yyyy-MM-dd HH:mm` internally and converted to/from ISO on `modelValue`.
- `time` — `VueDatePicker` in time-only mode (`HH:mm`).
- `range` — native `<input type="range">` using `min`/`max`/`step`.
- `money` — currency input backed by `v-money3`, stored as an integer of cents on `modelValue`.

```vue
<FormInput v-model="form.email" id="email" name="email" label="Email" type="email" :rules="'required|email'" />
<FormInput v-model="form.start" id="start" name="start" label="Start date" type="date" />
<FormInput v-model="form.amount" id="amount" name="amount" label="Price" type="money" />
```
