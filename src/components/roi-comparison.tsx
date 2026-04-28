"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export function ROIComparison() {
  const data = [
    {
      label: "도입 비용",
      traditional: "평균 6,000만 원",
      handy: "월 49만 원",
      highlight: true,
    },
    {
      label: "구축 기간",
      traditional: "평균 3개월 이상",
      handy: "단 1일 (24시간)",
      highlight: true,
    },
    {
      label: "사용 편의성",
      traditional: "복잡한 교육 필수",
      handy: "즉시 사용 가능",
      highlight: false,
    },
    {
      label: "인프라",
      traditional: "PC/서버/공사 필요",
      handy: "모바일/간편 센서",
      highlight: false,
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-20 mb-20">
      <div className="relative rounded-2xl overflow-hidden border border-black/[0.05] bg-white/40 backdrop-blur-xl">
        <div className="grid grid-cols-3 border-b border-black/[0.05] bg-[#F9FAFB]">
          <div className="p-5 text-xs font-bold text-[#4B5563] uppercase tracking-widest">구분</div>
          <div className="p-5 text-xs font-bold text-[#EF4444]/60 uppercase tracking-widest text-center border-x border-black/[0.05]">기존 MES</div>
          <div className="p-5 text-xs font-bold text-[#00A3FF] uppercase tracking-widest text-center">Handy MES</div>
        </div>

        {data.map((item, idx) => (
          <div key={idx} className="grid grid-cols-3 border-b last:border-0 border-black/[0.05] group transition-colors">
            <div className="p-5 text-sm font-medium text-[#374151] flex items-center">{item.label}</div>
            <div className="p-5 text-sm text-[#4B5563] text-center border-x border-black/[0.05] flex items-center justify-center gap-2">
              <X className="w-3.5 h-3.5 text-red-500/30" />
              {item.traditional}
            </div>
            <div className={`p-5 text-sm text-center flex items-center justify-center gap-2 font-bold ${item.highlight ? "text-[#00A3FF]" : "text-[#111827]"}`}>
              <Check className="w-4 h-4 text-[#00A3FF]" />
              {item.handy}
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-center text-[11px] text-[#6B7280] mt-6 tracking-tight">
        * 기존 MES 수치는 국내 중소 제조기업 평균 도입 비용 및 기간을 기준으로 산출되었습니다.
      </p>
    </div>
  );
}
