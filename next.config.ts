import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/bumina' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bumina' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
