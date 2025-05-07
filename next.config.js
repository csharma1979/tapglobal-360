/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  sassOptions: {
    includePaths: ['./app'],
  },
}

module.exports = nextConfig