const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  entry: {
    index: "./src/app/index.js",
    clients: "./src/screens/clients/index.js",
    map: "./src/screens/map/index.js",
    main: "./src/screens/main/index.js",
    auth: "./src/screens/auth/index.js",
    register: "./src/screens/register/index.js",
  },
  // entry: {
  // },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
      {
        test: /\.png|.jpg$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new CopyPlugin({
    //   patterns: [{ from: "src/index.html" }],
    // }),
    new HtmlWebpackPlugin({
      appMountId: "app",
      chunks: ["index", "main"],
      template: "./src/screens/main/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      appMountId: "app",
      chunks: ["index", "map"],
      template: "./src/screens/map/index.html",
      filename: "map.html",
    }),
    new HtmlWebpackPlugin({
      appMountId: "app",
      chunks: ["index", "clients"],
      template: "./src/screens/clients/index.html",
      filename: "clients.html",
    }),
    new HtmlWebpackPlugin({
      appMountId: "app",
      template: "./src/screens/auth/index.html",
      chunks: ["index", "auth"],
      filename: "auth.html",
    }),
    new HtmlWebpackPlugin({
      appMountId: "app",
      template: "./src/screens/register/index.html",
      chunks: ["index", "register"],
      filename: "register.html",
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new LodashModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
};

module.exports = config;
