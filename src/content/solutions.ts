export type SolutionCategory = {
  id: string;
  name: string;
  /** Friendlier, problem-oriented label for homepage scanning contexts (e.g. "Information & records" vs the formal "Document & Records Management" used in navigation). */
  shortLabel: string;
  description: string;
};

export const solutionCategories: SolutionCategory[] = [
  {
    id: "records",
    name: "Document & Records Management",
    shortLabel: "Information & records",
    description:
      "Capture, digitize, store, search, and govern the information your institution depends on.",
  },
  {
    id: "governance",
    name: "Governance & Meetings",
    shortLabel: "Governance & meetings",
    description: "Run boards, committees, AGMs, decisions, and approvals securely from anywhere.",
  },
  {
    id: "systems",
    name: "Business Systems",
    shortLabel: "Business systems",
    description:
      "Connect operations, finance, reporting, and decisions through systems people use.",
  },
  {
    id: "infrastructure",
    name: "Infrastructure & Support",
    shortLabel: "Infrastructure & support",
    description: "The hardware, integration, and training work underneath everything above.",
  },
];

export type Solution = {
  slug: string;
  category: string;
  tabLabel: string;
  name: string;
  tagline: string;
  summary: string;
  description: string[];
  benefits: string[];
  audience: string[];
  caseStudySlugs?: string[];
};

export const solutions: Solution[] = [
  {
    slug: "edrms",
    category: "records",
    tabLabel: "EDRMS",
    name: "Electronic Document & Records Management",
    tagline: "Find any file in seconds, not a scanned pile of maybes",
    summary:
      "A single, secure repository for every contract, letter, and record your organization produces, with workflow built in.",
    description: [
      "Most organizations don't lose documents because staff are careless. They lose them because paper and PDFs live wherever they were last touched: a desktop, a shared drive, an inbox, a filing cabinet three floors away. Our EDRMS platform gives every document one home, one index, and one audit trail.",
      "Built on Hyland OnBase, the system pairs document management with configurable workflow, so routing an invoice for approval or an application through review no longer depends on someone remembering to forward an email.",
    ],
    benefits: [
      "Full-text search across scanned and native documents",
      "Configurable approval and review workflows",
      "Role-based access control and a complete audit trail",
      "Retention schedules that enforce compliance automatically",
      "Integration with the line-of-business systems you already run",
    ],
    audience: [
      "Government registries",
      "Banks and insurers",
      "Utilities",
      "Legal and compliance teams",
    ],
    caseStudySlugs: ["sheria-sacco"],
  },
  {
    slug: "digitization",
    category: "records",
    tabLabel: "Digitization",
    name: "Document Imaging & Digitization",
    tagline: "Decades of paper, indexed and searchable",
    summary:
      "Bulk scanning, indexing, and conversion services that turn back-office archives into a searchable digital record.",
    description: [
      "Some archives are too large, too fragile, or too urgent to digitize with an office scanner and a Saturday. Our digitization bureau handles high-volume conversion on-site or at our secure facility, with production-grade capture equipment and a trained indexing team.",
      "Every batch is quality-checked against your indexing rules before it reaches your repository, so what you get isn't just a folder of images: it's a structured, retrievable record from day one.",
    ],
    benefits: [
      "Capacity to process very high volumes of pages per day",
      "250M+ documents digitized across the region to date",
      "On-site or secure bureau-based scanning",
      "Structured indexing tailored to your filing and retention rules",
      "Day-forward scanning once the backlog is cleared",
      "Chain-of-custody controls for sensitive and original documents",
    ],
    audience: [
      "Records and archives departments",
      "Land and registries offices",
      "Hospitals",
      "Insurers",
    ],
    caseStudySlugs: ["kenya-airports-authority", "minet"],
  },
  {
    slug: "physical-archiving",
    category: "records",
    tabLabel: "Physical Archiving",
    name: "Physical Records Storage",
    tagline: "Off-site space for the originals you're legally required to keep",
    summary:
      "Secure, climate-appropriate storage for physical files you've digitized but still can't shred, with fast retrieval on request.",
    description: [
      "Digitizing a file rarely means you're allowed to throw the original away. Many regulated records, and plenty of contracts and legal documents, have to be retained in physical form for a set number of years even after they've been scanned. Large organizations, and long-established ones especially, end up with cabinets and boxes of originals that just take up expensive office space.",
      "We store those originals off-site in secure, organized facilities, indexed against the same records they map to in your digital system, and retrieve any box or file on request when you need the original rather than the scan.",
    ],
    benefits: [
      "Frees up office space currently used for archive boxes",
      "Barcode-indexed storage mapped to your digital records",
      "Retrieval on request, tracked chain of custody",
      "Retention scheduling so files are held exactly as long as required",
    ],
    audience: ["Legal and compliance teams", "Banks and insurers", "Government registries"],
  },
  {
    slug: "capture",
    category: "records",
    tabLabel: "Capture & BPM",
    name: "Intelligent Capture & Process Automation",
    tagline: "Let the software read the form, not a clerk",
    summary:
      "OCR, ICR, and barcode capture that extracts data automatically and feeds it straight into your workflows.",
    description: [
      "Manual data entry is slow and it's where errors enter a process. Our capture solutions read printed and handwritten forms, invoices, and IDs, extract the data, validate it against business rules, and route it into the right workflow without a person retyping a single field.",
      "Combined with our business process management tools, this turns paper-driven processes, loan applications, claims, procurement approvals, into measurable, trackable digital workflows end to end.",
    ],
    benefits: [
      "OCR, ICR, and barcode recognition at production volume",
      "Automatic validation against your business rules",
      "End-to-end workflow tracking with SLAs and escalations",
      "Reduced manual entry and re-keying errors",
    ],
    audience: [
      "Banks and microfinance",
      "Insurance claims teams",
      "Procurement and shared services",
    ],
  },
  {
    slug: "board-portal",
    category: "governance",
    tabLabel: "Board Portal",
    name: "Board & Meeting Management",
    tagline: "A boardroom that travels with your directors",
    summary:
      "Prepare, distribute, and run board and committee meetings digitally, from agenda to minutes, on any device.",
    description: [
      "Preparing a board pack the old way means printing, binding, and couriering hundreds of pages, then doing it again for every late change. Our board portal, built on OnBoard by Passageways, replaces that cycle with a secure app directors already know how to use.",
      "Agendas, papers, and resolutions are compiled, distributed, and updated centrally, directors annotate and vote from an iPad, phone, or laptop, and every version is timestamped, so there is never a question about which papers were in front of the board when a decision was made.",
    ],
    benefits: [
      "Secure distribution of board packs to any device",
      "Real-time updates, no reprinting for last-minute changes",
      "In-app annotation, e-signatures, and voting",
      "Searchable archive of past meetings and resolutions",
      "Works fully offline once papers are downloaded",
    ],
    audience: [
      "Boards of directors",
      "SACCOs and cooperatives",
      "Public institutions",
      "Regulated entities",
    ],
  },
  {
    slug: "virtual-agms",
    category: "governance",
    tabLabel: "Virtual AGMs",
    name: "Virtual & Hybrid AGMs",
    tagline: "A quorum that doesn't need a hall",
    summary:
      "Run annual general meetings online or as a hybrid event, with verified shareholder attendance, live voting, and a recorded record of proceedings.",
    description: [
      "For SACCOs, cooperatives, and companies with members spread across the region, getting a quorum into one room for an AGM is expensive and often excludes members who can't travel. We run virtual and hybrid AGMs that verify shareholder or member identity, handle live voting and resolutions, and produce a complete, auditable record of the meeting.",
      "The same event can run as fully virtual or hybrid with an in-person hall, so members can join however suits them, without the governance requirements around quorum and voting being compromised.",
    ],
    benefits: [
      "Verified shareholder/member sign-in and quorum tracking",
      "Live and proxy voting with an auditable results trail",
      "Hybrid support for in-person plus remote attendance",
      "Recorded proceedings and minutes produced from the session",
    ],
    audience: ["SACCOs and cooperatives", "Pension schemes", "Listed and member-owned companies"],
    caseStudySlugs: ["kenya-ports-authority-pension"],
  },
  {
    slug: "erp",
    category: "systems",
    tabLabel: "ERP",
    name: "Enterprise Resource Planning",
    tagline: "One system, instead of a dozen spreadsheets",
    summary:
      "Connect finance, procurement, inventory, and HR into a single operational system built to grow with you.",
    description: [
      "Finance and operations often end up on separate, disconnected systems, which works until the business needs a single, current view of itself. Our ERP implementations unify the core processes that run an organization, so figures in one department match figures in another.",
      "We scope, configure, and support the deployment, then stay on as the local partner your team calls when something needs to change.",
    ],
    benefits: [
      "Unified finance, procurement, and inventory management",
      "Reporting that reflects the business in real time",
      "Configured around your existing processes, not the other way round",
      "Local implementation and support across the region",
    ],
    audience: [
      "Mid-size and growing enterprises",
      "Manufacturers and distributors",
      "Public agencies",
    ],
  },
  {
    slug: "business-intelligence",
    category: "systems",
    tabLabel: "Business Intelligence",
    name: "Business Intelligence & Reporting",
    tagline: "Answers pulled from your data, not assembled by hand in a spreadsheet",
    summary:
      "Dashboards and reports built on top of your existing systems, so decisions are based on current numbers instead of last month's export.",
    description: [
      "A lot of organizations have the data they need to make a decision, just not in a form anyone can use quickly. It's split across the EDRMS, the ERP, and a handful of spreadsheets, and pulling a single report means someone spending a day reconciling exports by hand.",
      "We build BI dashboards and reports directly on your operational systems, so management gets a current, accurate view without waiting for a monthly export.",
    ],
    benefits: [
      "Dashboards built on live operational data, not manual exports",
      "Standard and custom reports for management and regulators",
      "Works across EDRMS, ERP, and other existing systems",
      "Role-based views so each team sees what's relevant to them",
    ],
    audience: ["Executive and management teams", "Finance and compliance", "Government agencies"],
  },
  {
    slug: "hardware",
    category: "infrastructure",
    tabLabel: "Hardware",
    name: "ICT Infrastructure & Hardware Supply",
    tagline: "The right equipment, sized to the job",
    summary:
      "Scanners, servers, storage, and networking equipment supplied, installed, and supported by the same team that designs your solution.",
    description: [
      "Software is only as good as the infrastructure underneath it. We supply and support the production scanners, servers, storage, and networking equipment that our document and information management solutions run on, sized correctly the first time because we're the ones who will support it.",
      "That includes everything from desktop scanners for a small registry to high-throughput production scanners for a digitization bureau processing hundreds of thousands of pages a day, backed by infrastructure partners including Dell EMC, HPE, Huawei, NetApp, Veeam, and Cisco.",
    ],
    benefits: [
      "Equipment sized to actual, measured volumes",
      "Single vendor for software, hardware, and support",
      "Regional stock and spares, not a months-long import wait",
      "Installation, configuration, and ongoing maintenance",
    ],
    audience: ["IT departments", "Digitization bureaus", "Data centres"],
  },
  {
    slug: "training-consultancy",
    category: "infrastructure",
    tabLabel: "Training & Consultancy",
    name: "Training & Consultancy",
    tagline: "A system your team can actually run without us",
    summary:
      "Structured training and change-management support so records officers, IT staff, and end users get real value from day one.",
    description: [
      "A records management system is only as good as the habits of the people using it. We run structured training for records officers, IT personnel, and department heads, covering both the platform itself and the records governance practices around it, so the system doesn't quietly revert to email and shared drives six months after go-live.",
      "We also advise on system integration and custom solution design for organizations whose requirements don't fit a standard package, working alongside your existing IT team rather than replacing it.",
    ],
    benefits: [
      "Role-based training for records officers, IT, and end users",
      "Records governance and retention-policy guidance, not just software training",
      "System integration and custom solution consultancy",
      "Ongoing support after go-live, not a one-time handover",
    ],
    audience: [
      "Records and IT departments",
      "Organizations mid-rollout",
      "Teams inheriting a legacy archive",
    ],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export function getSolutionsByCategory(categoryId: string): Solution[] {
  return solutions.filter((s) => s.category === categoryId);
}
