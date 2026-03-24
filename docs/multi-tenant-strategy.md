# BTS Multi-Tenant Strategy: Education Fund Orchestration Platform

**Date:** 2026-03-23
**Author:** Claude Opus (CChat)
**For:** Erick Tronboll — strategic planning
**Status:** EXPLORATORY — decision framework, not a commitment
**Context:** If Jeremy declines JKW Academy, or after it's built, pivot the
Charter Fund Orchestrator into a multi-tenant SaaS product.

---

## 0. The Thesis in One Sentence

**The homeschool enrichment vendor market is exploding, every vendor has the
same administrative nightmare, nobody has built software to solve it, and
we already have the code.**

---

## 1. The Market is on Fire

### What's happening right now

The school choice movement has gone from a policy debate to a funding
avalanche. In the last 18 months:

- **Texas** allocated $1 BILLION for Education Savings Accounts (ESAs),
  had 42,000 applications on day one — a national record. Each student
  gets up to $10,474/year for approved educational expenses.
- **Arizona** has universal ESAs — any student qualifies, no income limits.
- **Florida, Arkansas, Iowa, Oklahoma, Utah, West Virginia** all have
  universal or near-universal ESA programs.
- **Alabama, Georgia, Louisiana, Tennessee, Idaho, Indiana, New Hampshire,
  Wyoming** all passed or expanded programs in 2024-2025.
- **33 states** now have some form of private school choice program.
- **114 bills in 30 states** were introduced in 2025 alone to expand,
  revise, or create school choice programs.

### What this means for enrichment vendors

Every one of these programs creates a new class of customer: families with
state-funded education accounts who need approved vendors to spend the money
with. The enrichment vendor — the person running STEAM classes, tutoring,
music lessons, art workshops, sports programs — is suddenly the supply side
of a market where demand is being manufactured by legislation.

### California alone

- **175,000 homeschool students** (state estimate)
- **Dozens of charter schools** with enrichment fund programs (Pacific Coast
  Academy, Cabrillo Point, Sage Oak, Inspire, Springs Charter, etc.)
- Each charter allocates **$2,000–$4,300/year per student** for enrichment
- Charters maintain **approved vendor lists** — vendors must apply, get
  approved, and then track POs for every enrolled student
- **Pacific Coast Academy alone** serves thousands of families across
  Southern California, each with enrichment funds to spend
- There are hundreds of enrichment vendors in California competing for
  these funds — STEAM centers, tutoring services, music schools, art
  studios, sports programs, martial arts dojos

### The vendor's pain (universal, not JKW-specific)

Every enrichment vendor who accepts charter funds or ESA funds deals with:
1. **Multiple funding sources** — each with different forms, timelines, rules
2. **PO tracking** — which families have submitted, which are approved, which
   are paid, which are overdue
3. **Fund balance management** — how much each student has left to spend
4. **Compliance documentation** — attendance records, learning objectives,
   progress reports that funding sources require
5. **Registration complexity** — families paying 3 different ways (charter,
   ESA, out-of-pocket) all registering for the same classes
6. **Receivables aging** — charters pay NET 30-90; vendors carry the float

This pain is identical whether you're running a STEAM center in El Cajon
or a music school in Austin or a tutoring center in Phoenix.

---

## 2. The Competitive Landscape is Empty

I scanned every relevant software product:

| Product | What It Does | Charter/ESA Fund Tracking? |
|---------|-------------|---------------------------|
| **AfterSchool HQ** | Generic after-school program management: registration, attendance, Stripe payments | NO |
| **Spark** | Microschool/homeschool management: assignments, gradebook, communication | NO |
| **HomeTrail** | Homeschool family planner: attendance, portfolios, planning | NO |
| **Homeschool Manager** | Family record-keeping: scheduling, grading, transcripts | NO |
| **Homeschool Tracker** | Family record-keeping and planning | NO |
| **Kangarootime** | Childcare/preschool management: enrollment, billing, attendance | NO |
| **DreamClass** | Small school SIS: admissions, grading, billing | NO |
| **Schoolio** | Homeschool curriculum delivery platform | NO |

**Nobody tracks charter fund POs. Nobody manages ESA fund balances. Nobody
automates the vendor-side compliance workflow.** The entire category is
unoccupied.

AfterSchool HQ is the closest competitor and they charge $29–$99/month for
basic registration and attendance. They have zero fund orchestration. Their
entire value prop is "manage your after-school program." They're a feature,
not a platform.

**The gap:** There is no software product that helps enrichment vendors
manage the money flowing from charter schools, ESAs, and voucher programs
to their businesses. The vendor side of the school choice revolution has
no tools. We build those tools.

---

## 3. The Product: FundBridge (Working Name)

### What it is

A multi-tenant SaaS platform for homeschool enrichment vendors that
manages the complete lifecycle of education fund payments — from charter
school POs to ESA disbursements to direct parent payments — alongside
the enrollment, attendance, and compliance documentation that funding
sources require.

### Who it's for (Day 1)

**California homeschool enrichment vendors** — the hundreds of STEAM
centers, tutoring services, music schools, art studios, and sports
programs that accept charter enrichment funds.

### Who it's for (Year 2+)

**Any enrichment vendor in any state with ESA/voucher programs** — as
programs expand, the vendor-side pain scales with them. Texas alone
will create thousands of new vendors who need this.

### Core value proposition

"Stop tracking POs in spreadsheets. Know exactly who owes you, how much,
and when — across every charter, every ESA program, and every family."

### Feature Tiers

**Starter ($49/month)** — for solo operators and small programs
- Smart registration (multi-child, multi-class, waitlist)
- Dual payment: direct parent (Square/Stripe) + fund tracking
- Basic charter/ESA fund tracking (PO status, receivables)
- Parent portal (schedule, payments, fund status)
- Attendance tracking
- Email notifications (registration, receipts, reminders)
- Up to 100 students

**Professional ($149/month)** — for established programs
- Everything in Starter
- Charter Fund Orchestrator (full PO lifecycle, aging reports, fund
  balance tracking, deposit management, invoice generation)
- State-specific compliance templates (CA charter forms, AZ ESA
  reporting, TX TEFA documentation)
- AI-powered progress reports
- Curriculum library (LMS lite)
- Newsletter engine
- FAQ chatbot
- Up to 500 students

**Enterprise ($299/month)** — for multi-location and growing programs
- Everything in Professional
- Multi-location support
- Instructor portal (role-based access)
- Charter/ESA partner portal (read-only views for funding sources)
- Kit shop / e-commerce
- Revenue BI (fill rates, retention, forecasting)
- AI semester planner
- Custom branding (white-label option)
- Unlimited students
- Priority support

### Revenue math (conservative)

California alone has hundreds of enrichment vendors. If we capture:
- 50 vendors at $49/month = $2,450/month = $29,400/year
- 25 vendors at $149/month = $3,725/month = $44,700/year
- 10 vendors at $299/month = $2,990/month = $35,880/year
- **Total: $9,165/month = $109,980/year from California alone**

Add Texas, Arizona, Florida — each with equal or larger markets — and
this is a $300K–$500K ARR business within 2 years, run by one person
on infrastructure that costs ~$200/month.

---

## 4. Architecture: Single-Tenant → Multi-Tenant

### If Jeremy says yes (Build Path A)

1. Build JKW Academy as a single-tenant app (the CC plan as written)
2. Jeremy uses it, we iterate, we prove the model works
3. Extract the multi-tenant layer: add `Tenant` model, scope all queries,
   add onboarding flow, add billing (Stripe subscriptions)
4. JKW becomes the founding customer (free forever, Neighbor rate)
5. Launch FundBridge as a separate product built on the same codebase

### If Jeremy says no (Build Path B)

1. Build FundBridge directly as multi-tenant from day one
2. Use JKW's real data (44 classes, 13 charters) as the seed/demo tenant
3. The demo tenant IS the sales tool — "this is what your program looks like"
4. Launch to California enrichment vendors immediately

### Either way, the architecture is the same

The JKW Academy codebase already has everything FundBridge needs:

| JKW Feature | FundBridge Feature |
|-------------|-------------------|
| CharterSchool model | FundingSource model (charters + ESAs + vouchers) |
| CharterEnrollment / PO tracking | FundClaim (universal PO/ESA/voucher tracking) |
| CharterFundBalance | StudentFundBalance (per-student, per-source) |
| CharterInvoice | VendorInvoice (to funding sources) |
| ClassTemplate / ClassSection | Program / Session (generic names) |
| Enrollment | Enrollment (unchanged) |
| Family / Student | Family / Student (unchanged) |
| Payment / Deposit | Payment / Deposit (unchanged) |
| Attendance | Attendance (unchanged) |
| AI progress reports | AI progress reports (compliance-ready) |

The multi-tenant delta is:
- `Tenant` model (org name, slug, plan, billing info, branding)
- `TenantUser` junction (users can belong to multiple tenants)
- Row-level security: every query scoped to `tenantId`
- Onboarding wizard: create account → pick plan → add first program
- Stripe subscription billing (not ad-hoc invoicing)
- State-specific compliance module loader

---

## 5. State Rollout Strategy

### Tier 1: California (Launch Market)
- **Why first:** Jeremy's market, we know the charter landscape, 175K
  homeschool students, mature charter enrichment ecosystem, BTS is here
- **Funding model:** Charter school enrichment funds ($2,000–$4,300/student)
- **Target customers:** STEAM centers, tutoring services, music/art/sports
  programs that are approved vendors for CA charter schools
- **Charter partners to template first:** Pacific Coast Academy, Cabrillo
  Point, Sage Oak, Inspire, Springs Charter, Mission Vista, Epic Charter,
  Compass Charter, Heartwood, Visions in Education, Sky Mountain
- **Go-to-market:** Direct outreach to vendors on charter approved vendor
  lists (these are public), Facebook groups for CA homeschool vendors,
  homeschool conventions (CHN, HSC)

### Tier 2: ESA Powerhouse States (Year 1 expansion)
States with large, active, well-funded ESA programs:

| State | Program | Amount/Student | Why It's Hot |
|-------|---------|---------------|-------------|
| **Arizona** | Empowerment Scholarship | ~$7,000 | Universal, mature, largest per-capita |
| **Florida** | Family Empowerment | ~$8,000 | Massive student population |
| **Texas** | Education Freedom Accts | $2K–$10,474 | $1B funding, 42K day-one apps |
| **Utah** | Fits All Scholarship | ~$8,000 | Universal, tech-savvy population |
| **Iowa** | Education Savings Acct | ~$7,500 | Universal by 2026 |

### Tier 3: Expanding States (Year 2)
States that passed ESA/voucher programs in 2024-2025:

Alabama ($7,000), Arkansas (universal), Georgia ($6,500), Idaho ($5,000–
$7,500), Indiana (expanding), Louisiana (GATOR program), New Hampshire
(removing income limits), Oklahoma ($5,000–$7,500), Tennessee (new ESA),
Wyoming ($6,000)

### Tier 4: Future States (Year 3+)
States with active legislation: Mississippi, Missouri, Nebraska, Ohio,
South Carolina, plus any new states that pass programs.

### State-specific compliance modules

Each state's ESA/charter program has different:
- Approved expense categories
- Reporting requirements
- Vendor approval processes
- Fund disbursement timelines
- Audit/accountability rules

The platform ships with a compliance module per state. When a vendor signs
up, they select their state(s) and the system configures the right forms,
timelines, and reporting templates. This is a moat — building state-by-state
compliance knowledge takes time and the first mover accumulates it.

---

## 6. Go-to-Market: How You Sell This

### Channel 1: Charter School Approved Vendor Lists (free leads)

Every charter school publishes its approved vendor list or has a vendor
directory. These are public. Pacific Coast Academy has a vendor portal.
Visions in Education has a searchable vendor database. Each list contains
dozens to hundreds of enrichment vendors with names, websites, and contact
info. This is a free, pre-qualified lead list. These vendors already accept
charter funds — they already have the pain.

**Action:** Scrape/collect CA charter vendor lists. Cold email campaign:
"You're an approved vendor for [Charter]. You're tracking POs in a
spreadsheet. We built the tool that does it for you."

### Channel 2: Homeschool Conventions and Vendor Fairs

California alone has multiple annual homeschool conventions where enrichment
vendors exhibit. Set up a booth (or just attend and talk to vendors). The
pitch is a live demo: "Show me your messiest charter — I'll show you what
your receivables dashboard looks like."

### Channel 3: Facebook/Online Homeschool Vendor Communities

There are active Facebook groups for CA homeschool enrichment vendors where
they share tips about charter processes, complain about late POs, and ask
each other how they track things. Plant the product there.

### Channel 4: Charter Schools Themselves

Here's the play nobody else is making: approach the charter schools directly.
"We've built a platform that makes your vendors' compliance reporting
automatic. When your approved vendors use FundBridge, you get standardized
PO tracking, attendance reports, and learning objective documentation without
chasing individual vendors." The charter becomes a distribution channel —
they recommend FundBridge to their vendors because it makes the charter's
life easier.

This is the same logic as the JKW Charter Partner Portal, scaled up.

---

## 7. The Broader Multi-Tenant Vision

You said "soon we need to explore all the multi-tenant systems we can build."
Here's the landscape. Every BTS client project contains patterns that could
become a vertical SaaS product:

| BTS Source | Multi-Tenant Product | Market |
|-----------|---------------------|--------|
| **JKW Academy** | FundBridge: Education Fund Orchestration | Homeschool enrichment vendors (THIS DOC) |
| **Semper Vets** | Agent Command: Real Estate Team Platform | Small RE teams (2-5 agents) |
| **KK Photog** | StudioOS: Photography Business Platform | Independent photographers |
| **CWS** | ShopOS: Specialty Retail Management | Small retail stores with inventory + POS |
| **VVAF** | FarmOS: Small Farm Direct-Sales Platform | Farm stands, u-pick, CSA operations |
| **Rescue Barn** | SanctuaryOS: Animal Sanctuary Management | Nonprofit animal rescues |
| **BTS Site itself** | ConsultantOS: IT Consultancy Platform | Solo IT consultants |

Each one follows the same playbook:
1. Build the single-tenant version for a real client
2. Prove it works in production
3. Extract the multi-tenant layer
4. Price it as vertical SaaS
5. Go to market in the specific vertical

**FundBridge is the best first candidate** because:
- The market is exploding (legislative tailwind)
- Zero competition (category doesn't exist)
- The pain is acute and universal (every vendor, every state)
- The customer has budget (they're processing $2K–$10K per student)
- The compliance moat deepens over time (state-by-state knowledge)
- JKW gives us a real proof-of-concept with real data

The other products are viable but face more competition (Honeybook for
photographers, AppFolio for RE, Shopify for retail). FundBridge faces
nobody.

---

## 8. What to Do Right Now

### Decision tree

```
Jeremy says YES
  → Build JKW Academy (single-tenant) as the CC plan describes
  → Jeremy uses it for Fall 2026 enrollment
  → Extract multi-tenant layer Q4 2026
  → Launch FundBridge Q1 2027 with JKW as founding customer
  → Roll out CA → AZ/FL/TX → everywhere

Jeremy says NO (or "not yet")
  → Build FundBridge directly as multi-tenant
  → Use JKW's real catalog as the demo tenant
  → Launch to CA enrichment vendors immediately
  → Approach Jeremy again once 5+ vendors are using it
    ("Hey, I built the thing. 5 people are paying for it.
     Yours is still free. Want it now?")
```

### Either path requires the same Phase 1

The CC implementation plan for JKW Academy IS the FundBridge MVP. The
only difference is whether we add the multi-tenant layer before or after
Jeremy's deployment. The schema, the registration engine, the charter
fund orchestrator, the parent portal, the admin dashboard — all identical.

### Immediate actions (regardless of Jeremy's answer)

1. **Register the domain.** fundbridge.io, fundbridge.app, or similar.
   Also hold jkw.academy for Jeremy.
2. **Start collecting CA charter vendor lists.** Public data. Build the
   prospect database now.
3. **Monitor TX TEFA vendor marketplace.** Texas is onboarding approved
   vendors right now for the 2026-27 school year. Understand their process.
4. **File for business entity if needed.** FundBridge may want to be a
   separate entity from BTS, or a DBA. Tax and liability question for
   Erick's father (the elite accountant) to weigh in on.

---

## 9. Risks and Mitigations

| Risk | Severity | Mitigation |
|------|----------|------------|
| Market too niche | Medium | ESA expansion makes it less niche every year. Even if enrichment is small, tutoring + private school vendors face the same pain |
| Charter/ESA rules change | Low | Rules are expanding, not contracting. Bipartisan support. Even if a state scales back, others are scaling up |
| Big player enters (Clever, ClassDojo) | Medium | They serve schools, not vendors. Different buyer. We own the vendor side |
| Compliance complexity per state | High | Start with CA only. Add states one at a time. Each state is a moat brick |
| Customer acquisition cost | Medium | Free lead lists (vendor directories), low-friction trial, charter schools as distribution |
| Erick is one person | High | Start with Starter tier (self-service). AI handles support chatbot. Premium/Enterprise get concierge onboarding. Scale the product, not the team |

---

## 10. The Punchline

The school choice movement is putting billions of dollars into the hands of
families who need to spend it with vendors who have no tools to manage the
money flow. Every enrichment vendor in America is about to face the same
problem Jeremy already has — tracking purchase orders from multiple funding
sources in spreadsheets.

We have the code. We have a real customer (or a real demo). We have zero
competitors. And the market is doubling every legislative session.

FundBridge isn't a pivot from JKW Academy. JKW Academy IS FundBridge with
one tenant. Whether Jeremy says yes or no, we're building the same thing.
The only question is who gets it first.

---

*This document lives at:*
*`/Users/ericktronboll/Projects/Backcountry Tech Solutions/jkw-academy/docs/multi-tenant-strategy.md`*

*When ready to go deeper: CChat produces the multi-tenant architecture spec,
CC implements. Same two-actor model, same stack, same protocols.*
