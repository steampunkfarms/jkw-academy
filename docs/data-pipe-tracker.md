# JKW Academy — Data Pipe Tracker

Every placeholder that needs real data piped in before launch. Check off as completed.

## Global / Layout

- [ ] **Logo image** — `components/public/Navbar.tsx` — needs JKW logo file (currently text placeholder). Get from Jeremy or extract from Wix site.
- [ ] **Favicon / OG image** — `app/layout.tsx` — needs branded favicon.ico + social share image
- [ ] **Google Fonts** — `app/layout.tsx` — finalize heading + body fonts (currently system Inter). Consider Poppins, Montserrat, or similar for headings.
- [ ] **Social links** — `components/public/Footer.tsx` — Instagram/Facebook URLs hardcoded from Wix scan, verify still current

## Homepage (`/`)

- [ ] **Hero background** — `app/(public)/page.tsx` — needs hero image or video of kids in class. Currently solid navy.
- [ ] **Hero tagline** — placeholder copy, Jeremy may want different wording
- [ ] **Featured classes** — wired to DB (ClassTemplate), but needs curated "featured" flag or manual pick
- [ ] **Testimonials** — wired to DB, but testimonial photos needed (currently text-only)
- [ ] **Charter partner logos** — wired to DB (CharterSchool.logoUrl), but all logoUrl fields are null — need 13 charter school logo images
- [ ] **Newsletter CTA copy** — "Get a Free STEAM Challenge Kit Idea" is placeholder — confirm with Jeremy
- [ ] **Stats section** — "500+ students served" etc. — needs real numbers from Jeremy

## Programs (`/programs`)

- [ ] **Class photos** — ClassTemplate.photoUrl is null for all 29 templates — need photos per class or per STEAM category
- [ ] **Category icons** — using Lucide icons as placeholders, Jeremy may want custom STEAM icons

## Programs Detail (`/programs/[slug]`)

- [ ] **Class photos/gallery** — "What Your Child Will Build" section needs project photos per class
- [ ] **Video previews** — ClassTemplate.videoPreviewUrl is null — optional but powerful
- [ ] **Learning objectives** — ClassTemplate.learningObjectives is null — Jeremy to provide per class
- [ ] **Materials list** — ClassTemplate.materialsNeeded is null for most classes
- [ ] **Instructor photo** — currently using name only, needs headshot per instructor

## Camps (`/camps`)

- [ ] **Camp data** — no CampTemplate/CampSession models yet (Phase 2). Page is a shell linking to registration.
- [ ] **Camp photos** — need seasonal camp imagery

## Tutoring (`/tutoring`)

- [ ] **Tutoring details** — pricing, availability, subjects — get from Jeremy
- [ ] **Request form** — shell only, needs Resend integration (Session 10)

## About (`/about`)

- [ ] **Founder photos** — TeamMember.photoUrl is null — need Jeremy and Allie headshots
- [ ] **Isabella's story** — placeholder text, should be reviewed/written by Jeremy for sensitivity
- [ ] **Team member bios** — seeded from Wix, Jeremy to review/approve
- [ ] **Marquis Who's Who badge** — needs image asset
- [ ] **SD Voyager feature** — link hardcoded from Wix, verify still live

## Charter Partners (`/about/charter-partners`)

- [ ] **Charter logos** — CharterSchool.logoUrl null for all 13 — need logo images
- [ ] **Charter descriptions** — currently showing name + website only, could add brief descriptions
- [ ] **"How it works" diagram** — placeholder text, could use a visual flow diagram

## FAQ (`/faq`)

- [ ] **AI Chatbot** — shell only, needs Claude Haiku integration (Session 11)
- [ ] **FAQ completeness** — 10 entries seeded, Jeremy may want more

## Contact (`/contact`)

- [ ] **Contact form** — shell only, needs Resend integration (Session 10)
- [ ] **Map embed** — placeholder, needs Google Maps embed or static map image
- [ ] **Business hours** — placeholder, get from Jeremy
- [ ] **Phone number** — not on current Wix site, get from Jeremy if they want one public

## Donate (`/donate`)

- [ ] **Donation integration** — shell only, needs Square checkout (Session 6)
- [ ] **Scholarship fund copy** — placeholder, Jeremy to write or approve
- [ ] **Tax-deductible status** — verify if JKW is 501(c)(3) or LLC (affects donation language)

## Accessibility (`/accessibility`)

- [ ] **Accessibility statement** — placeholder text, should be reviewed for legal accuracy
- [ ] **Caregiver resources** — links to Dravet syndrome resources, epilepsy foundation, etc.
- [ ] **Toggle persistence** — works via localStorage for now, will persist to User.accessibilityPrefs after auth (Session 8)

## Images (General)

- [ ] **All Vercel Blob uploads** — no images uploaded yet. Need: logo, favicon, founder photos, class photos, charter logos, camp photos, hero imagery, testimonial author photos, OG image.
- [ ] **Image optimization** — once real images are in, add blur-up placeholders (kk-photog pattern)
