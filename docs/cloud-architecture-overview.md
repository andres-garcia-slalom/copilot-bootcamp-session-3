# Cloud Architecture Overview

This repository is a monorepo containing a React frontend and a Node.js backend. The frontend communicates with the backend over HTTP, and the backend manages todo data storage.

## System Context Diagram

```mermaid
flowchart LR
    User[User]
    Frontend[Frontend App\nReact]
    Backend[Backend API\nNode.js + Express]
    Storage[(Todo Data Store)]

    User -->|Uses in browser| Frontend
    Frontend -->|HTTP API requests| Backend
    Backend -->|Reads/Writes todos| Storage
```

## Sequence Diagram: Creating a TODO

```mermaid
sequenceDiagram
    actor User
    participant Frontend as Frontend App\nReact
    participant Backend as Backend API\nNode.js + Express
    participant Storage as Todo Data Store

    User->>Frontend: Enter todo details and submit form
    Frontend->>Backend: POST /todos with todo payload
    Backend->>Backend: Validate request data
    Backend->>Storage: Save new todo
    Storage-->>Backend: Persisted todo record
    Backend-->>Frontend: 201 Created with saved todo
    Frontend-->>User: Render updated todo list with new item
```

## Repository Context

- `packages/frontend`: React frontend application
- `packages/backend`: Node.js backend API
- Root workspace orchestrates both packages for local development and testing
