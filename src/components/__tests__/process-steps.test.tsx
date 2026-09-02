import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProcessSteps } from "@/components/process-steps";
import { engagementSteps } from "@/content/site";

describe("ProcessSteps", () => {
  it("renders every step's number, title, and description", () => {
    render(<ProcessSteps />);
    for (const step of engagementSteps) {
      expect(screen.getByText(step.step)).toBeInTheDocument();
      expect(screen.getByRole("heading", { name: step.title })).toBeInTheDocument();
      expect(screen.getByText(step.description)).toBeInTheDocument();
    }
  });

  it("renders steps in order", () => {
    render(<ProcessSteps />);
    const headings = screen.getAllByRole("heading").map((h) => h.textContent);
    expect(headings).toEqual(engagementSteps.map((s) => s.title));
  });
});
