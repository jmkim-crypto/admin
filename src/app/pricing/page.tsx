"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  X,
  Zap,
  ArrowRight,
  HelpCircle,
  Star,
} from "lucide-react";
import { DemoDialog } from "@/components/demo-dialog";

const plans = [
  {
    name: "Starter",
    description: "소규모 공장을 위한 기본 모니터링",
    monthlyPrice: 490000,
    features: {
      설비대수: "5대",
      데이터보관: "3개월",
      실시간모니터링: true,
      모바일알림: true,
      예지보전AI: false,
      커스텀대시보드: false,
      리포트자동화: "기본",
      API연동: false,
      기술지원: "이메일",
      전담매니저: false,
    },
    highlighted: false,
  },
  {
    name: "Standard",
    description: "성장하는 제조 기업을 위한 추천 플랜",
    monthlyPrice: 1490000,
    features: {
      설비대수: "20대",
      데이터보관: "1년",
      실시간모니터링: true,
      모바일알림: true,
      예지보전AI: true,
      커스텀대시보드: true,
      리포트자동화: "고급",
      API연동: true,
      기술지원: "전화 + 이메일",
      전담매니저: false,
    },
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "대규모 공장 및 다중 사이트 운영",
    monthlyPrice: null,
    features: {
      설비대수: "무제한",
      데이터보관: "5년",
      실시간모니터링: true,
      모바일알림: true,
      예지보전AI: true,
      커스텀대시보드: true,
      리포트자동화: "맞춤",
      API연동: true,
      기술지원: "24/7 전담",
      전담매니저: true,
    },
    highlighted: false,
  },
];

const featureLabels: Record<string, string> = {
  설비대수: "관리 설비 대수",
  데이터보관: "데이터 보관 기간",
  실시간모니터링: "실시간 모니터링",
  모바일알림: "모바일 푸시 알림",
  예지보전AI: "예지 보전 AI",
  커스텀대시보드: "커스텀 대시보드",
  리포트자동화: "리포트 자동화",
  API연동: "API 연동",
  기술지원: "기술 지원",
  전담매니저: "전담 매니저",
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat("ko-KR").format(price);
}

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute inset-0 ambient-blue pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#1a1a2e]/40 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-semibold text-[#3b82f6] tracking-[0.2em] uppercase mb-5">
              Pricing
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
              <span className="text-[#e8e8e8]">규모에 맞는{" "}</span>
              <span className="gradient-text">최적의 플랜</span>
              <span className="text-[#e8e8e8]">을 선택하세요</span>
            </h1>
            <p className="text-[#666666] max-w-2xl mx-auto text-[15px] mb-10 leading-relaxed">
              모든 플랜에 14일 무료 체험이 포함됩니다. 언제든 취소할 수 있습니다.
            </p>

            {/* Improved Toggle */}
            <div className="flex flex-col items-center gap-6 mt-4">
              <div className="relative flex items-center p-1 bg-white/[0.03] border border-white/[0.08] rounded-full backdrop-blur-md">
                {/* Sliding Background */}
                <div className="absolute inset-0 flex p-1">
                  <div className="relative w-full h-full flex">
                    <motion.div
                      className="h-full w-1/2 rounded-full bg-[#3b82f6] shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                      initial={false}
                      animate={{
                        x: isYearly ? "100%" : "0%",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 30,
                        mass: 1,
                      }}
                    />
                  </div>
                </div>

                {/* Monthly Button */}
                <button
                  onClick={() => setIsYearly(false)}
                  className="relative z-10 px-6 py-2.5 text-sm font-bold min-w-[110px] outline-none transition-colors duration-300"
                >
                  <motion.span
                    animate={{ color: !isYearly ? "#ffffff" : "#555555" }}
                    transition={{ duration: 0.3 }}
                  >
                    월간 결제
                  </motion.span>
                </button>

                {/* Yearly Button */}
                <button
                  onClick={() => setIsYearly(true)}
                  className="relative z-10 px-6 py-2.5 text-sm font-bold min-w-[110px] outline-none transition-colors duration-300"
                >
                  <motion.span
                    animate={{ color: isYearly ? "#ffffff" : "#555555" }}
                    transition={{ duration: 0.3 }}
                  >
                    연간 결제
                  </motion.span>
                </button>

                {/* Discount Badge - Positioned absolutely to avoid layout shift */}
                <div className="absolute left-full ml-5 hidden sm:block">
                  <AnimatePresence mode="wait">
                    {isYearly && (
                      <motion.span
                        initial={{ opacity: 0, x: -12, filter: "blur(4px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, x: -12, filter: "blur(4px)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-bold bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20 whitespace-nowrap shadow-[0_0_25px_rgba(16,185,129,0.2)]"
                      >
                        <span className="relative flex h-2 w-2 mr-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
                        </span>
                        최대 20% 할인 혜택
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Mobile Discount Badge */}
              <div className="sm:hidden h-8 flex items-center">
                <AnimatePresence mode="wait">
                  {isYearly && (
                    <motion.span
                      initial={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                      transition={{ duration: 0.4 }}
                      className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20"
                    >
                      연간 결제 시 20% 할인
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {plans.map((plan, i) => {
              const price = plan.monthlyPrice
                ? isYearly
                  ? Math.round(plan.monthlyPrice * 0.8)
                  : plan.monthlyPrice
                : null;

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`relative group ${
                    plan.highlighted ? "md:-mt-4 md:mb-4" : ""
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold bg-[#3b82f6] text-white shadow-lg shadow-blue-500/30">
                        <Star className="w-2.5 h-2.5" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div
                    className="relative h-full rounded-2xl p-7 lg:p-8 overflow-hidden transition-all duration-300"
                    style={plan.highlighted ? {
                      background: "rgba(59,130,246,0.05)",
                      border: "1px solid rgba(59,130,246,0.25)",
                      boxShadow: "0 0 60px rgba(59,130,246,0.08), 0 20px 40px rgba(0,0,0,0.4)",
                      backdropFilter: "blur(12px)",
                    } : {
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    {/* Top accent line on highlighted card */}
                    {plan.highlighted && (
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/80 to-transparent" />
                    )}

                    <h3 className="text-[17px] font-bold text-[#e8e8e8] mb-1 tracking-tight">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-[#555555] mb-7">{plan.description}</p>

                    {/* Price */}
                    <div className="mb-7">
                      {price !== null ? (
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl lg:text-4xl font-extrabold text-[#e8e8e8] tracking-tighter">
                            ₩{formatPrice(price)}
                          </span>
                          <span className="text-sm text-[#555555]">/월</span>
                        </div>
                      ) : (
                        <div>
                          <span className="text-3xl lg:text-4xl font-extrabold text-[#e8e8e8] tracking-tighter">
                            문의
                          </span>
                          <p className="text-sm text-[#555555] mt-1">맞춤 견적을 받아보세요</p>
                        </div>
                      )}
                      {isYearly && price !== null && (
                        <p className="text-xs text-[#10b981] mt-1.5 font-medium">
                          연간 ₩{formatPrice(price * 12)} (₩
                          {formatPrice((plan.monthlyPrice! - price) * 12)} 절약)
                        </p>
                      )}
                    </div>

                    {/* CTA */}
                    <DemoDialog>
                      <button
                        className={`w-full mb-7 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                          plan.highlighted
                            ? "bg-[#3b82f6] text-white hover:bg-[#2563eb] shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                            : "bg-white/[0.04] text-[#888888] border border-white/[0.07] hover:bg-white/[0.07] hover:text-[#e8e8e8]"
                        }`}
                      >
                        {price !== null ? (
                          <span className="flex items-center justify-center gap-1.5">
                            <Zap className="w-3.5 h-3.5" />
                            무료 체험 시작
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-1.5">
                            영업팀 문의
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </button>
                    </DemoDialog>

                    {/* Feature list */}
                    <div className="space-y-3.5">
                      {Object.entries(plan.features).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between text-sm">
                          <span className="text-[#555555]">{featureLabels[key]}</span>
                          <span className="font-medium">
                            {typeof value === "boolean" ? (
                              value ? (
                                <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                              ) : (
                                <X className="w-4 h-4 text-[#333333]" />
                              )
                            ) : (
                              <span className="text-[#e8e8e8] font-medium">{value}</span>
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-28 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tighter mb-3 text-[#e8e8e8]">
              상세 기능 비교
            </h2>
            <p className="text-[#555555] text-[15px]">
              각 플랜의 기능을 한눈에 비교해 보세요.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl"
            style={{ background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="py-4 px-6 text-left text-xs font-semibold text-[#444444] uppercase tracking-[0.1em]">
                    기능
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={`py-4 px-6 text-center text-sm font-bold ${
                        plan.highlighted ? "text-[#3b82f6]" : "text-[#888888]"
                      }`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.keys(featureLabels).map((key) => (
                  <tr
                    key={key}
                    className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-3.5 px-6 text-sm text-[#666666]">
                      {featureLabels[key]}
                    </td>
                    {plans.map((plan) => {
                      const value = plan.features[key as keyof typeof plan.features];
                      return (
                        <td key={plan.name} className="py-3.5 px-6 text-center text-sm">
                          {typeof value === "boolean" ? (
                            value ? (
                              <CheckCircle2 className="w-4 h-4 text-[#10b981] mx-auto" />
                            ) : (
                              <X className="w-4 h-4 text-[#2a2a2a] mx-auto" />
                            )
                          ) : (
                            <span className="text-[#e8e8e8] font-medium">{value}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs font-semibold text-[#3b82f6] tracking-[0.2em] uppercase mb-5">FAQ</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-[#e8e8e8]">
              자주 묻는 질문
            </h2>
          </motion.div>

          <div className="space-y-3">
            {[
              {
                q: "무료 체험 기간 동안 모든 기능을 사용할 수 있나요?",
                a: "네, 14일 무료 체험 기간 동안 선택하신 플랜의 모든 기능을 제한 없이 사용하실 수 있습니다. 체험 종료 후 자동 결제되지 않으니 안심하세요.",
              },
              {
                q: "플랜 변경은 언제든 가능한가요?",
                a: "언제든 상위 플랜으로 업그레이드하실 수 있습니다. 차액만 정산되며, 다운그레이드는 다음 결제일부터 적용됩니다.",
              },
              {
                q: "기존 설비에 추가 하드웨어가 필요한가요?",
                a: "대부분의 PLC와 IoT 센서는 소프트웨어만으로 연동 가능합니다. 레거시 장비의 경우 무료 호환 어댑터를 제공해 드립니다.",
              },
              {
                q: "데이터 보안은 어떻게 관리되나요?",
                a: "모든 데이터는 AES-256 암호화되며, ISO 27001 인증을 받은 국내 데이터센터에서 관리됩니다. ISMS 인증도 완료했습니다.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-xl p-6 cursor-default transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#e8e8e8] mb-2 tracking-tight">
                      {item.q}
                    </h3>
                    <p className="text-sm text-[#666666] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
