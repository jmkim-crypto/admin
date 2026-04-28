import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Video } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  제품: [
    { label: "제품소개", href: "/product" },
    { label: "기능", href: "/features" },
    { label: "요금제", href: "/pricing" },
  ],
  리소스: [
    { label: "FAQ", href: "/support" },
  ],
  회사: [
    { label: "회사 소개", href: "http://moornmo.com/intro/" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E7EB]">
      {/* Main */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link
              href="http://moornmo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-5"
            >
              <Image
                src="/images/brand/soonsoft.png"
                alt="Soonsoft"
                width={100}
                height={28}
                className="h-6 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity"
              />
            </Link>
            <p className="text-sm text-[#9CA3AF] mb-5 max-w-[260px] leading-relaxed">
              데이터 기반 설비 관리 솔루션으로 제조 현장의 디지털 전환을 선도합니다.
            </p>
            <div className="space-y-2">
              <a className="flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
                <Mail className="w-3.5 h-3.5" />
                support@ilts.co.kr
              </a>
              <a className="flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
                <Phone className="w-3.5 h-3.5" />
                02-1544-0538
              </a>
              <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                서울특별시 구로구 디지털로31길 20 에이스테크노타워 5차 302호
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-[#6B7280] mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-[#F3F4F6] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#D1D5DB]">© 2026 Handy MES. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
              개인정보처리방침
            </Link>
            <Link href="#" className="text-xs text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
