# JKW Academy — Master Plan

**Date:** 2026-03-23
**Author:** Claude Opus (CChat session in claude.ai project space)
**For:** Erick Tronboll (BTS) to gift to Jeremy Keith Wilson (JKW Innovations LLC)
**Status:** MASTER PLAN — Ready for review, then phased implementation
**Rate Plan:** Neighbor (at-cost hosting, gift build)
**Target Domain:** jkw.academy (post-POC)
**Staging Domain:** jkw.tronboll.us (during build)

---

## 0. Why This Exists

Jeremy Keith Wilson is Erick's childhood friend. He and his daughter Allie run
JKW Innovations, a STEAM-focused homeschool enrichment center in San Diego
County. They've been doing this since 2002 — over two decades of teaching kids
to build, code, create, and think. They operate out of a rented martial arts
studio in El Cajon and a satellite location in Point Loma. They accept charter
school enrichment funds from 12+ charter partners, run 44+ classes per semester
across Mon–Thu, host camps during every school break, and maintain a VEX
Robotics competition program.

Jeremy has a severely disabled daughter. The work he does matters.

Their current website is on Wix. It's functional but it's a ceiling, not a
foundation. The Wix booking system handles class registration, but everything
else — charter fund processing, parent communication, curriculum delivery,
camp management, kit sales, community building — is stitched together with
email, Venmo, Google Classroom, and manual processes.

Erick wants to build Jeremy's entire digital platform on the BTS stack as a
gift. Neighbor rate: at-cost hosting, full premium build. The goal is to give
Jeremy a system so far beyond what any competitor has that it becomes the
defining competitive advantage of his program — and to demonstrate what
BTS can do when the gloves come off.

After POC validation, the domain moves to **jkw.academy**.

---

## 1. Deep Scan: What JKW Has Today

### 1A. Current Website (Wix)
- **Platform:** Wix.com (free/premium tier)
- **Domain:** jkwinnovationsllc.com (migrated from jkwinnovations.net)
- **Pages:** Home, About (founders, team, mission, policies, FAQ), Programs
  (Spring 2026, Camps, Tutoring), Registration, Contact, Donate, Calendar
- **Booking:** Wix Bookings — each class is a "service" with semester pricing
- **Payment:** Wix accepts online payment; also Cash, Check, Venmo offline
- **Email:** jkwinnovations@gmail.com (Gmail)
- **Social:** Instagram (245 followers), Facebook (117 likes)
- **Content Delivery:** Google Classroom for online sessions
- **Branding:** JKW logo, Marquis Who's Who badge, "San Diego's Most
  Inspiring Stories" feature
- **Design:** Template-driven Wix layout, functional but generic

### 1B. What JKW Offers (Spring 2026 catalog)

**44 classes across 4 days (Mon–Thu), 9AM–3PM, 55-minute sessions:**

| Category | Classes | Examples |
|----------|---------|----------|
| Science | 8+ | Biology, Mad Scientist, Rocket Scientist, Grossology, Pokémon Science, Wild Weather |
| Technology | 10+ | Coding (Scratch), Minecraft Education Coding, Roblox Studio, Video Editing, Animation, Photoshop, 3D Printing |
| Engineering | 6+ | Creative Design & Engineering, Robotics & Automation, Lego Engineering, Survival Skills, Woodworking, Ancient Medieval War Inventions |
| Art | 5+ | Art Fusion, Young Designers, Graphic Design & Digital Art, VFX & Multimedia |
| Math | 4 | Math Help TK-2nd (×2), Math Help 3rd-7th (×2) |
| Character/Life | 4+ | Life Skills Development, Comp & Critical Thinking, Story Explorers, Narrative Reading |
| Fitness | 4+ | Ninja Fitness, Obstacles & Challenges, PE & Games, Sports Skills, Beginner Sports |

**Pricing:** $250–$290 per semester per class (15–16 week semesters)
**Ages:** TK through 9th grade (some classes through 12th)
**Ratio:** 8–12 students per instructor, cap at 15
**Camps:** Winter break, spring break, summer — week-long themed programs
**Tutoring:** Reactive (falling behind) and proactive (getting ahead)
**VEX Robotics:** Competition teams, extended lab hours before events

### 1C. Charter School Funding Model (CRITICAL business context)

JKW's revenue primarily flows through homeschool charter school enrichment
funds. This is NOT a standard e-commerce model. Here's how it works:

1. **Parent enrolls child** in a charter school (Pacific Coast Academy,
   Cabrillo Point, Sage Oak, etc. — JKW partners with 12+ charters)
2. **Charter allocates enrichment funds** to the family (varies by charter,
   typically $2,000–$3,000/year per student)
3. **Parent selects JKW as an approved vendor** and requests an enrichment
   certificate or purchase order for each class
4. **JKW receives the certificate/PO** and the child gets their spot
5. **Charter pays JKW directly** (net 30–90 days depending on charter)
6. **Some parents pay out-of-pocket** (cash, check, Venmo) — either because
   they don't have a charter or their funds are exhausted

This means:
- JKW's billing is a hybrid: charter invoicing + direct parent payment
- Charter paperwork is a MASSIVE administrative burden (12+ different charter
  systems, each with their own forms, timelines, and approval processes)
- Deposit system: $25/class deposit to hold spots until charter funds arrive
- The registration flow must handle both payment paths gracefully

### 1D. Pain Points (what the new platform must solve)

1. **Registration is manual chaos.** Wix booking works but doesn't handle
   charter fund workflows, sibling enrollment, multi-class carts, or waitlists.
2. **No parent portal.** Parents email or text for everything — schedule
   changes, absences, payment status, progress updates.
3. **No curriculum management.** Class content lives in Google Classroom and
   Jeremy's head. No structured curriculum library, no reusable lesson plans.
4. **No camp management.** Camps are one-off Wix bookings with no theme
   browser, supply list automation, or registration flow distinct from semester
   classes.
5. **No kit sales channel.** Jeremy teaches 3D printing, robotics, coding,
   woodworking, electronics — every one of these could sell take-home project
   kits. Currently zero e-commerce.
6. **Charter fund tracking is a spreadsheet.** Which charters owe what, which
   POs are pending, which families have paid deposits — all manual.
7. **No student progress tracking.** Parents have no visibility into what their
   kids are learning or achieving across semesters.
8. **Testimonials are buried.** The site has great reviews but no systematic
   collection or display strategy.
9. **Social media is underutilized.** 245 Instagram followers for a program
   this good is a crime. No automated content pipeline.
10. **Special needs accommodations aren't showcased.** Jeremy and Allie's
    inclusive approach (adapting for all abilities) is a massive differentiator
    that's barely mentioned.
11. **No alumni network.** Students who age out have no ongoing connection.
12. **No teacher/instructor portal.** If JKW grows beyond Jeremy and Allie,
    there's no system for additional instructors.
13. **The Wix site can't scale.** Adding 20 new features to Wix means 20 new
    Wix workarounds. The platform is a ceiling.

---

## 2. The Vision: JKW Academy

**JKW Academy** is not a website. It's a learning ecosystem. It replaces Wix,
Google Classroom, email chains, spreadsheets, and manual processes with a
single AI-supercharged platform that runs the entire operation.

**The tagline:** "Where Innovation Meets Education"

**The positioning:** No other homeschool enrichment center in San Diego — or
anywhere — has a platform like this. Not Snapology. Not Thrive STEAM. Not
STEAM Academy. They all have template websites with basic registration. JKW
Academy will have an integrated learning management system, AI-powered
progress tracking, a kit shop, camp management, charter fund automation, a
parent portal, and a community hub.

---

## 3. The 20 Innovation Angles

Every one of these is a feature no competitor has. Together, they make JKW
Academy the most advanced homeschool enrichment platform in the country.

### CORE PLATFORM (what runs the business)

**1. Smart Registration Engine**
Replace Wix bookings with a registration system that understands JKW's world.
Multi-child enrollment in a single flow. Shopping cart for multiple classes.
Automatic sibling detection. Age/grade validation against class requirements.
Waitlist with auto-promote. Schedule conflict detection ("your child is already
in a Monday 10AM class"). Semester-aware: knows when Spring 2026 ends and
Fall 2026 opens. Visual weekly schedule builder — drag classes into time slots,
see the family's whole week at a glance.

**2. Charter Fund Orchestrator**
The killer feature no one else has. Parents select their charter school during
registration. The system knows each charter's: accepted vendor status, required
forms, payment timeline, and fund allocation limits. It auto-generates the
enrollment documentation for each charter, tracks PO status (requested →
submitted → approved → paid), calculates remaining enrichment fund balance per
student, and alerts parents when funds are running low. Admin dashboard shows
charter receivables at a glance: "Pacific Coast Academy owes $4,200 across 12
students, oldest PO is 45 days." This alone saves Jeremy hours per week.

**3. Dual Payment Gateway (Stripe + Charter)**
Stripe for direct parent payments (card, ACH). Charter fund pathway for
charter-funded enrollments (invoice tracking, no online payment needed — the
charter pays JKW directly). The system handles the $25 deposit logic: if
charter funds aren't available yet, collect a deposit via Stripe; when the
charter PO is approved, refund the deposit. Venmo/cash tracking for offline
payments. Real-time financial dashboard: collected vs. outstanding vs. pending
charter funds.

**4. Parent Portal (Family Dashboard)**
Magic-link login (no passwords — homeschool parents have enough passwords).
Each family sees: enrolled classes with schedule, attendance record, student
progress notes, payment/charter fund status, upcoming camp registrations,
message thread with JKW staff, downloadable progress reports for charter
accountability. Push notifications for: class cancellations, schedule changes,
new semester registration opening, camp early-bird windows.

**5. Admin Command Center**
Jeremy and Allie's operational cockpit. Today's class roster. Attendance
one-tap check-in. Student notes (behavioral, achievement, accommodation needs).
Revenue dashboard (charter funds + direct payments + deposits). Class capacity
heatmap. Waitlist management. Charter PO tracker. Quick-actions: send parent
notification, mark attendance, process refund, generate charter report.

### LEARNING & CURRICULUM (what makes students succeed)

**6. Curriculum Library (LMS Lite)**
Not a full LMS — JKW doesn't need Moodle. A structured library where Jeremy
stores lesson plans, project guides, reference materials, and instructional
videos organized by class → unit → lesson. Each lesson has: objectives, supply
list, instructor notes, student handout (downloadable PDF), and optional video
embed. This replaces Google Classroom with something purpose-built. Teachers
can clone and customize lessons across semesters.

**7. AI-Powered Student Progress Tracking**
After each class session, instructors add quick notes: "Maya completed the
circuit board project independently. Struggled with soldering but showed
persistence." Claude AI processes these notes at end-of-semester into:
narrative progress reports per student, skill assessments mapped to STEAM
competencies, portfolio-ready achievement summaries. Parents get beautiful
PDF progress reports they can submit to their charter schools for
accountability. No other enrichment center generates these automatically.

**8. Student Portfolio System**
Each student accumulates a digital portfolio across their time at JKW. Photos
of projects (3D prints, woodworking, art), code repositories (Scratch projects,
Roblox creations), video game screenshots, robotics competition results. The
portfolio is shareable — parents can send a link to grandparents, charter
school advisors, or college admissions. For kids who've been at JKW for years,
this becomes a powerful artifact of their growth.

**9. Interactive Curriculum Previews**
Each class listing on the public site includes not just a description but a
mini-preview: a 60-second video, 3 sample project photos, learning objectives
mapped to standards (NGSS, Common Core where applicable), and a "What Your
Child Will Build" gallery. Parents can see exactly what "Robotics & Automation"
means before committing $290.

### COMMERCE (what grows the revenue)

**10. STEAM Kit Shop**
E-commerce powered by Stripe. Jeremy already teaches 3D printing, electronics,
robotics, woodworking, coding — every one of these translates to a take-home
project kit. Categories: Starter Kits (everything needed for a class project,
shipped to families doing remote learning), Maker Kits (standalone projects
not tied to a specific class), Competition Kits (VEX Robotics parts bundles),
Supply Refills (3D printer filament, electronics components). Each kit page
includes: what's in the box, difficulty level, estimated completion time, age
range, and a video walkthrough. Kits can be bundled with class enrollment at
a discount. Eventually: subscription box ("JKW Monthly Maker Box").

**11. Camp Command**
A dedicated camp management module separate from semester classes. Browse camps
by: theme (Robotics Week, Game Design Intensive, Art Studio), date range, age
group, and price. Each camp page includes: daily schedule, supply list (auto-
generated from curriculum library), instructor bios, "What to Bring" checklist,
early-bird pricing with countdown timer, and spots-remaining indicator. Camp
registration feeds into the same parent portal — families see all enrollments
in one place. Post-camp: photo gallery, project showcase, and AI-generated
summary of what each student accomplished.

**12. Tutoring Marketplace**
Tutoring gets its own booking flow. Subject selector, grade level, availability
calendar (shows Jeremy and Allie's open slots), session type (reactive: "help
with homework", proactive: "get ahead in algebra"), and pricing. Online
tutoring via embedded video (Daily.co or similar). Session notes visible in
parent portal. Recurring booking option for weekly sessions.

### COMMUNITY & GROWTH (what builds the brand)

**13. AI Chat Ambassador**
A Claude-powered chat widget on the public site that knows everything about
JKW: class catalog, pricing, charter school compatibility, schedule, policies,
FAQ, instructor bios. Parents can ask "What coding classes are available for
my 7-year-old on Wednesdays?" and get an instant, accurate answer with a link
to register. The chat captures leads — if a parent asks about a class, the
system logs their interest and can follow up. After hours, the bot collects
contact info and Jeremy responds next day.

**14. Testimonial Engine**
Automated collection: at end of each semester, parents receive a one-click
review request via email. Reviews display on the site with: parent name (first
name + last initial), student grade level, classes taken, and star rating.
The best reviews auto-surface on the homepage. Jeremy can feature specific
testimonials on class pages. Integration with Google Reviews — prompt parents
to also leave a Google review (boosts local SEO).

**15. Newsletter & Social Pipeline**
Resend-powered newsletter. Segments: current families, prospective families,
alumni, charter school contacts. Automated content: "This Week at JKW" recap
with photos from classes (privacy-respecting — only students with photo
release). "Next Semester Preview" campaigns. Camp announcements with early-bird
registration links. AI-drafted content that Jeremy reviews in 5 minutes. Social
media integration: auto-generate Instagram-ready post cards from class photos
and student achievements (with consent).

**16. Alumni Network & Showcase**
Students who age out of JKW (post-9th grade or 12th grade) join the alumni
network. Their portfolios persist. Alumni can: share what they're doing now
(college, careers, continued projects), mentor current students, return as
guest instructors or teaching assistants, and be featured in "Where Are They
Now" spotlights. This creates a longitudinal story — "This kid started in
Minecraft Jr. Creators at age 6, built their first robot at 9, won a VEX
competition at 12, and is now studying mechanical engineering at SDSU." That
story sells the program better than any marketing copy.

### ACCESSIBILITY & INCLUSION (what serves Jeremy's mission)

**17. Inclusive Learning Hub**
JKW's about page says they ensure "every student, including those with special
needs, receives the tailored education and assistance they deserve." This
deserves its own dedicated section on the site. An Inclusive Learning page
that explains: how JKW adapts curriculum for different learning styles and
abilities, what accommodations are available, instructor training and
experience with special needs students, testimonials from families of children
with disabilities. During registration, an optional (never required)
accommodation request field lets parents share relevant information privately
with instructors. This is a massive differentiator — most enrichment centers
either don't serve special needs kids or don't talk about it.

**18. Accessibility-First Design**
The entire platform built with WCAG 2.1 AA compliance. Screen reader friendly.
Keyboard navigable. High contrast mode. Dyslexia-friendly font option. This
isn't just good practice — it's mission-aligned. If JKW serves kids with
disabilities, the website should be accessible to parents with disabilities
too.

### OPERATIONS & SCALE (what prepares for growth)

**19. Instructor Portal**
When JKW grows beyond Jeremy and Allie (and it will, with this platform),
new instructors get their own login. They see: their class schedule, student
roster with accommodation notes, curriculum library for their assigned classes,
attendance check-in, session notes entry, and a message thread with admin.
They do NOT see: finances, charter fund data, other instructors' classes, or
admin settings. Role-based access from day one — even if Jeremy is the only
instructor for now, the architecture supports growth.

**20. Charter School Partner Portal**
The ultimate power move. Give each charter school partner a read-only portal
view showing: which of their students are enrolled at JKW, attendance records,
class descriptions and learning objectives aligned to standards, and end-of-
semester progress summaries. Charter schools are JKW's B2B customers — making
their lives easier means they keep approving JKW as a vendor and recommend JKW
to new families. No competitor does this. It transforms JKW from "another
vendor" to "the vendor who makes our job easy."

---

## 4. Tech Stack

Built on the proven BTS stack, adapted for JKW's needs:

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | Next.js 16 App Router | Same as every BTS site |
| Language | TypeScript 5.7+ | Strict mode |
| Styling | Tailwind v4 | Public site — JKW branded |
| Database | Vercel Postgres (Neon) via Drizzle ORM | Same pattern as bts-site, cws, semper-vets |
| Auth | Auth.js v5 — magic link (parents, instructors) + credentials (admin) | Role-based: admin, instructor, parent, charter_contact |
| Email | Resend | Transactional + newsletter + charter notifications |
| AI | Anthropic Claude Sonnet 4.6 | Chat ambassador, progress reports, content drafting |
| AI (fast) | Claude Haiku 4.5 | Quick triage, lead capture, chat routing |
| Payments | Stripe | Kit shop, direct parent payments, camp deposits |
| Storage | Vercel Blob | Student portfolio photos, curriculum PDFs, kit images |
| Video | Daily.co (optional) | Online tutoring sessions |
| Icons | Lucide React | Consistent with BTS family |
| Hosting | Vercel (steampunk-studiolo team) | Neighbor rate: at-cost |
| Domain | jkw.tronboll.us → jkw.academy | Staging → production |

### Reusable Patterns from the BTS Portfolio

We're not building from zero. These proven patterns port directly:

| Pattern | Source Project | Reuse in JKW |
|---------|--------------|--------------|
| Magic link auth + role-based JWT | semper-vets, cws | Parent/instructor/admin auth |
| Stripe ad-hoc invoicing + webhook lifecycle | bts-site billing paradigm | Kit shop + direct payment |
| AI chat widget (Claude SSE streaming) | bts-site | Chat ambassador |
| AI-generated narrative reports | bts-site job chronicles | Student progress reports |
| Newsletter + subscriber management | bts-site Phase N spec | Parent newsletter |
| Portal with signed URLs + magic links | bts-site client portal spec | Parent portal |
| Image pipeline (Blob + optimization) | kk-photog | Student portfolios, kit photos |
| Admin command center pattern | bts-site, cws, semper-vets | JKW admin dashboard |
| Resend transactional email | all BTS sites | Charter notifications, receipts |
| Health endpoint + orchestrator integration | all BTS sites | Monitoring, cron jobs |
| Revenue tracking + deal terms | bts-site | Charter fund accounting |

---

## 5. Database Schema (High-Level)

### Auth & Users
- `users` — all user types (admin, instructor, parent, charter_contact)
- `sessions`, `verification_tokens` — Auth.js v5 standard
- `families` — parent + children grouping
- `students` — individual student records linked to family
- `instructors` — staff profiles, bios, certifications

### Academics
- `semesters` — Spring 2026, Fall 2026, etc.
- `classes` — class definitions (title, description, category, age range, capacity, price, supply list)
- `class_sessions` — specific instances of a class in a semester (day, time, instructor, room)
- `enrollments` — student × class_session junction (status: enrolled, waitlisted, dropped, completed)
- `attendance` — per-session attendance records
- `curriculum_units` — structured lesson plans grouped by class
- `lessons` — individual lessons within units (objectives, materials, instructor notes)
- `student_progress_notes` — per-session instructor observations
- `progress_reports` — AI-generated semester summaries
- `student_portfolio_items` — photos, files, links to student work

### Charter Funds
- `charter_schools` — partner charters (name, contact, payment terms, required forms)
- `charter_enrollments` — links enrollment to charter funding
- `charter_purchase_orders` — PO tracking (status: requested, submitted, approved, paid)
- `charter_deposits` — $25 deposit tracking with refund status
- `charter_fund_balances` — per-student remaining enrichment funds

### Commerce
- `products` — kit shop items (name, description, price, inventory, images)
- `product_categories` — Starter Kits, Maker Kits, Competition Kits, Supplies
- `orders` — kit purchases
- `order_items` — line items
- `stripe_customers` — payment customer records
- `stripe_events` — webhook event log

### Camps
- `camps` — camp definitions (theme, dates, age range, price, capacity)
- `camp_days` — daily schedule within a camp
- `camp_enrollments` — student × camp junction
- `camp_supply_lists` — auto-generated from curriculum

### Communication
- `messages` — parent ↔ admin message threads
- `notifications` — system notifications (class changes, new semesters, etc.)
- `newsletter_subscribers` — segmented subscriber list
- `newsletter_editions` — composed newsletters
- `testimonials` — parent reviews with approval workflow
- `ai_conversations` — chat ambassador logs

### Settings & Config
- `settings` — site-wide configuration
- `locations` — El Cajon, Point Loma, future expansion
- `rooms` — rooms within locations (for schedule conflict detection)

Estimated table count: ~35 tables. Comparable to semper-vets (which has ~40).

---

## 6. Phased Implementation

Each phase delivers standalone value. Jeremy can start using Phase 1 while
we build Phase 2. No phase depends on a future phase to be useful.

### Phase 1 — Foundation & Public Site (POC)
**Goal:** Replace Wix with a stunning public site that makes JKW look like
the leader they already are. Deploy to jkw.tronboll.us for Jeremy's review.

**Deliverables:**
- Project scaffold (Next.js 16, Drizzle, Neon, Vercel)
- CLAUDE.md + docs structure following BFOS protocol
- Public pages: Home (hero, featured classes, testimonials, CTAs), About
  (founders, team, mission, inclusive learning), Programs (browsable class
  catalog with filters by day/category/age), Camps, Tutoring, Contact, Donate
- Class detail pages with descriptions, schedule, pricing, supply lists
- Responsive design with JKW branding (not the Wix template aesthetic)
- SEO-optimized for "San Diego STEAM homeschool enrichment"
- AI Chat Ambassador (Claude-powered, knows the catalog)
- Basic admin: manage classes, update content
- Health endpoint + orchestrator registration

**What Jeremy sees:** "Holy crap, that's MY business?"

### Phase 2 — Registration Engine + Parent Accounts
**Goal:** Replace Wix bookings. Parents can browse, select, and register for
classes through a purpose-built flow.

**Deliverables:**
- Auth.js v5: parent magic-link login
- Family + student profile creation
- Smart registration: multi-child, multi-class, schedule conflict detection
- Waitlist with auto-promote
- Semester-aware class listings (knows Spring vs Fall)
- Basic parent dashboard: enrolled classes, schedule view
- Admin: enrollment management, roster views, capacity tracking

### Phase 3 — Payments + Charter Fund Orchestrator
**Goal:** Handle money. Both direct parent payments and charter fund tracking.

**Deliverables:**
- Stripe integration: direct parent payments for classes, camps, tutoring
- Charter school partner database (12+ charters with their rules)
- Charter enrollment flow: select charter → system knows the process
- PO tracking: requested → submitted → approved → paid
- $25 deposit logic with auto-refund on charter approval
- Financial dashboard: collected vs outstanding vs pending charter
- Admin: charter receivables view, payment reconciliation

### Phase 4 — Parent Portal + Communication
**Goal:** Parents stop emailing/texting for routine questions.

**Deliverables:**
- Full parent portal: enrolled classes, schedule, attendance, payments
- Message thread (parent ↔ JKW staff)
- Notification system: class cancellations, schedule changes, new semesters
- Absence reporting with one-tap "my child is absent today"
- Charter fund balance visibility per student
- Downloadable enrollment confirmation letters for charters

### Phase 5 — Curriculum Library + Student Progress
**Goal:** Move class content from Jeremy's head into a structured system.

**Deliverables:**
- Curriculum library: class → unit → lesson hierarchy
- Lesson builder: objectives, supply list, instructor notes, handouts
- Instructor session notes (quick-entry after each class)
- AI-generated progress reports at end of semester
- Student portfolio system: photos, project files, achievements
- Parent-visible progress in portal
- Exportable progress reports (PDF) for charter accountability

### Phase 6 — Kit Shop + Camp Command
**Goal:** New revenue streams.

**Deliverables:**
- E-commerce: STEAM kit shop with Stripe checkout
- Product management in admin (inventory, pricing, images)
- Camp management module (themes, dates, daily schedules)
- Camp registration separate from semester enrollment
- Camp supply list auto-generation from curriculum
- Kit + class bundle discounts

### Phase 7 — Newsletter + Social + Testimonials
**Goal:** Systematic marketing that runs itself.

**Deliverables:**
- Newsletter engine (Resend): compose, segment, send, track
- AI-drafted weekly recap content
- Testimonial collection engine (automated end-of-semester requests)
- Social media post card generator from class photos
- Alumni network section

### Phase 8 — Instructor Portal + Charter Partner Portal
**Goal:** Scale beyond Jeremy and Allie.

**Deliverables:**
- Instructor role: schedule, roster, curriculum, attendance, notes
- Charter partner portal: read-only view of their students at JKW
- Attendance reporting for charter compliance
- Role-based access across all portals
- Tutoring marketplace with online booking + optional video sessions

---

## 7. Competitive Landscape — Why This Wins

I scanned the top homeschool STEAM enrichment programs nationally:

| Competitor | Website | What They Have | What JKW Academy Will Have |
|-----------|---------|---------------|--------------------------|
| Snapology | Template site | Basic class listings, locations | Full LMS, AI progress, kit shop, charter automation |
| Thrive STEAM | WordPress | Class schedule, registration form | Smart registration, parent portal, instructor portal |
| STEAM Academy (SoCal) | Template site | Program descriptions, enrollment form | Interactive curriculum previews, student portfolios |
| STEAMwhiz (NY) | Custom site | Class listings, testimonials | All of the above + charter partner portal |
| Homeschool STEAM Fest | Wix | Events, basic info | Camp command, newsletter engine, alumni network |

**Nobody has:**
- Charter fund orchestration with PO tracking
- AI-generated student progress reports
- A kit shop integrated with curriculum
- A charter school partner portal
- Student portfolios that span years of enrollment
- Smart registration with sibling/schedule/charter awareness

JKW Academy won't just be the best in San Diego. It will be the most advanced
homeschool enrichment platform in the country. Period.

---

## 8. Brand & Design Direction

**Name:** JKW Academy (the "Innovations LLC" is the legal entity; the brand
is the academy)

**Domain:** jkw.academy — short, memorable, immediately communicates education

**Design Philosophy:** Clean, modern, warm. Not corporate. Not childish. The
design should say "we take education seriously AND your kids will love it here."
Think: Apple's clarity meets Montessori's warmth.

**Color Direction (to be refined with Jeremy):**
- Primary: A rich, energetic color that says STEAM innovation (candidates:
  deep blue-purple, electric teal, or warm amber — NOT the default Wix blue)
- Accent: Something bright that pops against the primary (for CTAs, highlights)
- Neutrals: Warm grays and off-whites — never sterile
- Category colors: each STEAM discipline gets a color (Science=green,
  Technology=blue, Engineering=amber, Art=purple, Math=red) for visual
  navigation

**Typography:**
- Headings: A bold, confident sans-serif (Space Grotesk or similar)
- Body: Clean readable sans-serif (Inter)
- Code/STEM contexts: Monospace accent font (JetBrains Mono)

**Photography:** Real photos of real students doing real projects. Not stock
photos. Jeremy has years of class photos — we'll curate the best (with
permission) for the site.

**Illustrations:** Custom STEAM-themed illustrations for empty states, loading
screens, and decorative elements. Gears, circuits, paintbrushes, molecules —
a visual language that reinforces the brand.

---

## 9. What We Need From Jeremy

Before we start building, Erick should sit down with Jeremy and gather:

1. **Logo files** — highest resolution available, vector if possible
2. **Brand preferences** — any colors, fonts, or aesthetic preferences
3. **Class catalog data** — current semester complete with: titles,
   descriptions, grade ranges, pricing, supply lists, instructor assignments,
   schedules (we scraped most of this but need it verified)
4. **Charter school partner list** — all 12+ charters with: contact info,
   payment terms, required vendor forms, fund allocation ranges
5. **Photo archive** — class photos, student projects, facility photos (with
   permission releases noted)
6. **Staff bios** — Jeremy, Allie, any other instructors — photos, bios,
   certifications, teaching philosophy
7. **Testimonials** — existing reviews from site + Google + any saved emails
8. **Financial overview** — rough revenue breakdown (charter vs direct,
   classes vs camps vs tutoring) so we can prioritize features by impact
9. **Pain point ranking** — which of the 13 pain points hurts most?
10. **Special needs approach** — how they adapt, what to highlight
11. **Facility info** — El Cajon location details, Point Loma details, any
    expansion plans
12. **Curriculum samples** — a few lesson plans from different classes so we
    can design the curriculum library structure correctly

---

## 10. Domain & Hosting Strategy

### POC Phase
- **Staging:** jkw.tronboll.us (Erick-controlled DNS, same as all BTS staging)
- **Vercel:** New project "jkw-academy" under steampunk-studiolo team
- **GitHub:** steampunkfarms/jkw-academy (private)
- **Neon:** New database project for JKW

### Production Transition
- **Domain:** jkw.academy — Erick purchases and manages DNS
- **Transfer:** When Jeremy is ready, Erick can transfer DNS management to
  Jeremy or continue managing it under the Neighbor agreement
- **Email:** Set up DKIM/SPF on jkw.academy for Resend transactional email.
  Jeremy keeps jkwinnovations@gmail.com for personal use; system emails
  come from noreply@jkw.academy or hello@jkw.academy

---

## 11. Neighbor Rate Plan Details

Per the BTS pricing framework:

- **Hosting:** At-cost (~$25–35/month covers Vercel Pro share, Neon, Resend,
  Blob storage). If Erick chooses to absorb this entirely, that's his call.
- **Build:** Gift. No development charges.
- **AI costs:** Claude API usage for chat ambassador + progress reports.
  Estimated $5–15/month depending on traffic. At-cost pass-through or absorbed.
- **Stripe fees:** Standard 2.9% + $0.30 per transaction on kit sales and
  direct payments — paid by JKW (this is Stripe's fee, not BTS's).
- **Maintenance:** Erick handles updates, bug fixes, and feature additions
  as he has time. No SLA. No urgency. This is a gift.
- **Revenue model:** BTS does NOT take a percentage of JKW's revenue. This is
  not a client engagement. It's a friend helping a friend. If JKW eventually
  wants to pay for dedicated support or feature development, they move to
  Fair rate — but that's Jeremy's choice, never Erick's ask.

---

## 12. What Makes This Different From Every Other BTS Project

This isn't Kathy King where we're building to earn the bigger contract. This
isn't Semper Vets where we're replacing 25 tools. This isn't CWS where we're
optimizing a retail operation.

This is Erick saying: "My friend does incredible work for kids, including his
own severely disabled daughter, and he deserves a platform that matches the
quality of what he teaches."

The 20 innovation angles aren't features for features' sake. Each one either:
- Reduces Jeremy's administrative burden (so he can teach, not paperwork)
- Creates new revenue streams (kit shop, tutoring marketplace)
- Builds competitive moats (charter orchestrator, AI progress reports)
- Serves the mission (inclusive learning, accessibility, alumni network)
- Demonstrates BTS capabilities (this IS the ultimate case study)

When this is done, no other homeschool enrichment center in the country will
have anything close. And Jeremy will have it because his childhood friend
decided to go all in.

---

## 13. Implementation Timeline (Estimated)

| Phase | Scope | Estimated Sessions | Notes |
|-------|-------|-------------------|-------|
| 1 — Foundation + Public Site | Scaffold, public pages, AI chat | 4–6 CC sessions | POC delivery to Jeremy |
| 2 — Registration Engine | Smart enrollment, parent accounts | 3–4 CC sessions | Replaces Wix bookings |
| 3 — Payments + Charter | Stripe, charter fund tracking | 3–4 CC sessions | Handles money |
| 4 — Parent Portal | Dashboard, messaging, notifications | 2–3 CC sessions | Parents stop calling |
| 5 — Curriculum + Progress | LMS lite, AI reports, portfolios | 3–4 CC sessions | The differentiator |
| 6 — Kit Shop + Camps | E-commerce, camp management | 3–4 CC sessions | New revenue |
| 7 — Newsletter + Social | Marketing automation | 2–3 CC sessions | Growth engine |
| 8 — Instructor + Charter Portals | Role expansion, partner access | 2–3 CC sessions | Scale infrastructure |

**Total estimated:** 22–31 CC sessions across all phases.
**Phase 1 POC:** Can be complete and in Jeremy's hands within a week of
starting, given focused sessions.

---

## 14. Next Steps

1. **Erick reviews this plan.** Red-line anything that doesn't fit, add
   anything I missed, reprioritize phases if needed.
2. **Erick talks to Jeremy.** Gather the items from Section 9. Get buy-in
   on the vision. Jeremy doesn't need to understand the tech — he needs to
   see what his program will look like and feel like.
3. **Domain acquisition.** Check availability and pricing for jkw.academy.
   If it's taken, alternatives: jkwacademy.com, jkwinnovations.academy,
   or keep jkwinnovationsllc.com and point it at the new platform.
4. **Phase 1 build begins.** CChat designs the detailed spec for Phase 1
   (page structure, component architecture, schema for core tables). CC
   implements. Same two-actor model as every other BTS project.
5. **POC delivery.** Jeremy sees jkw.tronboll.us. His jaw drops. We iterate
   based on his feedback.
6. **Phase 2+ sequencing.** Based on Jeremy's pain point ranking and the
   academic calendar (ideal: have registration engine ready before Fall 2026
   enrollment opens).

---

## 15. Open Questions for Erick

1. **Jeremy's daughter** — you mentioned she has a severe disability. Is there
   anything specific about her experience at JKW or her needs that should
   inform the platform design? (Accessibility features, specific
   accommodation workflows, etc.)
2. **Facility situation** — their FAQ mentions searching for a permanent
   location. Should the platform support multiple locations from day one
   (El Cajon + Point Loma + future)?
3. **VEX Robotics** — this is a significant program (competition teams,
   extended lab hours). Does it deserve its own section/page, or fold it
   into the broader Programs section?
4. **Google Classroom migration** — how much existing content is in Google
   Classroom that we'd want to migrate into the curriculum library?
5. **Photo permissions** — does JKW already have photo release forms? The
   student portfolio and social media features depend on this.
6. **Charter priority** — which 3–4 charters represent the most students/
   revenue? We'll build the charter orchestrator around their specific
   workflows first.
7. **Timeline pressure** — is there a registration window we need to hit
   (e.g., Fall 2026 enrollment opens in [month])? That drives Phase 2
   priority.

---

*End of master plan. This document lives at:*
*`/Users/ericktronboll/Projects/Backcountry Tech Solutions/jkw-academy/docs/master-plan-jkw-academy.md`*

*When Erick approves, CChat will produce the Phase 1 detailed spec and CC
will begin implementation.*
