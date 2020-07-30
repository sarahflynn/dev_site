module.exports = {
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["json"],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "consistent-return": 0,
    "import/extensions": [0],
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": [0],
    "import/prefer-default-export": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/label-has-for": [0],
    "no-case-declarations": 0,
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["draft"] },
    ],
    "no-trailing-spaces": [2],
    "prefer-destructuring": 1,
    "react/display-name": 0,
    "react/jsx-filename-extension": 0,
    "react/prop-types": [0],
    "react/sort-comp": 0,
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["src/components/index.tsx"],
      rules: {
        "import/no-cycle": 0,
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
