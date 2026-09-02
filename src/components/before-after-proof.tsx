import Link from "next/link";
import { Check, X } from "lucide-react";
import type { CaseStudy } from "@/content/case-studies";

export function BeforeAfterProof({ caseStudy }: { caseStudy: CaseStudy }) {
  if (!caseStudy.before || !caseStudy.after || !caseStudy.quote) return null;

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
      <div>
        <blockquote className="font-display text-paper text-xl leading-snug sm:text-2xl">
          &ldquo;{caseStudy.quote.text}&rdquo;
        </blockquote>
        <p className="text-paper/60 mt-4 text-sm">
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

      <div className="border-line-dark overflow-hidden border">
        <div className="bg-indigo-deep/80 p-5">
          <p className="text-paper/40 text-[11px] tracking-wide uppercase">Before</p>
          <p className="text-paper mt-1 text-sm font-medium">A trip to physical storage</p>
          <ul className="mt-3 space-y-2">
            {caseStudy.before.map((item) => (
              <li key={item} className="text-paper/60 flex items-start gap-2 text-sm">
                <X size={14} className="text-paper/40 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-brass-light p-5">
          <p className="text-indigo-deep/60 text-[11px] tracking-wide uppercase">After</p>
          <p className="text-indigo-deep mt-1 text-sm font-medium">
            Searchable, structured records
          </p>
          <ul className="mt-3 space-y-2">
            {caseStudy.after.map((item) => (
              <li key={item} className="text-indigo-deep/80 flex items-start gap-2 text-sm">
                <Check size={14} className="mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
