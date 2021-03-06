module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    // indent: ["error", 2],
    // quotes: ["error", "double"],
    // semi: ["error", "always"],
    "no-console": 0,
    "arrow-parens": 0,
    "no-use-before-define": 0,
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,
    "jsx-props-no-spreading": 0,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "react/button-has-type": 0,
    "import/no-extraneous-dependencies": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "no-param-reassign": 0,
  },
  globals: {
    document: true,
    localStorage: true,
    window: true,
    module: true,
    require: true,
  },
};
