"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  { name: "정밀 가공", image: "/images/industries/cnc-machining.png" },
  { name: "사출 성형", image: "/images/industries/injection-molding.png" },
  { name: "프레스 타발", image: "/images/industries/press-stamping.png" },
  { name: "전자부품 조립", image: "/images/industries/electronics-assembly.png" },
  { name: "다이캐스팅", image: "/images/industries/die-casting.png" },
  { name: "도장", image: "/images/industries/painting-coating.png" },
  { name: "고무 성형", image: "/images/industries/rubber-molding.png" },
];

export function IndustryCards() {
  return (
    <section className="relative py-24 lg:py-32 bg-white border-t border-[#E5E7EB]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-14"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-[#111827]">
            우리 현장에도 적용할 수 있을까?
          </h2>
          <p className="text-[#6B7280] text-base leading-relaxed">
            전기 신호가 발생하는 제조 현장이라면 어디서든 시작할 수 있습니다.
          </p>
        </motion.div>

        {/* Cards — horizontal scroll on mobile, grid on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {industries.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                href="/product#industries"
                className="group relative block aspect-[4/3] rounded-xl overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between">
                  <span className="text-sm font-semibold text-white">{item.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}

          {/* +More card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: industries.length * 0.04 }}
          >
            <Link
              href="/product#industries"
              className="group flex flex-col items-center justify-center aspect-[4/3] rounded-xl border border-dashed border-[#D1D5DB] hover:border-[#0078D4] hover:bg-[#F9FAFB] transition-all duration-300"
            >
              <span className="text-sm font-semibold text-[#9CA3AF] group-hover:text-[#0078D4] transition-colors mb-1">
                + 더 많은 산업
              </span>
              <span className="text-xs text-[#D1D5DB] group-hover:text-[#6B7280] transition-colors">
                상세 보기
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
