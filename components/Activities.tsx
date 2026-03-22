"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const activities = [
  {
    name: "교내 사격 동아리 [HISC]",
    role: "동아리원",
    period: "2022.09 – 2023.12",
    tag: "동아리",
    emoji: "🎯",
    color: "from-orange-50 to-orange-100",
    border: "border-orange-200",
    badge: "bg-orange-100 text-orange-600",
    dot: "bg-orange-300",
    desc: "정기 사격 훈련 및 친목 도모 활동 참여, 동아리 박람회 운영 지원",
  },
  {
    name: "IT 웹 개발 동아리 '멋쟁이사자처럼'",
    role: "동아리원 (11기 아기사자)",
    period: "2023.03 – 2023.12",
    tag: "동아리",
    emoji: "🦁",
    color: "from-yellow-50 to-yellow-100",
    border: "border-yellow-200",
    badge: "bg-yellow-100 text-yellow-700",
    dot: "bg-yellow-300",
    desc: "기획/디자인 11기 아기사자 수료, 기획/디자인/프론트엔드 강의 수강, 전국 연합 아이디어톤 및 해커톤 참여, 서비스 아이디어 기획 및 구현",
  },
  {
    name: "교내 튜터링 프로그램",
    role: "팀장",
    period: "2023.03 – 2023.06",
    tag: "학습",
    emoji: "📚",
    color: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-600",
    dot: "bg-blue-300",
    desc: "컴퓨터구조 학습 스터디 주도, 튜터링, 개념 정리 자료 제작 및 공유, 시험 대비 문제 제작 및 풀이 공유",
    achievements: ["🏆 우수팀 선정"],
  },
  {
    name: "자기주도학습 스터디 프로그램",
    role: "팀원",
    period: "2023.07 – 2023.08",
    tag: "학습",
    emoji: "💻",
    color: "from-cyan-50 to-cyan-100",
    border: "border-cyan-200",
    badge: "bg-cyan-100 text-cyan-600",
    dot: "bg-cyan-300",
    desc: "웹 개발 관련 학습 스터디 진행, 서비스 기획 및 디자인 기초 실습, 고용노동부 주최 공모전 참가",
    achievements: ["🏆 우수팀 선정"],
  },
  {
    name: "IT 웹 개발 동아리 '멋쟁이사자처럼'",
    role: "운영진 (12기)",
    period: "2024.01 – 2024.12",
    tag: "동아리",
    emoji: "🦁",
    color: "from-purple-50 to-purple-100",
    border: "border-purple-200",
    badge: "bg-purple-100 text-purple-600",
    dot: "bg-purple-300",
    desc: "동아리 행사 운영 전반 기획 및 홍보, 12기 아기사자 모집 서류 및 면접 평가 참여, 협업 프로세스/스토리보드 등 기획 세션 자료 제작 및 교육",
  },
  {
    name: "교내 공식 IT 세미나 'DevTalk'",
    role: "운영진",
    period: "2024.03 – 2024.06",
    tag: "세미나",
    emoji: "🎤",
    color: "from-pink-50 to-pink-100",
    border: "border-pink-200",
    badge: "bg-pink-100 text-pink-600",
    dot: "bg-pink-300",
    desc: "장소 섭외 등 행사 운영, 출석 관리 등 행사 당일 운영 지원",
  },
  {
    name: "교내 공식 IT 세미나 'DevTalk'",
    role: "총괄 리드",
    period: "2024.07 – 2025.12",
    tag: "세미나",
    emoji: "⭐",
    color: "from-violet-50 to-violet-100",
    border: "border-violet-200",
    badge: "bg-violet-100 text-violet-600",
    dot: "bg-violet-400",
    desc: "행사 주제/연사/프로그램 구성 등 행사 기획 전반 담당, 연사 섭외 및 예산안 수립 등 행사 운영 실무, 홍보 전략 기획, 홍보물 제작, 인수인계 체계 구축",
    achievements: ["📈 9회차 신청자 350% 증가", "📈 10회차 신청자 250% 증가"],
    cardImage: "/images/devtalk-2.png",
    clickable: true,
    images: [
      "/images/devtalk-1.png",
      "/images/devtalk-2.png",
      "/images/devtalk-3.png",
      "/images/devtalk-4.png",
      "/images/devtalk-5.png",
    ],
    detail: {
      overview: "홍익대학교 학우들을 대상으로 IT 세미나를 기획·운영하며, 학생들에게 다양한 기술 인사이트를 전달하고 참여 경험을 개선했습니다.",
      problem: "세미나 신청률이 점차 하락하고, 행사 인지도가 낮아지는 문제가 있었습니다. 기존 홍보는 단순 공지 중심으로 이루어져 세미나의 가치와 취지를 충분히 전달하지 못했습니다.\n\n또한 연사를 먼저 섭외한 후 주제를 선정하는 방식으로 회차별 주제가 분산되며, 행사의 일관된 정체성이 약화되었습니다.\n\n운영 측면에서도 업무 히스토리가 분산되어 있어 인수인계 및 지속적인 운영에 어려움이 발생할 수 있는 구조였습니다.",
      process: [
        {
          title: "① 행사 구조 설계 (기획)",
          items: [
            "IT 트렌드를 반영한 주제 중심 세미나 기획 및 연사 섭외",
            "첫 온라인 세미나 도입으로 참여 방식 확장",
            "토크쇼형 Q&A 세션을 도입해 몰입도 강화",
            '"인지 → 유입 → 신청 → 참여" 퍼널 기반으로 행사 구조 설계',
          ],
        },
        {
          title: "② 운영 프로세스 구축",
          items: [
            "공식 사이트를 개발해 반복 가능한 운영 구조로 표준화",
            "신청, 참여, 후기까지 관리 가능한 통합 어드민 시스템 구축",
            "업무 매뉴얼 및 타임라인을 제작해 운영 기준 정립",
          ],
        },
        {
          title: "③ 홍보 전략 기획",
          items: [
            "포스터, X 배너 등 오프라인 홍보 채널 확대",
            "SNS 및 친구 초대 이벤트를 활용한 논페이드 마케팅 설계",
            "홍보 채널별 맞춤 한줄 카피로 유입 효율 개선",
            "교수님 참여 홍보 영상 제작으로 신뢰도 강화",
            "주요 유입 데이터를 바탕으로 효과적인 홍보 전략 검증",
          ],
        },
      ],
      results: [
        "신청자 수 39명 → 180명으로 약 350% 증가 (9회차)",
        "신청자 수 39명 → 137명으로 약 250% 증가 (10회차)",
        "카카오톡 공지방 유입 비중 64.2%",
        "지인 기반 유입 비중 15.8%",
      ],
      insight: "이 경험을 통해 고객 중심 사고와 퍼널 설계의 중요성을 배웠습니다. 단순히 콘텐츠를 제공하는 것이 아니라, 사용자의 유입부터 참여, 재참여까지의 전체 경험을 설계하는 것이 중요하며, 이는 서비스 성과에 직접적인 영향을 준다는 것을 확인했습니다.",
      skills: ["행사 기획", "연사 섭외", "홍보 전략", "PM", "퍼널 설계", "프로세스 설계", "문서화"],
    },
  },
  {
    name: "교내 튜터링 프로그램",
    role: "팀원",
    period: "2024.09 – 2024.11",
    tag: "학습",
    emoji: "🖥",
    color: "from-green-50 to-green-100",
    border: "border-green-200",
    badge: "bg-green-100 text-green-700",
    dot: "bg-green-300",
    desc: "운영체제 학습 스터디 주도, 튜터링, 개념 정리 자료 제작 및 공유, 페이지 교체 알고리즘 수업 진행",
    achievements: ["🏆 우수팀 선정"],
  },
];

const tagColors: Record<string, string> = {
  동아리: "bg-yellow-100 text-yellow-700",
  학습: "bg-blue-100 text-blue-600",
  세미나: "bg-pink-100 text-pink-600",
};

const filters = ["전체", "동아리", "학습", "세미나"];

type ActivityWithDetail = typeof activities[number] & { clickable?: boolean };

export default function Activities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("전체");
  const [selected, setSelected] = useState<ActivityWithDetail | null>(null);

  const filtered = active === "전체" ? activities : activities.filter((a) => a.tag === active);

  return (
    <section id="activities" className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold text-pink-400 tracking-widest uppercase">Activities</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">대내외 활동</h2>
          <p className="text-gray-400 mt-2 text-sm">교내 커뮤니티 활동을 중심으로 꾸준히 성장해왔어요</p>
        </motion.div>

        {/* 필터 탭 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === f
                  ? "bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-md"
                  : "bg-gray-100 text-gray-500 hover:bg-purple-50 hover:text-purple-500"
              }`}
            >
              {f} {f !== "전체" && <span className="ml-1 opacity-60">{activities.filter((a) => a.tag === f).length}</span>}
            </button>
          ))}
        </motion.div>

        {/* 타임라인 */}
        <div className="relative">
          <div className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-pink-200 to-green-200" />

          <AnimatePresence mode="popLayout">
            <div className="space-y-6">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.name + item.role}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`flex gap-5 pl-14 md:pl-0 relative ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* 타임라인 도트 */}
                  <div className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full ${item.color} bg-gradient-to-br border ${item.border} flex items-center justify-center text-lg shadow-sm z-10`}>
                    {item.emoji}
                  </div>

                  {/* 카드 */}
                  <motion.div
                    whileHover={{ y: -3, boxShadow: "0 12px 28px rgba(0,0,0,0.07)" }}
                    onClick={() => item.clickable && setSelected(item)}
                    className={`relative bg-gradient-to-br ${item.color} border ${item.border} rounded-2xl p-5 md:w-[calc(50%-2.5rem)] flex-1 md:flex-none ${item.clickable ? "cursor-pointer" : ""}`}
                  >
                    {/* 총괄 리드 클릭 말풍선 */}
                    {item.clickable && (
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-11 right-3 bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md pointer-events-none whitespace-nowrap"
                      >
                        👇 클릭해보세요!
                        <span className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800" />
                      </motion.div>
                    )}
                    <div className="flex items-start justify-between gap-2 mb-1.5 flex-wrap">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${item.badge}`}>
                        {item.tag}
                      </span>
                      <span className="text-gray-400 text-xs">{item.period}</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mt-1">{item.name}</h4>
                    <p className="text-purple-600 text-sm font-semibold mb-2">{item.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    {"cardImage" in item && item.cardImage && (
                      <div className="mt-3 rounded-xl overflow-hidden">
                        <img src={item.cardImage as string} alt="activity" className="w-full h-52 object-cover object-top" />
                      </div>
                    )}
                    {"achievements" in item && item.achievements && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {(item.achievements as string[]).map((a) => (
                          <span key={a} className="inline-flex items-center gap-1 bg-white/70 border border-yellow-200 text-yellow-700 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                            {a}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>

                  {/* 반대편 빈 공간 (데스크탑) */}
                  <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </div>

      {/* 상세 팝업 */}
      <AnimatePresence>
        {selected && selected.detail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* 헤더 */}
              <div className={`relative p-7 pb-5 bg-gradient-to-br ${selected.color}`}>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 text-2xl font-light"
                >×</button>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{selected.emoji}</span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${selected.badge}`}>{selected.tag}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{selected.name}</h3>
                <p className="text-violet-600 font-semibold text-sm mt-0.5">{selected.role}</p>
                <p className="text-gray-400 text-xs mt-1">{selected.period}</p>
              </div>

              {/* 사진 갤러리 */}
              {"images" in selected && selected.images && (
                <div className="px-7 pt-6">
                  <p className="text-xs text-gray-400 font-semibold uppercase mb-3">Gallery</p>
                  <div className="grid grid-cols-3 gap-2">
                    {(selected.images as string[]).slice(0, 3).map((src, i) => (
                      <div key={i} className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                        <img src={src} alt={`devtalk-${i+1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {(selected.images as string[]).slice(3).map((src, i) => (
                      <div key={i} className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                        <img src={src} alt={`devtalk-${i+4}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-7 space-y-6">
                {/* 개요 */}
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase mb-2">🧩 개요</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{selected.detail.overview}</p>
                </div>

                {/* 문제 인식 */}
                {"problem" in selected.detail && (
                  <div className="bg-red-50 rounded-2xl p-4">
                    <p className="text-xs text-red-400 font-semibold uppercase mb-2">🎯 문제 인식</p>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{selected.detail.problem as string}</p>
                  </div>
                )}

                {/* 해결 과정 */}
                {"process" in selected.detail && (
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase mb-3">🛠 해결 과정</p>
                    <div className="space-y-3">
                      {(selected.detail.process as {title: string; items: string[]}[]).map((step, si) => (
                        <div key={si} className="bg-gray-50 rounded-xl p-4">
                          <p className="text-sm font-bold text-gray-700 mb-2">{step.title}</p>
                          <ul className="space-y-1">
                            {step.items.map((item, ii) => (
                              <li key={ii} className="flex gap-2 text-sm text-gray-600">
                                <span className="text-violet-400 flex-shrink-0 mt-0.5">✦</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 성과 */}
                {"results" in selected.detail && (
                  <div className="bg-violet-50 rounded-2xl p-4">
                    <p className="text-xs text-violet-400 font-semibold uppercase mb-2">📈 성과</p>
                    <ul className="space-y-1.5">
                      {(selected.detail.results as string[]).map((r, i) => (
                        <li key={i} className="flex gap-2 text-sm text-violet-700 font-medium">
                          <span className="flex-shrink-0">•</span>{r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 핵심 인사이트 */}
                {"insight" in selected.detail && (
                  <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
                    <p className="text-xs text-amber-500 font-semibold uppercase mb-2">💡 핵심 인사이트</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{selected.detail.insight as string}</p>
                  </div>
                )}

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
