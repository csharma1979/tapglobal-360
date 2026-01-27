/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['tapglobal360.com'],
  },
  sassOptions: {
    includePaths: ['./app'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Handle commonjs modules
    config.externals.push('canvas')
    
    return config;
  },
}

module.exports = nextConfig
