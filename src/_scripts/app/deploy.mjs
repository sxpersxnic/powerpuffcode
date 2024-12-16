#!/usr/bin/env node
/* eslint-disable no-console */
import { execSync } from 'node:child_process';
import cliProgress from 'cli-progress';

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

const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.legacy);

try {
	progressBar.start(tasks.length, 0);

	tasks.forEach((task, index) => {
		console.log(task.message);
		execSync(task.command, { stdio: 'inherit' });
		progressBar.update(index + 1);
	});

	progressBar.stop();
	console.log('Deployment script executed successfully');
} catch (err) {
	progressBar.stop();
	console.error('Error executing deployment script:', err);
	process.exit(1);
}
