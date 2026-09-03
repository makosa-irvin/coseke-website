import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/cta-band";
import { Photo } from "@/components/photo";
import { ClientMarkFallback } from "@/components/illustrations/client-mark-fallback";
import { caseStudies, getCaseStudyBySlug } from "@/content/case-studies";
import { getSolutionBySlug } from "@/content/solutions";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return {
    title: `${study.client} — Case Study`,
    description: study.summary,
  };
}

const stages: { key: "problem" | "solution" | "result"; label: string }[] = [
  { key: "problem", label: "The problem" },
  { key: "solution", label: "What we built" },
  { key: "result", label: "The result" },
];

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const linkedSolutions = study.solutionSlugs
    .map((s) => getSolutionBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
    { name: study.client, path: `/case-studies/${study.slug}` },
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
            href="/case-studies"
            className="text-paper/70 hover:text-paper inline-flex items-center gap-1 text-sm"
          >
            <ArrowLeft size={16} />
            All case studies
          </Link>
          <p className="text-brass-light mt-6 text-sm">{study.industry}</p>
          <h1 className="font-display mt-3 max-w-2xl text-4xl font-semibold sm:text-5xl">
            {study.client}
          </h1>
          <p className="text-paper/70 mt-5 max-w-xl">{study.summary}</p>
          <div className="mt-8">
            <Photo
              src={`/images/client-logo-${study.slug}.png`}
              alt={study.client}
              fallback={<ClientMarkFallback name={study.client} />}
              className="border-paper/20 h-16 w-16 border object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-x-12 gap-y-10 lg:grid-cols-3">
          {stages.map((stage) => (
            <div key={stage.key} className="border-line border-t pt-4">
              <p className="font-display text-indigo text-lg font-semibold">{stage.label}</p>
              <p className="text-ink-soft mt-3 text-sm leading-relaxed">{study[stage.key]}</p>
            </div>
          ))}
        </Container>
      </section>

      {study.quote ? (
        <section className="border-line bg-paper-dim border-y py-16">
          <Container>
            <figure className="border-clay max-w-2xl border-l-2 pl-6">
              <blockquote className="font-display text-indigo text-2xl leading-snug">
                &ldquo;{study.quote.text}&rdquo;
              </blockquote>
              <figcaption className="text-ink mt-4 text-sm font-medium">
                {study.quote.attribution}
              </figcaption>
            </figure>
          </Container>
        </section>
      ) : null}

      {linkedSolutions.length > 0 ? (
        <section className="py-16">
          <Container>
            <p className="text-indigo text-sm font-medium">Solutions used</p>
            <ul className="border-line mt-4 flex flex-wrap gap-3 border-t pt-4">
              {linkedSolutions.map((solution) => (
                <li key={solution.slug}>
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="border-line text-indigo hover:border-indigo border px-4 py-2 text-sm"
                  >
                    {solution.tabLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <CtaBand
        heading={`Want a result like ${study.client}'s?`}
        body="Tell us about your process and volumes, and we'll scope what it would take to get there."
        primaryLabel="Discuss a project"
        primaryHref="/contact?type=demo"
      />
    </>
  );
}
