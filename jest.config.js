/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/cypress/',
    '/dist/',
  ],
  roots: ['<rootDir>/src', '<rootDir>/__tests__'],
};
