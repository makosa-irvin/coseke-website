# Coseke website

The public marketing site for **Coseke Limited** — a Pan-African information
and content management specialist. Rebuilt on Next.js to give the brand a
site that's fast, easy to keep current, and actually showcases the six
solution areas Coseke delivers, rather than a handful of static brochure
pages.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com) — CSS-first config, tokens in `src/app/globals.css`
- Self-hosted fonts via [Fontsource](https://fontsource.org) (Zilla Slab + IBM Plex Sans) — no runtime dependency on Google's font CDN
- [Zod](https://zod.dev) for contact-form validation, shared between client and server
- [Vitest](https://vitest.dev) + [Testing Library](https://testing-library.com) for tests
- ESLint + Prettier (with `prettier-plugin-tailwindcss`), Husky + lint-staged pre-commit hooks
- GitHub Actions CI (`.github/workflows/ci.yml`)

## Getting started

Requires Node.js 20+.

```bash
npm install
cp .env.example .env.local   # optional — see below
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command                | What it does                                  |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Start the dev server                          |
| `npm run build`        | Production build                              |
| `npm start`            | Serve the production build                    |
| `npm run lint`         | ESLint                                        |
| `npm run typecheck`    | `tsc --noEmit`                                |
| `npm test`             | Run the test suite once                       |
| `npm run test:watch`   | Run tests in watch mode                       |
| `npm run format`       | Format the codebase with Prettier             |
| `npm run format:check` | Check formatting without writing (used in CI) |

## Project structure

```
src/
  app/                    Routes — one folder per URL segment (App Router)
    solutions/[slug]/     Dynamic solution detail pages (statically generated)
    api/contact/          Contact form submission endpoint
    sitemap.ts, robots.ts, icon.tsx, opengraph-image.tsx
  components/             Shared UI (header, footer, hero illustration, forms…)
  components/ui/          Small layout primitives
  content/                Structured content — solutions, industries, offices,
                           stats, testimonials, partners, nav. Edit copy here.
  lib/                    Framework-agnostic helpers and validation schemas
```

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the fuller guide, including
how the design tokens work and how to add a new solution or industry.

## Content

Every page pulls from the typed content files in `src/content/`. That
content was originally sourced from the previous coseke.com site (company
history, solution lines, regional offices, technology partners) and rewritten
into fresh copy for this rebuild — it should be reviewed by Coseke's team for
accuracy before launch, particularly:

- Exact client and country counts (`src/content/site.ts`)
- Office addresses and phone numbers (`src/content/offices.ts`)
- The history timeline on the About page (`src/app/about/page.tsx`), which
  uses approximate eras rather than exact years where the source material
  didn't specify one

## Contact form

`src/components/contact-form.tsx` posts to `src/app/api/contact/route.ts`,
which validates the submission server-side with the same Zod schema used on
the client, checks a honeypot field, and currently **logs the submission**
rather than sending it anywhere. Before launch, wire that route up to a real
provider — see the comment in the route handler and `.env.example` for the
environment variables a couple of common providers (Resend, SendGrid) would
need.

## Deployment

This is a standard Next.js app and deploys to
[Vercel](https://vercel.com/new), or anywhere else that runs Next.js
(Node server, Docker, or any platform supporting the Next.js adapter of your
choice). No environment variables are required for a basic deployment; see
`.env.example` for optional ones.

## Design notes

The visual direction is built around the actual subject matter — turning
paper archives into structured, searchable systems — rather than a generic
SaaS template: a ledger/index-card motif (hairline rules instead of card
shadows, folder-tab navigation for solutions, a document-grid hero
illustration), a navy/clay/brass palette, and a slab-serif + technical-sans
type pairing. Tokens live in `src/app/globals.css`; see `CONTRIBUTING.md`
before changing them.

## License

Proprietary — see [`LICENSE`](./LICENSE).
