import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/zh-TW',
        permanent: true,
      },
    ];
  },
};

export default nextConfig; 