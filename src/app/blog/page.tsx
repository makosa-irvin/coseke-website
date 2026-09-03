import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/cta-band";
import { blogPosts } from "@/content/blog";
import { solutionCategories } from "@/content/solutions";
import { estimateReadingTime } from "@/lib/reading-time";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guidance on document management, digitization, board governance, and business systems for institutions across East Africa.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return (
    <>
      <section className="border-line bg-indigo-deep text-invert border-b">
        <Container className="py-16 lg:py-20">
          <h1 className="font-display max-w-2xl text-4xl font-semibold sm:text-5xl">Blog</h1>
          <p className="text-invert/70 mt-5 max-w-xl">
            Practical notes on document management, digitization, governance, and business systems,
            written for the people who have to actually implement them.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="border-line divide-line divide-y border-t">
            {sorted.map((post) => {
              const category = solutionCategories.find((c) => c.id === post.categoryId);
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group grid gap-2 py-8 sm:grid-cols-[8rem_1fr_auto] sm:items-start sm:gap-8"
                >
                  <p className="text-ink-soft/70 text-xs">{formatDate(post.publishedAt)}</p>
                  <div>
                    {category ? (
                      <p className="text-clay mb-1 text-xs font-medium">{category.shortLabel}</p>
                    ) : null}
                    <p className="font-display text-indigo group-hover:text-clay text-xl font-semibold">
                      {post.title}
                    </p>
                    <p className="text-ink-soft mt-2 text-sm">{post.excerpt}</p>
                    <p className="text-ink-soft/60 mt-2 text-xs">
                      {estimateReadingTime(post.body)}
                    </p>
                  </div>
                  <span className="text-indigo group-hover:text-clay hidden items-center gap-1 text-sm font-medium sm:flex">
                    Read
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBand
        heading="Have a question a blog post won't answer?"
        body="Tell us what you're working with, and we'll give you a straight answer, not another article."
      />
    </>
  );
}
