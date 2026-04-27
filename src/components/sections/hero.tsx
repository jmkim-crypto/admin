"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Activity,
  Cpu,
  Gauge,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { DemoDialog } from "@/components/demo-dialog";
import {
  DashboardScreen,
  TaskListScreen,
  TaskDetailScreen,
  ManagementScreen,
  SettingsScreen,

} from "./mobile-screens";

function LambdaA({ children }: { children: string }) {
  return (
    <span className="relative inline-block">
      {children}
      {/* Visual mask to hide the horizontal bar of 'A' */}
      <span className="absolute inset-x-0 top-[55%] h-[12%] bg-[#0B0C10] z-10" />
    </span>
  );
}

function HeroMobileShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    { label: "대시보드", sub: "Dashboard", Component: DashboardScreen },
    { label: "작업지시 조회", sub: "Task List", Component: TaskListScreen },
    { label: "작업 상세", sub: "Task Detail", Component: TaskDetailScreen },
    { label: "관리", sub: "Management", Component: ManagementScreen },
    { label: "설정", sub: "Settings", Component: SettingsScreen },
  ];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5초로 미세 조정
    return () => clearInterval(timer);
  }, [activeSlide, slides.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-lg mx-auto mt-24 flex flex-col items-center"
    >
      {/* Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00A3FF]/20 blur-[120px] rounded-full" />
      </div>

      {/* Floating Particles */}
      {mounted && [...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#00A3FF]"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${-20 + Math.random() * 140}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.5, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Phone Mockup Frame */}
      <div className="relative p-[8px] bg-gradient-to-b from-[#2a2a2e] to-[#1a1a1e] rounded-[42px] shadow-[0_40px_100px_rgba(0,0,0,0.8),0_0_50px_rgba(0,163,255,0.15)]">
        {/* Inner bezel */}
        <div className="relative w-[240px] sm:w-[280px] rounded-[36px] overflow-hidden bg-white shadow-inner" style={{ aspectRatio: "9/19.5" }}>
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30" />

          <AnimatePresence mode="wait">
            {slides.map((slide, idx) =>
              idx === activeSlide ? (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <slide.Component />
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex items-center gap-4 mt-12">
        {slides.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className="group relative flex flex-col items-center"
          >
            <motion.div
              className="w-2.5 h-2.5 rounded-full"
              animate={{
                scale: idx === activeSlide ? 1.2 : 1,
                backgroundColor: idx === activeSlide ? "#00A3FF" : "rgba(255,255,255,0.15)",
                boxShadow: idx === activeSlide ? "0 0 15px #00A3FF" : "none",
              }}
            />
            <span className={`text-[8px] mt-2 font-bold uppercase tracking-widest transition-colors duration-300 ${idx === activeSlide ? "text-[#00A3FF]" : "text-white/20"}`}>
              {slide.sub}
            </span>
          </button>
        ))}
      </div>

      {/* Reflection / bottom fade */}
      <div className="absolute -bottom-20 left-10 right-10 h-32 bg-gradient-to-t from-[#0B0C10] to-transparent opacity-80 blur-2xl pointer-events-none" />
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-40 bg-[#0B0C10]">
      {/* Brand Grid Background */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />

      {/* Master Brand Lighting — Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[900px] ambient-center pointer-events-none" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-[#00A3FF]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10">
        {/* Hero text block */}
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-sm bg-[#00A3FF]/5 border border-[#00A3FF]/10 text-[10px] text-[#00A3FF] mb-12 font-bold uppercase tracking-[0.4em]"
          >
            <Activity className="w-4 h-4" />
            Factory Synchronization
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2] mb-8"
          >
            <span className="text-white/30">내 손 안의 생산관리 시스템</span>
            <br />
            <span className="gradient-text">Handy MES</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-2xl font-bold tracking-tight text-[#d1d5db]/70 max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            투자가 아닌{" "}
            <span
              className="text-[#00A3FF]"
              style={{ textShadow: "0 0 8px rgba(0, 163, 255, 0.4)" }}
            >
              성장
            </span>
            에 집중할 수 있도록,
            <br className="hidden sm:block" />
            비용의 패러다임을 바꿉니다.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <DemoDialog>
              <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold bg-[#00A3FF] text-white rounded-sm hover:bg-[#0082cc] transition-all duration-300 shadow-[0_0_25px_rgba(0,163,255,0.3)] hover:shadow-[0_0_45px_rgba(0,163,255,0.6)] hover:-translate-y-1 w-full sm:w-auto uppercase tracking-widest">
                시작하기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </DemoDialog>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold bg-white/[0.03] text-white/80 rounded-sm border border-white/[0.08] hover:bg-white/[0.06] hover:border-[#00A3FF]/40 transition-all duration-300 w-full sm:w-auto uppercase tracking-widest"
            >
              요금제 안내
              <ArrowRight className="w-5 h-5 text-white/20" />
            </Link>
          </motion.div>

        </div>

        {/* Mobile App showcase */}
        <HeroMobileShowcase />
      </div>
    </section>
  );
}
