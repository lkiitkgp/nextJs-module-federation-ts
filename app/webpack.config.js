const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",
  entry: {
    app: {
      import: "./src/index",
    },
  },
  cache: false,
  output: {
    publicPath: "http://localhost:3003/",
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
    port: 3003,
    allowedHosts: "all",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    historyApiFallback: true,
  },
  // output: {
  //   publicPath: "auto",
  // },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".mjs"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
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
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        remoteApp:
          "remoteApp@http://localhost:3001/_next/static/chunks/remoteEntry.js",
        reactApp: "reactApp@http://localhost:3002/remoteEntry.js",
      },
      //   exposes: {
      //     "./TemplatePage": "./src/pages/TemplatePage",
      //     "./SidebarContainer": "./src/components/SidebarContainer",
      //   },
      shared: {},
      runtime: false,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      //   publicPath: "/",
    }),
  ],
};
