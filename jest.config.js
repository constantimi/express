/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {}], // Fixed the regex
  },
  roots: ["<rootDir>/src"], // Ensure Jest looks for test files in the src directory
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: ["**/__tests__/**/*.test.(ts|tsx|js)"], // Pattern for test files
};
