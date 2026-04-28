"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Activity,
  ArrowRight,
  Smartphone,
  BarChart3,
  ClipboardList,
  Layers,
} from "lucide-react";
import {
  DashboardScreen,
  TaskListScreen,
  ManagementScreen,
  TaskDetailScreen,
} from "./mobile-screens";
import { DemoDialog } from "@/components/demo-dialog";

/* ── Feature Data ───────────────────────────────────────────────────────── */
const platformFeatures = [
  {
    id: "monitoring",
    title: "실시간 현황 파악",
    desc: "현장 센서가 감지한 가동 상태를 스마트폰에서 초 단위로 즉시 확인합니다.",
    icon: BarChart3,
    mobileComponent: DashboardScreen,
  },
  {
    id: "tasks",
    title: "디지털 작업지시",
    desc: "관리자와 현장 작업자가 별도의 무전이나 문서 없이 앱으로 실시간 소통합니다.",
    icon: ClipboardList,
    mobileComponent: TaskListScreen,
  },
  {
    id: "performance",
    title: "누락 없는 실적 관리",
    desc: "하드웨어가 카운팅한 실적이 클라우드를 거쳐 모든 앱에 실시간 반영됩니다.",
    icon: Activity,
    mobileComponent: TaskDetailScreen,
  },
  {
    id: "management",
    title: "기준 정보 관리",
    desc: "설비, 제품 정보를 앱에서 수정하면 현장 전체 시스템에 즉시 동기화됩니다.",
    icon: Layers,
    mobileComponent: ManagementScreen,
  },
];



/* ── Mobile Mockup ──────────────────────────────────────────────────────── */
function MobileMockup({ activeFeature }: { activeFeature: typeof platformFeatures[0] }) {
  return (
    <div className="relative w-[220px] sm:w-[260px] lg:w-[280px] rounded-[36px] p-[6px] bg-black shadow-[0_20px_25px_-5px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
      {/* Dynamic Island Area */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[60px] h-[18px] bg-black rounded-full z-30" />

      <div className="relative rounded-[30px] overflow-hidden bg-white aspect-[9/19.5]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            <activeFeature.mobileComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ── Main Export ───────────────────────────────────────────────────────── */
export function UIShowcase() {
  const [activeTab, setActiveTab] = useState(platformFeatures[0]);

  return (
    <section className="relative py-32 lg:py-48 bg-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0078D4]/[0.01] blur-[160px]" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: Content & Interactive Tabs */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-semibold text-[#0078D4] tracking-[0.2em] uppercase mb-5"
              >
                ui feature
              </motion.p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] mb-6">
                현장과 손안을 잇는 <br />
                <span className="text-[#111827]">데이터 인프라</span>
              </h2>
              <p className="text-[#4B5563] text-lg leading-[1.8] max-w-xl">
                하드웨어 센서가 포착한 현장의 모든 신호가 클라우드를 거쳐 스마트폰으로 즉시 전송됩니다.
              </p>
            </motion.div>

            <div className="space-y-4">
              {platformFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group flex items-start gap-5 ${activeTab.id === feature.id
                    ? "bg-white border-[#0078D4]/30 shadow-[0_20px_25px_-5px_rgba(0,163,255,0.08)]"
                    : "bg-transparent border-[#F3F4F6] hover:bg-[#F5F5F5]"
                    }`}
                >
                  <div className={`p-3 rounded-xl transition-all duration-300 ${activeTab.id === feature.id ? "bg-[#0078D4] text-white shadow-[0_4px_6px_-1px_rgba(0,163,255,0.3)]" : "bg-[#F3F4F6] text-[#6B7280]"
                    }`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${activeTab.id === feature.id ? "text-[#111827]" : "text-[#6B7280]"
                      }`}>
                      {feature.title}
                    </h3>
                    {activeTab.id === feature.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-[#4B5563] text-sm leading-[1.8] mt-2"
                      >
                        {feature.desc}
                      </motion.p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Elegant Background Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0078D4]/[0.03] rounded-full blur-[140px] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <MobileMockup activeFeature={activeTab} />
            </motion.div>

            {/* Subtle Grid Interaction Glow */}
            <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#0078D4]/[0.03] blur-[120px] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
