/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.cache = false; // Отключает кеширование Webpack
    return config;
  },
};

export default nextConfig;
