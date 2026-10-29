---
type: llm
focus: trace
weight: 1
---

It explains the server table contract: the factory's get(url) resolves to { data: Ref }, the API answers { data: [...], pagination: { total, per_page, current_page, from, to, last_page } }, and DataTable sends page, per_page and filter[field] parameters
