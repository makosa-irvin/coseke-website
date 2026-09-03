# Photography brief

This site ships with original illustrations everywhere a photo would
normally go, for anything real photography hasn't been supplied for yet.
Every one of those spots is wired up to display a real photo automatically
the moment a correctly-named file is added here — **no code changes
needed.**

How it works: components render a `<Photo src="/images/x.png" fallback={...} />`.
If `public/images/x.png` doesn't exist (or fails to load), the illustration
shown in this table renders instead. Add the file with the exact name below,
and the illustration is replaced automatically on next deploy.

## Added ✅

These are real, in place — sourced from actual Coseke accreditation
certificates and partner/client logos, backgrounds cleaned up and cropped
for consistent display.

| File | Used on |
|---|---|
| `accreditation-iso.png`, `accreditation-nita.png`, `accreditation-sgs.png`, `accreditation-ict-authority.png`, `accreditation-csk.png` | Homepage trust section, About page |
| `partner-logo-dell-emc.png`, `partner-logo-hpe.png`, `partner-logo-huawei-enterprise.png`, `partner-logo-netapp.png`, `partner-logo-veeam.png`, `partner-logo-cisco.png`, `partner-logo-bruynzeel.png` | `/partners`, homepage partner section |
| `client-logo-sheria-sacco.png`, `client-logo-minet.png`, `client-logo-rwanda-housing-authority.png`, `client-logo-uganda-registration-services-bureau.png`, `client-logo-kenya-national-bureau-of-statistics.png` | Homepage client marquee, and (Sheria/Minet) their case study pages — the case study pages reuse this same file since the slugs match, rather than needing a separate photo |

Still missing real logos, showing an initials-monogram fallback: **Kenya
Airports Authority**, **Kenya Ports Authority Pension Scheme**, **Cosmopolitan
Sacco**, and the three platform partners (**Hyland OnBase**, **Kodak
Alaris**, **OnBoard by Passageways** — these are software platforms rather
than hardware brands, so a wordmark logo may be harder to source; the
monogram fallback is a reasonable permanent state for these if a clean logo
file isn't available). Add `client-logo-<slug>.png` or
`partner-logo-<slug>.png` (slugs are in `content/site.ts`) to fill any of
these in.

## Still needed ⬜

| File to add | Used on | Recommended size | Brief |
|---|---|---|---|
| `team-nairobi.jpg` | About page, regional team section | 800×550px | A real photo of the Nairobi/HQ team or office. |
| `team-kampala.jpg` | About page, regional team section | 800×550px | Same, for the Kampala/Uganda team. |
| `team-dar-es-salaam.jpg` | About page, regional team section | 800×550px | Same, for the Dar es Salaam/Tanzania team. |
| `team-kigali.jpg` | About page, regional team section | 800×550px | Same, for the Kigali/Rwanda team. |
| `leadership-records.jpg` | About page, Leadership section | 600×600px, square | Headshot for the Document & Records Management practice lead. See `src/content/team.ts` — add the person's `name` in that file at the same time as the photo, not before; a photo with no name attached would misrepresent someone. |
| `leadership-governance.jpg` | About page, Leadership section | 600×600px, square | Headshot for the Governance & Meetings practice lead. Same note as above. |
| `leadership-systems.jpg` | About page, Leadership section | 600×600px, square | Headshot for the Business Systems practice lead. Same note as above. |
| `leadership-infrastructure.jpg` | About page, Leadership section | 600×600px, square | Headshot for the Infrastructure & Support practice lead. Same note as above. |
| `client-logo-kenya-airports-authority.png` | Homepage marquee, case study page | any, transparent PNG preferred | KAA's logo, if usable with their permission. |
| `client-logo-kenya-ports-authority-pension.png` | Homepage marquee, case study page | any, transparent PNG preferred | KPA Pension Scheme's logo. |
| `client-logo-cosmopolitan-sacco.png` | Homepage marquee | any, transparent PNG preferred | Cosmopolitan Sacco's logo. |

## Leadership photos specifically

Unlike every other row in this table, the leadership photos aren't just
missing images — the *names* are also placeholders (or rather, absent
entirely; see the header comment in `src/content/team.ts`). We don't have
verified information about who holds these roles, so the page currently
shows the role title and practice description without a person attached to
it, rather than inventing one. Add the `name` field in `team.ts` and the
headshot here together, once confirmed.

## Notes

- **Format**: this project standardizes on transparent PNG for logos/marks
  (so they sit cleanly on any background color) and JPG for photography.
  Keep individual files under ~500KB; compress with something like
  `squoosh.app` or `imagemin` before adding. If a logo comes in with a white
  background baked in, either ask for a transparent version or crop/matte it
  yourself before adding — a white rectangle will show as a visible seam
  against this site's off-white background.
- **The office map** (`/components/illustrations/region-map-illustration.tsx`)
  is an original diagram, not a photo — there's nothing to replace there
  unless you want a licensed map tile instead, which would need its own
  integration (e.g. Mapbox or Google Maps) rather than a static image.
- **The hero illustration** on the digitization solution page (the
  document-grid graphic) is intentionally illustrative rather than
  photographic and works well as-is, but could be swapped for a real photo
  of a records archive or scanning operation. That would need a small code
  change (it's not currently wired through the `<Photo>` fallback pattern),
  not just a file drop.
