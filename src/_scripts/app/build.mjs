#!/usr/bin/env node
/* eslint-disable no-console */
import { execSync } from 'node:child_process';

const tasks = [
	{ command: 'bun run lint', message: 'Linting code with ESLint' },
	{ command: 'bun update --latest', message: 'Updating dependencies' },
	{ command: 'next build', message: 'Updating dependencies' },
];

try {
	tasks.forEach((task) => {
		console.log(task.message);
		execSync(task.command, { stdio: 'inherit' });
	});

	console.log('Build script executed successfully');
} catch (err) {
	console.error('Error executing build script:', err);
	process.exit(1);
}
