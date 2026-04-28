"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  XCircle,
  CheckCircle2,
  ArrowRight,
  X,
  Check,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    num: "01",
    title: "획기적인 비용 절감",
    description: "대면 상담과 불필요한 인건비를 제거하여 스마트 팩토리 도입의 문턱을 낮췄습니다.",
    stat: "1/40",
    statLabel: "기존 MES 평균 대비 비용",
  },
  {
    num: "02",
    title: "오직 스마트폰 하나로",
    description: "무거운 장비 대신 앱 하나로 충분합니다. 기본 설정만으로 현장의 모든 데이터를 즉시 제어하세요.",
    stat: "0",
    statLabel: "추가 인프라 구축 비용",
  },
  {
    num: "03",
    title: "단 하루, 즉시 시작",
    description: "복잡한 공사 없이 간단한 장치 설치만으로 충분합니다. 24시간 만에 스마트 팩토리로 전환됩니다.",
    stat: "24h",
    statLabel: "도입부터 가동까지",
  },
];

export function ValueProps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section header — 좌측 정렬로 비대칭 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-[#111827]">
            정직한 기술로 현장의 가치를 증명합니다
          </h2>
          <p className="text-[#6B7280] text-base leading-relaxed">
            비싼 비용과 긴 구축 기간이라는 기존 MES의 한계를 넘어,
            데이터 기반의 실무 중심 관리를 제안합니다.
          </p>
        </motion.div>

        {/* Value items — 각각 다른 레이아웃으로 시각적 변화 */}
        <div className="space-y-1">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_140px] gap-4 md:gap-8 items-baseline py-8 border-b border-[#F3F4F6] last:border-0 hover:bg-[#FAFAFA] -mx-4 px-4 rounded-lg transition-colors duration-200"
            >
              {/* Number */}
              <span className="text-sm font-mono text-[#D1D5DB] font-medium hidden md:block pt-1">
                {value.num}
              </span>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-2 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-[15px] text-[#6B7280] leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Stat */}
              <div className="text-right md:pt-1">
                <span className="text-2xl font-bold text-[#111827] tracking-tight">
                  {value.stat}
                </span>
                <p className="text-xs text-[#9CA3AF] mt-0.5">
                  {value.statLabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before / After */}
        <div className="mt-20 lg:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight">
              도입 전후, 현장이 달라집니다
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-[#E5E7EB] rounded-xl overflow-hidden">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 lg:p-10"
            >
              <div className="flex items-center gap-2.5 mb-6">
                <span className="text-sm font-semibold text-[#EF4444]/70">Before</span>
                <span className="text-xs text-[#9CA3AF]">기존 수동 관리</span>
              </div>
              <ul className="space-y-3.5">
                {[
                  "현장에 직접 가야만 확인 가능한 설비 상태",
                  "구두 지시와 종이 서류로 인한 정보 누락",
                  "작업 종료 후 뒤늦게 수기 입력하는 실적",
                  "엑셀 수식과 씨름하는 시간 소모적 통계",
                  "사고 발생 후 한참 뒤에야 인지되는 상황",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="shrink-0 w-1 h-1 rounded-full bg-[#D1D5DB] mt-2.5" />
                    <span className="text-[15px] text-[#9CA3AF] leading-relaxed line-through decoration-[#E5E7EB]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 lg:p-10"
            >
              <div className="flex items-center gap-2.5 mb-6">
                <span className="text-sm font-semibold text-[#0078D4]">After</span>
                <span className="text-xs text-[#9CA3AF]">Handy MES 도입 후</span>
              </div>
              <ul className="space-y-3.5">
                {[
                  { text: "24시간 어디서나 실시간 모바일 모니터링" },
                  { text: "클릭 한 번으로 끝나는 체계적 작업 지시" },
                  { text: "현장에서 즉시 등록하는 누락 없는 실적" },
                  { text: "인사이트를 제공하는 통계 대시보드" },
                  { text: "이상 징후 즉시 대응하는 스마트 알림" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#0078D4] shrink-0 mt-0.5" />
                    <span className="text-[15px] text-[#374151] leading-relaxed">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
