import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인 — Handy MES",
  description: "Handy MES에 로그인하여 스마트 팩토리 데이터를 관리하세요.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {children}
    </div>
  );
}
