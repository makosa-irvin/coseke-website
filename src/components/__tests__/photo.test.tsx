import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Photo } from "@/components/photo";

describe("Photo", () => {
  it("renders the real image by default", () => {
    render(
      <Photo src="/images/does-not-exist.jpg" alt="Example" fallback={<span>Fallback</span>} />,
    );
    const img = screen.getByRole("img", { name: "Example" });
    expect(img.tagName).toBe("IMG");
    expect(img).toHaveAttribute("src", "/images/does-not-exist.jpg");
  });

  it("swaps to the fallback when the image fails to load", () => {
    render(
      <Photo
        src="/images/does-not-exist.jpg"
        alt="Example"
        fallback={<span>Fallback content</span>}
      />,
    );
    const img = screen.getByRole("img", { name: "Example" });

    fireEvent.error(img);

    expect(screen.queryByRole("img", { name: "Example" })).not.toBeInTheDocument();
    expect(screen.getByText("Fallback content")).toBeInTheDocument();
  });

  it("applies the given className to whichever element is rendered", () => {
    render(
      <Photo
        src="/images/does-not-exist.jpg"
        alt="Example"
        fallback={<span>Fallback</span>}
        className="h-10 w-10"
      />,
    );
    const img = screen.getByRole("img", { name: "Example" });
    expect(img).toHaveClass("h-10", "w-10");

    fireEvent.error(img);

    const fallbackWrapper = screen.getByText("Fallback").parentElement;
    expect(fallbackWrapper).toHaveClass("h-10", "w-10");
  });
});
