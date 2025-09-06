import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Replace with your actual image domain
  }
};

export default nextConfig;
