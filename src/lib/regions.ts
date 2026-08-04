export type RegionGroup = "ulsan" | "yangsan" | "macangjin";

export interface RegionPage {
  slug: string;
  name: string;
  keyword: string;
  group: RegionGroup;
  shortDescription: string;
  metaDescription: string;
  districts: string[];
  intro: string[];
  sections: Array<{
    title: string;
    body: string;
  }>;
  checklist: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  relatedSlugs: string[];
}

/** Gyeongnam regional opi pages. Start with Ulsan; expand remaining cities here. */
export const REGIONS: RegionPage[] = [
  {
    slug: "ulsan",
    name: "울산",
    keyword: "울산오피",
    group: "ulsan",
    shortDescription:
      "삼산동·달동·성남동·무거동 생활권 기준으로 울산오피 정보를 비교하고, 야간 이동·귀가 동선을 먼저 정리합니다.",
    metaDescription:
      "울산오피 정보를 삼산동·달동·성남동·무거동 생활권별로 확인하세요. KTX 울산역·시내버스 막차·택시 동선과 방문 전 확인사항을 정리한 하이오피 지역 가이드입니다.",
    districts: ["삼산동", "달동", "성남동", "무거동", "일산동"],
    intro: [
      "울산은 남구 삼산동·달동에 야간 상권이 모이고, 중구 성남동과 울주·동구 생활권은 이동 축이 서로 다릅니다. 같은 ‘울산오피’ 검색이라도 출발지와 귀가 방향에 따라 실제로 볼 후보가 달라집니다.",
      "이 페이지는 특정 업소를 나열하기보다, 울산에서 지역 정보를 찾기 전에 좁혀야 할 생활권·교통·확인 순서를 정리합니다. 최신 목록 확인은 별도 플랫폼인 밤의달인으로 연결됩니다.",
    ],
    sections: [
      {
        title: "삼산동·달동 중심권",
        body: "울산고속버스터미널과 삼산로 주변은 음식점·유흥 상권이 이어져 선택지가 많은 편입니다. 주말에는 차량 정체와 택시 대기가 길어질 수 있어, 만남 지점과 귀가 지점을 미리 나누어 두는 편이 안전합니다.",
      },
      {
        title: "성남동·무거동 생활권",
        body: "성남동은 원도심·태화강 접근성이 특징이고, 무거동은 대학가와 남부 생활권 수요가 겹칩니다. 삼산동과 분위기가 다르므로 현재 위치에서 가까운 권역을 먼저 고르면 불필요한 이동을 줄일 수 있습니다.",
      },
      {
        title: "야간 교통·귀가 동선",
        body: "KTX 울산역은 울주군에 있어 삼산동까지 택시·버스 환승이 필요합니다. 시내버스 막차는 노선마다 다르고, 심야에는 삼산로·터미널 쪽에 택시 수요가 몰립니다. 동구나 울주에서 출발한다면 왕복 시간을 먼저 계산하세요.",
      },
      {
        title: "울산오피 정보 확인 전 주의",
        body: "상호·운영시간·연락 방법은 수시로 바뀔 수 있습니다. 방문 전 최신 안내를 다시 확인하고, 선입금·개인 연락처만으로 진행되는 거래는 피하세요. 이 사이트는 하이오피 운영사의 공식 주소가 아니며, 밤의달인은 별도 플랫폼입니다.",
      },
    ],
    checklist: [
      "출발지가 남구·중구·동구·울주 중 어디인지 먼저 구분한다",
      "KTX 울산역 도착이라면 삼산동까지 추가 이동 시간을 잡는다",
      "시내버스 막차보다 택시 귀가 가능 여부를 확인한다",
      "주말 삼산로 정체와 터미널 주변 택시 대기를 감안한다",
      "상호·영업시간·연락처를 방문 직전에 재확인한다",
    ],
    faq: [
      {
        question: "울산오피는 어느 지역을 먼저 보면 되나요?",
        answer:
          "대중교통과 상권이 모인 삼산동·달동을 먼저 보고, 출발지가 중구나 울주라면 성남동·무거동 등 가까운 생활권과 이동 시간을 함께 비교하는 것이 좋습니다.",
      },
      {
        question: "울산역과 삼산동은 가까운가요?",
        answer:
          "KTX 울산역은 울주군에 있어 삼산동 중심가와 거리가 있습니다. 도착 시간을 기준으로 버스·택시 이동 시간과 막차 여부를 미리 확인하세요.",
      },
      {
        question: "울산 야간에 택시는 어디서 잡기 쉬운가요?",
        answer:
          "삼산동·달동 중심 도로와 고속버스터미널 주변이 수요가 많아 호출·배차가 비교적 수월한 편입니다. 동구·울주 외곽에서는 대기 시간이 길어질 수 있습니다.",
      },
      {
        question: "업소·목록 정보는 어디에서 보나요?",
        answer:
          "지역 기준을 정리한 뒤 밤의달인 울산 지역 페이지에서 공개된 최신 정보를 비교할 수 있습니다. 밤의달인은 하이오피와 별개의 플랫폼입니다.",
      },
    ],
    relatedSlugs: [],
  },
];

export function getRegion(slug: string) {
  return REGIONS.find((region) => region.slug === slug);
}

export function getRelatedRegions(region: RegionPage) {
  return region.relatedSlugs
    .map((slug) => getRegion(slug))
    .filter((item): item is RegionPage => Boolean(item));
}

export function regionListingUrl(region: RegionPage) {
  return `https://bamdalin.com/board/region/${region.slug}?utm_source=noranghiop.com&utm_medium=referral&utm_campaign=hiop_region`;
}

export function getRegionsByGroup(group: RegionGroup) {
  return REGIONS.filter((region) => region.group === group);
}
