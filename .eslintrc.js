module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  globals: {
    addClass: true,
    bindEvent: true,
    removeClass: true,
    toggleClass: true,
    css: true,
    attr: true,
    getNode: true,
    getNodes: true,
    gsap: true,
    // insertBefore: true,
    // insertFirst: true,
    insertLast: true,
    // insertAfter: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": "off",
  },
};
