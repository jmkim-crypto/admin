"use client";

import { motion } from "framer-motion";
import { Cpu, Smartphone, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Cpu,
    title: "기기 설치",
    description: "무선 중계기 및 센서 부착\n(간편 설치)",
  },
  {
    icon: Smartphone,
    title: "앱 설치",
    description: "Handy MES 앱\n다운로드 및 설정",
  },
  {
    icon: BarChart3,
    title: "데이터 가동",
    description: "실시간 데이터 수집 및\n공정 최적화 시작",
  },
];

export function ProcessFlow() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-[#00A3FF] tracking-[0.2em] uppercase mb-5"
          >
            How it works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-6"
          >
            <span className="text-[#475569]">도입부터 가동까지 </span>
            <br className="sm:hidden" />
            <span className="text-[#1E293B]">단 3단계면 충분합니다</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[#00A3FF]/20 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className="relative w-24 h-24 rounded-full bg-white border border-[#F1F5F9] flex items-center justify-center mb-8 transition-all duration-300 group-hover:border-[#00A3FF]/30 group-hover:shadow-[0_20px_25px_-5px_rgba(0,163,255,0.1)] z-10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
                  <step.icon className="w-10 h-10 text-[#00A3FF]" strokeWidth={1.5} />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#00A3FF] text-white text-[12px] font-bold flex items-center justify-center shadow-[0_4px_6px_-1px_rgba(0,163,255,0.3)]">
                    {idx + 1}
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold text-[#1E293B] mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  {/* Connecting Line Style Decoration */}
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#00A3FF]/20 to-transparent mb-4" />
                </div>
                
                <p className="text-[#475569] text-[15px] leading-[1.8] whitespace-pre-line">
                  {step.description}
                </p>

                {/* Arrow (Mobile) */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden mt-8">
                    <ArrowRight className="w-6 h-6 text-[#00A3FF]/30 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
