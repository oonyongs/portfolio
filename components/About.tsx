"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stats = [
  { label: "프로젝트 경험", value: "10+", emoji: "📋" },
  { label: "기획 연차", value: "2년", emoji: "📆" },
  { label: "협업 팀원", value: "80+", emoji: "🤝" },
  { label: "런칭 서비스", value: "2개", emoji: "🚀" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-6 bg-white relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-60" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-50 rounded-full translate-y-1/2 -translate-x-1/2 opacity-60" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-purple-400 tracking-widest uppercase">About Me</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">저는 이런 사람이에요</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* 프로필 카드 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="relative w-64 h-64 mx-auto">
              {/* 배경 원 */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-200 to-pink-200"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              {/* 이모지 아바타 */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-8xl shadow-inner">
                👩‍💻
              </div>
              {/* 뱃지 */}
              <motion.div
                className="absolute -bottom-2 -right-2 bg-white rounded-full shadow-md px-3 py-1.5 text-sm font-semibold text-purple-600 border border-purple-100"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨ 기획자
              </motion.div>
            </div>
          </motion.div>

          {/* 소개 텍스트 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              데이터로 문제를 정의하고
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                실행까지 연결하는 서비스 기획자
              </span>
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              사용자 데이터와 리서치를 기반으로 문제를 정의하고,
              서비스 개선 방향을 설계합니다.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              프로젝트를 매니징하며 개발자와 디자이너와 협업해왔고,
              문서화를 통해 효율적인 업무 환경을 만들어왔습니다.
              결과적으로 고객에게 더 나은 경험을 제공하는 서비스를 만들고자 합니다.
            </p>
            <div className="flex gap-3 flex-wrap">
              {["서비스 기획", "UX 설계", "PM", "SQL"].map((tag) => (
                <span
                  key={tag}
                  className="bg-purple-50 text-purple-500 text-sm font-medium px-3 py-1.5 rounded-full border border-purple-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 스탯 카드 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(168,85,247,0.1)" }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center border border-purple-100 cursor-default"
              transition={{ delay: i * 0.05 }}
            >
              <div className="text-3xl mb-2">{stat.emoji}</div>
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
