import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/cta-band";
import { BlogBody } from "@/components/blog-body";
import { blogPosts, getBlogPostBySlug } from "@/content/blog";
import { getSolutionBySlug, solutionCategories } from "@/content/solutions";
import { estimateReadingTime } from "@/lib/reading-time";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { siteConfig } from "@/content/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const category = solutionCategories.find((c) => c.id === post.categoryId);
  const relatedSolution = post.relatedSolutionSlug
    ? getSolutionBySlug(post.relatedSolutionSlug)
    : undefined;

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: siteConfig.legalName },
    publisher: { "@type": "Organization", name: siteConfig.legalName },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="border-line bg-indigo-deep text-paper border-b">
        <Container className="py-16 lg:py-20">
          <Link
            href="/blog"
            className="text-paper/70 hover:text-paper inline-flex items-center gap-1 text-sm"
          >
            <ArrowLeft size={16} />
            All posts
          </Link>
          {category ? <p className="text-brass-light mt-6 text-sm">{category.shortLabel}</p> : null}
          <h1 className="font-display mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            {post.title}
          </h1>
          <p className="text-paper/50 mt-5 text-sm">
            {formatDate(post.publishedAt)} · {estimateReadingTime(post.body)}
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <BlogBody body={post.body} />
        </Container>
      </section>

      {relatedSolution ? (
        <section className="border-line bg-paper-dim border-t py-16">
          <Container>
            <p className="text-ink-soft text-sm">Related solution</p>
            <Link
              href={`/solutions/${relatedSolution.slug}`}
              className="font-display text-indigo hover:text-clay mt-1 inline-block text-2xl font-semibold"
            >
              {relatedSolution.name} →
            </Link>
            <p className="text-ink-soft mt-2 max-w-xl text-sm">{relatedSolution.summary}</p>
          </Container>
        </section>
      ) : null}

      <CtaBand
        heading="Working through this yourself?"
        body="Tell us where you're stuck, and we'll give you a straight answer on what it would take to fix it."
        primaryLabel="Discuss a project"
        primaryHref="/contact?type=demo"
      />
    </>
  );
}
