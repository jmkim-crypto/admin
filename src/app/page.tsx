import { HeroSection } from "@/components/sections/hero";
import { ValueProps } from "@/components/sections/value-props";
import { ProcessFlow } from "@/components/sections/process-flow";
import { HardwareEcosystem } from "@/components/sections/hardware-ecosystem";
import { UIShowcase } from "@/components/sections/ui-showcase";
import { PricingPreview } from "@/components/sections/pricing-preview";
import { TrustSection } from "@/components/sections/trust-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProps />
      <ProcessFlow />
      <HardwareEcosystem />
      <UIShowcase />
      <TrustSection />
      <PricingPreview />

    </>
  );
}
