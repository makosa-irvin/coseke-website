import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/cta-band";
import { StatRow } from "@/components/stat-row";
import { values } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Coseke is a Pan-African information and content management specialist, in operation since 1990 and serving over 400 clients across East Africa.",
};

const timeline = [
  {
    era: "1990",
    title: "Founded in Kenya",
    body: "Coseke starts out helping organizations bring order to paper-based records, at a time when 'document management' meant filing cabinets and index cards.",
  },
  {
    era: "1990s–2000s",
    title: "From filing to digitizing",
    body: "As scanning and indexing technology matures, Coseke builds a bureau capable of converting large physical archives into structured digital records at volume.",
  },
  {
    era: "2000s–2010s",
    title: "Regional expansion",
    body: "Offices open in Uganda, Tanzania, and Rwanda as demand for enterprise content management grows across East Africa's banking, government, and utility sectors.",
  },
  {
    era: "2010s",
    title: "Enterprise platforms, not point tools",
    body: "Coseke becomes a Hyland OnBase and Passageways implementation partner, moving clients from standalone scanning to governed, workflow-driven systems.",
  },
  {
    era: "2020",
    title: "Paper meetings go virtual",
    body: "The shift away from in-person board meetings during the COVID-19 pandemic accelerates adoption of Coseke's digital board portal across the region.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-line bg-indigo-deep text-paper border-b">
        <Container className="grid gap-10 py-16 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:py-20">
          <div>
            <h1 className="font-display max-w-xl text-4xl font-semibold sm:text-5xl">
              We&apos;ve spent 35 years on one problem: getting information out of piles and into
              systems.
            </h1>
          </div>
          <p className="text-paper/70 max-w-md">
            Coseke is a Pan-African information and content management specialist, founded in 1990.
            We help organizations of every size capture, manage, share, and preserve their records,
            so information is an asset instead of a liability.
          </p>
        </Container>
      </section>

      <section className="border-line border-b">
        <Container className="py-0">
          <StatRow />
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="font-display text-indigo text-3xl font-semibold">Our motto</h2>
            <p className="font-display text-clay mt-3 text-2xl italic">
              &ldquo;Quality means no compromise.&rdquo;
            </p>
            <p className="text-ink-soft mt-6">
              We&apos;re a regional company competing against global vendors, so we don&apos;t win
              on scale. We win by staying accountable for what we build long after go-live, and by
              being the team that actually answers the phone when a system needs attention.
            </p>
          </div>

          <div>
            <h2 className="font-display text-indigo text-3xl font-semibold">What we work by</h2>
            <ul className="divide-line border-line mt-6 divide-y border-t">
              {values.map((value) => (
                <li key={value.name} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <p className="text-indigo font-medium">{value.name}</p>
                  <p className="text-ink-soft text-sm">{value.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-line bg-paper-dim border-t py-16">
        <Container>
          <h2 className="font-display text-indigo text-3xl font-semibold">How we got here</h2>
          <ol className="border-line mt-10 space-y-10 border-l pl-8">
            {timeline.map((item) => (
              <li key={item.title} className="relative">
                <span
                  aria-hidden
                  className="bg-clay absolute top-1.5 -left-[calc(2rem+4.5px)] h-2 w-2 rounded-full"
                />
                <p className="text-brass text-sm">{item.era}</p>
                <p className="font-display text-indigo mt-1 text-xl font-semibold">{item.title}</p>
                <p className="text-ink-soft mt-1 max-w-2xl text-sm">{item.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBand
        heading="Want the fuller picture?"
        body="Ask us about our accreditations, the platforms we implement on, or a reference from an organization like yours."
      />
    </>
  );
}
