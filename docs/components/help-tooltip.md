# HelpTooltip

Small help trigger that reveals a tooltip on hover.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `tooltip` | `string` | Yes | — |

## CSS color variants

The trigger and tooltip panel have paired light/dark variables. The tooltip
arrow reuses `--ds-color-help-tooltip-panel-bg-{light|dark}`, so it always
matches the panel.

| Part | Variables |
| --- | --- |
| Trigger | `--ds-color-help-tooltip-trigger-bg-{light|dark}`, `--ds-color-help-tooltip-trigger-text-{light|dark}` |
| Panel | `--ds-color-help-tooltip-panel-bg-{light|dark}`, `--ds-color-help-tooltip-panel-text-{light|dark}` |
