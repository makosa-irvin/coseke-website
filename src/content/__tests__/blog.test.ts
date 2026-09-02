import { describe, expect, it } from "vitest";
import { blogPosts, getBlogPostBySlug, getBlogPostsByCategory } from "@/content/blog";
import { getSolutionBySlug, solutionCategories } from "@/content/solutions";

describe("blog content", () => {
  it("finds a post by slug", () => {
    const post = getBlogPostBySlug("what-is-an-edrms");
    expect(post?.title).toContain("EDRMS");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getBlogPostBySlug("not-a-real-post")).toBeUndefined();
  });

  it("every post's categoryId is a real solution category", () => {
    for (const post of blogPosts) {
      const category = solutionCategories.find((c) => c.id === post.categoryId);
      expect(category, `${post.slug} references missing category ${post.categoryId}`).toBeDefined();
    }
  });

  it("every post's relatedSolutionSlug (when set) is a real solution", () => {
    for (const post of blogPosts) {
      if (!post.relatedSolutionSlug) continue;
      expect(
        getSolutionBySlug(post.relatedSolutionSlug),
        `${post.slug} references missing solution ${post.relatedSolutionSlug}`,
      ).toBeDefined();
    }
  });

  it("every post has a unique slug", () => {
    const slugs = blogPosts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("filters posts by category", () => {
    const recordsPosts = getBlogPostsByCategory("records");
    expect(recordsPosts.length).toBeGreaterThan(0);
    for (const post of recordsPosts) {
      expect(post.categoryId).toBe("records");
    }
  });
});
