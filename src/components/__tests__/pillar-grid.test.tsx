import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PillarGrid } from "@/components/pillar-grid";
import { solutionCategories, getSolutionsByCategory } from "@/content/solutions";

describe("PillarGrid", () => {
  it("renders a link for every solution category", () => {
    render(<PillarGrid />);
    for (const category of solutionCategories) {
      expect(screen.getByRole("heading", { name: category.shortLabel })).toBeInTheDocument();
    }
  });

  it("links each pillar to the first solution in that category", () => {
    render(<PillarGrid />);
    for (const category of solutionCategories) {
      const first = getSolutionsByCategory(category.id)[0];
      const link = screen.getByRole("heading", { name: category.shortLabel }).closest("a");
      expect(link).toHaveAttribute("href", `/solutions/${first.slug}`);
    }
  });
});
