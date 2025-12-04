/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Optimalizácia formátov - AVIF je najmenšie, WebP ako fallback
    formats: ['image/avif', 'image/webp'],
    // Veľkosti pre responzívne obrázky
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Vzdialené zdroje
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // Pre budúce CDN (Cloudflare R2, Bunny, atď.)
      {
        protocol: 'https',
        hostname: '*.r2.cloudflarestorage.com',
      },
      {
        protocol: 'https',
        hostname: '*.cloudflare.com',
      },
    ],
    // Minimalizovať veľkosť
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 dní cache
  },
  // Kompresia
  compress: true,
  // Optimalizácia pre produkciu
  poweredByHeader: false,
  // Strict mode pre lepší development
  reactStrictMode: true,
};

export default nextConfig;
