import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/content/case-studies";

export function BeforeAfterProof({ caseStudy }: { caseStudy: CaseStudy }) {
  if (!caseStudy.before || !caseStudy.after || !caseStudy.quote) return null;

  return (
    <div>
      <div className="max-w-2xl">
        <blockquote className="font-display text-invert text-xl leading-snug sm:text-2xl">
          &ldquo;{caseStudy.quote.text}&rdquo;
        </blockquote>
        <p className="text-invert/60 mt-4 text-sm">
          <span className="text-brass-light font-medium">{caseStudy.quote.attribution}</span>
          <span className="block">{caseStudy.summary}</span>
        </p>
        <Link
          href={`/case-studies/${caseStudy.slug}`}
          className="text-brass-light mt-4 inline-block text-sm font-medium hover:text-white"
        >
          Read the client story →
        </Link>
      </div>

      <div className="border-line-dark relative mt-10 grid border sm:grid-cols-2">
        <div className="border-line-dark bg-indigo-deep/80 border-b p-6 sm:border-r sm:border-b-0 sm:pr-10">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="border-invert/20 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border"
            >
              <X size={16} className="text-invert/50" />
            </span>
            <div>
              <p className="text-invert/40 text-[11px] tracking-wide uppercase">Before</p>
              <p className="text-invert text-sm font-medium">A trip to physical storage</p>
            </div>
          </div>
          <ul className="mt-4 space-y-2.5">
            {caseStudy.before.map((item) => (
              <li key={item} className="text-invert/60 flex items-start gap-2 text-sm">
                <X size={14} className="text-invert/40 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-brass-light p-6 sm:pl-10">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="border-indigo-deep/20 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border"
            >
              <Check size={16} className="text-indigo-deep" />
            </span>
            <div>
              <p className="text-indigo-deep/60 text-[11px] tracking-wide uppercase">After</p>
              <p className="text-indigo-deep text-sm font-medium">Searchable, structured records</p>
            </div>
          </div>
          <ul className="mt-4 space-y-2.5">
            {caseStudy.after.map((item) => (
              <li key={item} className="text-indigo-deep/80 flex items-start gap-2 text-sm">
                <Check size={14} className="mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <span
          aria-hidden
          className="border-line-dark bg-indigo-deep absolute top-1/2 left-1/2 hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border sm:flex"
        >
          <ArrowRight size={16} className="text-brass-light" />
        </span>
      </div>
    </div>
  );
}
