const COLS = 4;
const ROWS = 3;
const CELL_W = 108;
const CELL_H = 64;
const GAP = 12;
const ORIGIN = 12;
const HIGHLIGHT = { col: 2, row: 1 };

function cellX(col: number) {
  return ORIGIN + col * (CELL_W + GAP);
}
function cellY(row: number) {
  return ORIGIN + row * (CELL_H + GAP);
}

const width = ORIGIN * 2 + COLS * CELL_W + (COLS - 1) * GAP;
const height = ORIGIN * 2 + ROWS * CELL_H + (ROWS - 1) * GAP;

export function RecordGridIllustration() {
  const cells = Array.from({ length: COLS * ROWS }, (_, i) => ({
    col: i % COLS,
    row: Math.floor(i / COLS),
  }));

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="An index of document records arranged in a searchable grid, with one record highlighted as found"
      className="w-full max-w-md"
    >
      <rect x={0} y={0} width={width} height={height} fill="none" />

      {cells.map(({ col, row }) => {
        const isHighlight = col === HIGHLIGHT.col && row === HIGHLIGHT.row;
        const x = cellX(col);
        const y = cellY(row);
        return (
          <g key={`${col}-${row}`}>
            <rect
              x={x}
              y={y}
              width={CELL_W}
              height={CELL_H}
              rx={2}
              fill={
                isHighlight
                  ? "color-mix(in srgb, var(--color-clay) 12%, var(--color-paper))"
                  : "var(--color-paper)"
              }
              stroke={isHighlight ? "var(--color-clay)" : "var(--color-line)"}
              strokeWidth={isHighlight ? 1.75 : 1}
            />
            {/* index tab */}
            <rect
              x={x + 8}
              y={y + 8}
              width={16}
              height={5}
              fill={isHighlight ? "var(--color-clay)" : "var(--color-brass)"}
              opacity={isHighlight ? 1 : 0.55}
            />
            {/* text lines */}
            <rect
              x={x + 8}
              y={y + 24}
              width={CELL_W - 40}
              height={4}
              fill="var(--color-ink-soft)"
              opacity={0.25}
            />
            <rect
              x={x + 8}
              y={y + 34}
              width={CELL_W - 60}
              height={4}
              fill="var(--color-ink-soft)"
              opacity={0.25}
            />
            <rect
              x={x + 8}
              y={y + 44}
              width={CELL_W - 76}
              height={4}
              fill="var(--color-ink-soft)"
              opacity={0.18}
            />

            {isHighlight ? (
              <path
                d={`M ${x + CELL_W - 26} ${y + 14} l 5 5 l 9 -10`}
                fill="none"
                stroke="var(--color-clay)"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : null}
          </g>
        );
      })}

      {/* single orchestrated motion: a scan line sweeping the index once per cycle */}
      <rect
        x={ORIGIN}
        y={0}
        width={width - ORIGIN * 2}
        height={2}
        fill="var(--color-clay)"
        opacity={0.6}
        className="animate-index-sweep"
      />
    </svg>
  );
}
