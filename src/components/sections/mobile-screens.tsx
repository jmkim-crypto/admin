"use client";

import Image from "next/image";

/* ── Helper: Full-bleed screen image that fills the iPhone mockup ──────── */
function ScreenImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full h-full relative bg-[#F3F4F6]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes="260px"
        priority
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


