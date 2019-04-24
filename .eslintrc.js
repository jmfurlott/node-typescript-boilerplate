module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: "./"
  },
  extends:  [
    "plugin:@typescript-eslint/recommended",
  ],
  rules:  {
    "@typescript-eslint/indent": ["warning", 2]
  }
};
