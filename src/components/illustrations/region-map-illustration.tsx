const cities = [
  { name: "Nairobi", country: "Kenya", x: 265, y: 101, isHQ: true },
  { name: "Kampala", country: "Uganda", x: 137, y: 60 },
  { name: "Dar es Salaam", country: "Tanzania", x: 340, y: 240 },
  { name: "Kigali", country: "Rwanda", x: 60, y: 118 },
];

const hq = cities[0];
const spokes = cities.slice(1);

export function RegionMapIllustration() {
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label="Diagram of Coseke's four regional offices: Nairobi (headquarters), Kampala, Dar es Salaam, and Kigali"
      className="w-full max-w-md"
    >
      {spokes.map((city) => (
        <line
          key={city.name}
          x1={hq.x}
          y1={hq.y}
          x2={city.x}
          y2={city.y}
          stroke="var(--color-line)"
          strokeWidth={1}
          strokeDasharray="3 4"
        />
      ))}

      {cities.map((city) => (
        <g key={city.name}>
          <circle
            cx={city.x}
            cy={city.y}
            r={city.isHQ ? 7 : 5}
            fill={city.isHQ ? "var(--color-clay)" : "var(--color-indigo)"}
            stroke="var(--color-paper)"
            strokeWidth={2}
          />
          <text
            x={city.x}
            y={city.y - 14}
            textAnchor="middle"
            fontSize={13}
            fontFamily="var(--font-display)"
            fontWeight={600}
            fill="var(--color-indigo)"
          >
            {city.name}
          </text>
          <text
            x={city.x}
            y={city.y + (city.isHQ ? 22 : 20)}
            textAnchor="middle"
            fontSize={10}
            fontFamily="var(--font-sans)"
            fill="var(--color-ink-soft)"
          >
            {city.isHQ ? `${city.country} — HQ` : city.country}
          </text>
        </g>
      ))}
    </svg>
  );
}
