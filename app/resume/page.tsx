"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function Resume() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      {/* 상단 버튼 */}
      <div className="no-print max-w-3xl mx-auto mb-5 flex items-center justify-between">
        <a
          href="/"
          className="text-sm text-sky-500 font-medium hover:text-sky-700 transition-colors flex items-center gap-1"
        >
          ← 포트폴리오
        </a>
        <button
          onClick={() => window.print()}
          className="text-sm bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-full font-semibold transition-colors shadow-sm"
        >
          PDF 저장
        </button>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
      >

        {/* ── 헤더 ── */}
        <motion.div custom={0} variants={fadeUp} className="px-10 pt-10 pb-8 flex gap-8 items-center border-b border-slate-100">
          {/* 사진 */}
          <div className="relative w-32 flex-shrink-0" style={{ aspectRatio: "3/4" }}>
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/profile.jpg" alt="장윤영" fill className="object-cover object-top" />
            </div>
          </div>

          {/* 텍스트 */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-800 mb-1">장윤영</h1>
            <p className="text-sky-500 font-semibold text-sm mb-2">PM · 서비스 기획자 · 그로스 매니저</p>
            <a
              href="https://oonyong.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs text-slate-400 hover:text-sky-500 transition-colors mb-3"
            >
              🔗 oonyong.com
            </a>
            <p className="text-slate-500 text-sm leading-relaxed">
              사용자 데이터와 리서치를 기반으로 문제를 정의하고, 서비스 개선 방향을 설계합니다. 개발자, 디자이너, 그리고 유관부서와 협력하며 PM으로서 프로젝트를 매니징해왔고, 고객을 위한 서비스뿐 아니라 사내 업무 효율에도 기여하는 것을 목표로 합니다.
            </p>
          </div>
        </motion.div>

        <div className="px-10 py-8 space-y-9">

          {/* ── 학력 & 자격 ── */}
          <motion.section custom={1} variants={fadeUp}>
            <Label>학력 & 자격</Label>
            <div className="mt-3 space-y-2.5">
              <CertRow
                title="홍익대학교 컴퓨터공학과 졸업"
                badge="4.19 / 4.5"
                period="2021.03 – 2026.02"
              />
              <CertRow title="SQLD — SQL 개발자" period="2025.09" />
              <CertRow title="Toeic Speaking" badge="Advanced Low (AL)" period="2026.03" />
            </div>
          </motion.section>

          <Divider />

          {/* ── 경력 ── */}
          <motion.section custom={2} variants={fadeUp}>
            <Label>경력</Label>
            <div className="mt-3">
              <Row
                title="소개팅 앱 스타트업 '주선왕'"
                sub="창업 멤버 — PM / 서비스 기획 / 데이터 분석 / UXUI / CS"
                period="2024.05 – 현재"
                items={[
                  "사용자 행동 패턴 정량 분석 → 추천 알고리즘 가중치 조정 방향 제안",
                  "고객 인터뷰 및 경쟁사 분석 후 차별점 도출",
                  "핵심 기능 기획 및 UX 설계",
                  "유저 행동 기반 개선점 도출 및 성과 지표 분석",
                ]}
              />
            </div>
          </motion.section>

          <Divider />

          {/* ── 프로젝트 ── */}
          <motion.section custom={3} variants={fadeUp}>
            <Label>프로젝트</Label>
            <div className="mt-3 space-y-5">
              <Row
                title="2024 홍익대학교 공식 축제 사이트"
                sub="PM / 서비스 기획"
                period="2024.07 – 2024.09"
                items={[
                  "18인 팀 PM — 전 소통 투명화 정책, Project-Task 기반 스프린트 운영",
                  "타 홍보 채널과 차별화된 기능 기획 (주점 좋아요·랭킹, 추첨 이벤트, ENG 번역)",
                ]}
              />
              <Row
                title="신한카드 IT부서 문의 게시판"
                sub="서비스 기획 / UX 설계"
                period="2025.07 – 2025.08"
                items={[
                  "재직자 인터뷰 기반 담당자 부재·인수인계 Pain Point 도출 및 해결 방향 수립",
                  "'사람' 중심 히스토리 관리 구조 설계 및 답변 수정 기능 기획으로 정보 신뢰도 유지",
                  "역할별(요청자/담당자/관리자) 화면 흐름 설계",
                ]}
              />
              <Row
                title="AI 맞춤 선물 추천 서비스 'Wishbot'"
                sub="PM / 서비스 기획 / Frontend 개발"
                period="2025.03 – 2025.11"
                items={[
                  "대화 분석 및 키워드 추출 로직 설계",
                  "React + JavaScript / Tailwind CSS UI 퍼블리싱, API 명세서 기반 서버 연동",
                ]}
              />
            </div>
          </motion.section>

          <Divider />

          {/* ── 대외활동 ── */}
          <motion.section custom={5} variants={fadeUp}>
            <Label>대외활동</Label>
            <div className="mt-3 space-y-5">
              <Row
                title="교내 IT 세미나 'DevTalk'"
                sub="총괄 / 기획·전략 / 홍보·마케팅 / 운영"
                period="2024.07 – 2025.12"
                items={[
                  "행사 주제/연사/프로그램 구성 등 행사 기획 전반 담당",
                  "연사 섭외 및 예산안 수립 등 행사 운영 실무",
                  "홍보 전략 기획, 홍보물 제작, 인수인계 체계 구축",
                ]}
              />
              <Row
                title="멋쟁이사자처럼 12기"
                sub="운영진"
                period="2024.01 – 2024.12"
                items={[
                  "동아리 행사 운영 전반 기획 및 홍보 담당",
                  "협업 프로세스·스토리보드 등 기획 세션 자료 제작 및 신입 기수 대상 교육",
                ]}
              />
              <Row
                title="멋쟁이사자처럼 11기"
                sub="아기사자 수료"
                period="2023.03 – 2023.12"
                items={[
                  "기획·디자인·프론트엔드 강의 수강 및 서비스 기획 기초 실습",
                  "전국 연합 아이디어톤 및 해커톤 참여, 서비스 아이디어 기획 및 구현",
                ]}
              />
            </div>
          </motion.section>

          <Divider />

          {/* ── 스킬 ── */}
          <motion.section custom={6} variants={fadeUp}>
            <Label>스킬</Label>
            <div className="mt-3 space-y-3">
              <SkillRow category="PM" skills={["Agile", "백로그 관리", "요구사항 정의", "우선순위 정의"]} />
              <SkillRow category="서비스 기획 & UX" skills={["사용자 리서치", "정보설계 (IA)", "와이어프레임", "UX 흐름 설계"]} />
              <SkillRow category="데이터 분석" skills={["SQL", "KPI·가드레일 지표 분석", "대시보드 설계"]} />
              <SkillRow category="사용 툴" skills={["SQL", "Figma", "Notion", "Slack", "Miro", "React", "JavaScript", "Github", "Excel", "PPT", "Word"]} />
            </div>
          </motion.section>

        </div>

        {/* 푸터 */}
        <div className="px-10 py-5 border-t border-slate-100 text-center">
          <p className="text-slate-300 text-xs">© 2025 장윤영 · oonyong9@naver.com</p>
        </div>

      </motion.div>
    </div>
  );
}

/* ── 공통 컴포넌트 ── */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-bold text-sky-500 uppercase tracking-widest">{children}</span>
      <div className="flex-1 h-px bg-slate-100" />
    </div>
  );
}

function Divider() {
  return <div className="border-t border-slate-100" />;
}


function Row({
  title, sub, period, items,
}: {
  title: string; sub: string; period: string; items: string[];
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
      <div className="flex-1 pb-1">
        <div className="flex items-start justify-between gap-2 flex-wrap mb-0.5">
          <p className="font-semibold text-slate-800 text-sm">{title}</p>
          <span className="text-slate-400 text-xs flex-shrink-0">{period}</span>
        </div>
        <p className="text-sky-500 text-xs font-medium mb-2">{sub}</p>
        <ul className="space-y-1">
          {items.map((item, i) => (
            <li key={i} className="text-slate-500 text-xs flex gap-2 leading-relaxed">
              <span className="text-sky-300 flex-shrink-0 mt-0.5">·</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CertRow({ title, desc, badge, period }: { title: string; desc?: string; badge?: string; period: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
      <div className="flex-1 flex items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-slate-700">{title}</p>
            {badge && (
              <span className="text-xs font-semibold text-sky-600 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-full">
                {badge}
              </span>
            )}
          </div>
          {desc && <p className="text-xs text-slate-400 mt-0.5">{desc}</p>}
        </div>
        <span className="text-xs text-slate-400 flex-shrink-0">{period}</span>
      </div>
    </div>
  );
}

function SkillRow({ category, skills }: { category: string; skills: string[] }) {
  return (
    <div className="flex gap-4 items-start">
      <span className="text-xs text-slate-400 font-medium w-32 flex-shrink-0 pt-0.5">{category}</span>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((s) => (
          <span key={s} className="text-xs text-slate-600 bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-full">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
