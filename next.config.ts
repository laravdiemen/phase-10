import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  trailingSlash: true, // Ensures correct routing
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/phase-10/" : "",
  basePath: isProd ? "/phase-10" : "",
  output: "export",
};

export default nextConfig;
