import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.steampowered.com'
      }
    ]
  }
};

export default nextConfig;
