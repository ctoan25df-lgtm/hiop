import { ImageResponse } from "next/og";
import { SITE_BRAND } from "@/lib/site-brand";

export const alt = `${SITE_BRAND.name} 공식 플랫폼 안내`;
export const size = { width: 1200, height: 630 };
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #181200 0%, #080800 100%)",
          padding: 60,
        }}
      >
        <div style={{ width: 120, height: 6, background: SITE_BRAND.accent, marginBottom: 40 }} />
        <div style={{ fontSize: 96, fontWeight: 700, color: SITE_BRAND.accent, letterSpacing: "-0.03em" }}>
          {SITE_BRAND.en}
        </div>
        <div style={{ fontSize: 40, color: "#ffffff", marginTop: 20, fontWeight: 700 }}>
          Official Platform
        </div>
        <div style={{ fontSize: 28, color: "#888888", marginTop: 16 }}>Official Platform Guide</div>
      </div>
    ),
    { ...size },
  );
}
