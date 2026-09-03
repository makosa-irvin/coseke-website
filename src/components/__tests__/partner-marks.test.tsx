import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PartnerMarks } from "@/components/partner-marks";
import { partners } from "@/content/site";

describe("PartnerMarks", () => {
  it("renders every partner across all three groups", () => {
    render(<PartnerMarks />);
    const all = [...partners.platforms, ...partners.infrastructure, ...partners.storage];
    for (const partner of all) {
      expect(screen.getByText(partner.name)).toBeInTheDocument();
    }
  });

  it("renders the storage group (Bruynzeel) with its own section heading", () => {
    render(<PartnerMarks />);
    expect(screen.getByText("Physical storage systems")).toBeInTheDocument();
  });
});
