import { ImageResponse } from "next/og";
import { SITE_BRAND } from "@/lib/site-brand";

export const size = { width: 180, height: 180 };
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
          background: SITE_BRAND.background,
          borderRadius: 36,
          fontSize: 64,
          fontWeight: 700,
          color: SITE_BRAND.accent,
          letterSpacing: "-0.04em",
        }}
      >
        {SITE_BRAND.iconCode}
      </div>
    ),
    { ...size },
  );
}
