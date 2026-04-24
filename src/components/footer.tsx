import Link from "next/link";
import {
  Activity,
  Mail,
  Phone,
  MapPin,
  Shield,
  Lock,
  Award,
  Globe,
  Video,
} from "lucide-react";
import Image from "next/image";

const footerLinks = {
  제품: [
    { label: "기능 소개", href: "/features" },
    { label: "요금제", href: "/pricing" },
    { label: "업데이트 노트", href: "#" },
  ],
  리소스: [
    { label: "기술 문서", href: "#" },
    { label: "API 가이드", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  회사: [
    { label: "회사 소개", href: "http://moornmo.com/intro/" },
  ],
};

const certifications = [
  { icon: Shield, label: "ISO 27001" },
  { icon: Lock, label: "AES-256 암호화" },
  { icon: Award, label: "ISMS 인증" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#030303] border-t border-white/[0.04]">
      {/* Security Banner */}
      <div className="border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-7">
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-20">
            {certifications.map((cert) => (
              <div
                key={cert.label}
                className="flex items-center gap-3 text-[#888888]"
              >
                <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                  <cert.icon className="w-4 h-4 text-[#555555]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#888888]">{cert.label}</p>
                  <p className="text-xs text-[#444444]">인증 완료</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-14">
          {/* Brand */}
          <div className="col-span-2">
            <Link 
              href="http://moornmo.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 mb-6 group"
            >
              <Image
                src="/images/brand/soonsoft.png"
                alt="Soonsoft Logo"
                width={130}
                height={32}
                className="h-8 w-auto object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <p className="text-sm text-[#444444] mb-7 max-w-xs leading-relaxed">
              데이터 기반의 설비 관리 솔루션으로 제조 현장의 디지털 전환을 선도합니다.
            </p>
            <div className="space-y-3">
              <a

                className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#888888] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                support@ilts.co.kr
              </a>
              <a
                className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#888888] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                02-1544-0538
              </a>
              <div className="flex items-center gap-2 text-sm text-[#333333]">
                <MapPin className="w-3.5 h-3.5" />
                서울특별시 구로구 디지털로31길 20 (구로동) 에이스테크노타워 5차 302호
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[11px] font-bold text-[#555555] uppercase tracking-[0.15em] mb-5">
                {category}
              </h3>
              <ul className="space-y-3.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#444444] hover:text-[#888888] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] mt-14 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#333333]">
            © 2026 Handy MES. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="#" className="text-xs text-[#333333] hover:text-[#555555] transition-colors">
              개인정보처리방침
            </Link>
            <Link href="#" className="text-xs text-[#333333] hover:text-[#555555] transition-colors">
              이용약관
            </Link>
            <div className="flex items-center gap-3 ml-2">
              <a href="#" className="text-[#333333] hover:text-[#555555] transition-colors" aria-label="LinkedIn">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="text-[#333333] hover:text-[#555555] transition-colors" aria-label="YouTube">
                <Video className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
