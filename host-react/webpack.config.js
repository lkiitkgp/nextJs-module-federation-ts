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
<<<<<<< HEAD
  output: {
    publicPath: "http://localhost:3000/",
  },
=======
    output: {
      publicPath: "http://localhost:3000/",
    },
>>>>>>> d76bac2 (add layout)
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    allowedHosts: "all",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    historyApiFallback: true,
  },
<<<<<<< HEAD
  //   output: {
  //     publicPath: "auto",
  //   },
=======
  // output: {
  //   publicPath: "auto",
  // },
>>>>>>> d76bac2 (add layout)
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
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        remoteApp:
          "remoteApp@http://localhost:3001/_next/static/chunks/remoteEntry.js",
        reactApp: "reactApp@http://localhost:3002/remoteEntry.js",
      },
      exposes: {
        "./TemplatePage": "./src/pages/TemplatePage",
      },
      shared: {
        // ...deps,
        // react: {
        //   requiredVersion: '18.3.1',
        //   singleton: true,
        // },
        // "react-dom": {
        //   requiredVersion: '18.3.1',
        //   singleton: true,
        // },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      //   publicPath: "/",
    }),
  ],
};
