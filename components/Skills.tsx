"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "데이터 기반 기획",
    color: "from-blue-100 to-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-600",
    emoji: "📊",
    skills: [
      { name: "데이터 기반 문제 정의 및 가설 검증", level: 90 },
      { name: "SQL 기반 데이터 분석", level: 80 },
      { name: "데이터 대시보드 설계 및 구축", level: 85 },
      { name: "기능 별 KPI·가드레일 성과 분석", level: 85 },
    ],
  },
  {
    category: "서비스 기획 & UX",
    color: "from-purple-100 to-purple-50",
    border: "border-purple-200",
    badge: "bg-purple-100 text-purple-600",
    emoji: "📝",
    skills: [
      { name: "사용자 리서치 및 요구사항 정의", level: 90 },
      { name: "정보설계 (IA)", level: 85 },
      { name: "와이어프레임 설계", level: 85 },
      { name: "UX 설계 (사용자 흐름 설계)", level: 85 },
    ],
  },
  {
    category: "협업 & 프로젝트 관리",
    color: "from-pink-100 to-pink-50",
    border: "border-pink-200",
    badge: "bg-pink-100 text-pink-600",
    emoji: "🤝",
    skills: [
      { name: "프로젝트 관리 (PM)", level: 90 },
      { name: "애자일 / 스프린트 운영", level: 85 },
      { name: "백로그 관리 및 우선순위 설정", level: 85 },
      { name: "스테이크홀더 커뮤니케이션", level: 80 },
    ],
  },
];

const tools = [
  { name: "SQL", emoji: "🗄" },
  { name: "Figma", emoji: "🎨" },
  { name: "Figjam", emoji: "🖊" },
  { name: "Miro", emoji: "🗺" },
  { name: "Notion", emoji: "📄" },
  { name: "Slack", emoji: "💬" },
  { name: "Google Workspace", emoji: "📁" },
  { name: "Github", emoji: "🐙" },
  { name: "MS Office", emoji: "📊" },
  { name: "React", emoji: "⚛️" },
  { name: "TypeScript", emoji: "🔷" },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-pink-400 tracking-widest uppercase">Skills</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">이런 걸 잘해요</h2>
        </motion.div>

        {/* 스킬 그룹 */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              whileHover={{ y: -4 }}
              className={`bg-gradient-to-br ${group.color} rounded-2xl p-6 border ${group.border}`}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-2xl">{group.emoji}</span>
                <span className={`text-sm font-semibold px-2.5 py-1 rounded-full ${group.badge}`}>
                  {group.category}
                </span>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/60 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 0.8, delay: gi * 0.1 + si * 0.08 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 툴 뱃지 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-100"
        >
          <h3 className="text-center text-gray-600 font-semibold mb-6">사용 툴</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <motion.span
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.05 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 text-gray-700 font-medium text-sm px-4 py-2 rounded-full cursor-default shadow-sm"
              >
                <span>{tool.emoji}</span>
                {tool.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
