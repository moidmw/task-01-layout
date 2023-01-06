/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'altcampus.github.io'
      }
    ]
  }
}

module.exports = nextConfig
