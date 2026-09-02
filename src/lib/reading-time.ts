import type { BlogBlock } from "@/content/blog";

const WORDS_PER_MINUTE = 220;

export function estimateReadingTime(body: BlogBlock[]): string {
  const wordCount = body.reduce((count, block) => {
    if (block.type === "list") {
      return count + block.items.join(" ").split(/\s+/).length;
    }
    return count + block.text.split(/\s+/).length;
  }, 0);

  const minutes = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}
