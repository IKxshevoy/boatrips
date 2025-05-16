import withNextIntl from "next-intl/plugin";

const nextIntlConfig = withNextIntl();

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextIntlConfig(config);
