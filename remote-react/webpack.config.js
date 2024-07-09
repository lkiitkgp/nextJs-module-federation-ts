const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: {
    app: {
      import: "./src/index",
    },
  },
  output: {
    publicPath: "http://localhost:3002/",
  },
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3002,
    allowedHosts: "all",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".mjs"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      //   {
      //     test: /bootstrap\.tsx$/,
      //     loader: "bundle-loader",
      //     options: {
      //       lazy: true,
      //     },
      //   },
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "reactApp",
      filename: "remoteEntry.js",
      exposes: {
        "./ReactComponent": "./src/components/ReactComponent.tsx",
        "./sidebarItems": "./src/components/sidebarItems",
        "./ContentC": "./src/pages/ContentC",
        "./ContentD": "./src/pages/ContentD",
      },
      shared: {
        ...deps,
        react: {
          requiredVersion: false,
          singleton: true,
        },
        "react-dom": {
          requiredVersion: false,
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      publicPath: "/",
    }),
  ],
};
