/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  experimental: {
    taint: true,
  },
  async rewrites() {
    return [
      {
        source: "/lp",
        destination: "/lp/index.html",
      },
    ];
  },
};

export default nextConfig;
