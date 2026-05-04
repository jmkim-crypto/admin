"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronRight, ChevronDown, Gauge, Cpu, Radio, BarChart3 } from "lucide-react";
import Image from "next/image";

/* -- Device Data ---------------------------------------------------------- */
const device = {
  name: "WIZTER-5100",
  tagline: "INTELLIGENT SENSING",
  image: "/images/hardware/wizter-5100.png",
  description:
    "0.001초 단위의 인터럽트 기술로 설비의 상태 변화를 포착합니다. 센서의 물리적 신호를 실시간 데이터화하여 설비의 상태값과 이상 징후를 지연 없이 서버로 전송합니다.",
  highlights: [
    "CPU 인터럽트 기반 즉시 인지",
    "상태값 및 누적 Count 전송",
    "디지털/아날로그 센서 통합 수집",
  ],
};

const specCards = [
  {
    icon: Cpu,
    title: "실시간 변화 인지",
    subtitle: "CPU Interrupt Detection",
    desc: "CPU 내부 인터럽트를 활용하여 센서의 미세한 변화를 지연 없이 즉각적으로 인지하고 KST를 적용합니다.",
    detail: "응답 속도 0.001초 이하",
  },
  {
    icon: Radio,
    title: "상태 값 전송",
    subtitle: "Digital / Analog Monitoring",
    desc: "연결된 센서의 현재 On/Off 상태 및 실시간 변화값을 디지털·아날로그 동시에 모니터링하여 전송합니다.",
    detail: "디지털 + 아날로그 동시 지원",
  },
  {
    icon: BarChart3,
    title: "누적 카운팅",
    subtitle: "Accumulated Count Data",
    desc: "상태가 변화된 횟수를 누적 합산하여 정확한 Count 데이터를 제공하고, 생산 실적의 근거를 확보합니다.",
    detail: "누적 오차 0건 보장",
  },
];

/* -- Spec Card Component -------------------------------------------------- */
function SpecCard({ spec, index }: { spec: (typeof specCards)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.12 }}
    >
      <div
        className={`group relative p-8 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
          isOpen
            ? "bg-white border-[#0078D4]/25 shadow-[0_20px_25px_-5px_rgba(0,120,212,0.08)]"
            : "bg-white border-[#E5E7EB] hover:border-[#0078D4]/25 hover:shadow-[0_20px_25px_-5px_rgba(0,120,212,0.06)] hover:-translate-y-1"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-[#0078D4]/[0.08] flex items-center justify-center mb-6 group-hover:bg-[#0078D4]/[0.12] transition-colors duration-300">
          <spec.icon className="w-5 h-5 text-[#0078D4]" />
        </div>

        {/* Title */}
        <h4 className="text-lg font-bold text-[#111827] mb-1 tracking-tight">{spec.title}</h4>
        <p className="text-xs text-[#0078D4] font-semibold uppercase tracking-[0.1em] mb-4">
          {spec.subtitle}
        </p>

        {/* Description */}
        <p className="text-[15px] text-[#4B5563] leading-[1.8] mb-6">{spec.desc}</p>

        {/* Expand Toggle */}
        <div className="flex items-center justify-between pt-4 border-t border-[#F3F4F6]">
          <span className="text-xs font-bold text-[#0078D4] uppercase tracking-[0.15em]">
            Detail Spec
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#0078D4] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>

        {/* Expanded Detail */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-5 mt-1">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 mb-1">
                    <Gauge className="w-3.5 h-3.5 text-[#0078D4]" />
                    <span className="text-xs font-bold text-[#0078D4] uppercase tracking-wider">
                      Performance
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#111827]">{spec.detail}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* -- Floating Particles (hydration safe) ---------------------------------- */
function FloatingParticles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#0078D4]/20 rounded-full"
          style={{
            left: `${10 + (i * 11.5) % 80}%`,
            top: `${15 + (i * 13.7) % 70}%`,
          }}
          animate={{
            y: [-15, 15],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}

/* -- Main Section --------------------------------------------------------- */
export function HardwareEcosystem() {
  return (
    <section
      id="hardware-ecosystem"
      className="relative py-32 lg:py-48 bg-[#F5F5F5] overflow-hidden"
    >
      {/* Section Top Border */}
      <div className="absolute top-0 left-0 w-full flex flex-col items-center">
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="connected-line"
        />
      </div>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0078D4]/[0.015] blur-[160px]" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>
      <FloatingParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* ── Section Header ────────────────────────────────── */}
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-[#0078D4] tracking-[0.2em] uppercase mb-5"
          >
            Hardware System
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8"
          >
            <span className="text-[#111827]">현장의 본질을 </span>
            <span className="text-[#111827]">왜곡 없이 전달하는 하드웨어</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[#4B5563] max-w-3xl mx-auto text-lg leading-[1.8]"
          >
            화려한 수식어보다 현장의 진실된 데이터를 담는 데 집중했습니다.{" "}
            <br className="hidden md:block" />
            Handy MES의 하드웨어는 보이지 않는 공정의 틈 사이에서 묵묵히 신호를 읽어내며,{" "}
            <br className="hidden md:block" />
            단 하나의 누락 없이 경영을 뒷받침할 명확한 근거를 제시합니다.
          </motion.p>
        </div>

        {/* ── Product Showcase (Split Hero) ──────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative mb-20"
        >
          <div className="relative rounded-3xl bg-white border border-[#E5E7EB] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Product Info */}
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0078D4]/[0.08] mb-8 w-fit">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                  <span className="text-xs font-semibold text-[#0078D4] uppercase tracking-wider">
                    Intelligent Node
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#111827] tracking-tight mb-2">
                  {device.name}
                </h3>
                <p className="text-sm text-[#6B7280] font-bold uppercase tracking-[0.2em] mb-8">
                  {device.tagline}
                </p>

                {/* Description */}
                <p className="text-[17px] text-[#4B5563] leading-[1.9] mb-10 max-w-lg">
                  {device.description}
                </p>

                {/* Highlight List */}
                <ul className="space-y-4">
                  {device.highlights.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-lg bg-[#0078D4]/[0.08] flex items-center justify-center flex-shrink-0">
                        <ChevronRight className="w-3.5 h-3.5 text-[#0078D4]" />
                      </div>
                      <span className="text-[15px] text-[#111827] font-semibold tracking-tight">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Product Image */}
              <div className="relative flex items-center justify-center p-10 lg:p-16 min-h-[400px] lg:min-h-[560px]">
                {/* Subtle radial glow behind device */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-[#0078D4]/[0.04] rounded-full blur-[100px]" />

                {/* Fine dot pattern */}
                <div className="absolute inset-0 grid-bg opacity-15 rounded-r-3xl" />

                {/* Device Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="relative z-10 w-48 h-64 sm:w-56 sm:h-72 lg:w-64 lg:h-80"
                >
                  <Image
                    src={device.image}
                    alt={device.name}
                    fill
                    className="object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.10)]"
                    priority
                  />
                </motion.div>

                {/* Floating data annotations */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute top-[18%] right-[8%] lg:right-[10%] px-4 py-2.5 rounded-xl bg-white/90 backdrop-blur-sm border border-[#E5E7EB] shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                    <span className="text-xs font-bold text-[#111827]">0.001s</span>
                  </div>
                  <p className="text-[10px] text-[#6B7280] mt-0.5">Response Time</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-[22%] left-[5%] lg:left-[8%] px-4 py-2.5 rounded-xl bg-white/90 backdrop-blur-sm border border-[#E5E7EB] shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#0078D4] animate-pulse" />
                    <span className="text-xs font-bold text-[#111827]">CPU IRQ</span>
                  </div>
                  <p className="text-[10px] text-[#6B7280] mt-0.5">Interrupt Driven</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Engineering Specs Grid ─────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {specCards.map((spec, i) => (
            <SpecCard key={i} spec={spec} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
