# SwitchInput

Boolean toggle switch. Uses `v-model` for the value.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `modelValue` (`v-model`) | `boolean` | Yes | — |
| `label` | `string` | No | — label shown above the switch |
| `disabled` | `boolean` | No | `false` |
| `trueLabel` | `string` | No | `'Activo'` |
| `falseLabel` | `string` | No | `'Inactivo'` |
| `showLabel` | `boolean` | No | `true` — shows `trueLabel`/`falseLabel` next to the switch |

```vue
<SwitchInput v-model="form.isEnabled" label="Enabled" true-label="On" false-label="Off" />
```
