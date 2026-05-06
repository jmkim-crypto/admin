"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DemoDialog } from "@/components/demo-dialog";
import {
  DashboardScreen,
  TaskListScreen,
  TaskDetailScreen,
  ManagementScreen,
  SettingsScreen,
} from "./mobile-screens";

function HeroMobileShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    { label: "대시보드", Component: DashboardScreen },
    { label: "작업지시", Component: TaskListScreen },
    { label: "작업 상세", Component: TaskDetailScreen },
    { label: "관리", Component: ManagementScreen },
    { label: "설정", Component: SettingsScreen },
  ];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeSlide, slides.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-lg mx-auto mt-20 flex flex-col items-center"
    >
      {/* Phone Frame */}
      <div className="relative p-[6px] bg-[#1D1D1F] rounded-[40px] shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
        <div
          className="relative w-[240px] sm:w-[270px] rounded-[34px] overflow-hidden bg-white"
          style={{ aspectRatio: "9/19.5" }}
        >
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30" />
          <AnimatePresence mode="wait">
            {slides.map((slide, idx) =>
              idx === activeSlide ? (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <slide.Component />
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex items-center gap-2 mt-8">
        {slides.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className="group flex flex-col items-center"
          >
            <div
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === activeSlide
                  ? "w-6 bg-[#0078D4]"
                  : "w-1.5 bg-[#D1D5DB]"
              }`}
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-32 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="text-center">
          {/* Headline — 기존 uppercase badge 제거, 직접적인 헤드라인 */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold tracking-tight leading-[1.15] mb-6"
          >
            <span className="text-[#0078D4]">1/40 비용으로 내일 당장 시작하는</span>
            <br />
            <span className="text-[#111827]">Handy MES 스마트 팩토리</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-[#6B7280] max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          >
            복잡한 대면 상담과 비싼 인건비를 걷어내고
            <br className="hidden sm:block" />
            현장의 실질적 데이터에만 집중했습니다.
          </motion.p>

          {/* CTAs — 더 절제된 스타일, 큰 rounded 제거 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <DemoDialog>
              <button className="btn-press group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-semibold bg-[#0078D4] text-white rounded-lg hover:bg-[#106EBE] transition-colors duration-200 w-full sm:w-auto">
                시작하기
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </DemoDialog>
            <Link
              href="/pricing"
              className="btn-press inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-semibold bg-white text-[#374151] rounded-lg border border-[#E5E7EB] hover:border-[#D1D5DB] hover:bg-[#F9FAFB] transition-colors duration-200 w-full sm:w-auto"
            >
              요금제 안내
            </Link>
          </motion.div>
        </div>

        <HeroMobileShowcase />
      </div>
    </section>
  );
}
