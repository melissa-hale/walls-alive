import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // You can leave port and pathname empty to allow all
        port: '',
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;