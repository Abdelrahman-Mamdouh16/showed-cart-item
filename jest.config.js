/** @type {import('jest').Config} */

const config = {
  verbose: true,
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  // setupFilesAfterEnv: ["./node_modules/@testing-library/jest-dom/extend-expect"]
};
module.exports = config;
