import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #00101E 0%, #0F2438 45%, #AF0040 100%)",
          color: "white",
          fontFamily: "Outfit, Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, textTransform: "uppercase", letterSpacing: 6, opacity: 0.8 }}>
          Chelsea Portland
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 18, lineHeight: 1.05 }}>
          Polished digital experiences for modern brands
        </div>
        <div style={{ fontSize: 28, marginTop: 24, maxWidth: 780, opacity: 0.9 }}>
          Thoughtful design, strategic storytelling, and refined web presence.
        </div>
      </div>
    ),
    size
  );
}
