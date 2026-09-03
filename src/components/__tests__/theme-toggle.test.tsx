import { beforeAll, describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@/components/theme-toggle";

// next-themes reads matchMedia for the "system" default; jsdom doesn't
// implement it, so stub a light-preference response.
beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

function renderToggle() {
  return render(
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <ThemeToggle />
    </ThemeProvider>,
  );
}

describe("ThemeToggle", () => {
  it("renders a working toggle button after mount", async () => {
    renderToggle();
    const button = await screen.findByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("switches the label when clicked", async () => {
    renderToggle();
    const button = await screen.findByRole("button", { name: /switch to dark mode/i });
    fireEvent.click(button);
    expect(
      await screen.findByRole("button", { name: /switch to light mode/i }),
    ).toBeInTheDocument();
  });
});
