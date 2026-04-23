"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Banknote,
  Smartphone,
  Zap,
  ArrowRight,
  X,
  Check,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Banknote,
    tag: "ECONOMY",
    title: "압도적인 비용 절감",
    description: "대면 상담과 불필요한 인건비를 제거하여 스마트 팩토리 도입의 문턱을 낮췄습니다.",
    footerHighlight: "평균 대비 1/40의 비용",
    microCopy: "(스마트팩토리 평균 6,000만원 기준)",
  },
  {
    icon: Smartphone,
    tag: "MOBILITY",
    title: "오직 스마트폰 하나로",
    description: "무거운 장비 대신 앱 하나로 충분합니다. 기본 설정만으로 현장의 모든 데이터를 즉시 제어하세요.",
    footerHighlight: "추가 인프라 구축 제로",
  },
  {
    icon: Zap,
    tag: "INSTANT",
    title: "단 하루, 즉시 시작되는 관리",
    description: "복잡한 공사 없이 간단한 장치 설치만으로 충분합니다. 단 24시간 만에 스마트 팩토리로 전환됩니다.",
    footerHighlight: "24시간 내 즉시 도입",
  },
];

function AnimatedCounter({
  end,
  suffix = "",
  delay = 0,
}: {
  end: number;
  suffix?: string;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => {
      let start = 0;
      const increment = end / 50;
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, 24);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [isInView, end, delay]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function ValueProps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 lg:py-40 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#1a1a2e]/40 rounded-full blur-[140px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-semibold text-[#3b82f6] tracking-[0.2em] uppercase mb-5">
            Core Values
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter mb-5">
            <span className="text-[#e8e8e8]">3대 핵심 가치로</span>
            <br />
            <span className="gradient-text">공장 운영을 혁신합니다</span>
          </h2>
          <p className="text-[#666666] max-w-xl mx-auto text-[15px] leading-relaxed">
            수동 관리에서 벗어나, 데이터 기반의 스마트한 설비 관리로 전환하세요.
          </p>
        </motion.div>

        {/* Value cards — card-glow border animation */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div
                className="relative h-full flex flex-col rounded-2xl p-7 lg:p-8 overflow-hidden transition-all duration-500 bg-[#16171D]/40 border border-white/[0.06] backdrop-blur-md group-hover:border-[#00A3FF]/40 group-hover:bg-[#16171D]/60"
              >
                {/* Radial glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0, 163, 255, 0.08), transparent 70%)`,
                  }}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 bg-[#00A3FF]/10 border border-[#00A3FF]/20"
                  >
                    <value.icon 
                      className="w-6 h-6 text-[#00A3FF]" 
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Tag */}
                  <span
                    className="inline-block text-[10px] font-black tracking-[0.2em] uppercase mb-4 px-2.5 py-1 rounded-sm bg-[#00A3FF]/10 text-[#00A3FF]"
                  >
                    {value.tag}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                    {value.title}
                  </h3>

                  <p className="text-[15px] text-[#888888] leading-relaxed mb-8 group-hover:text-[#aaaaaa] transition-colors">
                    {value.description}
                  </p>

                  {/* Footer */}
                  <div className="pt-6 border-t border-white/[0.05]">
                    <div className="flex flex-col gap-1.5">
                      {value.microCopy && (
                        <span className="text-[10px] text-white/40 font-medium">
                          {value.microCopy}
                        </span>
                      )}
                      <span 
                        className="text-[15px] font-bold text-white tracking-tight"
                        style={{ textShadow: "0 0 12px rgba(255,255,255,0.1)" }}
                      >
                        {/* Highlight key values with neon effect */}
                        {value.footerHighlight.split(' ').map((word, idx) => {
                          const isHighlighted = /^[0-9/]+/.test(word) || word.includes('제로') || word.includes('24시간') || word.includes('즉시');
                          return (
                            <span 
                              key={idx} 
                              className={isHighlighted ? "text-[#00A3FF]" : ""}
                              style={isHighlighted ? { textShadow: "0 0 15px rgba(0, 163, 255, 0.5)" } : {}}
                            >
                              {word}{' '}
                            </span>
                          );
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before / After */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-20 lg:mt-28"
        >
          <div className="grid md:grid-cols-2 gap-5">
            {/* Before */}
            <div className="relative rounded-2xl p-7 overflow-hidden" style={{ background: "rgba(255,255,255,0.015)", border: "1px solid rgba(239,68,68,0.15)" }}>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ef4444]/60 to-transparent" />
              <span className="text-[10px] font-bold text-[#ef4444] uppercase tracking-[0.15em]">
                Before — 기존 수동 관리
              </span>
              <ul className="mt-5 space-y-3.5">
                {[
                  "월 평균 12시간 비계획 정지",
                  "정비 이력 수기 기록 — 분석 불가",
                  "고장 후 대응 → 비용 폭증",
                  "설비별 상태 파악에 30분 소요",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-base text-[#888888]">
                    <X className="w-4 h-4 text-[#ef4444] shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="relative rounded-2xl p-7 overflow-hidden" style={{ background: "rgba(255,255,255,0.015)", border: "1px solid rgba(16,185,129,0.15)" }}>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#10b981]/60 to-transparent" />
              <span className="text-[10px] font-bold text-[#10b981] uppercase tracking-[0.15em]">
                After — Handy MES 도입 후
              </span>
              <ul className="mt-5 space-y-3.5">
                {[
                  "비계획 정지 80% 감소 (월 2.4시간)",
                  "모든 이력 자동 기록 & AI 분석",
                  "고장 예측 → 사전 정비로 비용 절감",
                  "1초 내 전체 설비 상태 파악",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-base text-[#e8e8e8]">
                    <Check className="w-4 h-4 text-[#10b981] shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}
