"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Clock, Factory } from "lucide-react";

const trustPoints = [
  {
    icon: Factory,
    title: "최적화된 타겟 현장",
    description: "정밀 가공, 프레스 타발, 사출 성형 등 데이터가 절실한 모든 제조 현장에 최적화되어 있습니다.",
  },
  {
    icon: Cpu,
    title: "검증된 하드웨어 사양",
    description: "0.001초 단위의 인터럽트 처리 기술로 단 하나의 신호 누락도 허용하지 않습니다.",
  },
  {
    icon: ShieldCheck,
    title: "안정적인 데이터 보안",
    description: "현장의 소중한 생산 데이터를 암호화하여 서버로 안전하게 전송하고 보관합니다.",
  },
  {
    icon: Clock,
    title: "신속한 기술 지원",
    description: "도입 후 발생하는 기술적 문의에 대해 숙련된 엔지니어가 즉각 대응합니다.",
  },
];

export function TrustSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0B0C10] overflow-hidden border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-[#00A3FF] tracking-[0.2em] uppercase mb-5"
          >
            Trust &amp; Reliability
          </motion.p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
            <span className="text-white/40">우리가 </span>
            <span className="text-[#e8e8e8]">신뢰를 지키는 방식</span>
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto text-lg leading-relaxed">
            단순히 기능을 제공하는 것을 넘어, 현장에서 실제로 믿고 사용할 수 있는 인프라를 구축합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00A3FF]/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00A3FF]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <point.icon className="w-6 h-6 text-[#00A3FF]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                {point.title}
              </h3>
              <p className="text-[#888888] text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
