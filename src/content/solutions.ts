export type Solution = {
  slug: string;
  tabLabel: string;
  name: string;
  tagline: string;
  summary: string;
  description: string[];
  benefits: string[];
  audience: string[];
};

export const solutions: Solution[] = [
  {
    slug: "edrms",
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
  },
  {
    slug: "board-portal",
    tabLabel: "Board Portal",
    name: "Board & Meeting Management",
    tagline: "A boardroom that travels with your directors",
    summary:
      "Prepare, distribute, and run board and committee meetings digitally, from agenda to minutes, on any device.",
    description: [
      "Preparing a board pack the old way means printing, binding, and couriering hundreds of pages, then doing it again for every late change. Our board portal, built on the Passageways platform, replaces that cycle with a secure app directors already know how to use.",
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
    slug: "digitization",
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
  },
  {
    slug: "erp",
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
    slug: "capture",
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
    slug: "hardware",
    tabLabel: "Hardware",
    name: "ICT Infrastructure & Hardware Supply",
    tagline: "The right equipment, sized to the job",
    summary:
      "Scanners, servers, storage, and networking equipment supplied, installed, and supported by the same team that designs your solution.",
    description: [
      "Software is only as good as the infrastructure underneath it. We supply and support the production scanners, servers, storage, and networking equipment that our document and information management solutions run on, sized correctly the first time because we're the ones who will support it.",
      "That includes everything from desktop scanners for a small registry to high-throughput production scanners for a digitization bureau processing hundreds of thousands of pages a day.",
    ],
    benefits: [
      "Equipment sized to actual, measured volumes",
      "Single vendor for software, hardware, and support",
      "Regional stock and spares, not a months-long import wait",
      "Installation, configuration, and ongoing maintenance",
    ],
    audience: ["IT departments", "Digitization bureaus", "Data centres"],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
