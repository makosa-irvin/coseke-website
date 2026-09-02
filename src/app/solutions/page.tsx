import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/cta-band";
import { solutions } from "@/content/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Document management, digitization, board governance, ERP, intelligent capture, and ICT hardware, delivered end to end across East Africa.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="border-line bg-indigo-deep text-paper border-b">
        <Container className="py-16 lg:py-20">
          <h1 className="font-display max-w-2xl text-4xl font-semibold sm:text-5xl">Solutions</h1>
          <p className="text-paper/70 mt-5 max-w-xl">
            Every solution below is scoped, implemented, and supported by the same Coseke team, so
            you have one point of accountability from the first conversation to years of production
            use.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="divide-line border-line divide-y border-t">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="group grid gap-3 py-8 sm:grid-cols-[1fr_2fr_auto] sm:items-center sm:gap-8"
              >
                <p className="font-display text-indigo group-hover:text-clay text-xl font-semibold">
                  {solution.name}
                </p>
                <p className="text-ink-soft text-sm">{solution.summary}</p>
                <span className="text-indigo group-hover:text-clay flex items-center gap-1 text-sm font-medium">
                  Details
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        heading="Not sure which solution fits?"
        body="Describe the process or archive giving your team trouble, and we'll point you to the right starting place."
        primaryLabel="Talk to us"
      />
    </>
  );
}
