"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  "삼성전자", "현대자동차", "LG에너지솔루션", "SK하이닉스",
  "포스코", "두산에너빌리티", "한화솔루션", "기아",
  "롯데케미칼", "LS일렉트릭",
];

export function LogoCloud() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 lg:py-20 border-y border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-xs text-[#94A3B8] uppercase tracking-[0.2em] font-medium mb-10"
        >
          이미{" "}
          <span className="text-[#64748B] font-semibold">500+</span> 제조 현장에서 검증되었습니다
        </motion.p>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F9FBFF] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F9FBFF] to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: [0, -1500] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-10 whitespace-nowrap"
          >
            {[...logos, ...logos, ...logos].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-5 py-2.5 rounded-lg bg-white/60 border border-[#F1F5F9]"
              >
                <span className="text-sm font-semibold text-[#94A3B8] tracking-wide">
                  {name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
