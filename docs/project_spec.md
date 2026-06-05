# Waystone

## Project Overview

### Purpose

The Waystone is a personal application that provides a rich, visual interface for an existing Obsidian vault.

The application does **not** replace Obsidian as the primary note-taking tool. Instead, it acts as a visualization and interaction layer on top of the vault, transforming Markdown-based journal entries into a structured dashboard experience.

The project is primarily intended as a learning vehicle for:

- Angular
- TypeScript
- NestJS
- Modern frontend architecture
- Real-time applications
- Dockerized development workflows

while also producing a useful personal productivity tool.

---

## Goals

### Functional Goals

- Display daily, weekly, and monthly journal entries.
- Extract and visualize tasks from Markdown files.
- Provide a dashboard-oriented view of journal data.
- Support editing and synchronization back to Markdown.
- React to changes made directly within Obsidian.
- Provide search and statistics capabilities.

### Learning Goals

- Become comfortable with Angular development.
- Learn TypeScript beyond basic usage.
- Learn backend development in the Node.js ecosystem.
- Understand real-time communication patterns.
- Gain experience with containerized development.

---

# User Workflow

## Writing Notes

The user continues writing notes exclusively in Obsidian.

Example:

```markdown
# Daily Notes

## Tasks

- [ ] Learn Angular Signals
- [x] Read documentation

## Notes

Interesting idea for dashboard architecture...
```

---

## Viewing Notes

The dashboard presents the same information visually.

Example:

```text
June 5, 2026

Tasks
☐ Learn Angular Signals
☑ Read documentation

Notes
Interesting idea for dashboard architecture...
```

---

## Updating Notes

Users may:

- Mark tasks as complete.
- Create new tasks.
- Add notes.
- Migrate unfinished tasks.

Changes are written back to Markdown files.

---

## Synchronization

Changes made in Obsidian should automatically appear in the dashboard.

Changes made in the dashboard should automatically update the corresponding Markdown files.

The vault remains the single source of truth.

---

# Architecture

## High-Level Architecture

```text
+---------------------+
|      Angular        |
|      Frontend       |
+----------+----------+
           |
           |
      REST API
           |
           |
+----------v----------+
|       NestJS        |
|       Backend       |
+----------+----------+
           |
           |
      File System
           |
           |
+----------v----------+
|    Obsidian Vault   |
+---------------------+
```

---

## Deployment Architecture

```text
Docker Container
│
├── Angular Build
├── NestJS Server
└── Mounted Obsidian Vault
```

Example:

```bash
docker run \
  -v ~/ObsidianVault:/vault \
  obsidian-dashboard
```

---

# Technology Stack

## Frontend

### Angular

Purpose:

- Application framework
- Routing
- Component architecture
- State management

Concepts to Learn:

- Standalone Components
- Signals
- Dependency Injection
- Routing
- Reactive Forms
- HTTP Client
- Angular CDK
- Angular Material

---

### TypeScript

Purpose:

- Shared language across frontend and backend

Concepts to Learn:

- Interfaces
- Types
- Generics
- Utility Types
- Async/Await
- Functional Array Operations

---

### Angular Material

Purpose:

- Consistent UI design

Concepts to Learn:

- Material Design principles
- Component composition
- Theming

---

## Backend

### NestJS

Purpose:

- API layer
- File system access
- Markdown processing
- Real-time communication

Concepts to Learn:

- Controllers
- Services
- Modules
- Dependency Injection
- DTOs
- Validation Pipes
- WebSocket Gateways

---

### Node.js File System

Purpose:

- Access Obsidian vault contents

Concepts to Learn:

- File IO
- Async operations
- Directory traversal

---

### Chokidar

Purpose:

- File watching

Concepts to Learn:

- Event-driven systems
- File system monitoring

---

## Communication

### REST API

Purpose:

- Data retrieval
- Updates

Concepts to Learn:

- HTTP methods
- Resource design
- Request validation

---

### WebSockets

Purpose:

- Real-time synchronization

Concepts to Learn:

- Event streams
- Push notifications
- Client subscriptions

---

## Infrastructure

### Docker

Purpose:

- Development consistency
- Simplified deployment

Concepts to Learn:

- Dockerfiles
- Volumes
- Multi-stage builds
- Container networking

---

# Implementation Roadmap

---

# Phase 1 — Angular Foundations

## Objective

Build a static Angular application with mock data.

### Deliverables

- Application shell
- Routing
- Navigation
- Layout

### Pages

- Dashboard
- Daily Notes
- Weekly Notes
- Monthly Notes
- Settings

### Concepts

#### Angular

- Components
- Routing
- Dependency Injection
- Signals
- Services

#### TypeScript

- Interfaces
- Models
- Type Safety

### Exit Criteria

Application renders mock journal data successfully.

---

# Phase 2 — Backend Foundations

## Objective

Create a NestJS backend capable of reading vault files.

### Deliverables

- NestJS project
- File access service
- REST endpoint

### Example Endpoint

```http
GET /daily/2026-06-05
```

### Concepts

#### NestJS

- Controllers
- Services
- Modules

#### Node.js

- File System API
- Async IO

### Exit Criteria

Frontend retrieves actual Markdown content from the vault.

---

# Phase 3 — Markdown Parsing

## Objective

Transform Markdown into structured data.

### Deliverables

- Markdown parser service
- Task extraction
- Note extraction

### Concepts

#### Backend Design

- Parsing
- Domain modeling
- Data transformation

#### TypeScript

- Data structures
- Functional programming patterns

### Exit Criteria

Markdown entries become structured JSON objects.

---

# Phase 4 — Journal Dashboard UI

## Objective

Render parsed data visually.

### Deliverables

- Daily dashboard
- Task list
- Note viewer
- Responsive layout

### Concepts

#### Angular

- Component composition
- Inputs and Outputs
- Reusable UI patterns

#### UI Design

- Information hierarchy
- User experience

### Exit Criteria

Daily journal can be viewed entirely through the dashboard.

---

# Phase 5 — Editing and Persistence

## Objective

Allow modifications through the dashboard.

### Deliverables

- Task completion
- Task creation
- Note editing
- Save functionality

### Concepts

#### Angular

- Reactive Forms
- State updates

#### NestJS

- POST endpoints
- PATCH endpoints
- Validation

### Exit Criteria

Changes are written back to Markdown files.

---

# Phase 6 — File Watching

## Objective

Detect vault changes automatically.

### Deliverables

- File watcher service
- Change detection

### Concepts

#### Backend

- Event-driven architecture
- Observer patterns

#### Node.js

- Chokidar

### Exit Criteria

Vault changes are detected immediately.

---

# Phase 7 — Real-Time Synchronization

## Objective

Push updates to connected clients.

### Deliverables

- WebSocket server
- Angular client subscription

### Concepts

#### NestJS

- WebSocket Gateways

#### Angular

- RxJS
- Observables

#### Architecture

- Publish/Subscribe patterns

### Exit Criteria

Dashboard updates automatically when notes change.

---

# Phase 8 — Weekly and Monthly Aggregation

## Objective

Generate higher-level journal views.

### Deliverables

- Weekly dashboard
- Monthly dashboard
- Aggregated metrics

### Concepts

#### Data Processing

- Aggregation
- Time-series data
- Date handling

### Exit Criteria

Users can navigate journal data by week and month.

---

# Phase 9 — Search

## Objective

Search across the entire vault.

### Deliverables

- Search page
- Search API
- Result highlighting

### Concepts

#### Backend

- Indexing
- Querying

#### Frontend

- Search UX
- Debouncing

### Exit Criteria

Users can locate notes and tasks quickly.

---

# Phase 10 — Analytics and Visualization

## Objective

Create productivity insights.

### Deliverables

- Task completion metrics
- Journal streaks
- Heatmaps
- Trends

### Concepts

#### Frontend

- Data visualization

#### Backend

- Aggregation pipelines

### Exit Criteria

Meaningful productivity statistics are available.

---

# Future Enhancements

## Advanced Task Management

- Drag-and-drop migration
- Task prioritization
- Project views

### Concepts

- Angular CDK
- Advanced state management

---

## Knowledge Graph

Visualize note relationships.

### Concepts

- Graph data structures
- Force-directed layouts

---

## Offline Support

Progressive Web App functionality.

### Concepts

- Service Workers
- Caching
- Offline synchronization

---

## AI Features

Potential integrations:

- Daily summaries
- Weekly reviews
- Task categorization

### Concepts

- LLM APIs
- Prompt engineering
- Semantic search

---

# Success Criteria

The project is considered successful when:

1. Obsidian remains the source of truth.
2. Daily journal usage occurs through the dashboard.
3. Notes synchronize automatically.
4. The application runs through Docker.
5. The developer gains practical experience with Angular and NestJS.
6. The application becomes genuinely useful in daily workflows.