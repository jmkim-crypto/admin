"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { DemoDialog } from "@/components/demo-dialog";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/product", label: "제품소개" },
  { href: "/features", label: "기능" },
  { href: "/pricing", label: "요금제" },
  { href: "/support", label: "고객센터" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E5E7EB]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Image
              src="/images/brand/logo.png"
              alt="Handy MES"
              width={390}
              height={84}
              className="h-8 w-auto object-contain"
              quality={90}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 text-[14px] font-medium rounded-md transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#111827]"
                    : "text-[#6B7280] hover:text-[#374151]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/login"
              className="px-3.5 py-2 text-[14px] font-medium text-[#6B7280] hover:text-[#374151] transition-colors"
            >
              로그인
            </Link>
            <DemoDialog>
              <button className="btn-press px-5 py-2 text-[14px] font-semibold bg-[#0078D4] text-white rounded-lg hover:bg-[#106EBE] transition-colors duration-200">
                무료 상담
              </button>
            </DemoDialog>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-md text-[#6B7280] hover:text-[#374151] hover:bg-[#F3F4F6] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-[#E5E7EB] overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-md text-[15px] font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-[#F3F4F6] text-[#111827]"
                      : "text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#374151]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 space-y-2">
                <Link
                  href="/login"
                  className="block w-full text-center px-4 py-3 text-[15px] font-medium text-[#6B7280] bg-[#F3F4F6] rounded-md"
                >
                  로그인
                </Link>
                <DemoDialog>
                  <button className="btn-press w-full px-4 py-3 text-[15px] font-semibold bg-[#0078D4] text-white rounded-md hover:bg-[#106EBE] transition-colors">
                    무료 상담
                  </button>
                </DemoDialog>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
