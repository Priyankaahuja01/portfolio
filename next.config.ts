import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Old Wix URLs → their new homes, so inbound links don't 404 after the
    // domain moves to Vercel. The three Jax pages were consolidated into one.
    return [
      {
        source: "/mobilepricingjaxlab",
        destination: "/work/jackson-laboratory",
        permanent: true,
      },
      {
        source: "/designsystemimplementation",
        destination: "/work/jackson-laboratory",
        permanent: true,
      },
      {
        source: "/legalfacetjax",
        destination: "/work/jackson-laboratory",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
