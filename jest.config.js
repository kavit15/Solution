/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  
  },
  reporters: [
    "default",
    ["jest-stare", {
      resultDir: "jest-stare",
      reportTitle: "Test run Report",  
      additionalResults: true  
    }]]
  
};