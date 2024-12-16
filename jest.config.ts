import nextJest from 'next/jest.js';
import type { Config } from 'jest';

const createJestConfig = nextJest({
	dir: './',
});

const config: Config = {
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	// setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^lib/(.*)': '<rootDir>/src/_lib/$1',
		'^ui/(.*)': '<rootDir>/src/_ui/$1',
		'^db/(.*)': '<rootDir>/src/_db/$1',
		'^scripts/(.*)': '<rootDir>/src/_scripts/$1',
		'^app/(.*)': '<rootDir>/src/app/$1',
	},
};

export default createJestConfig(config);
