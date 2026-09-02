import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/cta-band";
import { getSolutionBySlug, solutions } from "@/content/solutions";
import { getCaseStudiesForSolution } from "@/content/case-studies";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};
  return {
    title: solution.name,
    description: solution.summary,
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();
  const relatedCaseStudies = getCaseStudiesForSolution(solution.slug);
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: solution.name, path: `/solutions/${solution.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <section className="border-line bg-indigo-deep text-paper border-b">
        <Container className="py-16 lg:py-20">
          <Link
            href="/solutions"
            className="text-paper/70 hover:text-paper inline-flex items-center gap-1 text-sm"
          >
            <ArrowLeft size={16} />
            All solutions
          </Link>
          <p className="text-brass-light mt-6 text-sm">{solution.tagline}</p>
          <h1 className="font-display mt-3 max-w-2xl text-4xl font-semibold sm:text-5xl">
            {solution.name}
          </h1>
          <p className="text-paper/70 mt-5 max-w-xl">{solution.summary}</p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="text-ink-soft max-w-2xl space-y-5">
            {solution.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="font-display text-indigo text-lg font-semibold">What you get</h2>
              <ul className="border-line mt-4 space-y-3 border-t pt-4">
                {solution.benefits.map((benefit) => (
                  <li key={benefit} className="text-ink-soft flex gap-3 text-sm">
                    <span aria-hidden className="bg-clay mt-2 h-1 w-1 shrink-0 rounded-full" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-indigo text-lg font-semibold">Who it&apos;s for</h2>
              <ul className="border-line mt-4 flex flex-wrap gap-2 border-t pt-4">
                {solution.audience.map((a) => (
                  <li key={a} className="border-line text-ink-soft border px-3 py-1 text-xs">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {relatedCaseStudies.length > 0 ? (
        <section className="border-line bg-paper-dim border-t py-16">
          <Container>
            <h2 className="font-display text-indigo text-2xl font-semibold">Seen in practice</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {relatedCaseStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group border-line bg-paper hover:border-indigo block border p-6"
                >
                  <p className="text-ink-soft/70 text-xs">{study.industry}</p>
                  <p className="font-display text-indigo group-hover:text-clay mt-1 text-lg font-semibold">
                    {study.client}
                  </p>
                  <p className="text-ink-soft mt-2 text-sm">{study.summary}</p>
                  <span className="text-indigo group-hover:text-clay mt-4 inline-flex items-center gap-1 text-sm font-medium">
                    Read the story
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CtaBand
        heading={`Ready to talk about ${solution.tabLabel}?`}
        body="Tell us about your current process and volumes, and we'll scope what an implementation would look like."
        primaryLabel="Request a demo"
        primaryHref={`/contact?type=demo&interest=${encodeURIComponent(solution.tabLabel)}`}
      />
    </>
  );
}
