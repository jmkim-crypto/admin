"use client";

import { motion } from "framer-motion";

const trustPoints = [
  {
    title: "최적화된 타겟 현장",
    description: "정밀 가공, 프레스 타발, 사출 성형 등 데이터가 절실한 모든 제조 현장에 최적화되어 있습니다.",
  },
  {
    title: "검증된 하드웨어 사양",
    description: "0.001초 단위의 인터럽트 처리 기술로 단 하나의 신호 누락도 허용하지 않습니다.",
  },
  {
    title: "안정적인 데이터 보안",
    description: "현장의 소중한 생산 데이터를 AES-256으로 암호화하여 서버로 안전하게 전송합니다.",
  },
  {
    title: "신속한 기술 지원",
    description: "도입 후 발생하는 기술적 문의에 대해 숙련된 엔지니어가 평균 2시간 내 대응합니다.",
  },
];

export function TrustSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#F5F5F5] border-t border-[#E5E7EB]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          {/* Left — heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-[#111827]"
            >
              우리가 신뢰를 지키는 방식
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-[#6B7280] text-base leading-relaxed"
            >
              단순히 기능을 제공하는 것을 넘어,
              현장에서 실제로 믿고 사용할 수 있는 인프라를 구축합니다.
            </motion.p>
          </div>

          {/* Right — items (비대칭 리스트) */}
          <div className="space-y-0">
            {trustPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * idx }}
                className="py-7 border-b border-[#E5E7EB] last:border-0"
              >
                <h3 className="text-base font-semibold text-[#111827] mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
