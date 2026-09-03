import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { AccreditationBadges } from "@/components/accreditation-badges";
import { accreditations } from "@/content/site";

describe("AccreditationBadges", () => {
  it("renders an image for every accreditation, sourced from its slug", () => {
    render(<AccreditationBadges />);
    for (const item of accreditations) {
      const img = screen.getByRole("img", { name: item.label });
      expect(img).toHaveAttribute("src", `/images/accreditation-${item.slug}.png`);
    }
  });

  it("renders every accreditation's label as visible text", () => {
    render(<AccreditationBadges />);
    for (const item of accreditations) {
      expect(screen.getAllByText(item.label).length).toBeGreaterThan(0);
    }
  });
});
