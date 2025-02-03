import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.steampowered.com'
      },
      {
        protocol: 'https',
        hostname: 'shared.akamai.steamstatic.com'
      }
    ]
  }
};

export default nextConfig;
