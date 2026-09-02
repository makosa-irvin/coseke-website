import { describe, expect, it } from "vitest";
import { estimateReadingTime } from "@/lib/reading-time";
import type { BlogBlock } from "@/content/blog";

describe("estimateReadingTime", () => {
  it("returns at least 1 min read for very short content", () => {
    const body: BlogBlock[] = [{ type: "paragraph", text: "Short." }];
    expect(estimateReadingTime(body)).toBe("1 min read");
  });

  it("counts words across paragraphs, headings, and list items", () => {
    const word = "word ";
    const body: BlogBlock[] = [
      { type: "paragraph", text: word.repeat(100) },
      { type: "heading", text: word.repeat(10) },
      { type: "list", items: [word.repeat(100), word.repeat(10)] },
    ];
    // 100 + 10 + 100 + 10 = 220 words -> 1 minute at 220wpm
    expect(estimateReadingTime(body)).toBe("1 min read");
  });

  it("scales up for longer content", () => {
    const body: BlogBlock[] = [{ type: "paragraph", text: "word ".repeat(900) }];
    expect(estimateReadingTime(body)).toBe("4 min read");
  });
});
