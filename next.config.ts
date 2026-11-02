import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/3d", destination: "/3d/", permanent: false }];
  },
};

export default nextConfig;
