"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Banknote,
  Smartphone,
  Zap,
  XCircle,
  CheckCircle2,
  ArrowRight,
  X,
  Check,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Banknote,
    tag: "ECONOMY",
    title: "획기적인 비용 절감",
    description: "대면 상담과 불필요한 인건비를 제거하여 스마트 팩토리 도입의 문턱을 낮췄습니다.",
    footerHighlight: "평균 대비 1/40의 비용",
    microCopy: "(기존 MES 평균 6,000만원 대비)",
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
          <p className="text-xs font-semibold text-[#00a3ff] tracking-[0.2em] uppercase mb-5">
            Core Values
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
            <span className="text-[#e8e8e8]">정직한 기술로</span>
            <br />
            <span className="gradient-text">현장의 가치를 증명합니다</span>
          </h2>
          <p className="text-[#666666] max-w-xl mx-auto text-lg leading-relaxed">
            비싼 비용과 긴 구축 기간이라는 기존 MES의 한계를 넘어, <br />
            데이터 기반의 실무 중심 관리를 제안합니다.
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
        <div className="mt-20 lg:mt-28">
          <div className="grid md:grid-cols-2 gap-5 relative">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative rounded-2xl p-8 lg:p-10 overflow-hidden bg-[#121212]/70 border border-red-500/10 group transition-all duration-700"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

              <div className="flex items-center gap-3 mb-8">
                <XCircle className="w-5 h-5 text-red-500/60" />
                <span className="text-xs font-bold text-red-500/80 uppercase tracking-[0.2em]">
                  BEFORE — 기존 수동 관리
                </span>
              </div>

              <ul className="space-y-5">
                {[
                  "현장에 직접 가야만 확인 가능한 설비 상태",
                  "구두 지시와 종이 서류로 인한 정보 누락 및 혼선",
                  "작업 종료 후 뒤늦게 수기 입력하는 불확실한 실적",
                  "엑셀 수식과 씨름하는 시간 소모적 통계 작업",
                  "사고 발생 후 한참 뒤에야 인지되는 현장 상황",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-[15px] text-white/60 leading-relaxed font-medium group-hover:text-white/80 transition-colors duration-300">
                    <X className="w-4 h-4 text-red-500/40 shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Subtle Red Ambient Glow */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-500/5 rounded-full blur-[80px] pointer-events-none" />
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="relative rounded-2xl p-8 lg:p-10 overflow-hidden bg-[#16171D]/60 border border-[#00A3FF]/20 shadow-[0_0_50px_rgba(0,163,255,0.05)] group"
            >
              {/* Scanline Effect - Smoother and faster */}
              <motion.div
                animate={{ y: ["-100%", "250%"] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-[#00A3FF]/10 to-transparent pointer-events-none z-0"
              />

              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3FF]/40 to-transparent" />

              <div className="relative z-10 flex items-center gap-3 mb-8">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <CheckCircle2 className="w-5 h-5 text-[#00A3FF]" />
                </motion.div>
                <span className="text-xs font-bold text-[#00A3FF] uppercase tracking-[0.2em]">
                  AFTER — HANDY MES 도입 후
                </span>
              </div>

              <motion.ul
                className="relative z-10 space-y-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 1.0
                    }
                  }
                }}
              >
                {[
                  { text: "24시간 어디서나 실시간 모바일 모니터링", highlights: ["24시간"] },
                  { text: "클릭 한 번으로 끝나는 체계적 작업 지시", highlights: ["체계적"] },
                  { text: "현장에서 즉시 등록하는 누락 없는 실적 관리", highlights: ["누락 없는"] },
                  { text: "인사이트를 제공하는 지능형 통계 대시보드", highlights: ["지능형"] },
                  { text: "이상 징후 즉시 대응하는 초고속 스마트 알림", highlights: ["초고속"] },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex items-start gap-4 text-base text-[#e8e8e8] leading-relaxed font-medium hover:translate-x-1 transition-transform duration-300"
                  >
                    <Check className="w-4 h-4 text-[#00A3FF] shrink-0 mt-1" />
                    <span>
                      {item.text.split(new RegExp(`(${item.highlights.join('|')})`, 'g')).map((part, j) => (
                        item.highlights.includes(part) ? (
                          <span key={j} className="text-[#00A3FF] font-bold" style={{ textShadow: "0 0 10px rgba(0, 163, 255, 0.4)" }}>
                            {part}
                          </span>
                        ) : (part)
                      ))}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Ambient Glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#00A3FF]/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#00A3FF]/15 transition-colors duration-700" />
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
}
