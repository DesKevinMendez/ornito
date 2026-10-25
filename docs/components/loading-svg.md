# LoadingSVG

Spinning loading indicator (inline SVG).

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `customClass` | `string` | No | `'animate-spin -ml-1 mr-3 h-12 w-12 text-loading-svg-light dark:text-loading-svg-dark'` |

When `customClass` is omitted, the indicator color uses
`--ds-color-loading-svg-light` and `--ds-color-loading-svg-dark`. Supplying a
custom class lets the caller set its own color.

```vue
<LoadingSVG custom-class="h-6 w-6 text-primary-600" />
```
