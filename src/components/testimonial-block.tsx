import type { Testimonial } from "@/content/site";

export function TestimonialBlock({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="border-clay border-l-2 pl-6">
      <blockquote className="font-display text-indigo text-xl leading-snug sm:text-2xl">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="text-ink-soft mt-4 text-sm">
        <span className="text-ink font-medium">{testimonial.attribution}</span>
        <span className="text-ink-soft/80 block">{testimonial.context}</span>
      </figcaption>
    </figure>
  );
}
