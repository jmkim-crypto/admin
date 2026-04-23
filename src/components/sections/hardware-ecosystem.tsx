"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Wifi, Zap, Activity, Network, ChevronDown, Signal, Cpu, ChevronRight } from "lucide-react";
import Image from "next/image";

// ── Data ────────────────────────────────────────────────────────────────────
const devices = [
  {
    id: "shap-1000",
    name: "SHAP-1000",
    tagline: "Wireless Relay",
    badge: "Data Acquisition",
    image: "/images/hardware/shap-1000.png",
    color: "#00A3FF", // Brand Electric Cyan
    statusColor: "#3b82f6",
    glow: "rgba(0, 163, 255, 0.6)",
    description: "산업용 무선 데이터 수집 장치. PLC/센서 신호를 실시간으로 클라우드로 전송합니다.",
    specs: ["저전력 설계", "Wi-Fi 6 지원", "실시간 전송", "ARM Cortex-M7"],
    ports: [
      { name: "RS-232/485", desc: "시리얼 통신 × 2포트" },
      { name: "LAN", desc: "RJ45 기가비트 이더넷" },
      { name: "DI/DO", desc: "디지털 입출력 × 8채널" },
    ],
  },
  {
    id: "wit-1000",
    name: "WIT-1000",
    tagline: "IoT Gateway",
    badge: "Edge Computing",
    image: "/images/hardware/wit-1000.png",
    color: "#00A3FF", // Brand Electric Cyan
    statusColor: "#fb923c", // Original orange as status only
    glow: "rgba(0, 163, 255, 0.6)",
    description: "멀티 프로토콜 IoT 게이트웨이. OPC-UA, Modbus, MQTT를 동시에 처리합니다.",
    specs: ["OPC-UA 지원", "500+ 태그 처리", "이중화 네트워크", "엣지 AI 내장"],
    ports: [
      { name: "OPC-UA", desc: "산업용 표준 프로토콜" },
      { name: "Modbus TCP", desc: "레거시 PLC 연동" },
      { name: "MQTT", desc: "클라우드 브로커 연결" },
    ],
  },
  {
    id: "wizter-5100",
    name: "Wizter-5100",
    tagline: "Smart Sensor Hub",
    badge: "Predictive",
    image: "/images/hardware/wizter-5100.png",
    color: "#00A3FF", // Brand Electric Cyan
    statusColor: "#10b981", // Original green as status only
    glow: "rgba(0, 163, 255, 0.6)",
    description: "통합 스마트 센서 허브. 진동·온도·전류를 단일 장치로 동시 모니터링합니다.",
    specs: ["3-in-1 센서", "1kHz 샘플링", "무선 메쉬망", "이상 감지 AI"],
    ports: [
      { name: "진동 센서", desc: "3축 MEMS 가속도계" },
      { name: "온도 센서", desc: "PT100 RTD 지원" },
      { name: "전류 센서", desc: "CT 클램프 인터페이스" },
    ],
  },
];

// ── Background Components ──────────────────────────────────────────────────

function DataStreamBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dot Matrix Grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Vertical Data Stream Lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 w-px bg-gradient-to-b from-transparent via-[#00A3FF]/10 to-transparent"
          style={{
            left: `${(i / 8) * 100}%`,
            height: "100%",
          }}
          animate={{
            opacity: [0.01, 0.05, 0.01],
            y: ["-100%", "100%"],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}

function AmbientGlow() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#1a1a2e]/30 rounded-full blur-[140px]" />
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
      {/* Halo Effect Around Hardware (Cyan) */}
      <motion.div
        className="absolute w-56 h-56 rounded-full blur-[70px] z-0"
        style={{
          background: `radial-gradient(circle, #00A3FF33 0%, transparent 70%)`
        }}
        animate={{
          scale: isHovered ? 1.4 : 1.1,
          opacity: isHovered ? 0.9 : 0.5,
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Base Cyan Shadow */}
      <motion.div
        className="absolute w-40 h-10 bottom-12 rounded-full blur-[35px] z-0"
        style={{ background: "#00A3FF" }}
        animate={{
          scale: isHovered ? 1.3 : 1,
          opacity: isHovered ? 0.3 : 0.15,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Floating Device Image */}
      <motion.div
        className="relative z-10 w-full h-full flex items-center justify-center"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative w-48 h-48 sm:w-56 sm:h-56">
          <Image
            src={device.image}
            alt={device.name}
            fill
            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            priority
          />

        </div>
      </motion.div>
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
        className="relative flex flex-col p-8 rounded-2xl transition-all duration-700 cursor-pointer overflow-hidden border border-white/5 bg-[#16171D]/50 backdrop-blur-xl"
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          boxShadow: isHovered
            ? `0 30px 60px rgba(0,0,0,0.6), 0 0 0 1px #00A3FF30`
            : "0 15px 40px rgba(0,0,0,0.3)",
        }}
      >
        {/* Title & Badge */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-extrabold text-white tracking-tighter uppercase">{device.name}</h3>
          <span
            className="px-3 py-1 rounded-sm text-[10px] font-extrabold uppercase tracking-[0.2em] bg-[#00A3FF]/10 text-[#00A3FF] border border-[#00A3FF]/20"
          >
            {device.badge}
          </span>
        </div>
        <p className="text-sm text-white/40 mb-10 font-bold uppercase tracking-widest">{device.tagline}</p>

        {/* Visual Area */}
        <DeviceVisual device={device} isHovered={isHovered} />

        {/* Description & Specs */}
        <div>
          <p className="text-[17px] text-white/70 mb-8 font-medium leading-relaxed">
            {device.description}
          </p>

          <ul className="space-y-3 mb-10">
            {device.specs.map((spec, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-white/80 font-bold tracking-tight">
                <ChevronRight className="w-3 h-3 text-[#00A3FF]" />
                {spec}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between text-[11px] text-[#00A3FF] uppercase tracking-[0.3em] font-extrabold border-t border-white/5 pt-6">
            <span>Engineering Specs</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`} />
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
                  <p className="text-[11px] font-extrabold text-white uppercase mb-1 tracking-widest">{port.name}</p>
                  <p className="text-[11px] text-white/40 leading-snug">{port.desc}</p>
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
      <DataStreamBg />
      <AmbientGlow />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-sm bg-[#00A3FF]/10 border border-[#00A3FF]/20 mb-8"
          >
            <p className="text-[11px] font-extrabold uppercase tracking-[0.4em] text-[#00A3FF]">
              Hardware system
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl lg:text-7xl font-extrabold text-white mb-8 tracking-tighter"
          >
            현장을 연결하는 <span className="text-[#00A3FF]">물리적 엔진</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white/50 max-w-3xl mx-auto text-xl font-light leading-relaxed"
          >
            실시간 데이터 수집과 안정적인 전송을 위한 전용 하드웨어 라인업.
            현장의 모든 신호를 스마트 소프트웨어와 하나로 결합합니다.
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
