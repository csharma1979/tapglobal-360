/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable Next.js image optimization for Apache Passenger
    domains: ['tapglobal360.com', 'localhost', '127.0.0.1'],
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
