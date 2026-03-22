"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const links = [
  { label: "이메일", value: "oonyong9@naver.com", icon: "📧", href: "mailto:oonyong9@naver.com" },
  { label: "LinkedIn", value: "linkedin.com/in/oonyong", icon: "💼", href: "https://linkedin.com/in/oonyong" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-28 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* 배경 블롭 */}
      <motion.div
        className="absolute w-80 h-80 bg-purple-200 rounded-full opacity-30 blur-3xl -top-20 -left-20"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-pink-200 rounded-full opacity-30 blur-3xl -bottom-20 -right-20"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, delay: 2, repeat: Infinity }}
      />

      <div className="max-w-3xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-purple-400 tracking-widest uppercase">Contact</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">함께 일해요!</h2>
          <p className="text-gray-500 mt-4 leading-relaxed">
            새로운 프로젝트나 협업 제안은 언제든지 환영해요.
            <br />
            아래 채널로 편하게 연락 주세요 😊
          </p>
        </motion.div>

        {/* 연락처 카드 */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 15px 35px rgba(168,85,247,0.15)" }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-purple-100 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center text-2xl">
                {link.icon}
              </div>
              <div>
                <p className="text-gray-400 text-xs font-semibold">{link.label}</p>
                <p className="text-gray-700 font-medium text-sm group-hover:text-purple-600 transition-colors">
                  {link.value}
                </p>
              </div>
              <span className="ml-auto text-gray-300 group-hover:text-purple-400 transition-colors text-lg">→</span>
            </motion.a>
          ))}
        </div>

        {/* CTA 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl p-8 text-center text-white shadow-xl"
        >
          <div className="text-5xl mb-4">✨</div>
          <h3 className="text-2xl font-bold mb-2">같이 멋진 걸 만들어봐요</h3>
          <p className="text-white/80 mb-6 text-sm">
            서비스 기획, UX 리뷰, 사이드 프로젝트 협업 모두 열려있어요
          </p>
          <motion.a
            href="mailto:oonyong9@naver.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-white text-purple-600 font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            이메일 보내기 →
          </motion.a>
        </motion.div>

        {/* 푸터 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-400 text-sm mt-12"
        >
          © 2025 장윤영. Made with 💜 Next.js + Framer Motion
        </motion.p>
      </div>
    </section>
  );
}
