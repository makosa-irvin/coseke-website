import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { RegionalTeams } from "@/components/regional-teams";
import { offices } from "@/content/offices";

describe("RegionalTeams", () => {
  it("renders a card for every office", () => {
    render(<RegionalTeams />);
    for (const office of offices) {
      expect(screen.getByText(new RegExp(`${office.city}, ${office.country}`))).toBeInTheDocument();
    }
  });

  it("marks the headquarters office", () => {
    render(<RegionalTeams />);
    expect(screen.getByText("Headquarters")).toBeInTheDocument();
  });
});
