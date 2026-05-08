import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/pinturas-ciudad-jardin",
  images: { unoptimized: true },
};

export default nextConfig;
