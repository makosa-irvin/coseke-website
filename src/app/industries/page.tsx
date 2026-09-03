import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/cta-band";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Coseke serves government, financial services, insurance, utilities, healthcare, and other sectors that run on accurate, auditable records.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="border-line bg-indigo-deep text-invert border-b">
        <Container className="py-16 lg:py-20">
          <h1 className="font-display max-w-2xl text-4xl font-semibold sm:text-5xl">Industries</h1>
          <p className="text-invert/70 mt-5 max-w-xl">
            Even within one sector, no two organizations file, retain, or govern records the same
            way. We tailor each deployment to how your organization actually works, informed by
            three decades across these industries.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <ul className="border-line grid gap-x-10 gap-y-10 border-t pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <li key={industry.slug}>
                <p className="font-display text-indigo text-xl font-semibold">{industry.name}</p>
                <p className="text-ink-soft mt-2 text-sm">{industry.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        heading="Don't see your sector listed?"
        body="Our approach is built around your filing and retention rules, not a fixed vertical template. Get in touch and tell us what you're working with."
      />
    </>
  );
}
