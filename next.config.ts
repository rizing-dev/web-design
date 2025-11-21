import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  
  webpack(config, { dev, isServer }) {
    // Completely disable caching
    config.cache = false;
    
    // Resolve @ alias
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    
    // Disable snapshot optimization that's causing issues
    if (config.snapshot) {
      config.snapshot = {
        ...config.snapshot,
        managedPaths: [],
        immutablePaths: [],
      };
    }
    
    return config;
  },
};

export default nextConfig;