"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star, TrendingUp } from "lucide-react";

const stories = [
  {
    company: "A 자동차부품",
    role: "생산관리팀장 김 부장",
    quote:
      "FactoryPulse 도입 후 비계획적 정지가 월 12시간에서 2시간으로 줄었습니다. 예지 보전 알고리즘이 진동 센서 이상을 사전에 감지해 대형 사고를 방지한 사례가 인상적이었습니다.",
    result: "가동률 28% 향상",
    industry: "자동차부품",
    rating: 5,
    accentColor: "#3b82f6",
  },
  {
    company: "B 반도체장비",
    role: "CTO 박 상무",
    quote:
      "200대 이상의 설비를 실시간으로 모니터링할 수 있게 되면서, 엔지니어들의 현장 순회 시간이 70% 줄었습니다. 리포트 자동화 덕분에 경영진 보고도 훨씬 수월해졌습니다.",
    result: "운영비용 35% 절감",
    industry: "반도체",
    rating: 5,
    accentColor: "#10b981",
  },
  {
    company: "C 식품제조",
    role: "공장장 이 전무",
    quote:
      "24시간 가동되는 생산 라인에서 야간 근무자의 부담이 크게 줄었습니다. 모바일 알림으로 이상 징후를 즉시 파악하니, 긴급 대응 시간이 15분에서 3분으로 단축되었습니다.",
    result: "대응시간 80% 단축",
    industry: "식품",
    rating: 5,
    accentColor: "#8b5cf6",
  },
];

export function SuccessStories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 lg:py-40 border-t border-white/[0.04] overflow-hidden">
      {/* Ambient light */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#1a1a2e]/40 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-semibold text-[#3b82f6] tracking-[0.2em] uppercase mb-5">
            Success Stories
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mb-5">
            <span className="text-[#e8e8e8]">현장에서 검증된 </span>
            <span className="gradient-text">성공 사례</span>
          </h2>
          <p className="text-[#666666] max-w-xl mx-auto text-[15px] leading-relaxed">
            다양한 제조 분야에서 FactoryPulse가 만들어낸 실질적인 변화를 확인하세요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {stories.map((story, i) => (
            <motion.div
              key={story.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
              whileHover={{ y: -5 }}
              className="group card-glow"
            >
              <div
                className="h-full rounded-2xl p-7 flex flex-col transition-all duration-400"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Top accent line */}
                <div
                  className="h-px w-full rounded mb-6 opacity-60"
                  style={{ background: `linear-gradient(90deg, ${story.accentColor}, transparent)` }}
                />

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-5">
                  {[...Array(story.rating)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative flex-1 mb-6">
                  <Quote className="absolute -top-1 -left-1 w-7 h-7 opacity-[0.08]" style={{ color: story.accentColor }} />
                  <p className="text-sm text-[#888888] leading-relaxed pl-3 italic">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>

                {/* Result */}
                <div className="mb-5">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold"
                    style={{
                      color: story.accentColor,
                      background: `${story.accentColor}12`,
                      border: `1px solid ${story.accentColor}20`,
                    }}
                  >
                    <TrendingUp className="w-3 h-3" />
                    {story.result}
                  </span>
                </div>

                {/* Attribution */}
                <div className="pt-5 border-t border-white/[0.05]">
                  <p className="text-sm font-semibold text-[#e8e8e8]">{story.company}</p>
                  <p className="text-xs text-[#555555] mt-0.5">{story.role}</p>
                  <span className="inline-block mt-2.5 text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-[#555555] border border-white/[0.05] font-medium tracking-wide uppercase">
                    {story.industry}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
