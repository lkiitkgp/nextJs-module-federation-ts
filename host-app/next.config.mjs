import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    // if (!options.isServer) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          remoteApp:
            "remoteApp@http://localhost:3001/_next/static/chunks/remoteEntry.js",
          reactApp: "reactApp@http://localhost:3002/remoteEntry.js",
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: false
          },
          "react-dom": {
            singleton: true,
            requiredVersion: false
          },
        },
      })
    );
    // }
    return config;
  },
};

export default nextConfig;
