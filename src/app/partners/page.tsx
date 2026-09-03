import type { Metadata } from "next";
import { Photo } from "@/components/photo";
import { ClientMarkFallback } from "@/components/illustrations/client-mark-fallback";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/cta-band";
import { partners, type Partner } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "The platform, infrastructure, and storage partners behind Coseke's solutions — Hyland, Kodak Alaris, OnBoard, Dell EMC, HPE, Huawei, NetApp, Veeam, Cisco, and Bruynzeel.",
};

function PartnerSection({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: Partner[];
}) {
  return (
    <div>
      <div className="max-w-2xl">
        <h2 className="font-display text-indigo text-2xl font-semibold">{title}</h2>
        <p className="text-ink-soft mt-2 text-sm">{intro}</p>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {items.map((partner) => (
          <div key={partner.slug} className="border-line flex gap-4 border p-6">
            <Photo
              src={`/images/partner-logo-${partner.slug}.png`}
              alt={partner.name}
              fallback={<ClientMarkFallback name={partner.name} />}
              className="h-14 w-14 shrink-0 object-contain"
            />
            <div>
              <p className="font-display text-indigo text-lg font-semibold">{partner.name}</p>
              <p className="text-clay mt-0.5 text-xs font-medium">{partner.note}</p>
              <p className="text-ink-soft mt-3 text-sm leading-relaxed">{partner.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PartnersPage() {
  return (
    <>
      <section className="border-line bg-indigo-deep text-paper border-b">
        <Container className="py-16 lg:py-20">
          <h1 className="font-display max-w-2xl text-4xl font-semibold sm:text-5xl">
            Our Partners
          </h1>
          <p className="text-paper/70 mt-5 max-w-xl">
            We build on established, widely supported technology rather than closed, proprietary
            tools we invented ourselves, so you&apos;re never the only organization running it and
            never dependent on us alone for support.
          </p>
        </Container>
      </section>

      <section className="space-y-16 py-16">
        <Container className="space-y-16">
          <PartnerSection
            title="Content & governance platforms"
            intro="The software our document management, records, and board governance solutions are built on."
            items={partners.platforms}
          />
          <PartnerSection
            title="Infrastructure & data protection"
            intro="The servers, storage, and networking equipment behind larger deployments, sized to actual measured volumes."
            items={partners.infrastructure}
          />
          <PartnerSection
            title="Physical storage systems"
            intro="For the originals you're still required to retain even after they've been digitized."
            items={partners.storage}
          />
        </Container>
      </section>

      <CtaBand
        heading="Curious which partner fits your project?"
        body="Tell us what you're working with, and we'll tell you which of these platforms it would actually run on."
      />
    </>
  );
}
