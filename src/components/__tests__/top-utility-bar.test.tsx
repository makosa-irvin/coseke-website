import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TopUtilityBar } from "@/components/top-utility-bar";
import { offices } from "@/content/offices";
import { siteConfig } from "@/content/site";

describe("TopUtilityBar", () => {
  it("lists every office's country", () => {
    render(<TopUtilityBar />);
    for (const office of offices) {
      expect(screen.getByText(office.country)).toBeInTheDocument();
    }
  });

  it("links to the support portal", () => {
    render(<TopUtilityBar />);
    const link = screen.getByRole("link", { name: /client support/i });
    expect(link).toHaveAttribute("href", siteConfig.supportUrl);
  });
});
