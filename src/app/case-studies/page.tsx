import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/cta-band";
import { Photo } from "@/components/photo";
import { ClientMarkFallback } from "@/components/illustrations/client-mark-fallback";
import { caseStudies } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "How Kenya Airports Authority, Kenya Ports Authority Pension Scheme, Sheria Sacco, and Minet Group use Coseke to run their records and governance.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="border-line bg-indigo-deep text-invert border-b">
        <Container className="py-16 lg:py-20">
          <h1 className="font-display max-w-2xl text-4xl font-semibold sm:text-5xl">
            Case studies
          </h1>
          <p className="text-invert/70 mt-5 max-w-xl">
            Real deployments, in the clients&apos; own words: the problem they had, what we built,
            and what changed afterward.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="divide-line border-line divide-y border-t">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group grid gap-3 py-8 sm:grid-cols-[auto_1fr_2fr_auto] sm:items-center sm:gap-6"
              >
                <Photo
                  src={`/images/client-logo-${study.slug}.png`}
                  alt={study.client}
                  fallback={<ClientMarkFallback name={study.client} />}
                  className="border-line hidden h-16 w-16 border object-cover sm:block"
                />
                <div>
                  <p className="font-display text-indigo group-hover:text-clay text-xl font-semibold">
                    {study.client}
                  </p>
                  <p className="text-ink-soft/70 mt-1 text-xs">{study.industry}</p>
                </div>
                <p className="text-ink-soft text-sm">{study.summary}</p>
                <span className="text-indigo group-hover:text-clay flex items-center gap-1 text-sm font-medium">
                  Read the story
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        heading="Want a similar result?"
        body="Tell us what you're working with, and we'll point to the closest thing we've already built."
      />
    </>
  );
}
