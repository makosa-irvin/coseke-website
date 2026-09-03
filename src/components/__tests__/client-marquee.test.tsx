import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ClientMarquee } from "@/components/client-marquee";
import { clients } from "@/content/site";

describe("ClientMarquee", () => {
  it("renders every client exactly once in the accessible list", () => {
    render(<ClientMarquee />);
    for (const client of clients) {
      // getByText throws if there is more than one match, which is exactly
      // the regression this guards against: the decorative marquee/duplicate
      // copies must not also be exposed as text nodes screen readers pick up.
      expect(screen.getByText(client.name)).toBeInTheDocument();
    }
  });

  it("gives clients with a URL a real, correctly-targeted link in the accessible list", () => {
    render(<ClientMarquee />);
    const clientWithUrl = clients.find((c) => c.url);
    if (!clientWithUrl) throw new Error("fixture expects at least one client with a url");
    const link = screen.getByText(clientWithUrl.name).closest("a");
    expect(link).toHaveAttribute("href", clientWithUrl.url);
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("marks the decorative visual copies as aria-hidden", () => {
    const { container } = render(<ClientMarquee />);
    const hiddenNodes = container.querySelectorAll('[aria-hidden="true"]');
    // The animated strip wrapper and the reduced-motion fallback list
    expect(hiddenNodes.length).toBeGreaterThanOrEqual(2);
  });
});
