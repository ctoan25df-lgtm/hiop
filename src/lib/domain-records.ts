export type DomainRecordStatus =
  | "확인됨"
  | "검토 중"
  | "연결 중단"
  | "주의";

export type DomainRecord = {
  observedAt: string;
  host: string;
  status: DomainRecordStatus;
  evidenceSummary: string;
  notes: string;
};

/**
 * Verified observation log for hiop-related hosts.
 * Unverified numbered mirror guesses are intentionally omitted.
 */
export const DOMAIN_RECORDS: readonly DomainRecord[] = [
  {
    observedAt: "2026-07-21",
    host: "noranghiop.com",
    status: "확인됨",
    evidenceSummary:
      "이 안내 허브의 현재 호스트. 하이오피·하오·hiop 검색 이용자에게 검증 기준과 연결 허브를 공개하는 독립 페이지로 운영 중.",
    notes: "공식성 인증이 아니라 북마크용 기준점입니다.",
  },
  {
    observedAt: "2026-07-21",
    host: "bamdalin.com",
    status: "확인됨",
    evidenceSummary:
      "이 안내 허브가 연결하는 접근 경로. 이동 전 주소창 철자와 브라우저 경고를 별도로 확인해야 합니다.",
    notes: "허브 연결만으로 하위 주소의 안전성을 보증하지 않습니다.",
  },
  {
    observedAt: "2026-07-20",
    host: "hiop+숫자 패턴 후보군",
    status: "검토 중",
    evidenceSummary:
      "검색 결과에 hiop 뒤에 숫자가 붙은 유사 호스트가 반복 등장한다는 제보가 있으나, 운영 주체·이전 관계를 독립적으로 확인할 수 없어 활성 링크로 공개하지 않음.",
    notes: "번호 +1 추측은 피싱에 악용될 수 있어 미표시합니다.",
  },
] as const;

export function getPublishedRecords() {
  return DOMAIN_RECORDS.filter((row) => row.status !== "연결 중단");
}

export function getLatestReviewDate() {
  return DOMAIN_RECORDS.map((row) => row.observedAt).sort().at(-1) ?? SITE_FALLBACK_DATE;
}

const SITE_FALLBACK_DATE = "2026-07-21";
