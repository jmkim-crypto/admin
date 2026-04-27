"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Menu, X } from "lucide-react";
import { DemoDialog } from "@/components/demo-dialog";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/features", label: "기능" },
  { href: "/pricing", label: "요금제" },
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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0B0C10]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2.5 group"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Image
              src="/images/brand/logo.png"
              alt="Handy MES Logo"
              width={140}
              height={40}
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2.5 text-[15px] font-semibold rounded-lg transition-all duration-200 ${
                  pathname === link.href
                    ? "text-white"
                    : "text-[#888888] hover:text-[#e8e8e8]"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-1 left-3 right-3 h-px bg-gradient-to-r from-transparent via-[#00a3ff] to-transparent"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <DemoDialog>
              <button className="inline-flex items-center gap-1.5 px-6 py-2.5 text-[15px] font-bold bg-white text-black rounded-lg hover:bg-white/90 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.08)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                무료 상담 신청
              </button>
            </DemoDialog>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 text-[#888888] hover:text-white transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
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
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-[#0B0C10]/95 backdrop-blur-2xl border-t border-white/[0.05] overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-5 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-5 py-4 rounded-lg text-[15px] font-semibold transition-all duration-200 ${
                    pathname === link.href
                      ? "bg-white/[0.04] text-white"
                      : "text-[#888888] hover:bg-white/[0.03] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <DemoDialog>
                  <button className="w-full inline-flex items-center justify-center px-5 py-4 text-[15px] font-bold bg-white text-black rounded-lg hover:bg-white/90 transition-all duration-200">
                    무료 상담 신청
                  </button>
                </DemoDialog>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
