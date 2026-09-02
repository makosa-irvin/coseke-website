import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: "#0f2439",
        padding: 5,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          border: "2px solid #c96a3d",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "45%",
            borderBottom: "2px solid #c96a3d",
            backgroundColor: "rgba(201,106,61,0.35)",
          }}
        />
        <div style={{ display: "flex", height: "55%" }} />
      </div>
    </div>,
    { ...size },
  );
}
