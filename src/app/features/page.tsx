"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Wifi,
  Smartphone,
  BarChart3,
  Bell,
  Database,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Layers,
  Shield,
  Clock,
  Settings,
  LineChart,
  Activity,
  MonitorDot,
} from "lucide-react";
import { DemoDialog } from "@/components/demo-dialog";

const featureBlocks = [
  {
    id: "connectivity",
    badge: "연동성",
    badgeColor: "#0ea5e9",
    title: "PLC, IoT 센서와의\n간편한 연결",
    description:
      "기존 설비에 별도의 하드웨어 교체 없이 즉시 연동 가능합니다. OPC-UA, Modbus, MQTT 등 표준 프로토콜을 지원하며, 5분 내 설정이 완료됩니다.",
    features: [
      { icon: Cpu, text: "OPC-UA / Modbus / MQTT 프로토콜 지원" },
      { icon: Wifi, text: "무선 IoT 게이트웨이 자동 탐색" },
      { icon: Layers, text: "레거시 PLC 호환 어댑터 제공" },
      { icon: Settings, text: "플러그 앤 플레이 — 5분 내 설정 완료" },
    ],
    visual: "connectivity",
  },
  {
    id: "mobile",
    badge: "모바일 최적화",
    badgeColor: "#10b981",
    title: "현장 어디서든\n실시간 알림",
    description:
      "현장 작업자의 스마트폰으로 이상 징후를 즉시 전달합니다. 임계값 기반 자동 알림과 에스컬레이션 체계를 지원하여 대응 시간을 최소화합니다.",
    features: [
      { icon: Smartphone, text: "iOS / Android 네이티브 앱" },
      { icon: Bell, text: "실시간 푸시 알림 (3초 이내)" },
      { icon: Shield, text: "역할별 알림 에스컬레이션" },
      { icon: Clock, text: "오프라인 모드 — 연결 복구 시 자동 동기화" },
    ],
    visual: "mobile",
  },
  {
    id: "analytics",
    badge: "데이터 분석",
    badgeColor: "#8b5cf6",
    title: "과거 이력 기반\n통계 분석 리포트",
    description:
      "수집된 설비 데이터를 AI가 분석하여 의미 있는 인사이트로 전환합니다. 일별/주별/월별 자동 리포트와 이상 패턴 탐지 기능을 제공합니다.",
    features: [
      { icon: BarChart3, text: "커스텀 대시보드 & 리포트 빌더" },
      { icon: LineChart, text: "트렌드 분석 & 이상 패턴 탐지" },
      { icon: Database, text: "최대 5년 데이터 저장 & 조회" },
      { icon: Activity, text: "OEE / MTBF / MTTR 자동 계산" },
    ],
    visual: "analytics",
  },
];

function ConnectivityVisual() {
  return (
    <div className="relative w-full h-64 sm:h-80">
      {/* Central hub */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0ea5e9] to-[#003366] flex items-center justify-center shadow-xl shadow-[#0ea5e9]/30 z-10"
      >
        <MonitorDot className="w-8 h-8 text-white" />
      </motion.div>

      {/* Orbiting nodes */}
      {[
        { label: "PLC", angle: 0, delay: 0.5 },
        { label: "IoT", angle: 72, delay: 0.6 },
        { label: "MQTT", angle: 144, delay: 0.7 },
        { label: "센서", angle: 216, delay: 0.8 },
        { label: "SCADA", angle: 288, delay: 0.9 },
      ].map((node) => {
        const radius = 100;
        const rad = (node.angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        return (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: node.delay }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
          >
            <div className="w-14 h-14 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
              <span className="text-xs font-bold text-[#0ea5e9]">
                {node.label}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* Pulse rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0ea5e9]/10"
          style={{
            width: ring * 80 + 60,
            height: ring * 80 + 60,
          }}
          animate={{ opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: ring * 0.5 }}
        />
      ))}
    </div>
  );
}

function MobileVisual() {
  return (
    <div className="relative w-full flex justify-center py-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-48 sm:w-56"
      >
        {/* Phone frame */}
        <div className="bg-[#1a1f2e] rounded-[2rem] p-2 border border-white/10 shadow-2xl">
          <div className="bg-[#0a0f1a] rounded-[1.5rem] overflow-hidden">
            {/* Status bar */}
            <div className="flex items-center justify-between px-4 py-2 text-[10px] text-[#64748b]">
              <span>9:41</span>
              <div className="w-16 h-4 rounded-full bg-black" />
              <span>100%</span>
            </div>
            {/* Notification */}
            <div className="px-3 py-2 space-y-2">
              <motion.div
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="p-3 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/20"
              >
                <div className="flex items-center gap-2 mb-1">
                  <AlertIcon className="w-3 h-3 text-[#ef4444]" />
                  <span className="text-[10px] font-bold text-[#ef4444]">긴급 알림</span>
                </div>
                <p className="text-[9px] text-[#94a3b8]">
                  CNC-07 진동 임계값 초과
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="p-3 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/20"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Bell className="w-3 h-3 text-[#f59e0b]" />
                  <span className="text-[10px] font-bold text-[#f59e0b]">주의</span>
                </div>
                <p className="text-[9px] text-[#94a3b8]">
                  프레스-03 온도 상승 감지
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="p-3 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20"
              >
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-3 h-3 text-[#10b981]" />
                  <span className="text-[10px] font-bold text-[#10b981]">정비 완료</span>
                </div>
                <p className="text-[9px] text-[#94a3b8]">
                  로봇팔-12 윤활유 교체 완료
                </p>
              </motion.div>
            </div>
            {/* Bottom nav */}
            <div className="flex items-center justify-around px-4 py-3 border-t border-white/5 mt-4">
              {[Activity, Bell, BarChart3, Settings].map((Icon, i) => (
                <Icon key={i} className={`w-4 h-4 ${i === 1 ? "text-[#0ea5e9]" : "text-[#475569]"}`} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function AlertIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function AnalyticsVisual() {
  return (
    <div className="relative w-full px-4 py-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="glass rounded-xl p-4 space-y-4"
      >
        {/* Mini chart header */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-[#94a3b8]">OEE 트렌드 (30일)</span>
          <span className="text-xs text-[#10b981] font-bold">+12.4%</span>
        </div>
        {/* Bar chart */}
        <div className="flex items-end gap-1 h-28">
          {[45, 52, 48, 60, 55, 63, 58, 70, 65, 72, 68, 75, 78, 82, 80].map((v, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${v}%` }}
              transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
              className="flex-1 rounded-t-sm"
              style={{
                background: v >= 70
                  ? "linear-gradient(to top, #003366, #10b981)"
                  : "linear-gradient(to top, #1e293b, #475569)",
              }}
            />
          ))}
        </div>
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
          {[
            { label: "OEE", value: "82.4%", color: "#10b981" },
            { label: "MTBF", value: "340h", color: "#0ea5e9" },
            { label: "MTTR", value: "1.2h", color: "#8b5cf6" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-lg font-bold" style={{ color: stat.color }}>
                {stat.value}
              </p>
              <p className="text-[10px] text-[#64748b]">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function FeatureVisual({ type }: { type: string }) {
  switch (type) {
    case "connectivity":
      return <ConnectivityVisual />;
    case "mobile":
      return <MobileVisual />;
    case "analytics":
      return <AnalyticsVisual />;
    default:
      return null;
  }
}

export default function FeaturesPage() {
  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#003366]/20 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-[#0ea5e9] tracking-wider uppercase mb-3">
              Features
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
              하나의 플랫폼으로
              <br />
              <span className="gradient-text">모든 설비를 관리하세요</span>
            </h1>
            <p className="text-[#94a3b8] max-w-2xl mx-auto text-base sm:text-lg">
              연동부터 분석까지, FactoryPulse의 핵심 기능을 상세히 살펴보세요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Blocks */}
      {featureBlocks.map((block, index) => (
        <FeatureBlock key={block.id} block={block} index={index} />
      ))}

      {/* CTA */}
      <section className="py-20 lg:py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              지금 바로 시작하세요
            </h2>
            <p className="text-[#94a3b8] mb-8">
              14일 무료 체험으로 모든 기능을 직접 경험해 보세요.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <DemoDialog>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#0ea5e9] to-[#003366] text-white font-semibold px-8 shadow-lg shadow-[#0ea5e9]/20 w-full sm:w-auto"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  무료 데모 신청
                </Button>
              </DemoDialog>
              <Button
                variant="outline"
                size="lg"
                className="border-white/10 hover:bg-white/5 text-white w-full sm:w-auto"
                render={
                  <Link href="/pricing">
                    요금제 보기 <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                }
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FeatureBlock({
  block,
  index,
}: {
  block: (typeof featureBlocks)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isReversed = index % 2 === 1;

  return (
    <section
      ref={ref}
      className={`relative py-16 lg:py-24 ${index > 0 ? "border-t border-white/5" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            isReversed ? "lg:direction-rtl" : ""
          }`}
          style={isReversed ? { direction: "rtl" } : {}}
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ direction: "ltr" }}
          >
            <span
              className="inline-block text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4"
              style={{
                color: block.badgeColor,
                background: `${block.badgeColor}15`,
              }}
            >
              {block.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 whitespace-pre-line leading-tight">
              {block.title}
            </h2>
            <p className="text-[#94a3b8] mb-8 leading-relaxed">
              {block.description}
            </p>

            <div className="space-y-4">
              {block.features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-start gap-3 group"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ background: `${block.badgeColor}10` }}
                  >
                    <feature.icon
                      className="w-4 h-4"
                      style={{ color: block.badgeColor }}
                    />
                  </div>
                  <span className="text-sm text-[#c8d0da] pt-2">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ direction: "ltr" }}
            className="glass rounded-2xl overflow-hidden"
          >
            <FeatureVisual type={block.visual} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
