const path = require("path");

module.exports = {
  stories: ["../components/**/*.stories.mdx", "../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config, { configDir }) => {
    config.module.rules.push({
      test: /\.less$/,
      use: ["style-loader", "css-loader", "less-loader"],
      include: path.resolve(__dirname, "../"),
    });
    return config;
  },
};

// export function webpackFinal(config, { configDir }) {
//   config.module.rules.push({
//     test: /\.less$/,
//     use: ['style-loader', 'css-loader', 'less-loader'],
//     include: path.resolve(__dirname, '../'),
//   });
//   return config;
// }
