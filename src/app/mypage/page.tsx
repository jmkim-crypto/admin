"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  CreditCard,
  Package,
  User,
  LogOut,
  ChevronRight,
  Download,
  FileText,
  Plus,
  Shield,
  Building2,
  Phone,
  Mail,
  Users,
  Truck,
  CheckCircle2,
  Calendar,
  Receipt,
  Edit3,
  Copy,
  Eye,
  EyeOff,
  ExternalLink,
} from "lucide-react";

type TabId = "billing" | "orders" | "profile";

/* ─── Billing ─── */
function BillingTab() {
  return (
    <div className="space-y-5">
      {/* Current Plan */}
      <div className="rounded-xl p-6 bg-white border border-[#E5E7EB]">
        <div className="flex items-start justify-between mb-5">
          <div>
            <p className="text-xs text-[#9CA3AF] font-medium mb-0.5">현재 플랜</p>
            <h3 className="text-lg font-semibold text-[#111827]">Standard</h3>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#D1FAE5] text-[#059669]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
            활성
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-5">
          <div>
            <p className="text-xs text-[#9CA3AF] mb-0.5">월 결제 금액</p>
            <p className="text-base font-semibold text-[#111827]">₩1,490,000</p>
          </div>
          <div>
            <p className="text-xs text-[#9CA3AF] mb-0.5">다음 결제일</p>
            <p className="text-base font-semibold text-[#0078D4]">2026.05.15</p>
          </div>
          <div>
            <p className="text-xs text-[#9CA3AF] mb-0.5">관리 설비</p>
            <p className="text-base font-semibold text-[#111827]">12 / 20대</p>
          </div>
        </div>
        <div className="flex gap-2 pt-5 border-t border-[#F3F4F6]">
          <button className="btn-press px-4 py-2 text-sm font-semibold bg-[#0078D4] text-white rounded-lg hover:bg-[#106EBE] transition-colors">
            플랜 업그레이드
          </button>
          <button className="btn-press px-4 py-2 text-sm font-medium text-[#6B7280] bg-[#F3F4F6] rounded-lg hover:bg-[#E5E7EB] transition-colors">
            플랜 변경
          </button>
        </div>
      </div>

      {/* Payment Method */}
      <div className="rounded-xl p-6 bg-white border border-[#E5E7EB]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-[#111827]">결제 수단</h3>
          <button className="text-sm text-[#0078D4] font-medium hover:text-[#106EBE] transition-colors">변경</button>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg bg-[#F9FAFB] border border-[#F3F4F6]">
          <div className="w-10 h-7 rounded bg-[#1F2937] flex items-center justify-center">
            <CreditCard className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-[#111827]">법인 카드 •••• 4832</p>
            <p className="text-xs text-[#9CA3AF]">만료: 09/28</p>
          </div>
        </div>
      </div>

      {/* Receipts */}
      <div className="rounded-xl p-6 bg-white border border-[#E5E7EB]">
        <h3 className="text-sm font-semibold text-[#111827] mb-4">증빙 서류</h3>
        <div className="space-y-0">
          {[
            { date: "2026.04.15", amount: "₩1,490,000" },
            { date: "2026.03.15", amount: "₩1,490,000" },
            { date: "2026.02.15", amount: "₩1,490,000" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-[#F3F4F6] last:border-0">
              <div>
                <p className="text-sm font-medium text-[#111827]">{item.date}</p>
                <p className="text-xs text-[#9CA3AF]">결제 완료</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#111827]">{item.amount}</span>
                <button className="text-xs text-[#0078D4] font-medium hover:text-[#106EBE]">영수증</button>
                <button className="text-xs text-[#6B7280] font-medium hover:text-[#374151]">명세서</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Orders ─── */
function OrdersTab() {
  const orders = [
    { id: "HW-20260402", device: "WIT-1000", qty: 3, date: "2026.04.02", status: "설치 완료", color: "#059669" },
    { id: "HW-20260325", device: "Wizter-5100", qty: 5, date: "2026.03.25", status: "배송 중", color: "#D97706" },
    { id: "HW-20260310", device: "SHAP-1000", qty: 1, date: "2026.03.10", status: "설치 완료", color: "#059669" },
  ];

  return (
    <div className="rounded-xl bg-white border border-[#E5E7EB]">
      <div className="p-6 flex items-center justify-between border-b border-[#F3F4F6]">
        <h3 className="text-sm font-semibold text-[#111827]">하드웨어 주문 내역</h3>
        <button className="text-xs text-[#0078D4] font-medium hover:text-[#106EBE]">+ 추가 구매</button>
      </div>
      <div className="divide-y divide-[#F3F4F6]">
        {orders.map((order) => (
          <div key={order.id} className="flex items-center justify-between px-6 py-4">
            <div>
              <p className="text-sm font-medium text-[#111827]">
                {order.device} <span className="text-[#6B7280] font-normal">× {order.qty}</span>
              </p>
              <p className="text-xs text-[#9CA3AF]">{order.id} · {order.date}</p>
            </div>
            <span className="text-xs font-medium" style={{ color: order.color }}>{order.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Profile ─── */
function ProfileTab() {
  const [showApiKey, setShowApiKey] = useState(false);

  return (
    <div className="space-y-5">
      {/* Company */}
      <div className="rounded-xl p-6 bg-white border border-[#E5E7EB]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-[#111827]">기업 정보</h3>
          <button className="text-xs text-[#0078D4] font-medium hover:text-[#106EBE] flex items-center gap-1">
            <Edit3 className="w-3 h-3" /> 수정
          </button>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { label: "회사명", value: "(주)팩토리펄스" },
            { label: "사업자 번호", value: "123-45-67890" },
            { label: "담당자", value: "김한디" },
            { label: "연락처", value: "02-1544-0538" },
            { label: "이메일", value: "admin@factorypulse.kr" },
          ].map((field, i) => (
            <div key={i} className="p-3 rounded-lg bg-[#F9FAFB]">
              <p className="text-[10px] text-[#9CA3AF] font-medium mb-0.5">{field.label}</p>
              <p className="text-sm font-medium text-[#111827]">{field.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="rounded-xl p-6 bg-white border border-[#E5E7EB]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-[#111827]">권한 관리</h3>
          <button className="text-xs text-[#0078D4] font-medium">+ 계정 추가</button>
        </div>
        <div className="divide-y divide-[#F3F4F6]">
          {[
            { name: "김한디", role: "관리자", email: "admin@factorypulse.kr", initial: "김", color: "#0078D4" },
            { name: "이현장", role: "현장 작업자", email: "lee@factorypulse.kr", initial: "이", color: "#059669" },
            { name: "박감독", role: "현장 감독", email: "park@factorypulse.kr", initial: "박", color: "#D97706" },
          ].map((m, i) => (
            <div key={i} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-semibold" style={{ backgroundColor: m.color }}>
                  {m.initial}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#111827]">{m.name}</p>
                  <p className="text-xs text-[#9CA3AF]">{m.email}</p>
                </div>
              </div>
              <span className="text-xs text-[#6B7280] bg-[#F3F4F6] px-2.5 py-1 rounded-full">{m.role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* API */}
      <div className="rounded-xl p-6 bg-white border border-[#E5E7EB]">
        <h3 className="text-sm font-semibold text-[#111827] mb-1">API 연동 설정</h3>
        <p className="text-xs text-[#9CA3AF] mb-4">외부 ERP 연동을 위한 보안 키</p>
        <div className="flex items-center gap-2">
          <code className="flex-1 text-sm font-mono text-[#111827] bg-[#F9FAFB] px-3 py-2 rounded-lg border border-[#F3F4F6] truncate">
            {showApiKey ? "sk_live_hmes_A1b2C3d4E5f6G7h8I9j0" : "sk_live_hmes_••••••••••••••••"}
          </code>
          <button onClick={() => setShowApiKey(!showApiKey)} className="p-2 rounded-md hover:bg-[#F3F4F6] text-[#6B7280]">
            {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
          <button className="p-2 rounded-md hover:bg-[#F3F4F6] text-[#6B7280]">
            <Copy className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Main ─── */
export default function MyPage() {
  const [activeTab, setActiveTab] = useState<TabId>("billing");
  const tabs: { id: TabId; label: string }[] = [
    { id: "billing", label: "결제 관리" },
    { id: "orders", label: "주문 내역" },
    { id: "profile", label: "정보 수정" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Top Bar */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-14">
          <Link href="/" className="flex items-center">
            <Image src="/images/brand/logo.png?v=1.2" alt="Handy MES" width={120} height={32} className="h-7 w-auto object-contain" unoptimized />
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm text-[#6B7280] hidden sm:block">(주)팩토리펄스</span>
            <Link href="/" className="text-sm text-[#9CA3AF] hover:text-[#6B7280] transition-colors flex items-center gap-1">
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:block">로그아웃</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-52 shrink-0">
            <div className="lg:sticky lg:top-20">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#0078D4] flex items-center justify-center text-white font-semibold text-sm">
                  김
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111827]">김한디</p>
                  <p className="text-xs text-[#9CA3AF]">관리자</p>
                </div>
              </div>
              <nav className="space-y-0.5">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`btn-press w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? "bg-white text-[#111827] shadow-sm border border-[#E5E7EB]"
                        : "text-[#6B7280] hover:text-[#374151] hover:bg-[#F3F4F6]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
              <div className="mt-5 pt-5 border-t border-[#F3F4F6]">
                <Link href="/support" className="flex items-center gap-2 px-3 py-2 text-sm text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" />
                  고객센터
                </Link>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="mb-6">
              <h1 className="text-xl font-bold text-[#111827]">
                {tabs.find((t) => t.id === activeTab)?.label}
              </h1>
              <p className="text-sm text-[#9CA3AF] mt-0.5">
                {activeTab === "billing" && "구독 플랜과 결제 수단을 관리합니다."}
                {activeTab === "orders" && "하드웨어 구매 및 배송 현황입니다."}
                {activeTab === "profile" && "기업 정보와 사용자 권한을 설정합니다."}
              </p>
            </div>

            {activeTab === "billing" && <BillingTab />}
            {activeTab === "orders" && <OrdersTab />}
            {activeTab === "profile" && <ProfileTab />}
          </div>
        </div>
      </div>
    </div>
  );
}
