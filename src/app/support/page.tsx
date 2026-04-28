"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Wrench,
  CreditCard,
  Smartphone,
  ChevronDown,
  MessageCircle,
  Monitor,
  Phone,
  Mail,
  Send,
  X,
  Book,
  Upload,
} from "lucide-react";

/* ─── FAQ Data ─── */
const faqCategories = [
  {
    id: "install",
    label: "설치 & 설정",
    faqs: [
      { q: "하드웨어 기기 설치는 어떻게 진행되나요?", a: "전문 엔지니어가 현장을 방문하여 무선 중계기(SHAP-1000)와 데이터 단말기(WIT-1000)를 설치합니다. 설비 5대 기준 약 2~3시간 내에 완료되며, 별도 배선 공사 없이 진행됩니다." },
      { q: "기존 레거시 설비에도 연동이 되나요?", a: "네, 대부분의 레거시 설비에 연동 가능합니다. 전기 신호를 출력할 수 있는 설비라면 WIT-1000을 통해 데이터 수집이 가능하며, 특수한 경우 호환 어댑터를 무상 제공합니다." },
      { q: "Wi-Fi 환경이 없어도 사용 가능한가요?", a: "Handy MES 하드웨어는 자체 무선 네트워크(SHAP-1000)를 구축하므로 Wi-Fi에 의존하지 않습니다. 수집 컴퓨터에만 인터넷 연결이 필요합니다." },
    ],
  },
  {
    id: "billing",
    label: "결제 & 요금",
    faqs: [
      { q: "결제 주기는 어떻게 되나요?", a: "월 단위 자동 결제와 연 단위 선결제 중 선택 가능합니다. 연간 결제 시 20% 할인 혜택이 제공됩니다." },
      { q: "세금계산서 발행이 가능한가요?", a: "네, 마이페이지 > 결제 관리에서 매월 세금계산서와 거래명세서를 PDF로 다운로드하실 수 있습니다." },
      { q: "해지 시 위약금이 있나요?", a: "위약금은 없습니다. 플랜 업그레이드는 즉시 적용, 다운그레이드와 해지는 다음 결제일부터 반영됩니다." },
    ],
  },
  {
    id: "app",
    label: "앱 & 기능",
    faqs: [
      { q: "앱 로그인이 안 되는 경우 어떻게 하나요?", a: "인터넷 연결 상태를 확인해 주세요. 비밀번호 분실 시 로그인 화면의 '비밀번호 찾기'를 통해 재설정 가능합니다." },
      { q: "알림 설정은 어떻게 변경하나요?", a: "앱 내 설정 > 알림 관리에서 카테고리별로 푸시 알림을 세밀하게 설정하실 수 있습니다." },
      { q: "여러 공장을 한 계정에서 관리할 수 있나요?", a: "Enterprise 플랜에서 다중 사이트 관리가 가능합니다. 각 공장별 독립 대시보드와 통합 관제를 지원합니다." },
    ],
  },
];

/* ─── FAQ Item ─── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-[#F3F4F6] last:border-0`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className={`text-[15px] font-medium pr-4 ${isOpen ? "text-[#111827]" : "text-[#4B5563]"}`}>
          {q}
        </span>
        <ChevronDown className={`w-4 h-4 text-[#9CA3AF] shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-[#6B7280] leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Contact Slide-over ─── */
function ContactForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/15 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-[440px] bg-white border-l border-[#E5E7EB] shadow-xl z-50 overflow-y-auto"
          >
            <div className="p-7">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#111827]">1:1 기술 문의</h3>
                  <p className="text-xs text-[#9CA3AF]">평균 응답 시간: 2시간 이내</p>
                </div>
                <button onClick={onClose} className="p-1.5 rounded-md hover:bg-[#F3F4F6] text-[#9CA3AF] transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-[#374151] block mb-1.5">문의 유형</label>
                  <select className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E5E7EB] text-sm text-[#111827] focus:outline-none focus:border-[#0078D4]">
                    <option>설치 및 설정</option>
                    <option>앱 오류</option>
                    <option>결제 및 요금</option>
                    <option>하드웨어 장애</option>
                    <option>기타</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-[#374151] block mb-1.5">제목</label>
                  <input type="text" placeholder="문의 제목" className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7EB] text-sm placeholder:text-[#D1D5DB] focus:outline-none focus:border-[#0078D4]" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#374151] block mb-1.5">내용</label>
                  <textarea rows={4} placeholder="현장 상황을 상세히 기술해 주세요." className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7EB] text-sm placeholder:text-[#D1D5DB] focus:outline-none focus:border-[#0078D4] resize-none" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#374151] block mb-1.5">현장 사진 첨부</label>
                  <div className="border border-dashed border-[#D1D5DB] rounded-lg p-5 text-center hover:border-[#9CA3AF] transition-colors cursor-pointer">
                    <Upload className="w-6 h-6 text-[#D1D5DB] mx-auto mb-2" />
                    <p className="text-sm text-[#6B7280]">클릭하거나 드래그</p>
                    <p className="text-xs text-[#9CA3AF] mt-0.5">JPG, PNG, PDF (최대 10MB)</p>
                  </div>
                </div>
                <button type="button" className="btn-press w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#0078D4] text-white text-sm font-semibold hover:bg-[#106EBE] transition-colors">
                  <Send className="w-4 h-4" />
                  문의 접수
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─── Main ─── */
export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("install");
  const [isContactOpen, setIsContactOpen] = useState(false);

  const activeFAQs = faqCategories.find((c) => c.id === activeCategory)?.faqs || [];

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-12 lg:pt-40 lg:pb-16">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] tracking-tight mb-4">
            무엇을 도와드릴까요?
          </h1>
          <p className="text-[#6B7280] text-base mb-8">
            설치, 기능, 결제에 관한 궁금증을 빠르게 해결해 드립니다.
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="검색 (예: 설치 방법, 로그인)"
              className="w-full pl-11 pr-4 py-3 rounded-lg bg-white border border-[#E5E7EB] text-sm text-[#111827] placeholder:text-[#D1D5DB] focus:outline-none focus:border-[#0078D4] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex gap-1 mb-8 border-b border-[#E5E7EB]">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
                  activeCategory === cat.id
                    ? "text-[#111827] border-[#111827]"
                    : "text-[#9CA3AF] border-transparent hover:text-[#6B7280]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div>
            {activeFAQs.map((faq, i) => (
              <FAQItem key={`${activeCategory}-${i}`} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-[#111827] mb-6">추가 지원</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "사용 매뉴얼", desc: "PDF 가이드북 다운로드" },
              { title: "원격 지원", desc: "화면 공유로 즉시 해결" },
              { title: "전화 상담", desc: "02-1544-0538" },
              { title: "이메일", desc: "support@ilts.co.kr" },
            ].map((item, i) => (
              <button
                key={i}
                className="btn-press text-left p-4 rounded-lg bg-white border border-[#E5E7EB] hover:border-[#D1D5DB] transition-colors"
              >
                <h3 className="text-sm font-semibold text-[#111827] mb-0.5">{item.title}</h3>
                <p className="text-xs text-[#9CA3AF]">{item.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Floating chat */}
      <button
        onClick={() => setIsContactOpen(true)}
        className="btn-press fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#0078D4] text-white shadow-lg hover:bg-[#106EBE] transition-colors flex items-center justify-center"
      >
        <MessageCircle className="w-5 h-5" />
      </button>

      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
