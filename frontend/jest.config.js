module.exports = {
  verbose: true,
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "/node_modules/"
  ]
};