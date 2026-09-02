import { describe, expect, it } from "vitest";
import { caseStudies, getCaseStudyBySlug, getCaseStudiesForSolution } from "@/content/case-studies";
import { getSolutionBySlug } from "@/content/solutions";

describe("case study content", () => {
  it("finds a case study by slug", () => {
    const study = getCaseStudyBySlug("kenya-airports-authority");
    expect(study?.client).toBe("Kenya Airports Authority");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getCaseStudyBySlug("not-a-real-client")).toBeUndefined();
  });

  it("every referenced solution slug actually exists", () => {
    for (const study of caseStudies) {
      for (const slug of study.solutionSlugs) {
        expect(
          getSolutionBySlug(slug),
          `${study.slug} references missing solution ${slug}`,
        ).toBeDefined();
      }
    }
  });

  it("returns case studies that reference a given solution", () => {
    const results = getCaseStudiesForSolution("digitization");
    expect(results.map((c) => c.slug)).toContain("kenya-airports-authority");
    expect(results.map((c) => c.slug)).toContain("minet");
  });

  it("returns an empty array for a solution with no linked case studies", () => {
    expect(getCaseStudiesForSolution("hardware")).toEqual([]);
  });
});
