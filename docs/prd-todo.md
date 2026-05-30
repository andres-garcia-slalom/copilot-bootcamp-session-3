# Product Requirements Document (PRD) - Todo App Upgrade MVP and Post-MVP Scope

## 1. Overview

We are upgrading the basic Todo app to support due dates, priorities, and date-based filters so users can better organize tasks while keeping the product simple and teachable. The MVP will remain local-only with no backend or external storage changes. Additional visual highlighting for overdue tasks and sorting rules are defined for Post-MVP.

---

## 2. MVP Scope

- Add an optional `dueDate` field to each todo.
- `dueDate` must use ISO `YYYY-MM-DD` format.
- Invalid `dueDate` values must be ignored and treated as absent.
- Add a `priority` field to each todo.
- `priority` must allow the values `P1`, `P2`, and `P3`.
- `priority` must default to `P3`.
- Add filters for `All`, `Today`, and `Overdue`.
- In the `All` view, completed tasks should still show.
- In the `Today` view, only incomplete tasks should show.
- In the `Overdue` view, only incomplete tasks should show.
- `title` is required.
- Keep storage local only.
- Do not add backend changes.
- Do not add external storage.

---

## 3. Post-MVP Scope

- Visually highlight overdue tasks.
- Support sorting with the following order:
  - overdue tasks first
  - then priority from `P1` to `P3`
  - then due date ascending
  - then tasks without a due date last

---

## 4. Out of Scope

- Notifications
- Recurring tasks
- Multi-user support
- Keyboard navigation
- Special accessibility features
- Backend changes
- External storage
