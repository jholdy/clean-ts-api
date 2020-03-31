/* eslint-disable semi */
/* eslint-disable quotes */
module.exports = {
  collectCoverageFrom: ["<rootDir>/src/**/*.ts", "<rootDir>/__tests__/**/*.ts", "!<rootDir>/src/main/**"],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  preset: "@shelf/jest-mongodb",
  transform: {
    ".+\\.ts$": "ts-jest"
  },
  moduleDirectories: [
    "<rootDir>/src",
    "<rootDir>/__tests__",
    "<rootDir>/node_modules"
  ]
};
