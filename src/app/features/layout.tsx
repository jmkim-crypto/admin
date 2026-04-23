import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "기능 소개 — FactoryPulse",
  description:
    "PLC·IoT 센서 연동, 실시간 모바일 알림, AI 기반 데이터 분석까지. FactoryPulse의 핵심 기능을 확인하세요.",
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
