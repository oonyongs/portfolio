"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "소개팅 앱 스타트업 '주선왕'",
    categories: ["PM", "서비스 기획", "UI 디자인"],
    period: "2024.05 – 진행중",
    emoji: "💘",
    device: "mobile" as const,
    image: "/images/jusunking.png",
    modalImage: "/images/jusunking-detail.png",
    accent: "#f472b6",
    accentLight: "#fdf2f8",
    summary: "창업 멤버로 합류해 PM/데이터 분석, 서비스 기획, CS를 전담하며 1년 만에 월 매출 237% 성장 기여",
    role: "PM/데이터 분석, 서비스 기획, CS, MVP 디자인",
    result: "월 매출 237% 성장 / 매칭 성사율 66% / CS 연결률 31%→11% / 영업이익률 –79%→+22%",
    tags: ["UX 리서치", "SQL", "Figma", "Figjam", "Asana", "Notion"],
    detail: {
      overview: "소개팅 앱 스타트업 '주선왕'의 창업 멤버로 합류하여 PM/데이터 분석, 서비스 기획, CS 업무를 전담했습니다. 디자이너 부재 시기 MVP 디자인까지 직접 맡아 서비스 론칭부터 성장까지 전 과정을 이끌었습니다.",
      problem: "추천 알고리즘이 실제 사용자 행동 데이터로 검증되지 않은 단순 가중치 구조였고, 매칭 성과 지표도 부재했습니다.\n\n서비스 기획 측면에서는 디자이너 부재로 MVP 디자인을 전면 담당했으며, 매칭 알림 설계 시 재화 적용 우선순위 문제, 여러 매칭 성사 시 휴면 불가 정책, 여성 회원의 높은 휴면 전환율 등 복합적인 문제가 발생했습니다.\n\nCS 측면에서는 반복 문의로 인한 상담 인력 피로도가 증가했고, 기존 사업의 영업이익률이 –79% 수준의 심각한 적자 상태였습니다.",
      process: [
        {
          title: "① PM/데이터 분석",
          items: [
            "성별, 외모, 능력, 학력, 선호타입을 복합 세그먼트로 구성해 등급별 수락 패턴 정량 분석",
            "등급 조합별 추천 대비 수락률 분석으로 전환율 개선을 위한 가중치 조정 방향 제안",
            "지역 데이터(거주지·활동지)가 매칭 성과에 미치는 영향을 검증해 리소스 낭비 방지",
          ],
        },
        {
          title: "② 서비스 기획",
          items: [
            "5개 경쟁사 앱 전 화면 캡처·플로우차트화로 서비스 구조 및 UX Flow 전수 분석",
            "'36시간 락 정책' 도입으로 한 유저가 여러 매칭 상태에 놓이는 혼선 방지 및 매칭 품질 향상",
            "추천 일시정지·기간 설정제 기능 기획으로 여성 회원 이탈 방지",
          ],
        },
        {
          title: "③ CS 자동화",
          items: [
            "5개월간 상담 로그 분석으로 주요 문의 유형(환불, 쿠폰, 이용권 등) 분류",
            "70개 이상의 자동화 플로우 제작으로 반복 문의 대응 체계 구축",
            "비대면 고객 인터뷰 진행 및 데이터 분석으로 핵심 서비스 가치·가격 정책 재정비",
          ],
        },
      ],
      results: ["월 매출 237% 성장 (25년 5월 → 26년 1월 기준)", "매칭 성사율 66% 달성", "CS 상담 연결률 31% → 11%로 감소", "영업이익률 –79% → +22% 전환 / 매출 3.25배 증가"],
      insight: "데이터로 문제를 정의하고 UX 개선으로 연결하는 과정에서, 작은 플로우 변화가 핵심 지표에 직접적인 영향을 준다는 것을 체감했습니다. 기획자는 숫자를 읽는 사람이 아니라, 숫자 뒤의 사용자를 이해하는 사람이어야 한다는 것을 배웠습니다.",
      skills: ["PM", "SQL/데이터 분석", "서비스 기획", "경쟁사 분석", "Figma", "CS 자동화 설계"],
    },
  },
  {
    id: 2,
    title: "2024 홍익대학교 공식 축제 사이트",
    categories: ["PM", "서비스 기획"],
    period: "2024.07 – 2024.09",
    emoji: "🎪",
    device: "mobile" as const,
    image: "/images/hongikfestival.png",
    modalImage: "/images/hongikfestival-detail.png",
    accent: "#a78bfa",
    accentLight: "#f5f3ff",
    summary: "참여형 기능 기획과 18인 PM으로 축제 3일간 4,300명 활성 사용자를 끌어모은 모바일 축제 웹서비스",
    role: "PM, 서비스 기획, 요구사항 정의, 일정 관리, QA",
    result: "4,300명 활성 사용자 / 주점 좋아요 26,829건 / 외국인 대응 ENG 번역 기능",
    tags: ["PM", "Notion", "Slack", "QA"],
    detail: {
      overview: "홍익대학교 공식 축제 웹사이트를 18인 팀의 PM으로 총괄하여, 참여형 기능 기획으로 단 3일간 4,300명의 활성 사용자를 끌어모은 모바일 축제 웹서비스를 기획·운영했습니다.",
      problem: "이전 기수의 2023년 사이트는 단순 정보 전달 중심으로 총학생회 인스타그램 카드뉴스와 목적이 중복되었고, 유학생 및 외부 방문객을 위한 기능이 부족했습니다.\n\n축제라는 소재와 맞지 않는 단조로운 디자인과 사용자 참여 유도 장치 부재로 인한 낮은 체류 시간이 문제였습니다.\n\n18명 규모의 팀 협업에서 일정 관리·커뮤니케이션 병목 위험과 총학생회 자료 지연으로 인한 일정 변동이 발생했으며, 9월 25일 축제 일정 준수가 절대적으로 요구되었습니다.",
      process: [
        {
          title: "① 참여형 기능 기획",
          items: [
            "Lottie 애니메이션을 활용한 홈화면 구성으로 사이트 첫인상 개선",
            "주점별 '좋아요' 버튼 및 실시간 인기 주점 랭킹 제공으로 체류 시간 증가",
            "추첨 이벤트·분실물 등록 기능으로 총학생회 카드뉴스와 차별화",
            "타임테이블 실시간 현재 공연 중인 DJ 강조 + ENG 언어 변경 기능 추가",
          ],
        },
        {
          title: "② PM — 18인 팀 운영",
          items: [
            "전 소통 투명화 정책: 모든 대화는 Slack 공개 채널, DM 금지, 회의 시 카메라 ON 원칙",
            "Project-Task 기반 업무 체계 수립 및 Notion 타임라인으로 매주 스프린트 단위 관리",
            "파트별·담당자별 타임라인을 테트리스 블록처럼 맞물리도록 병렬 분업 체계 설계",
          ],
        },
        {
          title: "③ QA 및 운영",
          items: [
            "출시 전 QA 체크리스트 작성 및 버그 관리",
            "자료 변경 수십 차례에도 9월 25일 축제 개막 전일까지 전 기능 완성·배포 성공",
            "GA 기반 사용 데이터 수집 및 트래픽 분석",
          ],
        },
      ],
      results: ["축제 3일간 4,300명 활성 사용자 달성 (GA 기준)", "주점 페이지 26,829건 이벤트 발생", "ENG 번역 기능으로 외국인 학생 및 외부 방문객도 쉽게 이용", "18인 규모 팀 일정 내 성공적 런칭"],
      insight: "대규모 팀을 이끌며 PM의 역할이 단순한 일정 관리가 아니라, 팀이 같은 방향을 보도록 맥락을 공유하고 협업 구조를 설계하는 것임을 깨달았습니다. 또한 단순 정보 제공을 넘어 참여형 기능이 체류 시간과 사용자 경험을 크게 향상시킨다는 것을 데이터로 확인했습니다.",
      skills: ["PM", "서비스 기획", "참여형 UX", "정보설계", "Notion", "Slack", "QA", "스프린트 운영"],
    },
  },
  {
    id: 3,
    title: "신한카드 IT부서 문의 게시판",
    categories: ["서비스 기획", "UI 디자인"],
    period: "2025.07 – 2025.08",
    emoji: "🏦",
    device: "desktop" as const,
    image: "/images/shinhancard.png",
    modalImage: "/images/shinhancard-detail.png",
    accent: "#60a5fa",
    accentLight: "#eff6ff",
    summary: "신한카드 IT 부서 재직자의 실무 의뢰를 기반으로, 사내 문의 관리 문제를 해결하기 위한 시스템을 기획",
    role: "서비스 기획, 요구사항 정의, 와이어프레임 설계, UX 설계",
    result: "사내 적용 검토 단계까지 진행",
    tags: ["서비스 기획", "Figma", "Notion", "Slack", "UX 설계", "B2B 시스템", "프로세스 개선"],
    detail: {
      overview: "신한카드 IT 부서 재직자의 실무 의뢰를 바탕으로, 담당자 부재·인수인계 시 발생하는 사내 문의 처리의 비효율을 해결하기 위한 게시판 시스템을 기획·설계했습니다.",
      problem: "기존 IT 부서 문의는 이메일과 메신저로 분산되어 처리 현황 파악이 어렵고, 히스토리 관리가 되지 않아 같은 문의가 반복되는 문제가 있었습니다.\n\n특히 담당자 부재나 인수인계 상황에서 기존 업무 흐름을 파악할 수 없어 처리 지연과 오류가 빈번했습니다.\n\n또한 시간이 지나며 변경된 내용이 기존 답변에 반영되지 않아 정보의 신뢰도가 떨어지고, 요청자 입장에서도 진행 상황을 확인할 방법이 없었습니다.",
      process: [
        {
          title: "① 현황 파악 및 요구사항 정의",
          items: [
            "재직자 인터뷰를 통해 문의 유형 및 처리 프로세스 파악",
            "담당자 부재·인수인계 시 Pain Point 우선순위 정리 및 해결 방향 도출",
            "B2B 시스템 레퍼런스 분석",
          ],
        },
        {
          title: "② 핵심 기능 설계",
          items: [
            "'사람' 중심의 히스토리 관리 구조 설계 — 담당자별 업무 흐름을 추적 가능하도록 설계",
            "추가 답변 작성 시 기존 답변을 수정할 수 있는 기능 도입 — 변경된 정보 반영 및 답변 신뢰도 유지",
            "문의 유형 분류 체계 및 요청자/담당자/관리자 역할별 화면 흐름 설계",
            "상태 관리 플로우 (접수 → 처리 중 → 완료) 정의",
          ],
        },
        {
          title: "③ 와이어프레임 및 UX 설계",
          items: [
            "Figma로 핵심 화면 와이어프레임 제작",
            "B2B 환경에 맞는 정보 밀도와 UI 패턴 적용",
            "사용성 검토 후 이터레이션",
          ],
        },
      ],
      results: ["사내 적용 검토 단계까지 진행", "IT 부서 재직자 대상 요구사항 충족 확인", "B2B 서비스 기획 역량 확보"],
      insight: "고객을 위한 서비스뿐 아니라 사내 업무 효율을 위한 기획 역시 기업의 지속적인 성장을 위한 중요한 요소임을 깨달았습니다. 불필요한 업무를 줄이고 더 가치 있는 일에 리소스를 집중할 수 있도록 만드는 것이 IT 기획자의 핵심 역할이라는 것을 이 프로젝트를 통해 확신하게 되었습니다.",
      skills: ["서비스 기획", "요구사항 정의", "와이어프레임", "UX 설계", "Figma", "B2B 시스템", "히스토리 관리 설계"],
    },
  },
  {
    id: 4,
    title: "대화 기반 맞춤 선물 추천 AI 서비스 'Wishbot'",
    categories: ["Frontend", "서비스 기획", "UI 디자인"],
    period: "2025.03 – 2025.11",
    emoji: "🎁",
    device: "mobile" as const,
    image: "/images/wishbot.png",
    modalImage: "/images/wishbot-detail.png",
    accent: "#34d399",
    accentLight: "#f0fdf4",
    summary: "대화 기반으로 사용자 의도와 맥락을 해석해 맞춤형 선물을 추천하는 AI 서비스 기획 및 구현",
    role: "PM, 서비스 기획, UX 설계, 추천 로직 기획, 데이터 수집 및 정제, Frontend 개발",
    result: "End-to-End 서비스 구축 경험 확보 / A+ 평가 획득",
    tags: ["React", "JavaScript", "Tailwind CSS", "서비스 기획", "UX 설계", "AI 서비스", "PM"],
    detail: {
      overview: "사용자와의 자연어 대화를 통해 받는 사람의 특성과 상황을 파악하고, 맥락에 맞는 선물을 추천하는 AI 서비스를 기획부터 개발까지 End-to-End로 구축했습니다.",
      problem: "선물을 고를 때 '뭘 사야 할지 모르겠다'는 경험은 누구나 있지만, 기존 추천 서비스는 카테고리 필터 기반으로 맥락을 반영하지 못했습니다.\n\n받는 사람의 나이, 취향, 관계, 예산, 상황 등 복합적인 요소를 고려한 추천이 이루어지지 않아 결국 사용자가 직접 탐색해야 하는 한계가 있었습니다.",
      process: [
        {
          title: "① 서비스 기획 및 추천 로직 설계",
          items: [
            "대화 시나리오 설계 및 의도 추출 기준 정의",
            "선물 추천 기준 항목화 (관계, 나이, 예산, 취향, 상황)",
            "AI 추천 프롬프트 구조 설계",
          ],
        },
        {
          title: "② 데이터 수집 및 정제",
          items: [
            "선물 카테고리별 상품 데이터 수집 및 정제",
            "추천 품질 향상을 위한 데이터 레이블링",
            "엣지 케이스 대응 시나리오 추가",
          ],
        },
        {
          title: "③ Frontend 개발",
          items: [
            "React + JavaScript로 채팅 UI 구현, Tailwind CSS 기반 인터페이스 구현",
            "API 명세서를 기반으로 서버 개발자와 지속 소통하며 API 연동 진행",
            "소프트웨어공학 수업 내용을 토대로 재사용이 용이하도록 컴포넌트 기반 코드 설계",
          ],
        },
      ],
      results: ["End-to-End 서비스 구축 경험 확보", "A+ 평가 획득", "기획부터 개발까지 전 과정 주도적으로 수행"],
      insight: "기획자가 개발까지 직접 구현해보며, 기술적 제약이 UX 의사결정에 미치는 영향을 몸소 이해했습니다. API 명세서를 읽고 개발자와 직접 소통하는 과정에서 개발 프로세스에 대한 이해와 협업 역량을 키울 수 있었습니다.",
      skills: ["서비스 기획", "UX 설계", "React", "JavaScript", "Tailwind CSS", "API 연동", "추천 로직"],
    },
  },
];

/* ── 모바일 프레임 ── */
function MobileFrame({ image, accent }: { image: string; accent: string }) {
  return (
    <div className="relative mx-auto w-[160px]">
      <div
        className="relative rounded-[2rem] p-[3px] shadow-xl"
        style={{ background: `linear-gradient(135deg, ${accent}90, ${accent}30)` }}
      >
        <div className="rounded-[1.8rem] overflow-hidden relative bg-gray-100" style={{ height: 280 }}>
          <div className="absolute inset-0">
            {image ? (
              <Image src={image} alt="prototype" fill className="object-cover object-top" />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <span className="text-3xl">📱</span>
                <p className="text-gray-400 text-[10px] text-center leading-tight px-2">
                  모바일 프로토타입<br />이미지를 넣어주세요
                </p>
              </div>
            )}
          </div>
          <div className="absolute top-0 left-0 right-0 flex justify-center pt-2.5 z-10 pointer-events-none">
            <div className="w-14 h-3.5 bg-black rounded-full opacity-80" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2 z-10 pointer-events-none">
            <div className="w-16 h-1 bg-black rounded-full opacity-40" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 데스크탑 프레임 ── */
function DesktopFrame({ image, accent }: { image: string; accent: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div
        className="rounded-xl overflow-hidden shadow-xl border-2"
        style={{ borderColor: `${accent}50` }}
      >
        <div className="bg-gray-100 px-3 py-2 flex items-center gap-1.5">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded h-4 mx-1 flex items-center px-2">
            <span className="text-gray-400 text-[9px]">prototype.figma.com</span>
          </div>
        </div>
        <div className="relative bg-gray-50" style={{ height: 180 }}>
          {image ? (
            <Image src={image} alt="prototype" fill className="object-cover object-top" />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <span className="text-2xl">🖥</span>
              <p className="text-gray-400 text-[10px] text-center">PC 프로토타입 이미지</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-12 h-2.5 bg-gray-200 rounded-b-lg" />
      </div>
      <div className="flex justify-center">
        <div className="w-20 h-1 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}

const allFilterTags = ["전체", ...Array.from(new Set(projects.flatMap((p) => p.categories)))];

export default function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState("전체");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = activeFilter === "전체" ? projects : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-28 px-6 bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase">Projects</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">이런 걸 만들었어요</h2>
          <p className="text-gray-400 mt-3 text-sm">카드를 클릭하면 자세한 내용을 볼 수 있어요</p>
        </motion.div>

        {/* 필터 칩 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {allFilterTags.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === f
                  ? "bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-md"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-purple-200 hover:text-purple-500"
              }`}
            >
              {f}
              {f !== "전체" && (
                <span className="ml-1.5 opacity-60 text-xs">{projects.filter((p) => p.categories.includes(f)).length}</span>
              )}
            </button>
          ))}
        </motion.div>

        {/* 카드 그리드 */}
        <AnimatePresence mode="popLayout">
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => setSelected(project)}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-400"
                whileHover={{ y: -6 }}
              >
                {/* 상단 이미지 영역 */}
                <div
                  className="relative w-full flex items-end justify-center pt-8 pb-0 overflow-hidden"
                  style={{
                    background: `linear-gradient(160deg, ${project.accentLight} 0%, white 100%)`,
                    minHeight: project.device === "desktop" ? 220 : 260,
                  }}
                >
                  {/* 배경 원형 장식 */}
                  <div
                    className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20"
                    style={{ background: project.accent }}
                  />
                  <div
                    className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-10"
                    style={{ background: project.accent }}
                  />

                  {/* 프로젝트 번호 */}
                  <div
                    className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md"
                    style={{ background: project.accent }}
                  >
                    {String(project.id).padStart(2, "0")}
                  </div>

                  {/* hover 오버레이 */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-20" />

                  {/* 디바이스 목업 */}
                  <div className={`relative z-10 pb-0 ${project.device === "desktop" ? "w-full px-4" : ""}`}>
                    {project.device === "mobile" ? (
                      <MobileFrame image={project.image} accent={project.accent} />
                    ) : (
                      <DesktopFrame image={project.image} accent={project.accent} />
                    )}
                  </div>
                </div>

                {/* 하단 텍스트 */}
                <div className="p-6">
                  {/* 카테고리 + 기간 */}
                  <div className="flex items-center gap-1.5 mb-3 flex-wrap">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-[11px] font-bold px-2.5 py-0.5 rounded-full"
                        style={{ background: `${project.accent}18`, color: project.accent }}
                      >
                        {cat}
                      </span>
                    ))}
                    <span className="text-gray-300 text-xs ml-auto">{project.period}</span>
                  </div>

                  {/* 타이틀 */}
                  <h3 className="text-lg font-bold text-gray-800 mb-2 leading-snug group-hover:text-gray-900 transition-colors">
                    {project.title}
                  </h3>

                  {/* 요약 */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{project.summary}</p>

                  {/* 성과 박스 */}
                  <div
                    className="rounded-xl px-4 py-2.5 mb-4 flex items-start gap-2"
                    style={{ background: `${project.accent}12` }}
                  >
                    <span className="text-base flex-shrink-0 mt-0.5">📊</span>
                    <p className="text-xs font-semibold leading-relaxed" style={{ color: project.accent }}>
                      {project.result}
                    </p>
                  </div>

                  {/* 자세히 보기 */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-500 text-[11px] font-medium px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-gray-400 text-[11px] font-medium px-1 py-0.5">+{project.tags.length - 3}</span>
                      )}
                    </div>
                    <span
                      className="text-xs font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ color: project.accent }}
                    >
                      자세히 →
                    </span>
                  </div>
                </div>

                {/* 하단 accent 라인 */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to right, ${project.accent}80, ${project.accent}20)` }}
                />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>

      {/* 상세 모달 */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-white rounded-3xl shadow-2xl z-50 overflow-hidden max-h-[75vh] overflow-y-auto"
            >
              {/* 모달 헤더 */}
              <div
                className="relative p-7 pb-5"
                style={{ background: `linear-gradient(135deg, ${selected.accentLight}, white)` }}
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-gray-400 hover:text-gray-600 shadow-sm text-lg font-light"
                >
                  ×
                </button>
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="text-4xl">{selected.emoji}</span>
                  {selected.categories.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: `${selected.accent}20`, color: selected.accent }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-800 leading-snug">{selected.title}</h3>
                <p className="text-gray-400 text-xs mt-1.5">{selected.period}</p>
              </div>

              {/* 가로형 사진 */}
              <div className="relative w-full overflow-hidden border-y border-gray-100" style={{ height: 260 }}>
                {selected.modalImage ? (
                  <Image src={selected.modalImage} alt={selected.title} fill className="object-cover object-top" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-5xl" style={{ background: selected.accentLight }}>
                    {selected.emoji}
                  </div>
                )}
              </div>

              {/* 본문 */}
              <div className="p-7 space-y-6">

                {/* 개요 */}
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase mb-2">🧩 개요</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{selected.detail.overview}</p>
                </div>

                {/* 문제 인식 */}
                <div className="bg-red-50 rounded-2xl p-4">
                  <p className="text-xs text-red-400 font-semibold uppercase mb-2">🎯 문제 인식</p>
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{selected.detail.problem}</p>
                </div>

                {/* 해결 과정 */}
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase mb-3">🛠 해결 과정</p>
                  <div className="space-y-3">
                    {selected.detail.process.map((step, si) => (
                      <div key={si} className="bg-gray-50 rounded-xl p-4">
                        <p className="text-sm font-bold text-gray-700 mb-2">{step.title}</p>
                        <ul className="space-y-1">
                          {step.items.map((item, ii) => (
                            <li key={ii} className="flex gap-2 text-sm text-gray-600">
                              <span className="flex-shrink-0 mt-0.5" style={{ color: selected.accent }}>✦</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 성과 */}
                <div className="rounded-2xl p-4" style={{ background: `${selected.accent}15` }}>
                  <p className="text-xs font-semibold uppercase mb-2" style={{ color: selected.accent }}>📈 성과</p>
                  <ul className="space-y-1.5">
                    {selected.detail.results.map((r, i) => (
                      <li key={i} className="flex gap-2 text-sm font-medium" style={{ color: selected.accent }}>
                        <span className="flex-shrink-0">•</span>{r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 핵심 인사이트 */}
                <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
                  <p className="text-xs text-amber-500 font-semibold uppercase mb-2">💡 핵심 인사이트</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{selected.detail.insight}</p>
                </div>

                {/* 스킬 태그 */}
                <div className="flex flex-wrap gap-2">
                  {selected.detail.skills.map((s) => (
                    <span key={s} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
