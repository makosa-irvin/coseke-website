import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CapabilitySummaryCard } from "@/components/capability-summary-card";
import { PillarGrid } from "@/components/pillar-grid";
import { StatRow } from "@/components/stat-row";
import { TrustSection } from "@/components/trust-section";
import { SolutionsExplorer } from "@/components/solutions-explorer";
import { BeforeAfterProof } from "@/components/before-after-proof";
import { ProcessSteps } from "@/components/process-steps";
import { PartnerMarks } from "@/components/partner-marks";
import { CtaBand } from "@/components/cta-band";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/case-studies";

export default function HomePage() {
  const featuredCaseStudy = caseStudies.find((c) => c.before && c.after && c.quote);

  return (
    <>
      <section className="border-line bg-indigo-deep text-invert border-b">
        <Container className="grid gap-12 py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-24">
          <div>
            <p className="text-brass-light text-sm">
              East Africa&apos;s information management partner
            </p>
            <h1 className="font-display mt-4 max-w-xl text-4xl leading-[1.05] font-semibold sm:text-5xl">
              Build a more connected, efficient institution.
            </h1>
            <p className="text-invert/70 mt-6 max-w-lg">
              Coseke designs, implements, and supports information management, digital governance,
              business systems, and ICT infrastructure &mdash; from one experienced regional team.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact?type=demo"
                className="bg-clay text-invert hover:bg-clay-soft px-6 py-3 text-sm font-medium transition-colors"
              >
                Discuss your project
              </Link>
              <Link
                href="/case-studies"
                className="border-invert/40 text-invert hover:border-invert flex items-center gap-1 border px-6 py-3 text-sm font-medium transition-colors"
              >
                See client outcomes
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <CapabilitySummaryCard />
          </div>
        </Container>
      </section>

      <section className="border-line border-b">
        <Container className="py-0">
          <StatRow />
        </Container>
      </section>

      <section className="border-line border-b">
        <Container>
          <TrustSection />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-clay mb-3 text-sm font-medium">Start with the bottleneck</p>
            <h2 className="font-display text-indigo text-3xl font-semibold sm:text-4xl">
              Where is work getting stuck?
            </h2>
            <p className="text-ink-soft mt-4">
              You don&apos;t need to arrive with a product name. Start with the process slowing your
              team down, the risk keeping you awake, or the information you can&apos;t find fast
              enough.
            </p>
          </div>
          <div className="mt-10">
            <PillarGrid />
          </div>
        </Container>
      </section>

      <section className="border-line bg-paper-dim border-y py-20">
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

      <section className="py-20">
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

      {featuredCaseStudy ? (
        <section className="bg-indigo-deep py-20">
          <Container>
            <p className="text-brass-light mb-3 text-sm font-medium">Proof in practice</p>
            <h2 className="font-display text-invert mb-10 max-w-xl text-3xl font-semibold sm:text-4xl">
              From archive shelves to answers in seconds.
            </h2>
            <BeforeAfterProof caseStudy={featuredCaseStudy} />
          </Container>
        </section>
      ) : null}

      <section className="py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-clay mb-3 text-sm font-medium">One accountable partner</p>
            <h2 className="font-display text-indigo text-3xl font-semibold sm:text-4xl">
              Technology only works when it fits the institution around it.
            </h2>
            <p className="text-ink-soft mt-4">
              Coseke brings process discovery, platforms, infrastructure, implementation, training,
              and regional support into one delivery relationship.
            </p>
          </div>
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </Container>
      </section>

      <section className="border-line bg-paper-dim border-t py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="font-display text-indigo text-xl font-semibold">
                Regional teams, global platforms
              </h2>
              <p className="text-ink-soft mt-3 text-sm">
                Local teams across East Africa implement and support established technology your IT
                and procurement teams can stand behind.
              </p>
              <Link
                href="/about"
                className="text-indigo hover:text-clay mt-4 inline-flex items-center gap-1 text-sm font-medium"
              >
                Why Coseke
                <ArrowUpRight size={16} />
              </Link>
            </div>
            <PartnerMarks />
          </div>
        </Container>
      </section>

      <CtaBand
        heading="Bring us the information bottleneck. We'll help map the way through it."
        body="Tell us what's slowing your team down and get a practical conversation with a regional solutions specialist."
        primaryLabel="Discuss your project"
        primaryHref="/contact?type=demo"
        secondaryLabel="Download overview"
        secondaryHref="/downloads/coseke-company-overview.pdf"
      />
    </>
  );
}
