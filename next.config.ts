import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    
    // Disable caching to fix server build issues
    if (!config.cache) {
      config.cache = false;
    }

    return config;
  },
};

export default nextConfig;
