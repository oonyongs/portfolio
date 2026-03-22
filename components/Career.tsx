"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Career() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="career" className="py-28 px-6 bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-purple-400 tracking-widest uppercase">Education</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">학력 & 자격</h2>
        </motion.div>

        {/* 학력 — 큰 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm mb-5"
        >
          <div className="flex gap-5 items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
              🎓
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">홍익대학교</h3>
                  <p className="text-purple-500 font-semibold">컴퓨터공학과</p>
                </div>
                <span className="text-gray-400 text-sm">2021.03 – 2026.02</span>
              </div>
              <p className="text-gray-500 text-sm mt-2">자료구조, 알고리즘, 데이터베이스, 소프트웨어공학 전공</p>
            </div>
          </div>
        </motion.div>

        {/* 자격증 + 어학 — 나란히 */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200 flex flex-col gap-3"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">🏅</span>
              <h4 className="font-bold text-gray-700 text-sm">자격증</h4>
            </div>
            <div className="flex items-center justify-between bg-white/70 rounded-xl px-3 py-2.5">
              <span className="text-gray-700 text-sm font-semibold">SQLD</span>
              <span className="text-purple-500 text-xs font-bold">2025</span>
            </div>
            <p className="text-gray-400 text-xs">SQL 개발자 국가공인 자격증</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200 flex flex-col gap-3"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">🌏</span>
              <h4 className="font-bold text-gray-700 text-sm">어학</h4>
            </div>
            <div className="flex items-center justify-between bg-white/70 rounded-xl px-3 py-2.5">
              <span className="text-gray-700 text-sm font-semibold">Toeic Speaking - <span className="text-pink-500">AL</span></span>
              <span className="text-pink-500 text-xs font-bold">2026</span>
            </div>
            <p className="text-gray-400 text-xs">Advanced Low — 영어 회화 능통</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
