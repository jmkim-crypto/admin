"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "1",
    title: "기기 설치",
    description: "무선 중계기 및 센서를 설비에 부착합니다. 별도 배선 공사 없이 간편하게 설치됩니다.",
    time: "약 2시간",
  },
  {
    num: "2",
    title: "앱 설치",
    description: "Handy MES 앱을 다운로드하고 기본 설정을 완료합니다. 복잡한 교육이 필요 없습니다.",
    time: "약 30분",
  },
  {
    num: "3",
    title: "데이터 가동",
    description: "실시간 데이터 수집이 시작되고, 공정 최적화를 위한 인사이트를 확인할 수 있습니다.",
    time: "즉시",
  },
];

export function ProcessFlow() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-[#111827]"
          >
            도입부터 가동까지, 단 3단계
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-[#6B7280] text-base leading-relaxed"
          >
            하루 안에 스마트 팩토리 전환이 완료됩니다.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 + idx * 0.06 }}
              className="relative bg-white rounded-xl p-7 border border-[#E5E7EB]"
            >
              {/* Step number */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-3xl font-bold text-[#E5E7EB]">
                  {step.num}
                </span>
                <span className="text-xs text-[#9CA3AF] font-medium">
                  {step.time}
                </span>
              </div>

              <h3 className="text-base font-semibold text-[#111827] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {step.description}
              </p>

              {/* Arrow connector for non-last items (mobile) */}
              {idx < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-5">
                  <ArrowRight className="w-4 h-4 text-[#D1D5DB] rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
