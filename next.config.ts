import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
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
      {
        source: "/dashboard",
        destination: "/dashboard/projects",
        permanent: true,
      },
      {
        source: "/auth",
        destination: "/auth/login",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
