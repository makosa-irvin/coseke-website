import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BeforeAfterProof } from "@/components/before-after-proof";
import { getCaseStudyBySlug } from "@/content/case-studies";

describe("BeforeAfterProof", () => {
  it("renders the before and after bullets and the quote for a fully-populated case study", () => {
    const study = getCaseStudyBySlug("kenya-airports-authority");
    if (!study) throw new Error("fixture case study missing");

    render(<BeforeAfterProof caseStudy={study} />);

    // Use a substring from the middle of the quote — the start of some real
    // quotes can overlap with their own "after" bullets (e.g. "Search and
    // retrieval..." appears in both), so anchor on unique text instead.
    expect(screen.getByText(/uniqueness of files has been maintained/)).toBeInTheDocument();
    for (const item of study.before ?? []) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
    for (const item of study.after ?? []) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });

  it("renders nothing for a case study without before/after data", () => {
    const study = getCaseStudyBySlug("sheria-sacco");
    if (!study) throw new Error("fixture case study missing");

    const { container } = render(<BeforeAfterProof caseStudy={study} />);
    expect(container).toBeEmptyDOMElement();
  });
});
