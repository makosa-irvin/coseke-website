import { stats } from "@/content/site";

export function StatRow() {
  return (
    <dl className="rule border-line grid grid-cols-2 border-l md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="border-line border-r px-6 py-6">
          <dt className="text-ink-soft/80 text-sm">{stat.label}</dt>
          <dd className="font-display text-indigo mt-2 text-4xl font-semibold">
            {stat.value}
            <span className="text-clay">{stat.suffix}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
