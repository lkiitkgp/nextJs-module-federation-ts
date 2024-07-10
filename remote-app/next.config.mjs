import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "remoteApp",
        filename: "static/chunks/remoteEntry.js",
        // remotes: {
        //   // reactHost: "reactHost@http://localhost:3000/remoteEntry.js",
        // },
        exposes: {
          "./RemoteComponent": "./src/components/RemoteComponent.tsx",
          "./Sidebar": "./src/components/Sidebar",
          "./RemoteSidebar": "./src/components/RemoteSidebar",
          "./ContentA": "./src/pages/ContentA",
          "./ContentB": "./src/pages/ContentB",
          "./sidebarItems": "./src/components/sidebarItems",
          "./RemoteApp": "./src/pages/remoteapp/index.tsx",
        },
        remotes: {
          host: "host@http://localhost:3000/remoteEntry.js",
        },
        shared: {},
        runtime: false,
      })
    );
    return config;
  },
  async headers() {
    return [
      {
        source: "/_next/static/chunks/remoteEntry.js",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
