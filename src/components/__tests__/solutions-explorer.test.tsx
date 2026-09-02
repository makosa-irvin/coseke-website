import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SolutionsExplorer } from "@/components/solutions-explorer";
import { solutions } from "@/content/solutions";

describe("SolutionsExplorer", () => {
  it("shows the first solution's detail by default", () => {
    render(<SolutionsExplorer />);
    expect(screen.getByRole("heading", { name: solutions[0].name })).toBeInTheDocument();
  });

  it("switches the detail panel when a different tab is selected", async () => {
    const user = userEvent.setup();
    render(<SolutionsExplorer />);

    const secondSolution = solutions[1];
    await user.click(screen.getByRole("tab", { name: secondSolution.tabLabel }));

    expect(screen.getByRole("heading", { name: secondSolution.name })).toBeInTheDocument();
  });

  it("renders every solution as a tab", () => {
    render(<SolutionsExplorer />);
    for (const solution of solutions) {
      expect(screen.getByRole("tab", { name: solution.tabLabel })).toBeInTheDocument();
    }
  });
});
