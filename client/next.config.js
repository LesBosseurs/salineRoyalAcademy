/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  webpack: (config, _) => ({
    ...config,
    watchOptions: {
      ...config.watchOptions,
      poll: 800,
      aggregateTimeout: 300,
    },
  }),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.rts.ch',
      },
      {
        protocol: 'https', 
        hostname: 'tse1.explicit.bing.net'
      }
    ],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/landing-page/',
      },
    ];
  },
};
