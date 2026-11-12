/** @type {import('next').NextConfig} */
// Default build targets Vercel (image optimisation on).
// For GitHub Pages / any static host run:  NEXT_EXPORT=true npm run build  (outputs ./out)
const isExport = process.env.NEXT_EXPORT === 'true'

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  ...(isExport ? { output: 'export', trailingSlash: true } : {}),
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: isExport,
  },
}

module.exports = nextConfig
