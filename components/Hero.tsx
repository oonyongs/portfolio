"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = ["서비스 기획자", "Product Manager", "그로스 마케터"];

function FloatingBlob({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full mix-blend-multiply filter blur-2xl opacity-60 ${className}`}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -50, 20, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration: 7,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"
    >
      {/* 배경 블롭 */}
      <FloatingBlob className="w-72 h-72 bg-purple-200 top-20 left-10" delay={0} />
      <FloatingBlob className="w-80 h-80 bg-pink-200 top-40 right-10" delay={2} />
      <FloatingBlob className="w-64 h-64 bg-blue-200 bottom-20 left-1/3" delay={4} />
      <FloatingBlob className="w-60 h-60 bg-yellow-100 bottom-10 right-1/4" delay={1} />

      {/* 떠다니는 이모지 */}
      {["✦", "◆", "○", "✿", "❋"].map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl text-purple-300 select-none pointer-events-none"
          style={{
            left: `${15 + i * 18}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{ y: [0, -20, 0], rotate: [0, 15, -15, 0] }}
          transition={{
            duration: 4 + i,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {emoji}
        </motion.span>
      ))}

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block bg-white/70 backdrop-blur-sm text-purple-500 font-semibold text-sm px-4 py-2 rounded-full shadow-sm">
            👋 안녕하세요, 반갑습니다!
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-gray-800"
        >
          장윤영
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            {" "}
            입니다
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6 h-10"
        >
          <span className="text-purple-400">{displayed}</span>
          <span className="animate-pulse text-pink-400">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
        >
          사용자 중심의 서비스를 기획합니다.
          <br />
          데이터 기반으로 생각하고, 공감으로 풀어냅니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(168,85,247,0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-8 py-3.5 rounded-full font-semibold text-base shadow-md"
          >
            프로젝트 보기 →
          </motion.a>
          <motion.a
            href="/resume"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white/80 backdrop-blur-sm text-purple-500 border border-purple-200 px-8 py-3.5 rounded-full font-semibold text-base"
          >
            이력서 보기 →
          </motion.a>
        </motion.div>

        {/* 스크롤 아래 화살표 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-purple-300 text-2xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
