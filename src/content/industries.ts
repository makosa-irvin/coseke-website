export type Industry = {
  slug: string;
  name: string;
  description: string;
};

export const industries: Industry[] = [
  {
    slug: "government",
    name: "Government & Public Sector",
    description:
      "Registries, ministries, and agencies moving citizen and land records off paper and onto searchable, auditable systems.",
  },
  {
    slug: "financial-services",
    name: "Banking & Financial Services",
    description:
      "Loan files, account opening documents, and board governance handled with the audit trail regulators expect.",
  },
  {
    slug: "insurance",
    name: "Insurance",
    description:
      "Claims and policy documents captured, indexed, and routed without a paper file changing hands.",
  },
  {
    slug: "utilities",
    name: "Utilities",
    description:
      "Customer records, engineering drawings, and compliance documents for power, water, and telecoms operators.",
  },
  {
    slug: "sacco",
    name: "SACCOs & Cooperatives",
    description: "Member records and board governance for cooperative societies across the region.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description:
      "Patient files and administrative records digitized and retained in line with clinical record-keeping rules.",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Distribution",
    description:
      "Finance, inventory, and procurement unified under a single ERP instead of disconnected spreadsheets.",
  },
  {
    slug: "legal",
    name: "Legal Services",
    description:
      "Case files and contracts managed with version control, retention rules, and fast full-text search.",
  },
];
