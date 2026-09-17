import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} developer portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f4f4f1", color: "#11110f", padding: "64px 72px", fontFamily: "Arial, sans-serif", position: "relative", overflow: "hidden" }}>
      <div style={{ width: 520, height: 520, borderRadius: 999, background: "#315efb", position: "absolute", right: -160, top: -220, opacity: 0.92 }} />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 22, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        <span>{siteConfig.name}</span>
        <span style={{ color: "#64645f" }}>Portfolio / 2026</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 82, lineHeight: 0.95, letterSpacing: "-0.065em", fontWeight: 700, maxWidth: 900 }}>
          <span>Digital products,</span>
          <span>engineered with intention.</span>
        </div>
        <span style={{ fontSize: 24, color: "#64645f" }}>{siteConfig.role}</span>
      </div>
    </div>,
    size,
  );
}
