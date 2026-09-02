import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TrustSection } from "@/components/trust-section";
import { clients, accreditations } from "@/content/site";

describe("TrustSection", () => {
  it("renders every client", () => {
    render(<TrustSection />);
    for (const client of clients) {
      expect(screen.getByText(client.name)).toBeInTheDocument();
    }
  });

  it("renders every accreditation", () => {
    render(<TrustSection />);
    for (const item of accreditations) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });

  it("links clients that have a URL to their real site", () => {
    render(<TrustSection />);
    const clientWithUrl = clients.find((c) => c.url);
    if (!clientWithUrl) throw new Error("fixture expects at least one client with a url");
    const link = screen.getByText(clientWithUrl.name).closest("a");
    expect(link).toHaveAttribute("href", clientWithUrl.url);
    expect(link).toHaveAttribute("target", "_blank");
  });
});
