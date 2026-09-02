import { engagementSteps } from "@/content/site";

export function ProcessSteps() {
  return (
    <div className="grid gap-10 sm:grid-cols-3">
      {engagementSteps.map((step) => (
        <div key={step.step} className="border-line border-t pt-5">
          <p className="text-clay font-display text-2xl font-semibold">{step.step}</p>
          <h3 className="font-display text-indigo mt-2 text-lg font-semibold">{step.title}</h3>
          <p className="text-ink-soft mt-2 text-sm">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
