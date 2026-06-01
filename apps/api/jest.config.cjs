module.exports = {
  testEnvironment: 'node',
  transform: {},
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: [
    'services/**/*.js',
    'routes/**/*.js',
    '!**/*.test.js',
  ],
  testMatch: [
    '**/tests/**/*.test.js',
  ],
};
