import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ProductPanelMockup } from "@/components/product-panel-mockup";
import { PillarGrid } from "@/components/pillar-grid";
import { StatRow } from "@/components/stat-row";
import { SolutionsExplorer } from "@/components/solutions-explorer";
import { PartnerMarks } from "@/components/partner-marks";
import { TestimonialBlock } from "@/components/testimonial-block";
import { ClientStrip } from "@/components/client-strip";
import { CtaBand } from "@/components/cta-band";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/case-studies";
import { solutions } from "@/content/solutions";

export default function HomePage() {
  const featuredCaseStudies = caseStudies.filter((c) => c.quote);

  return (
    <>
      <section className="border-line bg-indigo-deep text-paper border-b">
        <Container className="grid gap-12 py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-24">
          <div>
            <p className="text-brass-light text-sm">
              Enterprise systems for East Africa&apos;s public and private sector, since 1990
            </p>
            <h1 className="font-display mt-4 max-w-xl text-4xl leading-[1.05] font-semibold sm:text-5xl">
              The systems behind how East African institutions run.
            </h1>
            <p className="text-paper/70 mt-6 max-w-lg">
              Records, governance, business systems, and the infrastructure underneath — Coseke
              designs, builds, and supports all four for government and private-sector organizations
              across the region, from one accountable team.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact?type=demo"
                className="bg-clay text-paper hover:bg-clay-soft px-6 py-3 text-sm font-medium transition-colors"
              >
                Request a demo
              </Link>
              <Link
                href="/solutions"
                className="border-paper/40 text-paper hover:border-paper flex items-center gap-1 border px-6 py-3 text-sm font-medium transition-colors"
              >
                See all {solutions.length} solutions
              </Link>
            </div>
            <div className="mt-10">
              <p className="text-paper/50 text-xs">Trusted by organizations including</p>
              <div className="mt-3">
                <ClientStrip />
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ProductPanelMockup />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-indigo text-3xl font-semibold sm:text-4xl">
              Four areas. One accountable team.
            </h2>
            <p className="text-ink-soft mt-4">
              We don&apos;t hand you off between a software vendor, a scanning bureau, and a
              hardware reseller. Whichever of these you start with, Coseke scopes, builds, and
              supports it end to end.
            </p>
          </div>
          <div className="mt-10">
            <PillarGrid />
          </div>
        </Container>
      </section>

      <section className="border-line border-y">
        <Container className="py-0">
          <StatRow />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-indigo text-3xl font-semibold sm:text-4xl">
              Look inside any of the four
            </h2>
            <p className="text-ink-soft mt-4">
              Ten solutions, grouped into the areas above. Browse by category to see what&apos;s in
              each one.
            </p>
          </div>
          <div className="mt-10">
            <SolutionsExplorer />
          </div>
        </Container>
      </section>

      <section className="border-line bg-paper-dim border-y py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="font-display text-indigo text-3xl font-semibold">
                Built for the sectors that can least afford a missing file
              </h2>
              <p className="text-ink-soft mt-4">
                Regulators, auditors, and citizens all expect an answer the same day. Our clients
                span the industries where that expectation is highest.
              </p>
              <Link
                href="/industries"
                className="text-indigo hover:text-clay mt-6 inline-flex items-center gap-1 text-sm font-medium"
              >
                All industries we serve
                <ArrowUpRight size={16} />
              </Link>
            </div>
            <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {industries.slice(0, 6).map((industry) => (
                <li key={industry.slug} className="border-line border-t pt-4">
                  <p className="text-indigo font-medium">{industry.name}</p>
                  <p className="text-ink-soft mt-1 text-sm">{industry.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-indigo text-3xl font-semibold">In their words</h2>
            <Link
              href="/case-studies"
              className="text-indigo hover:text-clay inline-flex items-center gap-1 text-sm font-medium"
            >
              All case studies
              <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            {featuredCaseStudies.map((study) => (
              <TestimonialBlock key={study.slug} caseStudy={study} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-line bg-paper-dim border-t py-20">
        <Container>
          <h2 className="font-display text-indigo text-2xl font-semibold">
            Delivered on platforms your team can already get support for
          </h2>
          <p className="text-ink-soft mt-3 max-w-2xl">
            We build on established, widely supported technology rather than closed, proprietary
            tools, so you&apos;re never the only organization running it.
          </p>
          <div className="mt-8">
            <PartnerMarks />
          </div>
        </Container>
      </section>

      <CtaBand
        heading="Tell us where to start."
        body="Most clients begin with one of the four areas above and expand from there. We're glad to talk through any of them, or you can download a short overview first."
        primaryLabel="Request a demo"
        primaryHref="/contact?type=demo"
        secondaryLabel="Download brochure"
        secondaryHref="/downloads/coseke-company-overview.pdf"
      />
    </>
  );
}
