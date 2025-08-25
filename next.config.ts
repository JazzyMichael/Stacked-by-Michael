import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/project",
        destination: "/",
        permanent: true,
      },
      {
        source: "/project/:id",
        destination: "/project/:id/workflow",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
