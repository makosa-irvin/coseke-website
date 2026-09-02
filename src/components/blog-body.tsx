import type { BlogBlock } from "@/content/blog";

export function BlogBody({ body }: { body: BlogBlock[] }) {
  return (
    <div className="max-w-2xl space-y-5">
      {body.map((block, i) => {
        if (block.type === "heading") {
          return (
            <h2 key={i} className="font-display text-indigo pt-2 text-xl font-semibold">
              {block.text}
            </h2>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="space-y-2">
              {block.items.map((item) => (
                <li key={item} className="text-ink-soft flex gap-3 text-sm leading-relaxed">
                  <span aria-hidden className="bg-clay mt-2 h-1 w-1 shrink-0 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-ink-soft text-sm leading-relaxed">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
