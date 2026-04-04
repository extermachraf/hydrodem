# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (Next.js)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

No test suite is configured for this project.

## Architecture

**Hydrodem** is a Next.js (App Router) marketing website for a Moroccan hydraulic and mechanical maintenance company. It is a purely frontend, static-content site with no API routes or database.

### Page Structure

- `app/layout.tsx` — Root layout: loads fonts (Geist, Plus Jakarta Sans), renders NavBar, WhatsAppButton, and wraps all pages
- `app/page.tsx` — Home page, composes Hero + Expertise + Services + ContactFAQ + Footer sections
- `app/diagnostic-reparation/[service]/page.tsx` — Detailed service pages (reparation-hydraulique, reparation-electrique, revision-moteur, reparation-moteur)
- `app/service-sur-terrain/page.tsx` — Field service page

### Component Layout

- `components/sections/` — Full-page section components (Hero, Expertise, Services, ContactFAQ)
- `components/ui/` — shadcn/ui primitives (Button, Card, Sheet, Dialog, etc.) — do not manually edit these
- `components/NavBar.tsx` — Sticky nav with scroll-based light/dark mode, mobile Sheet menu, services dropdown
- `components/DiagnosticPopup.tsx` — Modal with image carousels per service card
- `components/WhatsAppButton.tsx` — Fixed CTA button

### Key Patterns

**Client vs. Server components**: Interactive components (NavBar, Hero carousel, DiagnosticPopup) use `"use client"`. Service detail pages are server components by default.

**Styling**: Tailwind CSS 4 with CSS variables (OKLCH color space). Use the `cn()` helper from `lib/utils.ts` for conditional class merging. Component variants use CVA.

**Animations**: Framer Motion throughout — `whileInView` for scroll reveals, `AnimatePresence` for tab transitions, `motion.div` with `variants` for staggered children.

**Navigation config**: `lib/navbarContent.ts` holds the nav link definitions used by NavBar.

**Images**: Stored in `public/` with French-named subdirectories (e.g., `public/reparation hydraulique/`). Next.js Image component is used with `fill` + `sizes`. Image optimization is disabled globally (`next.config.ts`: `images: { unoptimized: true }`).

**Language**: All UI text is in French (locale `fr_MA`). No i18n framework — strings are hardcoded in components.

### Path Alias

`@/*` maps to the project root — use `@/components/...`, `@/lib/...`, `@/app/...`.
