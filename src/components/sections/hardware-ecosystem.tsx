"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Wifi, Zap, Activity, Network, ChevronDown, Signal, Cpu, ChevronRight, Gauge } from "lucide-react";
import Image from "next/image";

// ── Data ────────────────────────────────────────────────────────────────────
const devices = [
  {
    id: "shap-1000",
    name: "SHAP-1000",
    tagline: "NETWORK HUB",
    badge: "Wireless Relay",
    image: "/images/hardware/shap-1000.png",
    color: "#00A3FF",
    statusColor: "#3b82f6",
    glow: "rgba(0, 163, 255, 0.6)",
    description: "공장 환경 내 다수의 무선 단말기를 통합 관리합니다. 현장의 데이터를 수집 컴퓨터로 전달하고 제어 메시지를 실시간 중계하는 안정적인 네트워크 인프라 역할을 수행합니다.",
    specs: ["1:N 무선 네트워크 구축", "양방향 데이터 릴레이", "실시간 서버 동기화"],
    icon: Network,
    ports: [
      { name: "무선 네트워크", desc: "1:N 다중 무선 네트워크 구성 (다수의 WIT-1000 장치와 무선 연결망 구축)" },
      { name: "양방향 중계", desc: "서버-단말 간 데이터 릴레이 (WIT-1000의 취득 데이터 수신 및 서버 제어 메시지 전달)" },
      { name: "중계 자동화", desc: "무선 데이터 브릿지 (필드 단말 장치와 수집 컴퓨터 간의 끊김 없는 통신 경로 확보)" },
    ],
  },
  {
    id: "wit-1000",
    name: "WIT-1000",
    tagline: "DATA TERMINAL",
    badge: "Data Acquisition",
    image: "/images/hardware/wit-1000.png",
    color: "#00A3FF",
    statusColor: "#fb923c",
    glow: "rgba(0, 163, 255, 0.6)",
    description: "현장의 전기 신호를 수집하여 디지털 데이터로 변환합니다. 생산량 및 설비 상태 등 실시간 현황을 기록하여 관리자가 현장 밖에서도 편리하게 관리할 수 있도록 지원합니다.",
    specs: ["생산 수량 및 설비 상태 취득", "고속 설비 Cycle Time 측정", "RS-232 바코드/RFID 연동"],
    icon: Activity,
    ports: [
      { name: "생산 신호 취득", desc: "전기적 상태 값 포착 (생산완료 신호 인터페이스를 통한 실시간 수량 및 가동 상태 확인)" },
      { name: "시리얼 인터페이스", desc: "RS-232 포트 연동 (바코드 스캐너, RFID 리더 등 외부 장치 데이터 수신 지원)" },
      { name: "정밀 시간 측정", desc: "Cycle Time 및 카운팅 (생산 신호 간 시간 간격 측정 및 고속 타발 설비의 카운터 값 취득)" },
    ],
  },
  {
    id: "wizter-5100",
    name: "Wizter-5100",
    tagline: "INTELLIGENT SENSING",
    badge: "Intelligent Node",
    image: "/images/hardware/wizter-5100.png",
    color: "#00A3FF",
    statusColor: "#10b981",
    glow: "rgba(0, 163, 255, 0.6)",
    description: "0.001초 단위의 인터럽트 기술로 설비의 상태 변화를 포착합니다. 센서의 물리적 신호를 실시간 데이터화하여 설비의 상태값과 이상 징후를 지연 없이 서버로 전송합니다.",
    highlights: ["CPU 인터럽트", "실시간"],
    specs: ["CPU 인터럽트 기반 즉시 인지", "상태값 및 누적 Count 전송", "디지털/아날로그 센서 통합 수집"],
    icon: Gauge,
    ports: [
      { name: "실시간 변화 인지", desc: "CPU 내부 인터럽트 활용 (센서의 미세한 변화를 지연 없이 즉각적으로 인지하고 KST 적용)" },
      { name: "상태 값 전송", desc: "디지털/아날로그 모니터링 (연결된 센서의 현재 On/Off 상태 및 실시간 변화값 전송)" },
      { name: "누적 카운팅", desc: "상태 변화 횟수 합산 (상태가 변화된 횟수를 누적 합산하여 정확한 Count 데이터 제공)" },
    ],
  },
];

// ── Background Components ──────────────────────────────────────────────────

function WaveformBg() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 400C100 350 200 450 300 400C400 350 500 450 600 400C700 350 800 450 900 400C1000 350 1100 450 1200 400C1300 350 1440 400 1440 400" stroke="#00A3FF" strokeWidth="1" strokeDasharray="5 5" />
        <path d="M0 450C120 400 240 500 360 450C480 400 600 500 720 450C840 400 960 500 1080 450C1200 400 1320 500 1440 450" stroke="#00A3FF" strokeWidth="0.5" opacity="0.3" />
      </svg>
    </div>
  );
}

function DataStreamBg() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dot Matrix Grid */}
      <div className="absolute inset-0 grid-bg opacity-15" />

      {/* Bit Particles */}
      {mounted && Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00A3FF]/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function AmbientGlow() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#1a1a2e]/20 rounded-full blur-[140px]" />
      <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[50%] h-[50%] bg-[#00A3FF]/5 rounded-full blur-[120px]" />
    </div>
  );
}

function SectionBoundary() {
  return (
    <div className="absolute top-0 left-0 w-full flex flex-col items-center">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="connected-line"
      />
    </div>
  );
}

// ── Device Visual ────────────────────────────────────────────────────────────

function DeviceVisual({ device, isHovered }: { device: typeof devices[0]; isHovered: boolean }) {
  return (
    <div className="relative w-full h-64 mb-10 flex items-center justify-center">
      {/* Subdued Halo Effect */}
      <motion.div
        className="absolute w-48 h-48 rounded-full blur-[60px] z-0"
        style={{
          background: `radial-gradient(circle, #00A3FF15 0%, transparent 70%)`
        }}
        animate={{
          opacity: isHovered ? 0.6 : 0.3,
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Static Device Image */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="relative w-44 h-44 sm:w-48 sm:h-48">
          <Image
            src={device.image}
            alt={device.name}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-110"
            priority
          />
        </div>
      </div>
    </div>
  );
}

// ── Single Card ──────────────────────────────────────────────────────────────

function HardwareCard({ device, index }: { device: typeof devices[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Card Content */}
      <div
        className={`relative flex flex-col min-h-[750px] p-8 lg:p-10 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden border backdrop-blur-md glass hover-glow-cyan ${isExpanded
          ? "bg-[#16171D]/90 border-[#00A3FF]/40 shadow-[0_32px_64px_rgba(0,163,255,0.2)]"
          : "bg-[#16171D]/40 border-white/[0.08] hover:border-[#00A3FF]/40 hover:bg-[#16171D]/60"
          }`}
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          boxShadow: isHovered && !isExpanded
            ? `0 20px 40px rgba(0,0,0,0.4)`
            : undefined,
        }}
      >
        {/* Title */}
        <div className="mb-2">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tighter uppercase whitespace-nowrap">{device.name}</h3>
        </div>
        <p className="text-sm text-white/40 mb-10 font-bold uppercase tracking-widest">{device.tagline}</p>

        {/* Visual Area */}
        <DeviceVisual device={device} isHovered={isHovered} />

        {/* Description & Specs */}
        <div className="flex-grow flex flex-col">
          <div className="min-h-[100px] mb-8">
            <p className="text-[17px] text-white/70 font-medium leading-[1.7]">
              {device.description}
            </p>
          </div>

          <ul className="space-y-3 mb-10">
            {device.specs.map((spec, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-white/80 font-bold tracking-tight">
                <ChevronRight className="w-3 h-3 text-[#00A3FF]" />
                {spec}
              </li>
            ))}
          </ul>

          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between text-xs uppercase tracking-[0.2em] font-extrabold cursor-pointer group/spec"
          >
            <div className="flex items-center gap-3">
              <span className="text-[#00A3FF]">Engineering Specs</span>
              <span className="text-white/20 tracking-normal font-medium normal-case transition-colors group-hover/spec:text-white/40">Actual Device Data</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-[#00A3FF] transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`} />
          </div>
        </div>

        {/* Expansion Layer (Ports) */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="mt-6 space-y-4"
            >
              {device.ports.map((port, i) => (
                <div key={i} className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
                  <p className="text-[13px] font-bold text-white uppercase mb-1.5 tracking-wider">{port.name}</p>
                  <p className="text-[13px] text-white/50 leading-relaxed font-medium">{port.desc}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ── Main Section ─────────────────────────────────────────────────────────────

export function HardwareEcosystem() {
  const containerRef = useRef(null);

  return (
    <section
      id="hardware-ecosystem"
      ref={containerRef}
      className="relative py-32 lg:py-52 bg-[#0B0C10] overflow-hidden"
    >
      <SectionBoundary />

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00A3FF]/[0.02] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-[#3b82f6] tracking-[0.2em] uppercase mb-5"
          >
            Hardware System
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold tracking-tighter mb-6"
          >
            <span className="text-[#e8e8e8]">현장의 본질을 </span>
            <span className="gradient-text">왜곡 없이 전달하는 기술</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[#666666] max-w-3xl mx-auto text-[15px] mb-10 leading-relaxed"
          >
            화려한 수식어보다 현장의 진실된 데이터를 담는 데 집중했습니다. <br className="hidden md:block" />
            Handy MES의 하드웨어는 보이지 않는 공정의 틈 사이에서 묵묵히 신호를 읽어내며, <br className="hidden md:block" />
            단 하나의 누락 없이 경영을 뒷받침할 명확한 근거를 제시합니다.
          </motion.p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 items-start">
          {devices.map((device, i) => (
            <HardwareCard key={device.id} device={device} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
