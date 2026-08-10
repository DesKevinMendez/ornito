# Layout primitives

## Divider

Horizontal rule. Takes **no props**.

```vue
<Divider />
```

## ViewHeader

Page-level header with title, subtitle, an optional badge, and a `right`
slot for filters/actions.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `title` | `string` | Yes | — |
| `subtitle` | `string` | Yes | — |
| `badgeText` | `string` | No | — when set, renders a neutral `Badge` next to the subtitle |

```vue
<ViewHeader title="Vehicles" subtitle="Manage your fleet" badge-text="Beta">
  <template #right>
    <BaseButton size="auto">New vehicle</BaseButton>
  </template>
</ViewHeader>
```

## InfoItem

Label + value pair for read-only detail views. Value goes in the default
slot.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `label` | `string` | Yes | — |
| `column` | `boolean` | No | `true` — stacks label above value; `false` lays them out side by side |

```vue
<InfoItem label="Status">
  <Badge variant="success">Active</Badge>
</InfoItem>
```

## CollapseTransition

Transition wrapper that animates height + opacity for its slot content
(e.g. collapsible sections). Takes **no props**.

```vue
<CollapseTransition>
  <div v-if="expanded">...</div>
</CollapseTransition>
```
