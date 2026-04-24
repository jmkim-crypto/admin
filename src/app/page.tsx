import { HeroSection } from "@/components/sections/hero";
import { ValueProps } from "@/components/sections/value-props";
import { HardwareEcosystem } from "@/components/sections/hardware-ecosystem";
import { UIShowcase } from "@/components/sections/ui-showcase";
import { PricingPreview } from "@/components/sections/pricing-preview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProps />
      <HardwareEcosystem />
      <UIShowcase />
      <PricingPreview />
    </>
  );
}
