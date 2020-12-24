// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./components/index.tsx",
  },
  output: path.resolve(__dirname, "dist"),

  mode: "development",

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(j|t)sx?$/,
        use: [
          "cache-loader",
          {
            loader: "thread-loader",
            options: {
              workers: 3,
            },
          },
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"),
      filename: "index.html",
      minify: !process.env.NODE_ENV === "production" && {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
      },
    }),
  ],
};
