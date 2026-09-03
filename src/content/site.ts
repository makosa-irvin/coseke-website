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

export type Partner = {
  slug: string;
  name: string;
  /** Short, for compact display (homepage partner strip) */
  note: string;
  /** Fuller description for the dedicated /partners page */
  description: string;
};

export const partners: {
  platforms: Partner[];
  infrastructure: Partner[];
  storage: Partner[];
} = {
  platforms: [
    {
      slug: "hyland-onbase",
      name: "Hyland OnBase",
      note: "Enterprise content management platform",
      description:
        "OnBase is the enterprise content management platform our EDRMS and capture solutions are built on: document storage, workflow, and retention in one governed system rather than a collection of point tools bolted together.",
    },
    {
      slug: "kodak-alaris",
      name: "Kodak Alaris",
      note: "Capture Pro production scanning",
      description:
        "Kodak Alaris' Capture Pro software and production scanners are what our digitization bureau runs on: high-volume batch scanning with the data extraction accuracy that large backlog-conversion projects need.",
    },
    {
      slug: "onboard-passageways",
      name: "OnBoard by Passageways",
      note: "Board and meeting management",
      description:
        "OnBoard is the board and meeting management platform behind our governance solutions, giving directors a secure app for papers, annotation, and voting instead of a printed board pack.",
    },
  ],
  infrastructure: [
    {
      slug: "dell-emc",
      name: "Dell EMC",
      note: "Data protection & storage",
      description:
        "Dell EMC is one of the largest data protection vendors in the world. We draw on their storage and data protection portfolio when a project's infrastructure needs go beyond what a single server can handle.",
    },
    {
      slug: "hpe",
      name: "HPE",
      note: "Servers & edge-to-cloud infrastructure",
      description:
        "HPE's edge-to-cloud infrastructure underpins the servers and compute environments we specify for larger deployments, sized to actual measured volumes rather than a generic recommendation.",
    },
    {
      slug: "huawei-enterprise",
      name: "Huawei Enterprise",
      note: "ICT infrastructure",
      description:
        "Huawei Enterprise supplies a broad range of ICT infrastructure products we draw on for networking and compute, giving clients a wider range of infrastructure options depending on budget and existing environment.",
    },
    {
      slug: "netapp",
      name: "NetApp",
      note: "Cloud & storage infrastructure",
      description:
        "NetApp's storage and cloud data services are what we turn to when a digitization or records project needs to manage large volumes of data reliably across hybrid on-premises and cloud environments.",
    },
    {
      slug: "veeam",
      name: "Veeam",
      note: "Backup & data protection",
      description:
        "Veeam handles backup, recovery, and data protection for the systems we deploy, so a hardware failure or ransomware incident doesn't mean losing years of digitized records.",
    },
    {
      slug: "cisco",
      name: "Cisco",
      note: "Networking, security & collaboration",
      description:
        "Cisco's networking, security, and collaboration equipment rounds out the infrastructure side of a deployment, from the network a document management system runs on to the security controls around it.",
    },
  ],
  storage: [
    {
      slug: "bruynzeel",
      name: "Bruynzeel",
      note: "Mobile & compact shelving systems",
      description:
        "Bruynzeel's mobile and compact shelving systems are what we specify for physical archiving: the same footprint holding significantly more boxes and files than static shelving, which matters when an organization is retaining originals it can't yet destroy.",
    },
  ],
};

export type Accreditation = { slug: string; label: string };

export const accreditations: Accreditation[] = [
  { slug: "iso", label: "ISO 9001:2015 certified" },
  { slug: "nita", label: "NITA approved trainer" },
  { slug: "sgs", label: "SGS certified" },
  { slug: "ict-authority", label: "ICT Authority registered" },
  { slug: "csk", label: "Computer Society of Kenya" },
];

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

export type Client = {
  slug: string;
  name: string;
  country: "Kenya" | "Uganda" | "Tanzania" | "Rwanda";
  url?: string;
};

export const clients: Client[] = [
  // Kenya
  {
    slug: "kenya-airports-authority",
    name: "Kenya Airports Authority",
    country: "Kenya",
    url: "https://www.kaa.go.ke",
  },
  {
    slug: "kenya-ports-authority",
    name: "Kenya Ports Authority",
    country: "Kenya",
    url: "https://www.kpa.co.ke",
  },
  {
    slug: "kenya-ports-authority-pension",
    name: "Kenya Ports Authority Pension Scheme",
    country: "Kenya",
    url: "https://kpapension.co.ke",
  },
  { slug: "sheria-sacco", name: "Sheria Sacco", country: "Kenya" },
  {
    slug: "cosmopolitan-sacco",
    name: "Cosmopolitan Sacco",
    country: "Kenya",
    url: "https://www.cosmopolitansacco.com",
  },
  {
    slug: "kenya-national-bureau-of-statistics",
    name: "Kenya National Bureau of Statistics",
    country: "Kenya",
    url: "https://www.knbs.or.ke",
  },
  { slug: "usiu-africa", name: "USIU-Africa", country: "Kenya", url: "https://www.usiu.ac.ke" },
  {
    slug: "epra",
    name: "Energy & Petroleum Regulatory Authority",
    country: "Kenya",
    url: "https://www.epra.go.ke",
  },
  { slug: "aar-insurance", name: "AAR Insurance", country: "Kenya" },
  { slug: "total-kenya", name: "Total Kenya", country: "Kenya" },
  { slug: "kma", name: "Kenya Maritime Authority", country: "Kenya" },
  { slug: "bank-of-africa", name: "Bank of Africa", country: "Kenya" },
  { slug: "cic-group", name: "CIC Insurance Group", country: "Kenya" },
  { slug: "sanlam", name: "Sanlam", country: "Kenya" },
  {
    slug: "kenya-judiciary",
    name: "The Judiciary of Kenya",
    country: "Kenya",
    url: "https://www.judiciary.go.ke",
  },
  { slug: "ministry-of-lands", name: "Ministry of Lands & Physical Planning", country: "Kenya" },
  // Exact county not confirmed from the source image — correct this once known.
  { slug: "county-government", name: "County Government", country: "Kenya" },
  { slug: "minet", name: "Minet Group", country: "Kenya" },

  // Uganda
  {
    slug: "uganda-registration-services-bureau",
    name: "Uganda Registration Services Bureau",
    country: "Uganda",
    url: "https://ursb.go.ug",
  },
  { slug: "uganda-government", name: "Government of Uganda", country: "Uganda" },
  { slug: "mengo-hospital", name: "Mengo Hospital", country: "Uganda" },
  { slug: "unoc", name: "Uganda National Oil Company", country: "Uganda" },
  {
    slug: "makerere-university",
    name: "Makerere University",
    country: "Uganda",
    url: "https://www.mak.ac.ug",
  },
  {
    slug: "ura",
    name: "Uganda Revenue Authority",
    country: "Uganda",
    url: "https://www.ura.go.ug",
  },

  // Tanzania
  { slug: "ewura", name: "Energy and Water Utilities Regulatory Authority", country: "Tanzania" },
  { slug: "songas", name: "Songas", country: "Tanzania" },
  { slug: "latra", name: "Land Transport Regulatory Authority", country: "Tanzania" },
  { slug: "tasac", name: "Tanzania Shipping Agencies Corporation", country: "Tanzania" },
  { slug: "jkci", name: "Jakaya Kikwete Cardiac Institute", country: "Tanzania" },
  { slug: "nhif-tanzania", name: "National Health Insurance Fund (Tanzania)", country: "Tanzania" },

  // Rwanda
  { slug: "rwanda-housing-authority", name: "Rwanda Housing Authority", country: "Rwanda" },
];

export const navigation = {
  primary: [
    { label: "Solutions", href: "/solutions" },
    { label: "Industries", href: "/industries" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Partners", href: "/partners" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};
