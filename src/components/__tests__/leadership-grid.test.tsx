import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LeadershipGrid } from "@/components/leadership-grid";
import { leadershipRoles } from "@/content/team";

describe("LeadershipGrid", () => {
  it("renders a card for every leadership role", () => {
    render(<LeadershipGrid />);
    for (const role of leadershipRoles) {
      expect(screen.getByText(role.roleTitle)).toBeInTheDocument();
    }
  });

  it("never fabricates a name — shows a placeholder when name is absent", () => {
    render(<LeadershipGrid />);
    const rolesWithoutNames = leadershipRoles.filter((r) => !r.name);
    expect(rolesWithoutNames.length).toBeGreaterThan(0);
    const placeholders = screen.getAllByText("Profile coming soon");
    expect(placeholders).toHaveLength(rolesWithoutNames.length);
  });
});
