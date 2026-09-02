# Photography brief

This site ships with original illustrations everywhere a photo would
normally go, because no real photography was available at build time. Every
one of those spots is wired up to display a real photo automatically the
moment you add a correctly-named file here — **no code changes needed.**

How it works: components render a `<Photo src="/images/x.jpg" fallback={...} />`.
If `public/images/x.jpg` doesn't exist (or fails to load), the illustration
shown in this table renders instead. Add the file with the exact name below,
and the illustration is replaced automatically on next deploy.

| File to add | Used on | Recommended size | Brief |
|---|---|---|---|
| `about-team.jpg` | About page, "How we got here" section | 1200×800px, landscape | A real photo of the Coseke team, an office, or staff at work — ideally Nairobi HQ. Avoid stock photography; this is a credibility signal specifically because it's real. |
| `case-study-kenya-airports-authority.jpg` | `/case-studies/kenya-airports-authority` | 800×800px, square | Photo related to the KAA engagement, or the KAA client mark/logo (only with their permission to use it). |
| `case-study-kenya-ports-authority-pension.jpg` | `/case-studies/kenya-ports-authority-pension` | 800×800px, square | Same as above, for the KPA Pension Scheme engagement. |
| `case-study-sheria-sacco.jpg` | `/case-studies/sheria-sacco` | 800×800px, square | Same, for Sheria Sacco. |
| `case-study-minet.jpg` | `/case-studies/minet` | 800×800px, square | Same, for Minet Group. |

## Notes

- **Client logos**: the current fallback renders each client's initials as a
  plain text monogram rather than a fabricated logo, specifically because we
  don't have rights to reproduce their actual marks. If you get permission
  to use a client's real logo, that's a direct drop-in replacement for the
  monogram — just add the file above.
- **Format**: JPG or PNG both work. Keep individual files under ~500KB;
  compress with something like `squoosh.app` or `imagemin` before adding.
- **The office map** (`/components/illustrations/region-map-illustration.tsx`)
  is an original diagram, not a photo — there's nothing to replace there
  unless you want a licensed map tile instead, which would need its own
  integration (e.g. Mapbox or Google Maps) rather than a static image.
- **The hero illustration** on the homepage (the document-grid graphic) is
  intentionally illustrative rather than photographic — it's the site's one
  deliberate "brand moment" and works well as-is, but could be swapped for a
  real photo of a records archive or scanning operation if you'd rather lead
  with photography there. That would need a small code change (it's not
  currently wired through the `<Photo>` fallback pattern), not just a file drop.
