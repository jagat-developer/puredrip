import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const appDir = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  turbopack: {
    root: appDir,
  },
  images: {
    // Source images in /public/images are pre-sized and compressed at build
    // time, so we serve them straight from the CDN instead of going through
    // the hosted image optimizer (which is metered and returns 402 once the
    // transformation quota runs out, leaving broken images on the page).
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
