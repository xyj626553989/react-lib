module.exports = {
  presets: ["@babel/env", "@babel/typescript", "@babel/react"],
  plugins: ["@babel/plugin-transform-runtime"],
  env: {
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
