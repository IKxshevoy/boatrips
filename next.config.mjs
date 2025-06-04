import withNextIntl from "next-intl/plugin";

const nextIntlConfig = withNextIntl();

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [],
  },
  experimental: {
    serverActions: true,
    // Add this to disable internal clustering
    disableOptimizedLoading: true
  },
  // For newer Next.js versions (v13.3+), also add:
  cli: {
    devServer: {
      port: 3000, // Explicitly set port
      strictPort: true // Prevent automatic port switching
    }
  }
};

export default nextIntlConfig(config);