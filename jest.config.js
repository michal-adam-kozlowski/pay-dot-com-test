module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@app(.*)$': '<rootDir>/src/app/$1',
    '^@modules(.*)$': '<rootDir>/src/modules/$1',
    '^@shared(.*)$': '<rootDir>/src/shared/$1',
  },
  modulePathIgnorePatterns: [
    'dist',
  ],
  coveragePathIgnorePatterns: [
    'node_modules',
    'test-config',
    '.module.ts',
    '.mock.ts',
  ],
};
