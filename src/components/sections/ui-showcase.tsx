"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Activity, ArrowRight, MonitorSmartphone
} from "lucide-react";
import {
  DashboardScreen, TaskListScreen, ManagementScreen,
  SettingsScreen, TaskDetailScreen,
} from "./mobile-screens";

/* ── Carousel Screen Data ─────────────────────────────────────────────── */
const carouselSlides = [
  { label: "대시보드", sub: "Dashboard", Component: DashboardScreen },
  { label: "작업지시 조회", sub: "Task List", Component: TaskListScreen },
  { label: "관리", sub: "Management", Component: ManagementScreen },
  { label: "설정", sub: "Settings", Component: SettingsScreen },
  { label: "작업 상세", sub: "Task Detail", Component: TaskDetailScreen },
];

/* ── Background: Grid + Glow ──────────────────────────────────────────── */
function ShowcaseBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Ultra-thin grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Deep purple ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-[#1a1a2e]/30 rounded-full blur-[160px]" />
      {/* Cyan top glow */}
      <div className="absolute -top-[5%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-[#00A3FF]/5 rounded-full blur-[120px]" />
    </div>
  );
}

/* ── Glowing Fiber Lines (from edges to showcase) ─────────────────────── */
function FiberLines() {
  const lines = [
    { x1: "5%", y1: "30%", x2: "35%", y2: "50%", delay: 0 },
    { x1: "8%", y1: "60%", x2: "35%", y2: "55%", delay: 0.8 },
    { x1: "95%", y1: "25%", x2: "70%", y2: "45%", delay: 0.4 },
    { x1: "92%", y1: "70%", x2: "70%", y2: "55%", delay: 1.2 },
    { x1: "50%", y1: "5%", x2: "50%", y2: "25%", delay: 0.6 },
  ];

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
      <defs>
        <linearGradient id="fiber-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00A3FF" stopOpacity="0" />
          <stop offset="50%" stopColor="#00A3FF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#00A3FF" stopOpacity="0" />
        </linearGradient>
        <filter id="fiber-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {lines.map((l, i) => (
        <motion.line
          key={i}
          x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
          stroke="url(#fiber-grad)"
          strokeWidth="1"
          filter="url(#fiber-glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: l.delay, ease: "easeOut" }}
        />
      ))}
    </svg>
  );
}



/* ── iPhone Mockup with Carousel ──────────────────────────────────────── */
function MobileShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeSlide, carouselSlides.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center"
    >
      {/* Title */}
      <h3 className="text-xl lg:text-2xl font-extrabold text-white mb-2 tracking-tight text-center w-full">
        Handy MES <span className="text-[#00A3FF]">Mobile App</span>
      </h3>
      <p className="text-[11px] text-white/40 font-bold uppercase tracking-[0.3em] mb-8 text-center">
        Real-time Factory Floor Control
      </p>

      {/* Phone + Hand Container */}
      <div className="relative">
        {/* Cyan glow behind phone */}
        <motion.div
          className="absolute -inset-8 bg-[#00A3FF]/10 rounded-full blur-[60px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating cyan particles */}
        {mounted && [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#00A3FF]"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${-10 + Math.random() * 120}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        {/* iPhone Frame */}
        <div
          className="relative z-10 w-[220px] lg:w-[260px] rounded-[32px] p-[6px] bg-gradient-to-b from-[#2a2a2e] to-[#1a1a1e] shadow-[0_30px_80px_rgba(0,0,0,0.8),0_0_40px_rgba(0,163,255,0.15)]"
          style={{ transform: "perspective(1000px) rotateY(-3deg) rotateX(2deg)" }}
        >
          {/* Inner bezel */}
          <div className="relative rounded-[26px] overflow-hidden bg-white">
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[60px] h-[16px] bg-black rounded-full z-30" />

            {/* Screen Content (Carousel) */}
            <div className="relative w-full" style={{ aspectRatio: "9/19.5" }}>
              <AnimatePresence mode="wait">
                {carouselSlides.map((slide, idx) =>
                  idx === activeSlide ? (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <slide.Component />
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Hand SVG silhouette underneath */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[280px] lg:w-[320px] h-[80px] pointer-events-none" style={{ zIndex: 5 }}>
          <div
            className="w-full h-full rounded-b-[50%]"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.4) 0%, transparent 70%)",
            }}
          />
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex items-center gap-3 mt-10">
        {carouselSlides.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className="group relative flex flex-col items-center"
          >
            <motion.div
              className="w-2 h-2 rounded-full transition-all duration-300"
              animate={{
                scale: idx === activeSlide ? 1.3 : 1,
                backgroundColor: idx === activeSlide ? "#00A3FF" : "rgba(255,255,255,0.2)",
                boxShadow: idx === activeSlide ? "0 0 12px #00A3FF" : "none",
              }}
            />
            <span className={`text-[7px] mt-1.5 font-bold transition-all duration-300 ${idx === activeSlide ? "text-[#00A3FF]" : "text-white/20"}`}>
              {slide.sub}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Main Export ───────────────────────────────────────────────────────── */
export function UIShowcase() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      id="ui-showcase"
      ref={sectionRef}
      className="relative py-32 lg:py-44 bg-[#0B0C10] overflow-hidden"
    >
      <ShowcaseBg />
      <FiberLines />

      {/* Section boundary line */}
      <div className="absolute top-0 left-0 w-full flex flex-col items-center">
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="connected-line"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-sm bg-[#00A3FF]/10 border border-[#00A3FF]/20 mb-8"
          >
            <p className="text-[11px] font-extrabold uppercase tracking-[0.4em] text-[#00A3FF]">
              <MonitorSmartphone className="inline w-3.5 h-3.5 mr-2 -mt-0.5" />
              All-Encompassing UI
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tighter"
          >
            어디서든 <span className="text-[#00A3FF]">완벽한 제어</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white/50 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            데스크톱 관리자 대시보드부터 현장 작업자의 모바일 앱까지,
            하나의 시스템으로 공장 전체를 손끝에서 관리합니다.
          </motion.p>
        </div>

        {/* Mobile Showcase */}
        <div className="flex justify-center">
          <MobileShowcase />
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center mt-20"
        >
          <button
            className="group inline-flex items-center gap-4 px-10 py-5 text-lg font-extrabold bg-[#10b981] text-white rounded-sm hover:bg-[#0d9668] transition-all duration-300 uppercase tracking-widest hover:-translate-y-1"
            style={{
              boxShadow: "0 0 30px rgba(0,163,255,0.3), 0 10px 40px rgba(0,0,0,0.4)",
            }}
          >
            Start Handy MES
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center gap-6 px-8 py-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-[#00A3FF] shadow-[0_0_10px_#00A3FF]"
              />
              <span className="text-[11px] font-extrabold text-white/40 uppercase tracking-widest">Cross-Platform Synchronized</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <span className="text-[11px] text-white/20 font-bold uppercase tracking-widest">Desktop · Tablet · Mobile</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
