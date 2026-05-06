"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  SearchCheck,
  Layers,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Clock,
  Database,
  Smartphone,
  ChevronRight,
  Zap,
  Gauge,
  TrendingUp,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoDialog } from "@/components/demo-dialog";
import { PricingPreview } from "@/components/sections/pricing-preview";

// ── Components ──────────────────────────────────────────────────────────────

/**
 * Section Header Component (Unified with Pricing sub-headers)
 */
function SectionHeader({
  badge,
  title,
  description,
  centered = false
}: {
  badge: string;
  title: string | React.ReactNode;
  description: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center max-w-4xl mx-auto" : "max-w-2xl"}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs font-semibold text-[#0078D4] tracking-[0.2em] uppercase mb-5"
      >
        {badge}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#111827] mb-6 tracking-tighter leading-tight"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-[#4B5563] text-[16px] leading-[1.8] font-medium"
      >
        {description}
      </motion.p>
    </div>
  );
}

/**
 * Smartphone Mockup Component (Unified styling)
 */
function PhoneMockup({ src, alt, delay = 0 }: { src: string; alt: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative w-[280px] sm:w-[320px] mx-auto group flex justify-center"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0078D4]/5 blur-[140px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      {/* Phone Frame — Unified Black Style */}
      <div className="relative p-[6px] bg-[#1D1D1F] rounded-[40px] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.12)]">
        <div className="relative w-[240px] sm:w-[270px] rounded-[34px] overflow-hidden bg-white" style={{ aspectRatio: "9/19.5" }}>
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30" />
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 240px, 270px"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Visual Widget Wrapper (Unified with Pricing card styling)
 */
function VisualWidget({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl p-7 lg:p-8 border border-[#F3F4F6] bg-white transition-all duration-300 hover:border-[#0078D4]/20 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Real-time Flow Visual
 */
function RealTimeFlowVisual() {
  return (
    <div className="w-full max-w-lg mx-auto space-y-5">
      <VisualWidget>
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-base font-bold text-[#6B7280] uppercase tracking-widest mb-1">Live Efficiency</p>
            <h4 className="text-xl font-bold text-[#111827]">Shift A-1 Output</h4>
          </div>
          <Activity className="w-5 h-5 text-[#0078D4] animate-pulse" />
        </div>
        <div className="relative h-2.5 bg-[#F3F4F6] rounded-full overflow-hidden mb-4">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "84.2%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-y-0 left-0 bg-[#0078D4] rounded-full"
          />
        </div>
        <div className="flex justify-between items-center text-base font-semibold text-[#6B7280] uppercase tracking-wider">
          <span>Target: 10,000</span>
          <span className="text-[#0078D4] font-bold">Current: 8,420 (84.2%)</span>
        </div>
      </VisualWidget>

      <VisualWidget>
        <span className="text-base font-bold text-[#6B7280] uppercase tracking-widest mb-6 block">Equipment Status</span>
        <div className="space-y-3.5">
          {[
            { name: "CNC-A01", status: "Running", color: "#10b981" },
            { name: "Press-B04", status: "Maintenance", color: "#ef4444" },
            { name: "Robot-C12", status: "Idle", color: "#f59e0b" },
          ].map((m) => (
            <div key={m.name} className="flex items-center justify-between py-2 border-b border-[#F3F4F6] last:border-0">
              <span className="text-base font-medium text-[#111827]">{m.name}</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }} />
                <span className="text-base font-bold uppercase tracking-widest" style={{ color: m.color }}>{m.status}</span>
              </div>
            </div>
          ))}
        </div>
      </VisualWidget>
    </div>
  );
}

/**
 * Advanced Analysis Visual
 */
function AdvancedAnalysisVisual() {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl p-8 lg:p-10 border border-[#F3F4F6] bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] relative group">
      <div className="mb-10">
        <p className="text-base font-semibold text-[#0078D4] tracking-[0.2em] uppercase mb-4">Analytics Dashboard</p>
        <h4 className="text-3xl font-bold text-[#111827] tracking-tighter">Production & Operation Trend</h4>
      </div>

      <div className="flex items-end justify-between h-48 gap-3 px-2 relative mb-12">
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
          {[...Array(5)].map((_, i) => <div key={i} className="w-full h-px bg-[#E5E7EB]" />)}
        </div>
        {[40, 65, 45, 80, 55, 90, 75, 60, 85, 50, 70, 95].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.05 }}
            className="flex-1 bg-[#0078D4]/50 rounded-t-sm hover:bg-[#0078D4] transition-colors duration-300"
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#F3F4F6]">
        {[
          { label: "Total Output", value: "12,400" },
          { label: "Operation Rate", value: "87.5%" },
          { label: "Target Achieved", value: "94.2%" },
        ].map((stat, i) => (
          <div key={i}>
            <p className="text-base font-bold text-[#6B7280] uppercase tracking-widest mb-1.5">{stat.label}</p>
            <p className="text-2xl font-bold text-[#111827] tracking-tight">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Page Component ─────────────────────────────────────────────────────

export default function FeaturesPage() {
  return (
    <div className="bg-[#FAFAFA] text-[#111827] min-h-screen">
      {/* Background Elements */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 ambient-blue pointer-events-none opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#0078D4]/3 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-base font-semibold text-[#0078D4] tracking-[0.2em] uppercase mb-5">
              Features
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 leading-tight">
              <span className="text-[#111827]">현장의 목소리를 담은{" "}</span>
              <span className="text-[#0078D4]">본질적 기능의 집약</span>
            </h1>
            <p className="text-[#4B5563] max-w-3xl mx-auto text-[16px] md:text-lg mb-12 leading-[1.8]">
              화려함 뒤에 숨겨진 복잡함을 걷어내고, 경영에 확신을 줄 수 있는 <br className="hidden md:block" />
              데이터와 도구만을 엄선했습니다. 모든 공정의 진실을 마주하세요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Sections (Unified Z-Pattern) */}
      <div className="relative z-10">

        {/* Section 1: Real-time Flow */}
        <section className="py-20 lg:py-32 relative border-t border-[#E5E7EB]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <SectionHeader
                  badge="01. Visualization"
                  title={<>공장 전체 흐름을<br />실시간으로 파악합니다</>}
                  description="현장에 가지 않아도 작업자, 설비, 제품별 공정 흐름을 한눈에 인지할 수 있습니다. 수집된 모든 데이터는 지연 없이 동기화됩니다."
                />
                <div className="space-y-4 mb-10">
                  {[
                    "작업자/설비별 실시간 가동 현황 모니터링",
                    "이상 징후 발생 시 즉각적인 알림 및 시각화",
                    "표준 공정 대비 진행률 실시간 트래킹",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3.5 text-base font-medium text-[#4B5563]">
                      <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-10 pt-8 border-t border-[#F3F4F6]">
                  <div>
                    <p className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-1">Latency</p>
                    <p className="text-xl font-bold text-[#0078D4]">&lt; <span className="text-[#0078D4]">0.001</span>s</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-1">Sync Rate</p>
                    <p className="text-xl font-bold text-[#0078D4]">100%</p>
                  </div>
                </div>
              </div>
              <RealTimeFlowVisual />
            </div>
          </div>
        </section>

        {/* Section 2: Work Order Management */}
        <section className="py-20 lg:py-32 relative border-t border-[#E5E7EB] bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="lg:order-2">
                <SectionHeader
                  badge="02. Digital Workflow"
                  title={<>종이 없는 현장,<br />정밀한 작업 지시</>}
                  description="과거의 수기 작업 지시서로 인한 오해와 누락을 원천 차단합니다. 디지털로 하달되는 명확한 지시는 현장의 효율을 극대화합니다."
                />
                <div className="space-y-4 mb-10">
                  {[
                    "모바일 앱을 통한 즉각적인 작업 지시 조회",
                    "작업 진행 상태의 투명한 관리",
                    "도면 및 작업 가이드 실시간 참조",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3.5 text-base font-medium text-[#4B5563]">
                      <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <DemoDialog>
                  <button className="inline-flex items-center gap-2 text-base font-bold text-[#111827] hover:text-[#0078D4] transition-colors duration-300 group">
                    View Workflow Guide
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </DemoDialog>
              </div>
              <div className="lg:order-1">
                <PhoneMockup src="/images/mobile-screens/tasklist.png" alt="작업지시 조회" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Digital Management */}
        <section className="py-20 lg:py-32 relative border-t border-[#E5E7EB]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <SectionHeader
                  badge="03. Mobile Management"
                  title={<>비효율을 덜어낸<br />정직한 실적 관리</>}
                  description="작업자가 현장에서 즉시 등록하는 실적 데이터는 경영의 근거가 됩니다. 복잡한 보고 체계를 걷어내고 데이터의 진실성을 확보하세요."
                />
                <div className="space-y-4 mb-10">
                  {[
                    "터치 몇 번으로 완료되는 생산 실적 등록",
                    "비가동 사유 실시간 선택 및 분석 연동",
                    "작업자와 관리자 간의 실시간 피드백",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3.5 text-base font-medium text-[#4B5563]">
                      <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="p-6 rounded-xl bg-white border border-[#F3F4F6] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-4 h-4 text-[#0078D4]" />
                    <p className="text-base font-bold text-[#111827]">현장 보고 시간 <span className="text-[#0078D4] font-bold">74%</span> 단축</p>
                  </div>
                  <p className="text-base text-[#4B5563] leading-[1.8]">
                    수기 보고서 작성 및 취합에 소요되던 시간을 걷어내고, <br />
                    실제 생산 활동에 집중할 수 있는 환경을 제공합니다.
                  </p>
                </div>
              </div>
              <PhoneMockup src="/images/mobile-screens/management.png" alt="관리 메뉴" />
            </div>
          </div>
        </section>

        {/* Section 4: Advanced Analysis */}
        <section className="py-24 lg:py-32 relative border-t border-[#E5E7EB] bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <SectionHeader
                badge="04. Analytics"
                centered
                title={<>직관적인 데이터 통계 분석</>}
                description="현장에서 수집된 누적 데이터를 바탕으로 생산성 지표와 설비 효율을 시각화합니다. 직관적인 통계 화면을 통해 공정의 흐름을 한눈에 파악하세요."
              />
            </div>
            <AdvancedAnalysisVisual />

            {/* Unified FAQ-style grid */}
            <div className="mt-20 grid md:grid-cols-3 gap-5 lg:gap-6">
              {[
                { title: "생산 실적 추이 분석", desc: "누적된 생산량 데이터를 기간별로 조회하여 전체적인 생산 흐름을 파악합니다.", icon: BarChart3 },
                { title: "비가동 원인 통계", desc: "설비의 멈춤 사유와 빈도를 통계로 확인하여 주요 비가동 원인을 도출합니다.", icon: Activity },
                { title: "작업 효율 시각화", desc: "목표 대비 달성률과 시간당 생산량을 그래프로 제공하여 직관적인 성과 확인이 가능합니다.", icon: Zap },
              ].map((box, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl p-7 lg:p-8 border border-[#F3F4F6] bg-[#F5F5F5] hover:bg-white hover:shadow-[0_20px_25px_-5px_rgba(0,163,255,0.08)] hover:border-[#0078D4]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <box.icon className="w-4 h-4 text-[#0078D4] mb-5" />
                  <h5 className="text-base font-bold text-[#111827] mb-3 tracking-tight">{box.title}</h5>
                  <p className="text-base text-[#4B5563] leading-[1.8] font-medium">{box.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 border-t border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <SectionHeader
            badge="Common Questions"
            centered
            title="자주 묻는 질문"
            description="Handy MES의 주요 기능에 대해 궁금해하시는 점들을 정리했습니다."
          />
          <div className="space-y-3 mt-12 text-left">
            {[
              { q: "모든 설비와 실시간 연동이 가능한가요?", a: "네, OPC-UA, Modbus, MQTT 등 표준 프로토콜을 지원하는 모든 설비와 즉시 연동됩니다. 레거시 장비의 경우 전용 어댑터를 통해 해결 가능합니다." },
              { q: "데이터 보안은 어떻게 보장되나요?", a: "모든 데이터는 전송 및 저장 시 AES-256 암호화 처리를 거치며, ISO 27001 인증을 받은 보안 환경에서 관리됩니다." },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-6 bg-white border border-[#F3F4F6] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.03)]"
              >
                <h3 className="text-base font-bold text-[#111827] mb-3">{item.q}</h3>
                <p className="text-[15px] text-[#4B5563] leading-[1.8]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <PricingPreview />
    </div>
  );
}
