import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const cells = Array.from({ length: 12 });
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 64,
        backgroundColor: "#0f2439",
        color: "#f2f3ee",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", width: 28, height: 28, border: "2px solid #c96a3d" }} />
        <div style={{ fontSize: 32, fontWeight: 700, display: "flex" }}>Coseke</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.05, display: "flex" }}>
            Information &amp; content management, built for East Africa
          </div>
          <div style={{ fontSize: 24, marginTop: 24, color: "#c9cdc3", display: "flex" }}>
            400+ clients across 6 countries, since 1990
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", width: 248, gap: 8 }}>
          {cells.map((_, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                width: 56,
                height: 40,
                border: i === 6 ? "2px solid #c96a3d" : "1px solid #3c4a5a",
                backgroundColor: i === 6 ? "rgba(201,106,61,0.25)" : "transparent",
              }}
            />
          ))}
        </div>
      </div>
    </div>,
    { ...size },
  );
}
