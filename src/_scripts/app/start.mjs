#!/usr/bin/env node
/* eslint-disable no-console */
import { execSync } from 'node:child_process';

const tasks = [
	{
		command: 'npx prettier --write .',
		message: 'Formatting code with Prettier',
	},
	{ command: 'npx eslint .', message: 'Linting code with ESLint' },
	{ command: 'bun update --latest', message: 'Updating dependencies' },
	{ command: 'next start', message: 'Starting server on port: 3000' },
];

try {
	tasks.forEach((task) => {
		console.log(task.message);
		execSync(task.command, { stdio: 'inherit' });
	});

	console.log('Start script executed successfully');
} catch (err) {
	console.error('Error executing start script:', err);
	process.exit(1);
}
