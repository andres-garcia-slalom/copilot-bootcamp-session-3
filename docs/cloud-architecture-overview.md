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

## Repository Context

- `packages/frontend`: React frontend application
- `packages/backend`: Node.js backend API
- Root workspace orchestrates both packages for local development and testing
