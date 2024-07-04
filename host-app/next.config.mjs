import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const nextConfig = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          remoteApp: 'remoteApp@http://localhost:3001/_next/static/chunks/remoteEntry.js',
        },
        shared: {
          react: {
            singleton: true,
          },
          'react-dom': {
            singleton: true,
          },
        },
      })
    );
    return config;
  },
};

export default nextConfig;
