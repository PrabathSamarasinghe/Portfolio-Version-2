module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.app.json'
    }
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
