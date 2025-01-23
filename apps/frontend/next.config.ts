import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
    },
  },
};

export default nextConfig;
