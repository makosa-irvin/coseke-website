/**
 * IMPORTANT — read before editing this file.
 *
 * `leadershipRoles` below intentionally has no `name`, `photoSlug` filled
 * with a real image, or `bio` beyond a description of the practice area.
 * We don't have verified information about who actually holds these roles
 * at Coseke, and inventing names, titles, or headshots for a real company's
 * leadership team would be publishing false information about real people,
 * not a harmless placeholder. The page is built to render correctly and
 * honestly either way: a role with no `name` shows its title and practice
 * description without a fabricated person attached to it.
 *
 * To finish this section for real: fill in `name` for each role once
 * confirmed, and add a headshot at /public/images/leadership-<categoryId>.jpg
 * (see public/images/README.md). Until then, ship it as-is — an honest
 * "leadership structure, names pending" beats a fabricated team.
 */

export type RegionalTeamBlurb = {
  officeCity: string; // matches offices[].city in content/offices.ts
  blurb: string;
};

export const regionalTeamBlurbs: RegionalTeamBlurb[] = [
  {
    officeCity: "Nairobi",
    blurb:
      "Our headquarters team, coordinating regional strategy and delivery across all four countries we serve.",
  },
  {
    officeCity: "Kampala",
    blurb:
      "Our Uganda team, supporting clients across banking, government, and cooperative sectors.",
  },
  {
    officeCity: "Dar es Salaam",
    blurb: "Our Tanzania team, based in Dar es Salaam and serving clients across the country.",
  },
  {
    officeCity: "Kigali",
    blurb: "Our Rwanda team, based in Kigali.",
  },
];

export type LeadershipRole = {
  categoryId: string; // links to solutionCategories in content/solutions.ts
  roleTitle: string;
  /** Intentionally optional — see file header. Leave undefined until a real name is confirmed. */
  name?: string;
};

export const leadershipRoles: LeadershipRole[] = [
  { categoryId: "records", roleTitle: "Practice Lead, Document & Records Management" },
  { categoryId: "governance", roleTitle: "Practice Lead, Governance & Meetings" },
  { categoryId: "systems", roleTitle: "Practice Lead, Business Systems" },
  { categoryId: "infrastructure", roleTitle: "Practice Lead, Infrastructure & Support" },
];
