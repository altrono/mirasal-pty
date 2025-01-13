import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "noEmit": false,
    "incremental": true
  },
  "exclude": ["**/*.test.ts", "**/*.test.tsx", "cypress"]
};

export default nextConfig;
