module.exports = {
  root: true,
  env: {
    node: true,
    jest: true, // Añade esta línea
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:jest/recommended", // Añade esta línea si tienes el plugin de ESLint para Jest
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};