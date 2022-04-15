const production = process.env.NODE_ENV === "production";

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    "arrow-parens": ["error", "as-needed"],
    "eol-last": ["error", "always"],
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        jsx: "never",
      },
    ],
    "import/newline-after-import": [2, { count: 1 }],
    "import/prefer-default-export": 0,
    "linebreak-style": ["error", "unix"],
    "max-len": [
      "error",
      {
        code: 80,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    "newline-after-var": ["error", "always"],
    "newline-before-return": ["error"],
    "no-console": production ? "error" : "warn",
    "no-debugger": production ? "error" : "warn",
    "require-await": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-indent": ["error", 2],
    "react/jsx-props-no-spreading": [1, { custom: "ignore" }],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-fragments": [2, "element"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": ["error"],
  },
};