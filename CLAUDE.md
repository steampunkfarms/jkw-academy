# JKW Academy — Claude Code Context

## Identity Guard

> **THIS IS A BFOS CLIENT PROJECT** under Backcountry Tech Solutions.
> Follows BFOS family protocol at `/Users/ericktronboll/Projects/Backcountry Tech Solutions/CLAUDE.md`.
> Global routing at `~/.claude/CLAUDE.md`.
> **DO NOT** apply Steampunk Farms or FT3 protocols.

## Changelog

- 2026-03-23a: Initial project CLAUDE.md created. Session 1 scaffold complete.

## What Is This?

JKW Academy is a comprehensive STEAM education platform for JKW Innovations LLC,
a homeschool enrichment center in San Diego. Built as a gift for Erick's childhood
friend Jeremy Wilson. Replaces their Wix site with a full learning ecosystem.

## Master Plan

Read `docs/master-plan-jkw-academy.md` for the complete vision, architecture,
and phased rollout. That document is the single source of truth.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind v4 · Prisma · Neon (Postgres) ·
Square · Auth.js v5 · Resend · Claude AI (Sonnet + Haiku) · TipTap · Vercel Blob ·
Daily.co · Framer Motion · Lucide Icons

## Key Conventions

- Brand: navy (#1B2A4A) background, gold (#C9A55C) accent, white text
- STEAM category colors: Science (green), Tech (blue), Engineering (orange), Art (pink), Math (purple)
- Accessibility-first: high contrast, reduced motion, dyslexia font, sensory-friendly toggles
- All secret env vars read with `.trim()`
- Prisma for all DB access, no raw SQL
- Square for all payment processing (no Stripe)
- Resend for all email
- Three route groups: (public), (portal), admin

## Infrastructure

- **Vercel:** jkw-academy under steampunk-studiolo team
- **Neon:** ep-polished-cloud-a4mgdxhe, us-east-1
- **Database:** neondb on ep-polished-cloud-a4mgdxhe-pooler

## Rate Plan

Neighbor (pro bono gift build — no 5% revenue fee). Every Premium feature unlocked.

## Current Phase

Session 1 scaffold complete. Next: Session 2 (Prisma schema + seed data).

## Handoff Sanity Check — MANDATORY

CChat (Strategist) designs from outside the codebase and does not follow execution
protocols. CC (Executor) sees production state and is the last line of defense
before changes hit live systems. **Every CChat handoff is a design, not a law.**

Before implementing any handoff, CC must run a Pre-Edit Sanity Pass:

1. **Data state check:** Query existing DB records, sent invoices, live assignments,
   and any state the handoff assumes or modifies. The handoff describes intent —
   the actual production data may have diverged.
2. **Conflict check:** Validate that the handoff does not contradict existing
   architecture, naming conventions, unique constraints, FK relationships, or
   live data (e.g., already-sent invoices tied to a record the handoff renames).
3. **Reversibility check:** Identify which steps affect already-sent, already-paid,
   or already-deployed records. Flag these for extra scrutiny.

- If clean: proceed with execution as mapped.
- If conflicts found: emit a **Sanity Delta** before proceeding:
  - What the handoff says vs. what production state shows
  - Minimal correction with file/anchor evidence
  - Risk if the handoff were followed as-written
  - Adjusted acceptance criteria (if needed)
  - Present the delta to the operator for approval before executing

### Bounded Deviation Rule

CC may deviate from handoff instructions only when ALL are true:

1. Evidence is file-anchored and reproducible
2. Deviation is minimal and risk-reducing
3. Scope does not expand materially

If scope expands, stop and request human confirmation.
All deviations must be logged as "Sanity Delta Applied" in the completion summary.

---

## Overrides from Family Protocol

- ORM: Prisma (master plan specifies Prisma, not Drizzle)
- Rate: Neighbor (no 5% fee — gift build)
- No other overrides — follows BFOS family protocol for everything else.
