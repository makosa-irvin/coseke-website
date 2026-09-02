# Contributing to the Coseke website

Thanks for helping improve the site. This is a fairly small Next.js project,
so the process is intentionally lightweight.

## Getting set up

```bash
git clone <repo-url>
cd coseke-website
npm install
cp .env.example .env.local
npm run dev
```

The site runs at http://localhost:3000.

## Before you open a pull request

Run the full check locally — it's the same thing CI runs:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

If you have Git hooks installed (`npm install` does this automatically via
Husky), `git commit` will lint and format the files you've staged.

## Project structure

```
src/
  app/                 Routes (App Router). One folder per URL segment.
  components/          Shared, reusable UI components.
  components/ui/       Small layout primitives (Container, etc.).
  content/             Structured content: solutions, industries, offices,
                        site-wide copy and constants. Update content here
                        rather than hardcoding strings in components.
  lib/                 Framework-agnostic helpers (utils, validation schemas).
```

## Editing content

Most copy lives in `src/content/*.ts`, not in the page files. If you're
updating a solution's description, an office address, or a stat, look there
first — the pages just render whatever is in these files.

## Adding a new solution or industry

1. Add an entry to `src/content/solutions.ts` (or `industries.ts`).
2. That's it — the solutions index, the folder-tab explorer on the homepage,
   the footer links, and the dynamic `/solutions/[slug]` page all read from
   the same array, so a new entry appears everywhere automatically.

## Design system

Colors, fonts, and layout tokens are defined once in `src/app/globals.css`
under `:root` and `@theme inline`, and used everywhere via Tailwind classes
(`bg-indigo-deep`, `text-clay`, `font-display`, etc.). Don't hardcode hex
values in components — add or reuse a token instead.

If you're changing the palette, please re-check contrast (see
`WCAG AA — 4.5:1` for normal text, `3:1` for large text/UI). There's no
automated check for this yet; a simple way is a browser DevTools contrast
checker on the rendered page, or the color-contrast formula from WCAG 2.1.

## Tests

Component and unit tests live next to what they test, in `__tests__/`
folders, and run with Vitest + Testing Library. Not everything needs a test,
but validation logic (`src/lib/contact-schema.ts`) and interactive
components (like the solutions explorer) should have coverage.

## Commit style

Plain, descriptive commit messages are fine. Conventional Commits
(`feat:`, `fix:`, `chore:`) are welcome but not enforced.

## Code of conduct

By participating in this project you agree to abide by the
[Code of Conduct](./CODE_OF_CONDUCT.md).
