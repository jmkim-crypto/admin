"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DemoDialog } from "@/components/demo-dialog";
import { ROIComparison } from "@/components/roi-comparison";

export function PricingPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 border-t border-[#E5E7EB] bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
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

        <ROIComparison />

        {/* Pricing card — 심플한 박스 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-md mx-auto rounded-xl p-8 lg:p-10 bg-[#F9FAFB] border border-[#E5E7EB] text-center mt-12"
        >
          <div className="flex items-baseline justify-center gap-1.5 mb-1.5">
            <span className="text-3xl font-bold tracking-tight text-[#111827]">
              월 49만원
            </span>
            <span className="text-[#9CA3AF] text-sm">부터</span>
          </div>
          <p className="text-sm text-[#9CA3AF] mb-8">
            Starter 플랜 · 설비 5대 · 기본 모니터링 포함
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <DemoDialog>
              <button className="btn-press group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-[#0078D4] text-white rounded-lg hover:bg-[#106EBE] transition-colors duration-200 w-full sm:w-auto justify-center">
                무료 상담 신청
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </DemoDialog>
            <Link
              href="/pricing"
              className="text-sm font-medium text-[#6B7280] hover:text-[#374151] transition-colors"
            >
              요금제 상세 보기 →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
