/* eslint-disable semi */
/* eslint-disable quotes */
module.exports = {
  collectCoverageFrom: ["<rootDir>/src/**/*.ts", "<rootDir>/__TESTS__/**/*.ts", "!<rootDir>/src/main/**"],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  preset: "@shelf/jest-mongodb",
  transform: {
    ".+\\.ts$": "ts-jest"
  },
  moduleDirectories: [
    "<rootDir>/src",
    "<rootDir>/__TESTS__",
    "<rootDir>/node_modules"
  ]
};
