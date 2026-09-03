import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/cta-band";
import { solutionCategories, getSolutionsByCategory } from "@/content/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Document management, digitization, board governance, ERP, business intelligence, and ICT infrastructure, grouped into four areas and delivered end to end across East Africa.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="border-line bg-indigo-deep text-invert border-b">
        <Container className="py-16 lg:py-20">
          <h1 className="font-display max-w-2xl text-4xl font-semibold sm:text-5xl">Solutions</h1>
          <p className="text-invert/70 mt-5 max-w-xl">
            Ten solutions, grouped into four areas. Every one of them is scoped, implemented, and
            supported by the same Coseke team, so you have one point of accountability from the
            first conversation to years of production use.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-16">
          {solutionCategories.map((category) => (
            <div key={category.id}>
              <div className="border-line max-w-2xl border-t pt-6">
                <h2 className="font-display text-indigo text-2xl font-semibold">{category.name}</h2>
                <p className="text-ink-soft mt-2 text-sm">{category.description}</p>
              </div>
              <div className="divide-line mt-6 divide-y">
                {getSolutionsByCategory(category.id).map((solution) => (
                  <Link
                    key={solution.slug}
                    href={`/solutions/${solution.slug}`}
                    className="group grid gap-2 py-6 sm:grid-cols-[1fr_2fr_auto] sm:items-center sm:gap-8"
                  >
                    <p className="font-display text-indigo group-hover:text-clay text-lg font-semibold">
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
            </div>
          ))}
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
