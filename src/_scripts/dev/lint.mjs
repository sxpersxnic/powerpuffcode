#!/usr/bin/env node
/* eslint-disable no-console */
import { execSync } from 'node:child_process';

const tasks = [
	{
		command: 'npx prettier --write .',
		message: 'Formatting code with Prettier',
	},
	{ command: 'next lint', message: 'Linting code with ESLint' },
];

try {
	tasks.forEach((task) => {
		console.log(task.message);
		execSync(task.command, { stdio: 'inherit' });
	});
} catch (err) {
	console.error('Error executing linting script:', err);
}
