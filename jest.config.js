module.exports = {
  "roots": [
    "<rootDir>/test"
  ],
  "transform": {
    "^.+\\.(ts|tsx)?$": "ts-jest"
  },
  "testRegex": "\\.test\\.(ts|tsx)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupTestFrameworkScriptFile": "<rootDir>/test/setup-enzyme.ts"
}
