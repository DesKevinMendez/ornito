# UserAvatar

## UserAvatar

Circular avatar — shows `imageUrl` if provided, otherwise falls back to
initials derived from `name` on a gradient background.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `name` | `string` | Yes | — used to compute fallback initials |
| `imageUrl` | `string \| null` | No | `null` |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'md'` |

### Sizes

- `sm` — `w-8 h-8`
- `md` — `w-10 h-10` (default)
- `lg` — `w-12 h-12`
- `xl` — `w-16 h-16`

```vue
<UserAvatar name="Jane Doe" :image-url="user.photo" size="lg" />
```

## UserAvatars

Overlapping stack of avatars (e.g. "assigned to" list), rendered from a
list of pre-computed initials — it does not fetch or compute anything
itself.

| Prop | Type | Required | Default |
| --- | --- | --- | --- |
| `users` | `User[]` — `{ initials: string; name: string }` | Yes | — |
