# ScaleForge Portfolio (Next.js App Router)

A production-style agency website built with Next.js App Router, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- React Hook Form + Zod (contact form validation)
- Resend (email delivery)
- Framer Motion (section animations)

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

Production build:

```bash
npm run build
```

## Environment Variables

Create `.env.local`:

```bash
RESEND_API_KEY=your_key_here
```

## Rendering Architecture

### React Server Components (RSC)

This project follows App Router defaults: components are Server Components unless `"use client"` is declared.

Implemented as RSC:

- Pages: `app/page.tsx`, `app/about/page.tsx`, `app/services/page.tsx`, `app/contact/page.tsx`
- Layout: `app/layout.tsx`
- Most UI/sections without browser-only state

Client Components (only where needed):

- `components/layout/Navbar.tsx` (uses `usePathname` for active route highlight)
- `components/ui/FadeIn.tsx` (Framer Motion viewport animation)
- `components/sections/Testimonials.tsx` (carousel state and interactions)
- `components/ui/ContactForm.tsx` (form state, validation, and submit lifecycle)

### Static Generation

Pages are configured for static generation:

- `export const dynamic = "force-static"`
- `export const revalidate = false`

You can confirm via `npm run build` output (`○` for static routes).

## Suspense, Streaming, and Code Splitting

Implemented in `app/page.tsx`:

- Uses `lazy()` imports for below-the-fold sections:
  - `Testimonials`
- Wraps lazy components in `<Suspense>` with skeleton fallbacks.

Why this matters:

- **Code splitting**: JavaScript for lazy sections is loaded only when needed.
- **Streaming**: Suspense boundaries allow partial UI to render while deferred parts resolve.
- **Perceived performance**: users see content sooner with progressive rendering.

## Image Optimization

All images use `next/image` (no raw `<img>` tags in app UI components).

Where implemented:

- `components/sections/Hero.tsx` (technology icons in floating cards)
- `components/sections/Contact.tsx` (map placeholder image)
- `components/ui/TeamCard.tsx` (team avatar optimization ready)

Optimizations used:

- Responsive `sizes`
- `loading="lazy"` on below-the-fold assets
- `placeholder="blur"` + `blurDataURL` where appropriate
- Explicit `width`/`height`

## API Route

Contact email endpoint:

- `app/api/contact/route.ts`
- Server-side Zod validation
- Resend email send call

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  about/page.tsx
  services/page.tsx
  contact/page.tsx
  api/contact/route.ts
components/
  layout/
  sections/
  ui/
lib/
  data/
public/
  images/
```
