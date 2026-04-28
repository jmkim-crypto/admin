"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const HIDE_CHROME_PATHS = ["/login", "/mypage"];

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome = HIDE_CHROME_PATHS.some((p) => pathname.startsWith(p));

  if (hideChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <Navigation />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </>
  );
}
