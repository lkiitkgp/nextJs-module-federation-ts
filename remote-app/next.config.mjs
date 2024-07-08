import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const nextConfig = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remoteApp',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './RemoteComponent': './src/components/RemoteComponent.tsx',
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: false
          },
          'react-dom': {
            singleton: true,
            requiredVersion: false
          },
        },
      })
    );
    return config;
  },
  async headers() {
    return [
      {
        source: '/_next/static/chunks/remoteEntry.js',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
