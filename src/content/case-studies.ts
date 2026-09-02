export type CaseStudy = {
  slug: string;
  client: string;
  clientUrl?: string;
  industry: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  quote?: { text: string; attribution: string };
  solutionSlugs: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "kenya-airports-authority",
    client: "Kenya Airports Authority",
    clientUrl: "https://www.kaa.go.ke",
    industry: "Aviation & government",
    summary:
      "Bulk digitization and indexing so records can be searched and retrieved on demand, not dug out of storage.",
    problem:
      "As the operator of Kenya's airports, KAA generates and retains a large volume of operational, administrative, and regulatory paperwork. Retrieving a specific file from storage was slow, and the volume made any manual reorganization impractical.",
    solution:
      "Coseke ran a bulk digitization and indexing project, scanning existing archives and building a structured index that preserves the uniqueness and integrity of each document rather than just producing a folder of images.",
    result:
      "Search and retrieval of files is now measured in seconds rather than a trip to storage, with document integrity maintained through the indexing process throughout.",
    quote: {
      text: "Search and retrieval of files has been made faster and easier, and through the indexing process the uniqueness of files has been maintained. We are confident they can offer bulk digitization and indexing of documents to any institution in a proficient way.",
      attribution: "Kenya Airports Authority",
    },
    solutionSlugs: ["digitization", "edrms"],
  },
  {
    slug: "kenya-ports-authority-pension",
    client: "Kenya Ports Authority Pension Scheme",
    clientUrl: "https://kpapension.co.ke",
    industry: "Pension & financial services",
    summary:
      "An ongoing support relationship that member-facing scheme administration can depend on.",
    problem:
      "A pension scheme's records and member-facing processes need to be dependable year-round, not just at implementation, with support available whenever an issue comes up.",
    solution:
      "Coseke provides the Scheme with continuing support on its records and information systems, backed by the same regional team that carried out the original implementation.",
    result:
      "The Scheme has confidence in Coseke's ability to deliver the same standard of service to any organization or institution, professionally and efficiently, based on the relationship built over time.",
    quote: {
      text: "Coseke has been providing us with the necessary support when the need arises. We have confidence in Coseke. With the business relationship we enjoy with Coseke, we agree that they have the ability to offer such services to any organization and institution efficiently and in a professional manner.",
      attribution: "Kenya Ports Authority Pension Scheme",
    },
    solutionSlugs: ["edrms", "virtual-agms"],
  },
  {
    slug: "sheria-sacco",
    client: "Sheria Sacco",
    industry: "SACCOs & cooperatives",
    summary:
      "An Electronic Document Management System that took workflow off paper and into a governed system.",
    problem:
      "Like many SACCOs, Sheria Sacco's member and administrative documents moved through paper-based workflows, creation, approval, storage, and retrieval, all handled manually, which limited both speed and oversight.",
    solution:
      "Coseke designed and implemented an Electronic Document Management System to manage the creation, execution, storage, and access of Sheria Sacco's information, automating the workflow around it rather than just digitizing files in isolation.",
    result:
      "The EDMS eliminated the burden of paper-based processing, increased staff productivity, and improved the efficiency of the Sacco's working procedures.",
    solutionSlugs: ["edrms", "capture"],
  },
  {
    slug: "minet",
    client: "Minet Group",
    industry: "Insurance",
    summary:
      "Document scanning and indexing for an insurer where records compliance is a regulatory requirement, not a nice-to-have.",
    problem:
      "Records management carries particular weight in insurance: client privacy legislation, litigation exposure, and industry consolidation all raise the cost of a document that can't be found or verified when it's needed.",
    solution:
      "Coseke Uganda carried out document scanning services for Minet Group covering document rehabilitation, indexing, scanning, and uploading, bringing existing paper archives into a structured, compliant digital record.",
    result:
      "Minet's records are now in a form that supports compliance and litigation readiness directly, rather than depending on staff being able to locate the right physical file in time.",
    solutionSlugs: ["digitization"],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getCaseStudiesForSolution(solutionSlug: string): CaseStudy[] {
  return caseStudies.filter((c) => c.solutionSlugs.includes(solutionSlug));
}
