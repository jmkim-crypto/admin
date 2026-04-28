"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { DemoDialog } from "@/components/demo-dialog";
import { ROIComparison } from "@/components/roi-comparison";

export function PricingPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 border-t border-[#E5E7EB] bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header — 좌측 정렬, 다른 섹션과 동일 패턴 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-14"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-[#111827]">
            비용 부담을 덜어내고 본질에만 투자하세요
          </h2>
          <p className="text-[#6B7280] text-base leading-relaxed">
            비싼 초기 구축 비용과 불필요한 유지보수 비용을 없앴습니다.
            Handy MES는 정직한 구독 서비스로 현장의 성장을 지원합니다.
          </p>
        </motion.div>

        {/* ROI Table */}
        <ROIComparison />

        {/* Pricing Anchor — 가격 정보 + 요금제 유도를 하나로 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] overflow-hidden"
        >
          <div className="grid lg:grid-cols-[1fr_auto] items-stretch">
            {/* Left — 가격 & 포함 사항 */}
            <div className="p-8 lg:p-10">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <span className="text-sm font-medium text-[#0078D4]">Starter 플랜</span>
                <span className="text-xs text-[#9CA3AF]">가장 부담 없는 시작</span>
              </div>
              <div className="flex items-baseline gap-1.5 mb-6">
                <span className="text-4xl font-bold tracking-tight text-[#111827]">
                  월 49만원
                </span>
                <span className="text-sm text-[#9CA3AF]">부터</span>
              </div>

              {/* 포함 사항 — 가로 배치 */}
              <div className="flex flex-wrap gap-x-6 gap-y-2.5">
                {[
                  "설비 5대 기본 포함",
                  "실시간 모니터링",
                  "모바일 알림",
                  "3개월 데이터 보관",
                ].map((feat) => (
                  <span key={feat} className="flex items-center gap-2 text-sm text-[#4B5563]">
                    <Check className="w-3.5 h-3.5 text-[#0078D4] shrink-0" />
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — CTA 영역 */}
            <div className="flex flex-col items-center justify-center gap-4 p-8 lg:p-10 lg:pl-0 lg:border-l-0 border-t lg:border-t-0 border-[#E5E7EB] lg:min-w-[260px]">
              <DemoDialog>
                <button className="btn-press group inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold bg-[#0078D4] text-white rounded-lg hover:bg-[#106EBE] transition-colors duration-200 w-full justify-center">
                  무료 상담 신청
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </DemoDialog>
              <Link
                href="/pricing"
                className="btn-press inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-[#374151] bg-white rounded-lg border border-[#E5E7EB] hover:bg-white hover:border-[#D1D5DB] transition-colors duration-200 w-full justify-center"
              >
                전체 요금제 비교하기
              </Link>
              <p className="text-xs text-[#9CA3AF] text-center">
                Standard · Enterprise 플랜도 확인해 보세요
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
