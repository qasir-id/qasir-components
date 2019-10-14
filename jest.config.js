module.exports = {
  setupFilesAfterEnv: ['./__test__/setup-test.js'],
  rootDir: 'src',
  testMatch: ['**/*.test.js'],
  coverageDirectory: '<rootDir>/../.coverage',
  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**',
    '!**/*.story.js',
    '!**/*.test.js',
  ],
  coverageReporters: ['lcov', 'text', 'text-summary'],
  moduleDirectories: [
    'node_modules',
    '<rootDir>',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  }  
};
