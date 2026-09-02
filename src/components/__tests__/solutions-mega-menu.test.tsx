import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SolutionsMegaMenu } from "@/components/solutions-mega-menu";
import { solutionCategories } from "@/content/solutions";

describe("SolutionsMegaMenu", () => {
  it("is closed by default", () => {
    render(<SolutionsMegaMenu />);
    expect(screen.queryByText(solutionCategories[0].name)).not.toBeInTheDocument();
  });

  it("opens and lists every category on click", async () => {
    const user = userEvent.setup();
    render(<SolutionsMegaMenu />);

    await user.click(screen.getByRole("button", { name: /solutions/i }));

    for (const category of solutionCategories) {
      expect(screen.getByText(category.name)).toBeInTheDocument();
    }
  });

  it("closes again on Escape", async () => {
    const user = userEvent.setup();
    render(<SolutionsMegaMenu />);

    await user.click(screen.getByRole("button", { name: /solutions/i }));
    expect(screen.getByText(solutionCategories[0].name)).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(screen.queryByText(solutionCategories[0].name)).not.toBeInTheDocument();
  });
});
