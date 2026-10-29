---
type: llm
focus: trace
weight: 1
---

Create/edit happens inside Modal, delete goes through ConfirmationModal (@confirm/@close, closed by the parent), and success/error feedback uses useMessages().pushMessage; the table reloads with refreshTable() (or an equivalent key/url change) after saving or deleting
