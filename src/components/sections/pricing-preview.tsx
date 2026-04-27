"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { DemoDialog } from "@/components/demo-dialog";

export function PricingPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 lg:py-40 border-t border-white/[0.04] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1a1a2e]/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs font-semibold text-[#3b82f6] tracking-[0.2em] uppercase mb-5">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mb-5">
            <span className="text-[#e8e8e8]">합리적인 </span>
            <span className="gradient-text">구독형 요금제</span>
          </h2>
          <p className="text-[#666666] max-w-xl mx-auto text-[15px] mb-14 leading-relaxed">
            설비 규모에 맞는 플랜을 선택하세요. 연간 결제 시 20% 할인됩니다.
          </p>

          {/* Pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-lg mx-auto rounded-2xl p-10 lg:p-12 overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(16px)",
            }}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/60 to-transparent" />

            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-4xl lg:text-5xl font-bold tracking-tighter gradient-text">
                월 49만원
              </span>
              <span className="text-[#555555] text-base">부터</span>
            </div>
            <p className="text-sm text-[#555555] mb-10 font-medium">
              Starter 플랜 · 설비 5대 · 기본 모니터링 포함
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/pricing"
                className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-[#3b82f6] text-white rounded-xl hover:bg-[#2563eb] transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                <Zap className="w-4 h-4" />
                요금제 비교하기
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
