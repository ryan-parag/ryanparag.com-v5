/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.mux.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/projects/vanilla-extract-calculator',
        destination: '/projects/pantry-calculators',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
