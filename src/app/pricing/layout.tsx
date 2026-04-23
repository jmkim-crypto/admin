import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "요금제 — FactoryPulse",
  description:
    "Starter, Standard, Enterprise 플랜 비교. 연간 결제 시 20% 할인. 14일 무료 체험 포함.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
