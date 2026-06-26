import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #00101E 0%, #AF0040 100%)",
          color: "white",
          fontSize: 78,
          fontWeight: 700,
          fontFamily: "Outfit, Arial, sans-serif",
          borderRadius: 36,
        }}
      >
        CP
      </div>
    ),
    size
  );
}
