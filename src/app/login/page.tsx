"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
  Loader2,
  Smartphone,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/mypage");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-[#FAFAFA]">
      {/* Left: Brand Panel */}
      <div className="hidden lg:flex lg:w-[45%] relative flex-col justify-between p-12 xl:p-16 bg-white border-r border-[#E5E7EB]">
        <Link href="/" className="inline-flex">
          <Image
            src="/images/brand/logo.png?v=1.2"
            alt="Handy MES"
            width={140}
            height={36}
            className="h-8 w-auto object-contain"
            unoptimized
          />
        </Link>

        <div className="flex-1 flex flex-col justify-center max-w-sm">
          <h1 className="text-2xl xl:text-3xl font-bold text-[#111827] tracking-tight leading-tight mb-4">
            현장의 데이터가
            <br />
            경영의 근거가 됩니다
          </h1>
          <p className="text-[#6B7280] text-[15px] leading-relaxed mb-8">
            스마트폰 하나로 공장 전체를 모니터링하고 관리하세요.
          </p>

          <div className="flex gap-8">
            {[
              { value: "500+", label: "도입 현장" },
              { value: "99.8%", label: "가동률" },
              { value: "24hr", label: "즉시 도입" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-xl font-bold text-[#111827]">{stat.value}</p>
                <p className="text-xs text-[#9CA3AF] mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-[#D1D5DB]">
          © 2026 Handy MES. All rights reserved.
        </p>
      </div>

      {/* Right: Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 lg:p-16">
        <div className="w-full max-w-[400px]">
          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-10">
            <Link href="/">
              <Image
                src="/images/brand/logo.png?v=1.2"
                alt="Handy MES"
                width={140}
                height={36}
                className="h-8 w-auto object-contain"
                unoptimized
              />
            </Link>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#111827] mb-1">로그인</h2>
            <p className="text-sm text-[#9CA3AF]">Handy MES 계정으로 로그인하세요</p>
          </div>

          {/* Social Login */}
          <div className="space-y-2.5 mb-6">
            <button className="btn-press w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-lg bg-white border border-[#E5E7EB] text-[#374151] text-sm font-medium hover:bg-[#F9FAFB] transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Google Workspace로 계속하기
            </button>
            <button className="btn-press w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-lg bg-white border border-[#E5E7EB] text-[#374151] text-sm font-medium hover:bg-[#F9FAFB] transition-colors">
              <Smartphone className="w-4 h-4 text-[#6B7280]" />
              모바일 간편 인증
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center mb-6">
            <div className="flex-1 h-px bg-[#E5E7EB]" />
            <span className="px-3 text-xs text-[#9CA3AF]">또는</span>
            <div className="flex-1 h-px bg-[#E5E7EB]" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-[#374151] block mb-1.5">이메일</label>
              <input
                type="email"
                placeholder="name@company.com"
                required
                className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E5E7EB] text-[#111827] text-sm placeholder:text-[#D1D5DB] focus:outline-none focus:border-[#0078D4] focus:ring-1 focus:ring-[#0078D4]/20 transition-all"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#374151] block mb-1.5">비밀번호</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="w-full px-3.5 py-2.5 pr-10 rounded-lg bg-white border border-[#E5E7EB] text-[#111827] text-sm placeholder:text-[#D1D5DB] focus:outline-none focus:border-[#0078D4] focus:ring-1 focus:ring-[#0078D4]/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6B7280] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="w-3.5 h-3.5 rounded border-[#D1D5DB] text-[#0078D4] focus:ring-[#0078D4]/20"
                />
                <span className="text-sm text-[#6B7280]">자동 로그인</span>
              </label>
              <Link href="#" className="text-sm text-[#0078D4] hover:text-[#106EBE] font-medium transition-colors">
                비밀번호 찾기
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-press w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#0078D4] text-white text-sm font-semibold hover:bg-[#106EBE] transition-colors disabled:opacity-50 mt-1"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  로그인
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Security note */}
          <div className="flex items-center justify-center gap-1.5 mt-5 text-xs text-[#059669]">
            <ShieldCheck className="w-3.5 h-3.5" />
            AES-256 보안 연결
          </div>

          {/* Footer */}
          <div className="text-center mt-6 text-sm text-[#9CA3AF]">
            아직 도입 전인가요?{" "}
            <Link href="/" className="text-[#0078D4] font-medium hover:text-[#106EBE]">
              무료 상담 신청
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
