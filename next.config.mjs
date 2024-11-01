/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "storage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
