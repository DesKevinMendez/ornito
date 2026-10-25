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

## CSS color variants

Switch colors use separate light and dark tokens, preserving the current
appearance by default.

| Role | Variables |
| --- | --- |
| Label and state text | `--ds-color-switch-input-label-{light\|dark}` |
| Track state | `--ds-color-switch-input-track-on-{light\|dark}`, `--ds-color-switch-input-track-off-{light\|dark}` |
| Thumb | `--ds-color-switch-input-thumb-{light\|dark}` |

```css
:root {
  --ds-color-switch-input-label-light: #1e3a8a;
  --ds-color-switch-input-track-on-light: #2563eb;
  --ds-color-switch-input-track-off-light: #cbd5e1;
  --ds-color-switch-input-thumb-light: #fff;

  --ds-color-switch-input-label-dark: #bfdbfe;
  --ds-color-switch-input-track-on-dark: #3b82f6;
  --ds-color-switch-input-track-off-dark: #334155;
  --ds-color-switch-input-thumb-dark: #e2e8f0;
}
```
