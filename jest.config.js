module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
  testPathIgnorePatterns: ['node_modules'],
  transformIgnorePatterns: ['node_modules'],
  collectCoverageFrom: [
    '**/*.ts',
    '!**/node_modules/**',
    '!**/*.d.ts',
  ],
  globals: {
    'ts-jest': {
      skipBabel: true,
    }
  }
};
