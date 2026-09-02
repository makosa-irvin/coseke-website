import Link from "next/link";
import type { CaseStudy } from "@/content/case-studies";

export function TestimonialBlock({ caseStudy }: { caseStudy: CaseStudy }) {
  if (!caseStudy.quote) return null;

  return (
    <figure className="border-clay border-l-2 pl-6">
      <blockquote className="font-display text-indigo text-xl leading-snug sm:text-2xl">
        &ldquo;{caseStudy.quote.text}&rdquo;
      </blockquote>
      <figcaption className="text-ink-soft mt-4 text-sm">
        <span className="text-ink font-medium">{caseStudy.quote.attribution}</span>
        <span className="text-ink-soft/80 block">{caseStudy.industry}</span>
      </figcaption>
      <Link
        href={`/case-studies/${caseStudy.slug}`}
        className="text-indigo hover:text-clay mt-3 inline-block text-sm font-medium"
      >
        Read the full story
      </Link>
    </figure>
  );
}
