# FundBridge — Unsolicited Proposal

**Date:** 2026-03-23
**Author:** CChat (Claude Opus)
**For:** Erick Tronboll — product strategy
**Status:** UNSOLICITED PROPOSAL — to be refined and revisited
**Builds on:** `multi-tenant-strategy.md` (same folder)

---

## 0. What Changed Since the Strategy Doc

The strategy doc identified the vendor-side opportunity: enrichment programs
that accept charter/ESA funds need tools to manage the money. That's still
the foundation.

This proposal expands the addressable market in two directions:

1. **Underserved communities within homeschooling** — families who homeschool
   because the traditional system failed their children, not by choice but by
   necessity. These families have unique needs that no platform serves.

2. **A Parent License** — individual families who aren't running enrichment
   programs but need the same fund orchestration, activity planning, and
   curriculum tools. They're the demand side, not the supply side.

Together, these transform FundBridge from "software for enrichment vendors"
into "the operating system for the homeschool economy."

---

## 1. The Market Nobody Is Serving

### 3.4 million homeschool students in the US (2024-2025)

That's 6.26% of all K-12 students — roughly double Catholic school enrollment
and approaching public charter school levels. Post-pandemic, this number has
not retreated. It's still growing.

### Who are these families?

The stereotype of the homeschool family as white, evangelical, and affluent is
outdated. The 2024 data paints a different picture:

- **41% of homeschool families are non-white** (18.3% Black, 18.2% Hispanic,
  15.1% Asian)
- **53% cite religious/moral instruction** as a motivation (down from 83% in 2007)
- **21% homeschool because their child has special needs** the traditional
  system couldn't or wouldn't meet
- **15% cite a physical or mental health condition** lasting 6+ months
- **83% cite concerns about the school environment** (safety, drugs, peers)
- **36% of second-choice homeschoolers** (families who didn't plan to
  homeschool) have children with disabilities

The homeschool population is diversifying in every dimension — race, religion,
motivation, income, and ability. And the fastest-growing segments are the ones
least served by existing tools.

---

## 2. Underserved Communities — The Families the System Forgot

These are families who homeschool not because they want to opt out of public
education, but because public education opted out of their children. Each
community has distinct needs, distinct pain, and distinct willingness to pay
for tools that actually help.

### 2A. Families of Children with Autism Spectrum Disorder

**The numbers:** 1 in 36 US children are now diagnosed with ASD (CDC, 2025).
That's 2.8% of all children — a 312% increase since 2000. Among homeschoolers,
the rate is likely higher: 21% of homeschool parents cite special needs as
their reason.

**Why they homeschool:** Public school IEPs are often inadequate. Sensory
overload in classrooms. Bullying. Rigid schedules that don't accommodate
meltdowns or executive function challenges. Many families pull their children
out after years of failed accommodations.

**What they need:**
- Sensory-friendly curriculum interfaces (reduced animation, calm palettes)
- Activity planner with sensory load ratings per activity
- Progress tracking that maps to therapeutic goals, not just academic ones
- Social skills curriculum integrated into STEAM activities
- Community connection with other ASD families doing enrichment
- ESA/charter fund tracking (many ASD families qualify for enhanced funding —
  TX TEFA gives up to $30,000/year for students with IEPs)

### 2B. Families of Children with Down Syndrome

**The numbers:** ~6,000 babies born with Down syndrome annually in the US.
Estimated 200,000+ people living with DS. Many families homeschool through
elementary and middle school years.

**Why they homeschool:** Pace mismatch — DS children learn differently, not
less. Public school inclusion programs vary wildly in quality. Parents want
to pair academic instruction with life skills, physical therapy, and speech
therapy in a coordinated way that schools can't provide.

**What they need:**
- Curriculum adapted for cognitive differences (concrete, visual, repetitive)
- Life skills activity library (cooking, money, self-care) alongside academics
- Therapy schedule integration (OT, PT, speech) with academic planning
- Progress tracking on developmental milestones, not grade-level benchmarks
- Community with other DS families sharing what works

### 2C. Families of Children with Physical Disabilities

**Why they homeschool:** Inaccessible school buildings. PE programs that
exclude. Field trips they can't attend. The assumption that physical
disability means cognitive limitation.

**What they need:**
- Activity planner with mobility/accessibility ratings
- Adaptive activity alternatives for every lesson ("can be done seated,"
  "wheelchair-accessible version," "one-handed alternative")
- Voice-to-project interfaces for motor-impaired students
- Virtual lab access for students who can't attend in-person enrichment

### 2D. Families of Blind and Deaf/Hard-of-Hearing Children

**Why they homeschool:** Shortage of qualified interpreters and Braille
instructors in public schools. Families in rural areas may be hours from
the nearest school for the deaf. Parents learn ASL or Braille and teach
directly.

**What they need:**
- Screen-reader-optimized curriculum delivery (not just WCAG compliance,
  but genuinely designed for assistive technology)
- ASL video integration in curriculum (signed instruction alongside text)
- Tactile/hands-on activity emphasis in lesson planning
- Braille-compatible output for worksheets and assessments
- Community connection with other D/HH and blind families

### 2E. Families of Children with Seizure Disorders (Dravet, Epilepsy)

This is Isabella's community. Jeremy's community. The one that started this
whole project.

**Why they homeschool:** Seizure unpredictability makes rigid school schedules
dangerous and stressful. Many schools lack trained staff for seizure response.
Anti-seizure medications cause drowsiness, affecting optimal learning times.
Parents need flexibility to teach when their child is alert and rested.

**What they need:**
- Flexible scheduling tools that accommodate good days and bad days
- Seizure log integration with learning records (correlate learning patterns
  with seizure patterns)
- Emergency protocol documentation accessible to any caregiver or instructor
- Curriculum pacing that adapts to energy levels
- Isabella's Legacy accessibility features as the default, not an option

### 2F. Religiously Motivated Homeschool Families

**The numbers:** 53% of homeschool families cite religious/moral instruction
as a motivation. This spans evangelical Christian, Catholic, Jewish, Muslim,
LDS, and other faith traditions. 29% participate in co-ops, many of which
are faith-based.

**Why they homeschool:** Desire to integrate faith into daily instruction.
Objection to specific curricula. Want moral formation alongside academics.
Community of shared values.

**What they need:**
- Curriculum library that respects faith-based content (doesn't filter or
  flag religious materials)
- Co-op management tools (many religious homeschool groups operate as co-ops
  with shared teaching responsibilities)
- Activity planner that accommodates religious calendar (sabbath, holy days,
  religious education blocks)
- Community features for co-op coordination
- Fund tracking for co-ops that pool charter/ESA resources

### 2G. Military Families

**Why they homeschool:** Frequent relocations (every 2-3 years). Children
change schools 6-9 times during a military career. Curriculum continuity is
impossible. Deployments disrupt family routines. Many military families
homeschool for stability.

**What they need:**
- Portable student records that follow the family across states
- State-by-state compliance that auto-adjusts when the family PCSes
- Fund tracking that handles mid-year state transitions
- Curriculum continuity tools (pick up where you left off, any state)

### 2H. Rural and Frontier Families

**Why they homeschool:** Nearest school may be 30-60 minutes away. Bus routes
don't reach. Broadband may be limited. Agricultural schedules conflict with
school calendars. This is Erick's community — the backcountry.

**What they need:**
- Offline-capable curriculum delivery (PWA with cached content)
- Activity planning with minimal supply requirements (rural families can't
  run to Michaels for craft supplies)
- Seasonal scheduling flexibility (harvest, calving, fire season)
- Virtual enrichment access when in-person isn't feasible

### 2I. Gifted and Twice-Exceptional (2E) Children

**Why they homeschool:** Schools can't serve both the giftedness and the
disability simultaneously. A child who reads at a 10th-grade level but has
ADHD and can't sit still for 45 minutes is failed by grade-level instruction.
Parents pull them out to let them race ahead in strengths while getting
targeted support for challenges.

**What they need:**
- Multi-level curriculum planning (math at 8th grade, writing at 5th grade,
  social skills at 3rd grade — all for the same child)
- Enrichment activity matching by ability level, not age
- Progress tracking that shows growth in multiple dimensions independently
- Connection to enrichment vendors who serve advanced learners

### 2J. LGBTQ+ Families and Students

**Why they homeschool:** Hostile school environments. Bullying. States where
curriculum restrictions limit discussion of identity. Families who want their
children educated in an affirming environment.

**What they need:**
- Inclusive curriculum options (not faith-filtered, not state-censored)
- Safe community spaces (moderated, identity-affirming)
- Connection to affirming enrichment vendors and co-ops

---

## 3. The Parent License — Demand-Side Product

### The insight

The strategy doc focused on enrichment vendors — the supply side. But for
every vendor managing 100+ students, there are thousands of individual
families managing their own homeschool journey with the same tools: Gmail,
spreadsheets, and prayer.

A parent who homeschools one autistic child and one neurotypical child across
two charter schools needs:
- **Fund tracking** — "How much of my $3,800 allocation from Sage Oak have I
  used? How much from Cabrillo Point for my other child?"
- **Activity planning** — "What enrichment classes are available this week
  that accept my charter funds and serve my child's age group?"
- **Curriculum organization** — "What are we studying this week? What supplies
  do I need? What did we cover last month?"
- **Progress documentation** — "My charter requires a learning log. My
  evaluator wants to see a portfolio. I need to prove my child is learning."
- **Community** — "Are there other families near me doing this? Can I join
  a co-op? Are there field trips?"

None of this requires running an enrichment program. It requires being a
parent navigating a complex system with no map.

### Parent License Tiers

**FundBridge Family — Free**
- Fund balance tracker (manual entry: "I have $3,800 from Sage Oak")
- Basic activity planner (weekly schedule, supply lists)
- Vendor directory (searchable list of approved enrichment vendors in your
  state that accept your charter/ESA funds)
- Community access (forums, local family finder)
- This tier exists to build the network. Free families are the audience
  that makes the vendor tier valuable.

**FundBridge Family+ — $9/month**
- Everything in Free
- Charter Fund Orchestrator (family edition): connect to your charter
  school(s), track PO submissions, see fund balances update as vendors
  invoice, get alerts when funds are running low
- AI-powered activity planner: "My child is 8, autistic, interested in
  robotics, and we have $1,200 left in Sage Oak funds. What enrichment
  classes near El Cajon accept Sage Oak and serve his needs?"
- Curriculum library access: browse and save lesson plans, create weekly
  schedules, build a portfolio of completed work
- Progress documentation: learning log, portfolio builder, exportable
  reports for charter/evaluator compliance
- Student profiles with special needs accommodation notes (encrypted,
  shareable with selected vendors)

**FundBridge Family Pro — $19/month**
- Everything in Family+
- AI curriculum generation: "Generate a 12-week introductory electronics
  curriculum for a 10-year-old with ADHD who learns best hands-on"
- AI progress reports: end-of-period narrative assessments from your
  learning log entries
- Multi-child management with per-child fund tracking
- Co-op management tools (organize a group, share schedules, coordinate
  teaching responsibilities, pool fund tracking)
- Priority vendor matching (vendors who pay for FundBridge get featured
  to families searching in their area)

### The Network Effect

This is the key insight: the Parent License creates a two-sided marketplace.

```
FAMILIES (demand side)                 VENDORS (supply side)
─────────────────────                  ─────────────────────
"Where can I spend my                 "How do I get more families
 charter funds on robotics             to find my robotics class
 for my 8-year-old?"                   and use their charter funds?"
         │                                      │
         └──────────── FundBridge ──────────────┘
                    connects them
```

Free families on the platform = eyeballs for vendors. Vendors paying $49–
$299/month get featured placement in the family activity planner. Families
searching for "robotics, age 8, Sage Oak charter, El Cajon" see JKW Academy
at the top because Jeremy is a FundBridge vendor.

The free family tier is not charity. It's the audience that makes the vendor
product worth paying for. This is the Yelp model applied to homeschool
enrichment: restaurants pay for Yelp features because diners use Yelp for
free.

---

## 4. The Krystal Lynn Advantage

Krystal Lynn Tronboll has been an educator at every level from elementary
through adjunct professor at the University of San Diego. She homeschooled
all three of your children. She is not a technologist — she is the person
who knows what a Tuesday morning looks like for a homeschool parent trying
to teach fractions to a 9-year-old who would rather be building Legos.

### What Krystal brings to FundBridge

**Curriculum authority.** The AI generates lesson plans. Krystal validates
them. "AI-generated, educator-reviewed" is a trust signal that no competitor
can match. Every curriculum template in the library carries her review —
not as a rubber stamp, but as a professional educator who has taught at
every level and homeschooled her own kids.

**The parent's voice in the product.** Erick builds systems. Krystal knows
what parents actually need from those systems. The activity planner, the
progress documentation, the charter fund tracking — Krystal can tell you
whether the UX makes sense for a parent juggling three kids, a therapy
appointment, and a charter school deadline. She's the user researcher and
the subject matter expert in one person.

**Content creation.** The curriculum library needs seed content — lesson plans,
activity guides, assessment templates, progress report formats. AI generates
drafts. Krystal reviews, edits, and creates the templates that set the
standard. Her credentials (adjunct professor at USD, K-12 teaching
experience, homeschool parent) make her the ideal author.

**Community credibility.** Homeschool parents trust other homeschool parents,
especially ones with credentials. "Built by a homeschool family, reviewed by
an educator with 20+ years of experience from kindergarten through university"
is the most powerful tagline FundBridge could have. It's also true.

**Special needs curriculum expertise.** If Krystal's experience includes
working with diverse learners (which teaching at every level virtually
guarantees), she brings insight into the adaptive curriculum features that
serve the underserved communities in Section 2. The special needs families
need to know that someone who understands their reality reviewed the
curriculum, not just an algorithm.

### Krystal's Role (if she wants it)

This isn't a job offer — it's an asset recognition. If Krystal wants to
be involved, her natural role is:

- **Head of Curriculum** — reviews AI-generated content, creates seed
  templates, sets quality standards for the curriculum library
- **Content advisory board of one** — validates that features serve real
  parent needs, not imagined ones
- **Author credit** — her name on the curriculum carries weight. "Lesson
  plan by Krystal Tronboll, M.Ed., USD" next to every reviewed template
- **Compensation:** Equity stake in FundBridge, revenue share on curriculum
  sales, or hourly consulting — whatever structure fits. This is a family
  decision, not a business one.

If she doesn't want an active role, her experience still informs the product
through Erick's proximity. But the product is stronger with her name on it.

---

## 5. Revised Product Architecture

The original strategy doc had three tiers for vendors. This proposal adds
the family tiers and reframes the whole product as a two-sided platform.

### Platform Summary

| Tier | For | Price | Core Value |
|------|-----|-------|------------|
| **Family Free** | Individual parents | $0 | Fund tracker, vendor directory, community |
| **Family+** | Active homeschool parents | $9/mo | Fund orchestrator, AI planner, curriculum, portfolio |
| **Family Pro** | Power users, co-op leaders | $19/mo | AI curriculum gen, co-op tools, multi-child |
| **Vendor Starter** | Solo enrichment operators | $49/mo | Registration, payments, basic fund tracking |
| **Vendor Pro** | Established programs | $149/mo | Full fund orchestrator, AI reports, LMS, newsletter |
| **Vendor Enterprise** | Multi-location programs | $299/mo | All features, white-label, BI, partner portal |

### Revenue Model (Revised)

**Vendor side** (same as strategy doc):
- 85 vendors across tiers = $9,165/month from CA alone

**Family side** (new):
- 3.4M homeschool students nationally. 33 states with ESA/charter programs.
  Conservative target: 0.1% penetration = 3,400 families.
  - 2,000 on Free (no revenue, but network value)
  - 1,000 on Family+ at $9/mo = $9,000/month
  - 400 on Family Pro at $19/mo = $7,600/month
  - **Family revenue: $16,600/month = $199,200/year**

**Combined Year 1 target:** $25,765/month = $309,180/year
**Combined Year 2 target (multi-state):** $750K–$1M ARR

**The free tier economics:** 2,000 free families are not a cost center.
They're the audience that vendors pay to reach. A vendor paying $149/month
is paying because 200 families in their area are searching FundBridge for
enrichment classes. The free families ARE the product the vendors buy.

---

## 6. Go-to-Market: Reaching Underserved Communities

### Special Needs Families

**Channel:** Facebook groups are the gathering place. "Homeschooling with
Autism," "Down Syndrome Homeschool Support," "Epilepsy Moms Who Homeschool"
— these groups have thousands of members sharing resources, venting about
IEP failures, and asking each other what works. FundBridge enters as a
resource, not a sales pitch.

**The Isabella hook:** "This platform was built by a family whose daughter
has Dravet syndrome. The accessibility features weren't an afterthought —
they were the starting point." That story resonates in these communities in
a way no marketing copy can.

**Enhanced ESA funding:** In Texas, students with IEPs qualify for up to
$30,000/year in TEFA funds (vs. $10,474 standard). In Arizona, ESA amounts
increase for students with disabilities. These families have MORE money to
manage and MORE complexity in tracking it. The fund orchestrator is more
valuable to them than to anyone else.

### Religious Families

**Channel:** Church networks, faith-based homeschool co-ops, organizations
like HSLDA (Home School Legal Defense Association), Abeka, BJU Press
communities. These are tight-knit, word-of-mouth-driven communities.

**Positioning:** FundBridge is curriculum-agnostic. It doesn't sell curricula
— it helps you organize whatever curricula you've chosen. Religious families
are wary of platforms that push secular content. FundBridge never does. The
curriculum library includes faith-based templates alongside secular ones, and
families choose what to use. The fund orchestrator doesn't care whether
you're spending charter funds on Bob Jones biology or secular robotics.

### Military Families

**Channel:** Military spouse networks, MilHomeschool groups, installation
family readiness groups. Military families are highly networked.

**Positioning:** "Your family moves. Your child's education doesn't have to
start over." Portable student records, auto-adjusting state compliance,
continuity across relocations.

### Rural Families

**Channel:** Farm Bureau networks, 4-H, cooperative extension offices,
rural homeschool co-ops, Erick's own backcountry community.

**Positioning:** "Built in the backcountry, for the backcountry." Offline
PWA, minimal-supply activities, seasonal scheduling. Erick IS this customer.

---

## 7. What This Changes About the Build

### JKW Academy becomes the vendor-side proof of concept

Whether Jeremy says yes or no, the JKW codebase proves the vendor product
works. Every feature we build for Jeremy — the registration engine, the
charter orchestrator, the parent portal, the admin dashboard — is the
Vendor Pro tier of FundBridge.

### The Parent License is a separate but connected product

The Family tiers are a lighter-weight application that shares the same
database schema for funding sources, students, and enrollments, but
presents a different UI: parent-centric rather than admin-centric. The
connection point is the vendor directory and the fund claim system — when
a Family+ user tracks a PO for their child at JKW Academy, and JKW Academy
is a FundBridge Vendor, the PO status syncs bidirectionally.

### Krystal's curriculum is the content layer

The platform is infrastructure. The curriculum library is content. AI
generates it, Krystal validates it, families and vendors consume it. This
content layer is the third revenue source (after vendor subscriptions and
family subscriptions): premium curriculum packs sold individually or
bundled with Pro tiers.

### The accessibility engine is a differentiator at every tier

Isabella's Legacy features aren't confined to a "special needs" tab. They
permeate the platform: sensory-friendly mode available to every user, adaptive
activity flags on every lesson plan, special needs profiles on every student
record, accommodation notes visible to every vendor who needs them. This is
why the underserved communities in Section 2 choose FundBridge over anything
else — because the platform was built from the inside of their experience,
not as an accommodation bolted on after the fact.

---

## 8. The Competitive Moat (Expanded)

The strategy doc identified state-by-state compliance knowledge as the moat.
This proposal adds three more:

1. **Network density.** Free families on the platform create a local network
   that vendors pay to access. Once 200 families in El Cajon are on
   FundBridge, every enrichment vendor in El Cajon needs to be there too —
   or be invisible. This is a geographic network effect that compounds.

2. **Community trust.** The underserved communities in Section 2 are
   high-trust, word-of-mouth networks. Once FundBridge is recommended in
   "Homeschooling with Autism," every ASD family in that 15,000-member group
   evaluates it. If it works, they tell everyone. If a competitor appears
   later without the Isabella's Legacy features, without the sensory-friendly
   mode, without the accommodation profiles — they lose on trust.

3. **Curriculum depth.** Every lesson plan Krystal reviews, every activity
   guide the AI generates, every progress report template — these accumulate
   over time into a content library that no new entrant can replicate
   overnight. By year 2, FundBridge has hundreds of reviewed lesson plans
   across STEAM disciplines, adapted for multiple ability levels, tagged with
   sensory ratings and mobility requirements. That's not software — it's
   intellectual property.

---

## 9. Open Questions to Revisit

1. **Krystal's interest level.** Does she want an active role? Advisory?
   Name-on-the-curriculum? Equity? This conversation drives the curriculum
   strategy.

2. **Entity structure.** FundBridge as a DBA under BTS? Separate LLC?
   Krystal as co-founder? Erick's father should weigh in on tax and
   liability implications.

3. **Curriculum licensing.** If Krystal creates curriculum templates, who
   owns them? If the AI generates lesson plans, who owns those? Clear IP
   assignment from day one.

4. **Free tier infrastructure cost.** 2,000 free families generate database
   reads, API calls, and Vercel bandwidth. At what point does the free tier
   cost more than the vendor revenue it enables? Need to model this.

5. **Community moderation.** Forums and discussion boards for underserved
   communities (especially special needs, LGBTQ+, religious) require careful
   moderation. Who does this? AI + human review? Community self-governance?
   This is a people problem, not a tech problem.

6. **State compliance research.** The state-by-state compliance module is the
   moat, but it requires legal research for each state's ESA/charter rules.
   Can Krystal or Erick do this, or does it require a contractor? AI can
   draft — someone needs to verify.

7. **Naming.** "FundBridge" is a working name. It describes the vendor
   product well but doesn't capture the family/community/curriculum
   dimensions. Worth revisiting when the product scope solidifies.

---

## 10. The Big Picture

The strategy doc said: "The school choice movement is putting billions of
dollars into the hands of families who need to spend it with vendors who
have no tools to manage the money flow."

This proposal says: "And those families — especially the ones with disabled
children, the ones homeschooling for religious reasons, the ones in rural
areas, the military families, the ones the system forgot — have no tools
to manage their side of it either."

FundBridge is not just vendor software. It's the operating system for the
homeschool economy. Vendors manage supply. Families manage demand. The
platform connects them, the fund orchestrator moves the money, the
curriculum library provides the content, and the accessibility engine
ensures nobody gets left behind.

Built by a backcountry tech company. Reviewed by an educator who taught
from kindergarten through university and homeschooled her own children.
Named after a little girl with Dravet syndrome whose family refused to
accept that she couldn't learn.

That's the product. That's the story. That's the moat.

---

*This document lives at:*
*`/Users/ericktronboll/Projects/Backcountry Tech Solutions/jkw-academy/docs/unsolicited-proposal-fundbridge.md`*

*Related:*
*- `multi-tenant-strategy.md` — original vendor-focused strategy*
*- `master-plan-jkw-academy.md` — the JKW single-tenant build plan*
