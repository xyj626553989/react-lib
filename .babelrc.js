module.exports = {
  presets: ["@babel/env", "@babel/typescript", "@babel/react"],
  plugins: ["@babel/plugin-transform-runtime"],
  env: {
    development: {
      presets: [
        [
          "@babel/preset-env",
          // {
          //   useBuiltIns: false,
          //   corejs: 2,
          // },
        ],
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
      plugins: [
        "react-hot-loader/babel",
        ["import", { libraryName: "antd-mobile", libraryDirectory: "lib", style: true }, "antd-mobile"],
        [
          "@babel/plugin-transform-runtime",
          {
            absoluteRuntime: false,
            corejs: 3,
          },
        ],
      ],
    },
    umd: {
      presets: [
        [
          "@babel/env",
          {
            modules: "umd",
          },
        ],
      ],
      plugins: [
        [
          "@babel/plugin-transform-runtime",
          {
            useESModules: false,
          },
        ],
      ],
    },
    esm: {
      presets: [
        [
          "@babel/env",
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          "@babel/plugin-transform-runtime",
          {
            useESModules: true,
          },
        ],
      ],
    },
  },
};
