import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact-form";
import { offices } from "@/content/offices";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Coseke's offices in Kenya, Uganda, Tanzania, and Rwanda.",
};

type Props = {
  searchParams: Promise<{ type?: string; interest?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const params = await searchParams;
  const isDemo = params.type === "demo";
  const interest = params.interest;

  return (
    <>
      <section className="border-line bg-indigo-deep text-paper border-b">
        <Container className="py-16 lg:py-20">
          <h1 className="font-display max-w-xl text-4xl font-semibold sm:text-5xl">
            {isDemo ? "Discuss your project" : "Talk to us"}
          </h1>
          <p className="text-paper/70 mt-5 max-w-xl">
            {isDemo
              ? interest
                ? `Tell us about your current process for ${interest.toLowerCase()}, and we'll set up a walkthrough on your own data where we can.`
                : "Tell us which solution you'd like to see, and we'll set up a walkthrough on your own data where we can."
              : "Tell us about the process or archive you want to fix. A short description of your current volumes and pain points is enough to get started."}
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-16 lg:grid-cols-[1.3fr_1fr]">
          <ContactForm defaultInterest={interest} isDemoRequest={isDemo} />

          <div>
            <h2 className="font-display text-indigo text-lg font-semibold">Regional offices</h2>
            <div className="divide-line border-line mt-4 divide-y border-t">
              {offices.map((office) => (
                <div key={office.city} className="py-5">
                  <p className="text-indigo font-medium">
                    {office.city}, {office.country}
                    {office.isHQ ? (
                      <span className="text-clay ml-2 text-xs">Headquarters</span>
                    ) : null}
                  </p>
                  {office.address.map((line) => (
                    <p key={line} className="text-ink-soft mt-1 text-sm">
                      {line}
                    </p>
                  ))}
                  <p className="text-ink-soft mt-2 text-sm">{office.phone}</p>
                  <a
                    href={`mailto:${office.email}`}
                    className="text-indigo hover:text-clay text-sm"
                  >
                    {office.email}
                  </a>
                </div>
              ))}
            </div>

            <div className="border-line mt-8 border p-5">
              <p className="text-indigo text-sm font-medium">Existing client?</p>
              <p className="text-ink-soft mt-1 text-sm">
                Log support requests directly through our support portal for the fastest response.
              </p>
              <a
                href="https://support.coseke.com"
                className="text-indigo hover:text-clay mt-3 inline-block text-sm font-medium"
              >
                support.coseke.com
              </a>
            </div>

            <div className="border-line mt-8 border p-5">
              <p className="text-indigo text-sm font-medium">Prefer to read first?</p>
              <p className="text-ink-soft mt-1 text-sm">
                Download a short overview of Coseke&apos;s solutions and regional offices.
              </p>
              <a
                href="/downloads/coseke-company-overview.pdf"
                download
                className="text-indigo hover:text-clay mt-3 inline-block text-sm font-medium"
              >
                Download company brochure (PDF)
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
