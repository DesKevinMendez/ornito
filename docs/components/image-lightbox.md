# ImageLightbox

Full-screen image viewer, teleported to `body`. Closes on backdrop click or
`Escape`. Emits `close`.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `open` | `boolean` | Yes | — |
| `src` | `string \| null` | Yes | — |

```vue
<ImageLightbox :open="isOpen" :src="selectedImage" @close="isOpen = false" />
```
