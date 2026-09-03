const DEFAULT_SITE_URL = "https://www.coseke.com";

/**
 * Resolves NEXT_PUBLIC_SITE_URL defensively. A bare `?? default` only
 * guards against the variable being unset — if it's set to an empty
 * string (a common state for a variable added in a hosting dashboard but
 * left blank) or something that isn't a well-formed absolute URL, that
 * silently propagates into `new URL(...)` calls (metadataBase in
 * layout.tsx, in particular) and crashes the entire production build
 * with an opaque "Failed to collect configuration for /_not-found"
 * error. Validate and fall back instead of trusting the env var blindly.
 */
export function resolveSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!envUrl) return DEFAULT_SITE_URL;
  try {
    new URL(envUrl);
    return envUrl;
  } catch {
    console.warn(
      `NEXT_PUBLIC_SITE_URL is set to "${envUrl}", which isn't a valid absolute URL. ` +
        `Falling back to ${DEFAULT_SITE_URL}. Set it to a full URL including the protocol, e.g. https://www.coseke.com.`,
    );
    return DEFAULT_SITE_URL;
  }
}

export const siteConfig = {
  name: "Coseke",
  legalName: "Coseke Limited",
  founded: 1990,
  tagline: "Information and content management, built for how East Africa works",
  description:
    "Coseke is a Pan-African information and content management specialist. Since 1990 we've helped government and private-sector organizations capture, manage, share, and preserve their records, replacing paper backlogs with searchable, governed systems.",
  url: resolveSiteUrl(),
  motto: "Quality means no compromise",
  supportUrl: "https://support.coseke.com",
};

export const stats = [
  { label: "In operation", value: "1990", suffix: "", note: "35 years in information management" },
  { label: "Clients across the region", value: "400", suffix: "+" },
  { label: "Countries served", value: "6", suffix: "" },
  { label: "Solutions across 4 areas", value: "10", suffix: "" },
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

export const partners = {
  platforms: [
    { name: "Hyland OnBase", note: "Enterprise content management platform" },
    { name: "Kodak Alaris", note: "Capture Pro production scanning" },
    { name: "OnBoard by Passageways", note: "Board and meeting management" },
  ],
  infrastructure: [
    { name: "Dell EMC", note: "Data protection & storage" },
    { name: "HPE", note: "Servers & edge-to-cloud infrastructure" },
    { name: "Huawei Enterprise", note: "ICT infrastructure" },
    { name: "NetApp", note: "Cloud & storage infrastructure" },
    { name: "Veeam", note: "Backup & data protection" },
    { name: "Cisco", note: "Networking, security & collaboration" },
  ],
};

export const accreditations = ["ISO certified", "NITA accredited", "SGS certified"];

export type ProcessStep = { step: string; title: string; description: string };

export const engagementSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Understand the work",
    description:
      "We map the records, decisions, people, and controls around the process, not just the software request.",
  },
  {
    step: "02",
    title: "Design around reality",
    description:
      "The solution is configured for your volumes, policies, integrations, and operating environment.",
  },
  {
    step: "03",
    title: "Adopt and improve",
    description:
      "Regional implementation, role-based training, and ongoing support keep the system useful after go-live.",
  },
];

export const clients = [
  { name: "Kenya Airports Authority", url: "https://www.kaa.go.ke" },
  { name: "Kenya Ports Authority Pension Scheme", url: "https://kpapension.co.ke" },
  { name: "Sheria Sacco" },
  { name: "Minet Group" },
  { name: "Cosmopolitan Sacco", url: "https://www.cosmopolitansacco.com" },
];

export const navigation = {
  primary: [
    { label: "Solutions", href: "/solutions" },
    { label: "Industries", href: "/industries" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};
