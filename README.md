# React Now Dev — Website

The official marketing website for **React Now Dev**, built with Next.js 16 (App
Router), TypeScript, and Tailwind CSS v4. Content is data-driven, so most
day-to-day edits (a new case study, a new service, a price change) happen in
one file — no page/component surgery required.

## Quick start

```bash
npm install
npm run dev       # http://localhost:3000
```

Other scripts:

```bash
npm run build     # production build
npm run start     # run the production build locally
npm run lint      # ESLint
```

Requires Node 18.18+ (Node 20+ recommended).

> `react-router/` holds the older personal-portfolio app (React 18 + Vite). It
> is not part of this site's build — it has its own `package.json` and is run
> separately with `cd react-router && npm install && npm run dev`.

## Tech stack & why

| Choice | Why |
|---|---|
| **Next.js 16 (App Router)** | Same family as our client stack (React/Next.js — see the Pamoja Twaweza case study), server-rendered for fast loads and good SEO, and it's what "React Now Dev" is named after. |
| **TypeScript** | Matches the tech stack listed in our own Terms of Reference (React, Next.js, TypeScript, Tailwind), and catches content/prop mistakes before they ship. |
| **Tailwind CSS v4** | Fast, consistent styling with our brand tokens (see below) without a separate CSS build step. |
| **No external CMS (yet)** | Content lives in `src/lib/content.ts` as typed data. This is deliberately simple today and easy to swap for a headless CMS (Sanity, Contentful, WordPress-as-API) later — see "Future-proofing" below. |

## Project structure

```
src/
  app/
    layout.tsx           Root layout: <html>/<body>, global metadata, Header/Footer
    page.tsx              Home
    about/page.tsx
    services/page.tsx
    portfolio/
      page.tsx             Portfolio index (reads caseStudies)
      [slug]/page.tsx       Case study detail (dynamic route, statically generated)
    pricing/page.tsx
    podcast/page.tsx
    contact/
      page.tsx              Contact page shell
      ContactForm.tsx        Client component: form state + submit handling
    api/contact/route.ts     POST endpoint the contact form submits to
    sitemap.ts               Generates /sitemap.xml
    robots.ts                Generates /robots.txt
    not-found.tsx             Custom 404
    globals.css               Tailwind import + brand tokens
  components/
    Header.tsx              Sticky nav, mobile menu (client component)
    Footer.tsx
    Container.tsx           Max-width content wrapper
    SectionHeading.tsx        Eyebrow + title + description pattern
    Button.tsx               Link-styled CTA button (primary/secondary/ghost)
  lib/
    content.ts               ALL site content: services, case studies, pricing,
                              team, add-ons, "why us", audiences. Edit this file
                              to update copy across the whole site.
public/
  logo.png                  Full-colour logo, transparent background (for light backgrounds)
  logo-white.png             White silhouette, transparent background (for dark backgrounds, e.g. footer)
```

## Editing content

Almost everything on the site is driven by `src/lib/content.ts`. Common edits:

- **Add a case study** — add an object to the `caseStudies` array. A new page
  at `/portfolio/<slug>` is generated automatically (see
  `generateStaticParams` in `src/app/portfolio/[slug]/page.tsx`).
- **Add/change a service** — edit the `services` array. Both the homepage
  services grid and `/services` read from it.
- **Change pricing** — edit `pricingPackages` and `addOns`.
- **Update team bios** — edit `team`.
- **Change contact details, tagline, or regions served** — edit `site` at the
  top of the file; it feeds the header, footer, and contact page.

No content edit here requires touching a component or page file.

## Brand tokens

Defined in `src/app/globals.css` and exposed as Tailwind utility classes
(`bg-navy`, `text-blue`, `bg-light`, `border-border`, etc.), extracted from
the React Now Dev logo and existing client-facing documents:

| Token | Hex | Usage |
|---|---|---|
| `navy` | `#12233F` | Primary brand colour — headers, dark sections, buttons |
| `navy-dark` | `#0B1930` | Hover state for navy buttons |
| `blue` | `#4C7FB3` | Accent — links, highlights, secondary buttons |
| `blue-light` | `#9FC1E0` | Accent text on dark backgrounds |
| `pink` | `#D9689F` | Secondary accent (used sparingly — badges, highlights) |
| `gray` | `#5B6472` | Body text |
| `light` | `#F3F5F8` | Section backgrounds, card fills |
| `border` | `#E2E6EC` | Hairline borders |

The logo assets in `public/` were extracted from an existing React Now Dev
document at fairly low resolution (145×78px source). They work fine at the
sizes used across the site, but if you have a higher-resolution or vector
(SVG) source logo, swap it in at `public/logo.png` / `public/logo-white.png`
for crisper rendering, especially on retina displays or if you enlarge it
anywhere (e.g. a future large hero treatment).

## The contact form

`src/app/contact/ContactForm.tsx` posts to `src/app/api/contact/route.ts`,
which validates the payload and currently just logs it server-side
(`console.log`). **This is a placeholder** — before going live, wire the
`TODO` in `route.ts` to a real integration:

- An email provider (Resend, Postmark, SendGrid, or SMTP via Nodemailer), or
- A webhook (Slack, WhatsApp Business API, or a CRM/sheet).

Keep the same request/response shape (`{ ok: boolean, error?: string }`) so
the form's success/error states keep working unmodified.

## Fonts

The site currently uses the system font stack (see `globals.css`) so it
builds and runs with zero network dependency — useful in sandboxed/offline
environments. To use a Google Font (e.g. Inter, as originally planned):

```tsx
// src/app/layout.tsx
import { Inter } from "next/font/google";
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
// then add `inter.variable` to the <html> className
```

This requires network access to `fonts.googleapis.com` at build time.

## Deployment

This is a standard Next.js app — deploy it anywhere Next.js is supported:

- **Vercel** (simplest): `vercel` CLI or connect the Git repo — zero config.
- **Netlify**: supported via the Next.js runtime plugin.
- **Self-hosted / Truehost or similar**: `npm run build && npm run start`
  behind a reverse proxy (Nginx), or export a static build if you remove the
  API route and contact form's server dependency (see Next.js docs on
  `output: "export"` if you want a fully static site instead).

Before going live:

1. Buy/point a domain (e.g. `reactnowdev.com` or `.co.ke`) at your hosting provider.
2. Set `NEXT_PUBLIC_SITE_URL` as an environment variable to your real domain
   (used by `sitemap.ts` and `robots.ts`).
3. Wire up the contact form's email integration (see above).
4. Swap in a higher-resolution logo if you have one.
5. Replace the placeholder team photos (none included yet — text-only bios
   currently) with real photos if desired.

## Future-proofing notes

- **Blog**: there's no blog yet. If you want one, the cleanest path is a new
  `src/app/blog/` route reading from either a new `content.ts` array (for a
  handful of posts) or MDX files (for a real blog) — Next.js supports MDX
  natively via `@next/mdx`.
- **CMS**: if non-technical team members need to edit content without a
  developer, swap `src/lib/content.ts`'s static arrays for calls to a
  headless CMS (Sanity, Contentful) or even the WordPress REST API, since
  React Now Dev already works with WordPress for client projects. The page
  components don't need to change — only how `content.ts` sources its data.
- **Analytics**: no analytics are wired up. Add Google Analytics /
  Plausible / Umami via a script in `layout.tsx` when ready.
- **i18n**: if you need French (relevant for parts of the region) or other
  languages, Next.js App Router supports i18n routing — worth planning for
  before the site grows much larger.
