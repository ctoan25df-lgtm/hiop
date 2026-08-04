import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.noranghiop.com" }],
        destination: "https://noranghiop.com/:path*",
        permanent: true,
      },
      // Legacy address-guide routes → regional hub
      {
        source: "/guide/domain-changelog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/guide/safe-access",
        destination: "/",
        permanent: true,
      },
      {
        source: "/vs",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
