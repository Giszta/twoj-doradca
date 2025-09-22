import type { Configuration } from "webpack";

const nextConfig = {
  webpack(config: Configuration) {
    if (config.module && config.module.rules) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      });
    }
    return config;
  },
};

export default nextConfig;
