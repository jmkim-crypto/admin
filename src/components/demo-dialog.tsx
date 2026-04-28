"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Zap, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function DemoDialog({ children }: { children: React.ReactElement }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsOpen(false);
        setTimeout(() => setIsSuccess(false), 500);
      }, 2000);
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger render={children} />
      <DialogContent className="sm:max-w-[440px] bg-white/98 backdrop-blur-3xl border-[#E2E8F0] text-[#1E293B] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.08)]">
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <DialogHeader>
                <DialogTitle className="text-xl font-bold flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#00A3FF]/10 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-[#00A3FF]" />
                  </div>
                  무료 상담 신청
                </DialogTitle>
                <DialogDescription className="text-[#64748B]">
                  전문 컨설턴트가 귀사의 현장에 최적화된 도입 방안을
                  제안해 드립니다.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-sm text-[#475569]">
                    성함
                  </Label>
                  <Input
                    id="name"
                    placeholder="홍길동"
                    required
                    className="bg-[#F8FAFC] border-[#E2E8F0] focus:border-[#00A3FF]/50 text-[#1E293B]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company" className="text-sm text-[#475569]">
                    회사명
                  </Label>
                  <Input
                    id="company"
                    placeholder="(주)팩토리펄스"
                    required
                    className="bg-[#F8FAFC] border-[#E2E8F0] focus:border-[#00A3FF]/50 text-[#1E293B]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-sm text-[#475569]">
                    이메일
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="contact@company.com"
                    required
                    className="bg-[#F8FAFC] border-[#E2E8F0] focus:border-[#00A3FF]/50 text-[#1E293B]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone" className="text-sm text-[#475569]">
                    연락처
                  </Label>
                  <Input
                    id="phone"
                    placeholder="010-0000-0000"
                    required
                    className="bg-[#F8FAFC] border-[#E2E8F0] focus:border-[#00A3FF]/50 text-[#1E293B]"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00A3FF] hover:bg-[#0082cc] text-white font-semibold mt-2 transition-all duration-300 shadow-[0_4px_6px_-1px_rgba(0,163,255,0.2)] btn-press"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      신청 중...
                    </>
                  ) : (
                    "신청 완료하기"
                  )}
                </Button>
                <p className="text-[10px] text-center text-[#94A3B8]">
                  신청 시 개인정보처리방침에 동의하는 것으로 간주됩니다.
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 flex flex-col items-center justify-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#10b981]/15 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#10b981]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E293B] mb-2">신청이 완료되었습니다</h3>
              <p className="text-sm text-[#64748B]">
                24시간 이내에 전문 컨설턴트가 연락드리겠습니다.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
