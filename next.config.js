/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
}

module.exports = nextConfig