import path from "node:path";
import { fileURLToPath } from "node:url";
import withNextIntl from "next-intl/plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const nextIntlConfig = withNextIntl();

/** @type {import("next").NextConfig} */
const config = {
  poweredByHeader: false,
  compress: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1600, 1920, 2560],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  experimental: {
    serverActions: true,
  },
  async headers() {
    return [
      {
        source: "/:all*(webp|avif|jpg|jpeg|png|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            // public/ files aren't content-hashed, so keep this moderate
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextIntlConfig(config);
