import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConditionalLayout } from "@/components/conditional-layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});



export const metadata: Metadata = {
  title: "Handy MES — 스마트 팩토리 설비 관리 솔루션",
  description:
    "멈추지 않는 공장, 데이터로 완성하는 설비 관리의 새로운 기준. 실시간 모니터링, 예지 보전, 리포트 자동화를 하나의 플랫폼에서.",
  keywords: [
    "스마트 팩토리",
    "설비 관리",
    "예지 보전",
    "IoT",
    "제조 MES",
    "SaaS",
  ],
  openGraph: {
    title: "Handy MES — 스마트 팩토리 설비 관리 솔루션",
    description:
      "실시간 모니터링과 예지 보전으로 가동률 25% 향상. 지금 무료 데모를 신청하세요.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
