import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable SWC minification for faster builds
  swcMinify: true,
  
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  
  // Reduce bundle size by excluding unused dependencies
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'react-icons',
      '@radix-ui/react-icons',
      'framer-motion'
    ],
    // Development optimizations
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },

  // Development-specific optimizations
  ...(process.env.NODE_ENV === 'development' && {
    // Faster refresh in development
    webpack: (config, { dev, isServer }) => {
      if (dev && !isServer) {
        // Optimize for faster refresh
        config.watchOptions = {
          poll: 1000,
          aggregateTimeout: 300,
          ignored: ['**/node_modules', '**/.git', '**/.next'],
        };
      }
      return config;
    },
    // Reduce file watching overhead
    onDemandEntries: {
      // Period (in ms) where the server will keep pages in the buffer
      maxInactiveAge: 25 * 1000,
      // Number of pages that should be kept simultaneously without being disposed
      pagesBufferLength: 2,
    },
  }),
};

export default withBundleAnalyzer(nextConfig);
