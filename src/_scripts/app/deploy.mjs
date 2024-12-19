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
	{ command: 'next build', message: 'Building application' },
	{ command: 'git add .', message: 'Adding changes to git' },
	{
		command: 'git commit -m "Automated commit"',
		message: 'Committing changes',
	},
	{ command: 'git push github main', message: 'Pushing changes to GitHub' },
];

try {
	tasks.forEach((task) => {
		console.log(task.message);
		execSync(task.command, { stdio: 'inherit' });
	});

	console.log('Deployment script executed successfully');
} catch (err) {
	console.error('Error executing deployment script:', err);
	process.exit(1);
}
