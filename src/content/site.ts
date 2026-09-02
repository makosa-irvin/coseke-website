export const siteConfig = {
  name: "Coseke",
  legalName: "Coseke Limited",
  founded: 1990,
  tagline: "Information and content management, built for how East Africa works",
  description:
    "Coseke is a Pan-African information and content management specialist. Since 1990 we've helped government and private-sector organizations capture, manage, share, and preserve their records, replacing paper backlogs with searchable, governed systems.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.coseke.com",
  motto: "Quality means no compromise",
};

export const stats = [
  { label: "In operation", value: "1990", suffix: "", note: "35 years in information management" },
  { label: "Clients across the region", value: "400", suffix: "+" },
  { label: "Countries served", value: "6", suffix: "" },
  { label: "Documents digitized to date", value: "250", suffix: "M+" },
];

export type Value = { name: string; description: string };

export const values: Value[] = [
  {
    name: "Pride in the work",
    description:
      "We hold our services and deliverables to a standard we'd be comfortable putting our name on.",
  },
  {
    name: "Trust through action",
    description:
      "We build client relationships on responsible, honest delivery, not on promises alone.",
  },
  {
    name: "Courage",
    description:
      "We're willing to step outside the familiar approach when an unconventional one serves the client better.",
  },
  {
    name: "Collaboration",
    description:
      "The best outcomes come from working alongside our clients' teams, not around them.",
  },
  {
    name: "Continuous improvement",
    description:
      "We look for the most cost-efficient way to meet a requirement, and keep refining it after go-live.",
  },
];

export type Testimonial = {
  quote: string;
  attribution: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Before our board portal went live, preparing for a board meeting meant printing, binding, and last-minute reprints under pressure. Now agendas update instantly, papers are a click away, and meetings no longer depend on everyone being in the same room.",
    attribution: "Board Secretary",
    context: "Financial services client, on the e-board meeting management rollout",
  },
  {
    quote:
      "Search and retrieval of our files is faster and easier than it has ever been, and the indexing process kept every document's integrity intact. We're confident Coseke can run bulk digitization for any institution to the same standard.",
    attribution: "Records Manager",
    context: "Public sector client, on a bulk digitization and indexing project",
  },
];

export const partners = [
  { name: "Hyland OnBase", note: "Enterprise content management platform" },
  { name: "Kodak Alaris", note: "Capture Pro production scanning" },
  { name: "Passageways", note: "Board and meeting management" },
];

export const navigation = {
  primary: [
    { label: "Solutions", href: "/solutions" },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};
