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
    <section ref={ref} className="relative py-28 lg:py-40 overflow-hidden bg-white">
      {/* Ambient glow — subtle wide cyan radial */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#00A3FF]/3 rounded-full blur-[160px] -translate-y-1/2 pointer-events-none" />

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
            <span className="text-[#1E293B]">정직한 기술로</span>
            <br />
            <span className="text-[#1E293B]">현장의 가치를 증명합니다</span>
          </h2>
          <p className="text-[#475569] max-w-xl mx-auto text-lg leading-relaxed">
            비싼 비용과 긴 구축 기간이라는 기존 MES의 한계를 넘어, <br />
            데이터 기반의 실무 중심 관리를 제안합니다.
          </p>
        </motion.div>

        {/* Value cards — soft shadow + hover float */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
              className="group relative"
            >
              <div
                className="relative h-full flex flex-col rounded-2xl p-7 lg:p-8 overflow-hidden transition-all duration-300 ease-out bg-white border border-[#F1F5F9] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_25px_-5px_rgba(0,163,255,0.1)] group-hover:border-[#00A3FF]/30 group-hover:-translate-y-1"
              >
                {/* Radial glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0, 163, 255, 0.05), transparent 70%)`,
                  }}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110 bg-[#00A3FF]/8 border border-[#00A3FF]/15"
                  >
                    <value.icon
                      className="w-6 h-6 text-[#00A3FF]"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Tag */}
                  <span
                    className="inline-block text-[10px] font-black tracking-[0.2em] uppercase mb-4 px-2.5 py-1 rounded-sm bg-[#00A3FF]/8 text-[#00A3FF]"
                  >
                    {value.tag}
                  </span>

                  <h3 className="text-xl font-bold text-[#1E293B] mb-4 tracking-tight">
                    {value.title}
                  </h3>

                  <p className="text-[15px] text-[#475569] leading-[1.8] mb-8 group-hover:text-[#64748B] transition-colors duration-300">
                    {value.description}
                  </p>

                  {/* Footer */}
                  <div className="pt-6 border-t border-[#F1F5F9]">
                    <div className="flex flex-col gap-1.5">
                      {value.microCopy && (
                        <span className="text-[10px] text-[#64748B] font-medium">
                          {value.microCopy}
                        </span>
                      )}
                      <span className="text-[15px] font-bold text-[#1E293B] tracking-tight">
                        {/* Highlight key values — bold cyan */}
                        {value.footerHighlight.split(' ').map((word, idx) => {
                          const isHighlighted = /^[0-9/]+/.test(word) || word.includes('제로') || word.includes('24시간') || word.includes('즉시');
                          return (
                            <span
                              key={idx}
                              className={isHighlighted ? "text-[#00A3FF] font-bold" : ""}
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

        {/* Before / After — Section Header */}
        <div className="mt-20 lg:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold text-[#00A3FF] tracking-[0.2em] uppercase mb-4">Transformation</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E293B] tracking-tight">
              도입 전후, 현장이 달라집니다
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 relative">
            {/* Center Divider Arrow (Desktop only) */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-12 h-12 rounded-full bg-white border border-[#E2E8F0] shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-[#00A3FF]" />
              </div>
            </div>

            {/* Before — White card with red left-accent */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden bg-white border border-[#F1F5F9] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] group hover:shadow-[0_20px_25px_-5px_rgba(239,68,68,0.06)] hover:border-[#FECACA]/60 transition-all duration-300"
            >
              {/* Left color accent stripe */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#FCA5A5] via-[#EF4444]/40 to-[#FCA5A5]/20" />

              <div className="p-8 lg:p-10 pl-10 lg:pl-12">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-[#FEF2F2] flex items-center justify-center border border-[#FECACA]/30">
                    <XCircle className="w-4 h-4 text-[#EF4444]/70" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#EF4444]/60 uppercase tracking-[0.2em] block">
                      BEFORE
                    </span>
                    <span className="text-[13px] font-semibold text-[#475569]">
                      기존 수동 관리
                    </span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {[
                    "현장에 직접 가야만 확인 가능한 설비 상태",
                    "구두 지시와 종이 서류로 인한 정보 누락 및 혼선",
                    "작업 종료 후 뒤늦게 수기 입력하는 불확실한 실적",
                    "엑셀 수식과 씨름하는 시간 소모적 통계 작업",
                    "사고 발생 후 한참 뒤에야 인지되는 현장 상황",
                  ].map((item, idx) => (
                    <li key={item} className="flex items-start gap-3.5 group/item">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-[#FEF2F2] border border-[#FECACA]/30 flex items-center justify-center mt-0.5">
                        <X className="w-3 h-3 text-[#EF4444]/50" />
                      </span>
                      <span className="text-[15px] text-[#64748B] leading-[1.8] font-medium group-hover/item:text-[#475569] transition-colors duration-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* After — White card with cyan left-accent */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden bg-white border border-[#F1F5F9] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] group hover:shadow-[0_20px_25px_-5px_rgba(0,163,255,0.08)] hover:border-[#00A3FF]/20 transition-all duration-300"
            >
              {/* Left color accent stripe */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#7DD3FC] via-[#00A3FF] to-[#7DD3FC]/40" />

              <div className="p-8 lg:p-10 pl-10 lg:pl-12">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-[#F0F9FF] flex items-center justify-center border border-[#00A3FF]/15">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00A3FF]" />
                    </motion.div>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#00A3FF] uppercase tracking-[0.2em] block">
                      AFTER
                    </span>
                    <span className="text-[13px] font-semibold text-[#475569]">
                      Handy MES 도입 후
                    </span>
                  </div>
                </div>

                <motion.ul
                  className="space-y-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.12,
                        delayChildren: 0.6
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
                        hidden: { opacity: 0, x: 16 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="flex items-start gap-3.5 group/item hover:translate-x-1 transition-transform duration-200"
                    >
                      <span className="shrink-0 w-5 h-5 rounded-full bg-[#F0F9FF] border border-[#00A3FF]/15 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-[#00A3FF]" />
                      </span>
                      <span className="text-[15px] text-[#1E293B] leading-[1.8] font-medium">
                        {item.text.split(new RegExp(`(${item.highlights.join('|')})`, 'g')).map((part, j) => (
                          item.highlights.includes(part) ? (
                            <span key={j} className="text-[#00A3FF] font-bold">
                              {part}
                            </span>
                          ) : (part)
                        ))}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
}
