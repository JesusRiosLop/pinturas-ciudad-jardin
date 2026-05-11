import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/pinturas-ciudad-jardin" : "",
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/pinturas-ciudad-jardin" : "",
  },
};

export default nextConfig;
