---
name: stripe-js-expert
description: Implement Stripe.js and Stripe payment flows for Next.js applications. Use when choosing Checkout vs Elements, building payment forms, designing webhook flows, handling taxes or fees, modeling payment states, or reviewing payment edge cases and failures.
---

# Stripe.js Expert

## Default Approach
For a course-booking site, prefer the simplest reliable flow first.

Project context:
- concealed carry training is the primary offer
- the site should support both direct online booking and inquiry fallback

Decision rule:
- Use Stripe Checkout when the purchase flow is straightforward and custom payment UI is not a product requirement.
- Use Elements only when the site needs a deeply custom payment experience or a multi-step checkout in-app.

## Next.js Guidance
- Keep secret-key operations on the server only.
- Use route handlers or server actions for session creation and webhook handling.
- Never trust client-submitted prices, course names, or fee totals.
- Recompute all billable amounts on the server from trusted product data.

## Minimum Payment Architecture
1. User selects course or package.
2. Server validates product and availability rules.
3. Server creates Stripe Checkout Session or PaymentIntent.
4. Client redirects or confirms payment.
5. Webhook finalizes enrollment and records payment result.
6. UI shows success or failure based on trusted server state.

## Webhook Rules
- Treat webhook handlers as the source of truth for payment completion.
- Verify Stripe signatures.
- Make webhook processing idempotent.
- Persist event IDs to avoid duplicate fulfillment.
- Separate payment success from enrollment success in your data model.

## Data Modeling
Track these concepts separately:
- catalog item
- booking request
- payment session or intent
- payment status
- enrollment status
- refund or cancellation status

Recommended statuses:
- `pending`
- `requires_action`
- `paid`
- `failed`
- `refunded`
- `cancelled`

## UX Rules
- Show a summary before payment: class, date, location, attendee count, and total.
- Explain what happens after payment.
- Provide clear failure recovery paths.
- Keep contact information easy to find during checkout.
- Support a non-payment inquiry path for users who need scheduling help, prerequisites clarification, or class-fit guidance before booking.
- For primary offer pages, keep `Book Online` as the main payment CTA and `Contact Us First` as the fallback CTA.

## Security Checklist
- No secret keys in client code.
- No webhook logic on the client.
- No trusting client-side totals.
- Validate metadata before using it.
- Use idempotency keys where relevant for server-side write operations.

## Output Pattern
When advising on Stripe work, provide:
1. recommended payment flow
2. server/client responsibility split
3. required endpoints or handlers
4. data model implications
5. failure cases to test
