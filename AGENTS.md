# AGENTS.md — Project Operating Manual

## What This Project Is

A productised SaaS landing page service. Each client gets one high-converting landing page: copy, design, and build included. Fixed scope, fixed price (£997), delivered in 7 days.

This repository is the master template. Every client build starts from a clone of this repo. The goal is speed without sacrificing quality -- each page should feel custom, not templated.

Builder: Dan George, solo. Age 20, Liverpool, UK.

---

## Who We're Building For

Bootstrapped indie SaaS founders and indie hackers. They are:

- Technical people who can smell a generic template from a mile away
- Sceptical of agencies and overpriced designers
- Obsessed with conversion, not aesthetics for aesthetics' sake
- Active on Twitter/X, follow people like Pieter Levels, Marc Lou, levels.io
- Running tools in the £9-99/month SaaS range
- Often solo or 2-person teams, moving fast

The page has one job: convert a visitor into a trial signup or a paid user. Everything else is secondary.

---

## Tech Stack

| Layer | Tool | Why |
|---|---|---|
| Framework | Next.js 15 (App Router) | Fast, SEO-friendly, Vercel-native |
| Styling | Tailwind CSS v4 | Utility-first, fast to build |
| Components | shadcn/ui | Accessible, unstyled base, easy to customise |
| Deployment | Vercel | Zero-config, instant previews |
| Version control | GitHub | Standard |
| AI IDE | Antigravity | Agent-first, multi-model |
| Primary build model | Claude Sonnet 4.6 | Default for all coding tasks |
| Escalation model | Claude Opus 4.6 | Complex builds, deep debugging, copy work |

Do not suggest alternatives to these tools. Do not introduce new dependencies without flagging it and explaining why.

---

## Folder Structure
/app              → Next.js App Router pages and layouts
/components       → Reusable UI components
/ui             → shadcn/ui base components (do not edit these)
/sections       → Landing page sections (Hero, Features, Pricing, CTA, etc.)
/shared         → Shared elements used across sections (buttons, badges, etc.)
/specs            → Client briefs, copy docs, wireframes (one folder per client)
/public           → Static assets (images, fonts, icons)
/lib              → Utility functions
AGENTS.md         → This file. Read it before doing anything.

---

## Coding Conventions

- Use TypeScript. All files `.tsx` or `.ts`.
- Use named exports for components, not default exports. Exception: page files in `/app` use default exports (Next.js requirement).
- Component names are PascalCase. Files match the component name exactly.
- No inline styles. Tailwind classes only.
- Keep components small and single-purpose. If a component is doing more than one thing, split it.
- Props must be typed. No `any` types unless absolutely unavoidable -- and if so, leave a comment explaining why.
- Use `cn()` from `/lib/utils` for conditional class merging.
- No commented-out code left in files. If something is removed, delete it.
- Sections go in `/components/sections/`. Each section is its own file (e.g. `HeroSection.tsx`, `PricingSection.tsx`).

---

## Landing Page Structure (Default)

Every landing page follows this section order unless the client brief specifies otherwise:

1. **Hero** -- headline, subheadline, primary CTA button, optional social proof line
2. **Problem** -- 2-3 pain points the target user feels
3. **Solution** -- what the product does, framed as the fix to the problem
4. **Features** -- 3-6 key features, benefit-led not feature-led
5. **Social Proof** -- testimonials, logos, user count, or stats
6. **Pricing** -- clear, simple, one or two tiers max
7. **FAQ** -- 4-6 questions that handle objections
8. **Final CTA** -- repeat the primary CTA with urgency or reassurance

---

## Design Principles

- Mobile-first. Build for mobile, then scale up.
- Performance matters. No unnecessary animations, no heavy libraries. Target Lighthouse score 90+.
- Visual hierarchy over decoration. The user's eye should flow naturally from headline to CTA.
- Whitespace is not wasted space. Dense pages kill conversion.
- Use a maximum of two fonts: one for headings, one for body.
- Colour palette: one primary, one accent, neutral backgrounds. No rainbow UIs.
- Every CTA button must be the same colour across the page. One primary colour, used consistently.

---

## Copy and Brand Voice

This applies when writing or editing any copy on the page.

**Voice:** Direct, confident, founder-to-founder. Not corporate. Not hype. Not salesy.

**Tone:** Like a smart friend who knows their stuff and respects your time.

**Rules:**
- Lead with the problem or the outcome, never the feature
- No buzzwords: "revolutionary", "game-changing", "next-level", "cutting-edge", "seamless"
- No passive voice
- Short sentences. One idea per sentence.
- CTAs are action verbs: "Start free trial", "See it in action", "Get early access" -- not "Learn more" or "Click here"
- Headlines follow this formula where possible: [Outcome] + [Without Pain] or [For Audience]
- Every line on the page earns its place or it gets cut

---

## What Agents Must Never Do Without Asking

- Install a new npm package
- Change the folder structure
- Rename existing components or files
- Touch anything inside `/components/ui/` (shadcn base components)
- Remove or replace a section from the default landing page structure
- Change the deployment config or `next.config.js`
- Write placeholder copy like "Lorem ipsum" or "[Insert headline here]" -- always write real copy based on the brief in `/specs/`

---

## Client Brief Location

Each client project lives in `/specs/[client-name]/`. Before building anything, read the brief in that folder. If no brief exists, stop and ask Dan for it.

---

## Definition of Done

A section is done when:
- It renders correctly on mobile (375px) and desktop (1280px)
- It has no TypeScript errors
- It uses real copy, not placeholders
- It matches the design principles above
- It has been previewed in the browser and looks right

A page is done when all sections are done and the Vercel preview link is live.