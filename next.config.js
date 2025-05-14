/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['tapglobal360.com'],
  },
  sassOptions: {
    includePaths: ['./app'],
  },
}

module.exports = nextConfig
