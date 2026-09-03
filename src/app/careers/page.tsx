import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/cta-band";
import { values } from "@/content/site";
import { offices } from "@/content/offices";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Coseke's team across Kenya, Uganda, Tanzania, and Rwanda.",
};

export default function CareersPage() {
  return (
    <>
      <section className="border-line bg-indigo-deep text-invert border-b">
        <Container className="py-16 lg:py-20">
          <h1 className="font-display max-w-xl text-4xl font-semibold sm:text-5xl">
            Work on systems organizations actually depend on
          </h1>
          <p className="text-invert/70 mt-5 max-w-xl">
            Coseke teams sit close to the client, from scoping a records migration to supporting it
            years after go-live. If you&apos;d rather build something that stays in production than
            ship a demo, this is that kind of work.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-indigo text-2xl font-semibold">
              What it&apos;s like day to day
            </h2>
            <p className="text-ink-soft mt-4">
              Small, senior project teams. Direct contact with client stakeholders, not a layer of
              account managers between you and the problem. Work that spans implementation,
              integration, and long-term support, so you see the consequences of decisions made at
              scoping stage.
            </p>
          </div>
          <div>
            <h2 className="font-display text-indigo text-2xl font-semibold">What we look for</h2>
            <ul className="divide-line border-line mt-4 divide-y border-t">
              {values.map((value) => (
                <li key={value.name} className="text-ink-soft py-3 text-sm">
                  <span className="text-indigo font-medium">{value.name}.</span> {value.description}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-line bg-paper-dim border-t py-16">
        <Container>
          <h2 className="font-display text-indigo text-2xl font-semibold">Open roles</h2>
          <p className="text-ink-soft mt-3 max-w-xl">
            We don&apos;t keep a running list of open roles on the site yet. Send your CV and the
            kind of work you&apos;re looking for to the office nearest you, and we&apos;ll reach out
            when there&apos;s a fit.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offices.map((office) => (
              <li key={office.city} className="border-line border-t pt-4">
                <p className="text-indigo font-medium">{office.city}</p>
                <a
                  href={`mailto:${office.email}`}
                  className="text-ink-soft hover:text-clay text-sm"
                >
                  {office.email}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        heading="Have a project instead of a CV?"
        body="If you're an organization looking to solve a records or process problem rather than join the team, head to our contact page."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
    </>
  );
}
