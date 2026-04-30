"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ── Helper: Full-bleed screen image that fills the iPhone mockup ──────── */
function ScreenImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full h-full relative bg-white overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top scale-[1.02] transition-transform duration-500"
        sizes="280px"
        priority
        unoptimized
      />
    </div>
  );
}

/* ── Screen 1: Dashboard ────────────────────────────────────────────────── */
export function DashboardScreen() {
  return <ScreenImage src="/images/mobile-screens/dashboard.png" alt="Handy MES 대시보드 - 공장 현황 대시보드" />;
}

/* ── Screen 2: Task List ────────────────────────────────────────────────── */
export function TaskListScreen() {
  return <ScreenImage src="/images/mobile-screens/tasklist.png" alt="Handy MES 작업지시 조회 - 작업 목록" />;
}

/* ── Screen 3: Task Detail ──────────────────────────────────────────────── */
export function TaskDetailScreen() {
  return <ScreenImage src="/images/mobile-screens/taskdetail.png" alt="Handy MES 작업 상세 - 시작/종료" />;
}

/* ── Screen 4: Management ───────────────────────────────────────────────── */
export function ManagementScreen() {
  return <ScreenImage src="/images/mobile-screens/management.png" alt="Handy MES 관리 - 사용자/설비/제품 관리" />;
}

/* ── Screen 5: Settings ────────────────────────────────────────────────── */
export function SettingsScreen() {
  return <ScreenImage src="/images/mobile-screens/setting.png" alt="Handy MES 설정" />;
}

/* -- Screen 6: Data -------------------------------------------------- */
export function DataScreen() {
  return <ScreenImage src="/images/mobile-screens/data.png" alt="Handy MES 데이터 통계" />;
}
