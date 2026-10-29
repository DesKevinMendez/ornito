---
tags: [skill-creator]
max_turns: 30
timeout_seconds: 900
allowed_tools: [Read, Glob, Grep, Skill, Write, Edit, Bash]
---

En el dashboard de Rutely (Vue 3 + Tailwind 4, ya tiene Ornito instalado y el useRequest provisto con useRequestKey) necesito la vista de conductores: tabla del servidor desde /api/v1/drivers con buscador por nombre y licencia, una columna de estado con badge activo/inactivo, un botón para crear que abra un modal con el formulario (nombre, licencia, teléfono y si está activo) con validación, editar desde la tabla y eliminar pidiendo confirmación, y que muestre un mensaje cuando se guarde o elimine. Escríbela en DriversView.vue y DriverForm.vue usando mi design system.
