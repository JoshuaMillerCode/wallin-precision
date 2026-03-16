---
name: nextjs-api-architecture
description: Design Next.js application and API architecture for App Router projects. Use when structuring route handlers, separating server and client code, modeling backend flows, adding validation, connecting MongoDB, or planning maintainable native API features in Next.js.
---

# Next.js API Architecture

## Default Stack Assumptions
- Next.js App Router
- server-first data access
- route handlers for API endpoints
- MongoDB for persistence
- external payments through Stripe

## Architecture Principles
- Keep business logic out of UI components.
- Put sensitive logic on the server.
- Prefer shared server-side services for database and payment operations.
- Validate all external input at API boundaries.
- Return explicit, typed response shapes where practical.

## Recommended Layout
As the app grows, prefer a structure like:

```text
src/
  app/
    api/
  components/
  lib/
    db/
    payments/
    validation/
    services/
  types/
```

## API Design Rules
- One endpoint should own one clear responsibility.
- Normalize errors into predictable response formats.
- Validate request bodies, params, and query values.
- Re-fetch trusted data on the server before writes.
- Keep DB access in reusable server modules instead of inline in route files.

## Server vs Client
Keep on the server:
- secrets
- DB queries
- Stripe secret-key calls
- enrollment and fulfillment logic

Keep on the client:
- UI state
- optimistic interactions when safe
- Stripe.js browser-side confirmation steps

## MongoDB Guidance
- Centralize connection management.
- Keep collection access behind small helper modules or services.
- Design for idempotent writes when webhooks or retries are involved.
- Track audit-friendly timestamps for bookings and payment changes.

## Validation
At every write boundary:
1. validate shape
2. validate business rules
3. perform write
4. return minimal trusted result

## Output Pattern
When asked to design a backend feature, respond with:
1. file structure
2. request flow
3. server/client split
4. validation points
5. persistence model
