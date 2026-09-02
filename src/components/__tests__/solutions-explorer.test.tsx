import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SolutionsExplorer } from "@/components/solutions-explorer";
import { solutionCategories, getSolutionsByCategory } from "@/content/solutions";

describe("SolutionsExplorer", () => {
  it("shows the first category's first solution by default", () => {
    render(<SolutionsExplorer />);
    const firstSolution = getSolutionsByCategory(solutionCategories[0].id)[0];
    expect(screen.getByRole("heading", { name: firstSolution.name })).toBeInTheDocument();
  });

  it("renders every category as a pill", () => {
    render(<SolutionsExplorer />);
    for (const category of solutionCategories) {
      expect(screen.getByRole("button", { name: category.name })).toBeInTheDocument();
    }
  });

  it("only shows solutions from the active category as tabs", () => {
    render(<SolutionsExplorer />);
    const firstCategorySolutions = getSolutionsByCategory(solutionCategories[0].id);
    const otherCategorySolutions = getSolutionsByCategory(solutionCategories[1].id);

    for (const solution of firstCategorySolutions) {
      expect(screen.getByRole("tab", { name: solution.tabLabel })).toBeInTheDocument();
    }
    for (const solution of otherCategorySolutions) {
      expect(screen.queryByRole("tab", { name: solution.tabLabel })).not.toBeInTheDocument();
    }
  });

  it("switches both category and detail panel when a new category is selected", async () => {
    const user = userEvent.setup();
    render(<SolutionsExplorer />);

    const secondCategory = solutionCategories[1];
    await user.click(screen.getByRole("button", { name: secondCategory.name }));

    const firstSolutionInCategory = getSolutionsByCategory(secondCategory.id)[0];
    expect(screen.getByRole("heading", { name: firstSolutionInCategory.name })).toBeInTheDocument();
  });

  it("switches the detail panel when a different solution tab is selected", async () => {
    const user = userEvent.setup();
    render(<SolutionsExplorer />);

    const [, secondSolution] = getSolutionsByCategory(solutionCategories[0].id);
    await user.click(screen.getByRole("tab", { name: secondSolution.tabLabel }));

    expect(screen.getByRole("heading", { name: secondSolution.name })).toBeInTheDocument();
  });
});
