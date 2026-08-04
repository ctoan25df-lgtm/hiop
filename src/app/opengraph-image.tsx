import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE } from "@/lib/site-brand";

export const alt = "하이오피 · 경남 지역 오피 · 울산오피 가이드";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const fontPath = join(process.cwd(), "src/fonts/kimm-700.woff");
  const font = await readFile(fontPath);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #080800 0%, #171300 58%, #292000 100%)",
          color: "#ffffff",
          padding: 78,
          fontFamily: "Kimm",
        }}
      >
        <div style={{ display: "flex", color: SITE.accent, fontSize: 25, letterSpacing: "0.12em" }}>
          GYEONGNAM · REGIONAL OPI
        </div>
        <div style={{ display: "flex", fontSize: 84, marginTop: 28, letterSpacing: "-0.04em" }}>
          <span style={{ color: SITE.accent }}>하이오피</span>
        </div>
        <div style={{ display: "flex", fontSize: 40, color: "#d8d4bd", marginTop: 30 }}>
          경남 지역 오피 · 울산오피 가이드
        </div>
        <div style={{ width: 1040, height: 2, background: "rgba(245,197,24,.35)", marginTop: 48 }} />
        <div style={{ display: "flex", fontSize: 22, color: "#aaa68f", marginTop: 22 }}>
          생활권 안내 후 밤의달인(bamdalin.com)으로 연결합니다.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Kimm", data: font, weight: 700, style: "normal" }],
    },
  );
}
