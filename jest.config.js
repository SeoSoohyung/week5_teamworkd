module.exports = {
  testPathIgnorePatterns: [
    "/node_modules/(?!my-package)(.*)",
    "/test/fixtures/",
    "/test/jest-grammars/",
  ],

  verbose: true,
};
