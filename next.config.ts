import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Retina(2x) 디스플레이에서 모바일 목업 이미지가 선명하게 표시되도록
    // 280px 목업 × 2x DPR = 560px 크기를 명시적으로 포함
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 280, 384, 560],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    qualities: [75, 90],
    formats: ["image/webp"],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
