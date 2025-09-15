/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // keeps React in strict mode for catching issues
  output: 'export', // enables static export -> creates "out" folder on build

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.vercel.com",
        port: "",
        pathname: "/image/upload/**",
      },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
