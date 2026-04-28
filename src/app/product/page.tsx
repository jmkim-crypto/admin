"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { DemoDialog } from "@/components/demo-dialog";
import {
  DashboardScreen,
  TaskListScreen,
  TaskDetailScreen,
  ManagementScreen,
} from "@/components/sections/mobile-screens";

/* ─── Solution Workflow ─── */
function SolutionWorkflow() {
  const steps = [
    { num: "01", title: "현장 신호 포착", desc: "Wizter-5100이 0.001초 단위로 설비의 상태 변화를 감지합니다.", label: "Sensor" },
    { num: "02", title: "무선 중계", desc: "SHAP-1000이 수집 데이터를 서버로 안정적으로 전송합니다.", label: "Relay" },
    { num: "03", title: "클라우드 처리", desc: "AES-256 암호화 후 안전하게 데이터를 분석·저장합니다.", label: "Cloud" },
    { num: "04", title: "모바일 앱 전달", desc: "관리자의 스마트폰에서 실시간으로 현장을 확인·제어합니다.", label: "App" },
  ];

  return (
    <section className="py-24 lg:py-32 border-t border-[#E5E7EB]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-[#111827]"
          >
            센서에서 스마트폰까지, 끊김 없는 데이터 흐름
          </motion.h2>
          <p className="text-[#6B7280] text-base leading-relaxed">
            현장의 전기 신호가 관리자의 손안에 도착하기까지의 전 과정입니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="bg-white rounded-xl p-6 border border-[#E5E7EB]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-[#E5E7EB]">{step.num}</span>
                <span className="text-[11px] text-[#9CA3AF] font-medium">{step.label}</span>
              </div>
              <h3 className="text-base font-semibold text-[#111827] mb-2">{step.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Hardware Lineup ─── */
function HardwareLineup() {
  const devices = [
    {
      name: "SHAP-1000",
      role: "무선 중계기",
      image: "/images/hardware/shap-1000.png",
      desc: "공장 내 다수의 무선 단말기를 통합 관리하는 네트워크 허브",
      specs: [
        ["통신 방식", "1:N 무선 네트워크"],
        ["데이터 방향", "양방향 릴레이"],
        ["서버 동기화", "실시간"],
        ["전원", "DC 12V"],
      ],
    },
    {
      name: "WIT-1000",
      role: "데이터 단말기",
      image: "/images/hardware/wit-1000.png",
      desc: "전기 신호를 디지털 데이터로 변환하여 생산량·설비 상태를 기록",
      specs: [
        ["신호 취득", "생산 수량 / 상태"],
        ["측정 정밀도", "고속 Cycle Time"],
        ["외부 연동", "RS-232 (바코드/RFID)"],
        ["전원", "DC 12V"],
      ],
    },
    {
      name: "Wizter-5100",
      role: "지능형 센서 노드",
      image: "/images/hardware/wizter-5100.png",
      desc: "CPU 인터럽트 기술로 0.001초 단위 설비 상태 변화를 포착",
      specs: [
        ["인지 방식", "CPU 인터럽트"],
        ["데이터 전송", "상태값 + 누적 Count"],
        ["센서 지원", "디지털 / 아날로그"],
        ["반응 속도", "0.001초"],
      ],
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F5F5F5] border-t border-[#E5E7EB]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-[#111827]">
            하드웨어 상세 스펙
          </h2>
          <p className="text-[#6B7280] text-base leading-relaxed">
            현장에 설치되는 모든 장비의 사양을 확인하세요.
          </p>
        </div>

        <div className="space-y-4">
          {devices.map((device, i) => (
            <div
              key={device.name}
              className="grid lg:grid-cols-[200px_1fr] gap-6 rounded-xl p-6 lg:p-8 bg-white border border-[#E5E7EB]"
            >
              <div className="flex items-center justify-center">
                <div className="relative w-40 h-40">
                  <Image src={device.image} alt={device.name} fill className="object-contain" />
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="text-lg font-semibold text-[#111827]">{device.name}</h3>
                  <span className="text-xs text-[#9CA3AF]">{device.role}</span>
                </div>
                <p className="text-sm text-[#6B7280] mb-5">{device.desc}</p>
                <div className="rounded-lg overflow-hidden border border-[#E5E7EB]">
                  {device.specs.map(([label, value], j) => (
                    <div key={j} className={`grid grid-cols-2 text-sm ${j < device.specs.length - 1 ? "border-b border-[#F3F4F6]" : ""}`}>
                      <div className="px-4 py-2.5 bg-[#F9FAFB] text-[#6B7280]">{label}</div>
                      <div className="px-4 py-2.5 text-[#111827] font-medium">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Use Cases ─── */
function IndustryUseCases() {
  const cases = [
    {
      industry: "정밀 가공",
      title: "CNC 머시닝 센터 실시간 관리",
      before: "일일 수기 보고 기반, 비가동 원인 파악 불가",
      after: "실시간 Cycle Time 측정 + 비가동 자동 분류",
      result: "가동률 23% 향상",
    },
    {
      industry: "사출 성형",
      title: "사출기 생산량 자동 집계",
      before: "수작업 카운팅, 시프트 교대 시 실적 누락",
      after: "센서 기반 자동 카운팅 + 실시간 진행률",
      result: "실적 정확도 99.8%",
    },
    {
      industry: "프레스 타발",
      title: "고속 프레스 모니터링",
      before: "타발 속도 변화 감지 불가, 품질 편차 큼",
      after: "0.001초 인터럽트로 모든 타발 신호 포착",
      result: "불량률 42% 감소",
    },
  ];

  return (
    <section className="py-24 lg:py-32 border-t border-[#E5E7EB]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-[#111827]">
            산업별 적용 사례
          </h2>
          <p className="text-[#6B7280] text-base leading-relaxed">
            다양한 제조 현장에서 검증된 도입 효과입니다.
          </p>
        </div>

        <div className="space-y-4">
          {cases.map((item, i) => (
            <div
              key={i}
              className="grid lg:grid-cols-[1fr_1fr_160px] gap-6 p-6 rounded-xl bg-white border border-[#E5E7EB]"
            >
              <div>
                <span className="text-xs text-[#9CA3AF] font-medium">{item.industry}</span>
                <h3 className="text-base font-semibold text-[#111827] mt-1 mb-3">{item.title}</h3>
                <div className="space-y-2">
                  <p className="text-sm text-[#9CA3AF] line-through decoration-[#E5E7EB]">{item.before}</p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-[#374151] font-medium">{item.after}</p>
              </div>
              <div className="flex items-center lg:justify-end">
                <span className="text-lg font-bold text-[#0078D4]">{item.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Interactive Demo ─── */
function InteractiveDemo() {
  const [activeScreen, setActiveScreen] = useState(0);
  const screens = [
    { label: "대시보드", Component: DashboardScreen },
    { label: "작업지시 조회", Component: TaskListScreen },
    { label: "작업 상세", Component: TaskDetailScreen },
    { label: "관리", Component: ManagementScreen },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F5F5F5] border-t border-[#E5E7EB]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-[#111827]">
            직접 확인해 보세요
          </h2>
          <p className="text-[#6B7280] text-base leading-relaxed">
            Handy MES 모바일 앱의 주요 화면입니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_280px] gap-10 items-start">
          {/* Tabs */}
          <div className="space-y-2 order-2 lg:order-1">
            {screens.map((screen, i) => (
              <button
                key={i}
                onClick={() => setActiveScreen(i)}
                className={`btn-press w-full text-left p-4 rounded-lg border transition-colors duration-200 flex items-center gap-3 ${
                  activeScreen === i
                    ? "bg-white border-[#E5E7EB] shadow-sm"
                    : "bg-transparent border-transparent hover:bg-white/60"
                }`}
              >
                <span className={`text-sm font-mono ${activeScreen === i ? "text-[#0078D4]" : "text-[#D1D5DB]"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`text-[15px] font-medium ${activeScreen === i ? "text-[#111827]" : "text-[#6B7280]"}`}>
                  {screen.label}
                </span>
              </button>
            ))}
          </div>

          {/* Phone */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="p-[6px] bg-[#1D1D1F] rounded-[40px] shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <div className="relative w-[240px] rounded-[34px] overflow-hidden bg-white" style={{ aspectRatio: "9/19.5" }}>
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30" />
                {(() => {
                  const Comp = screens[activeScreen].Component;
                  return <Comp />;
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main ─── */
export default function ProductPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 text-[#111827] leading-tight"
          >
            현장의 신호를 경영의 데이터로
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[#6B7280] max-w-2xl mx-auto text-base md:text-lg mb-10 leading-relaxed"
          >
            센서가 포착한 0.001초의 신호부터 관리자의 스마트폰에 도착하는 실시간 알림까지,
            Handy MES의 데이터 인프라를 소개합니다.
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <DemoDialog>
              <button className="btn-press group inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold bg-[#0078D4] text-white rounded-lg hover:bg-[#106EBE] transition-colors w-full sm:w-auto justify-center">
                무료 상담 신청
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </DemoDialog>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-[#374151] bg-white rounded-lg border border-[#E5E7EB] hover:bg-[#F9FAFB] transition-colors w-full sm:w-auto justify-center"
            >
              기능 상세 보기
            </Link>
          </div>
        </div>
      </section>

      <SolutionWorkflow />
      <HardwareLineup />
      <IndustryUseCases />
      <InteractiveDemo />

      {/* Bottom CTA */}
      <section className="py-24 lg:py-32 border-t border-[#E5E7EB] bg-white">
        <div className="max-w-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="text-[#6B7280] text-base leading-relaxed mb-8">
            전문 컨설턴트가 귀사의 현장에 최적화된 도입 방안을 제안해 드립니다.
          </p>
          <DemoDialog>
            <button className="btn-press group inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold bg-[#0078D4] text-white rounded-lg hover:bg-[#106EBE] transition-colors">
              무료 상담 신청하기
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </DemoDialog>
        </div>
      </section>
    </div>
  );
}
