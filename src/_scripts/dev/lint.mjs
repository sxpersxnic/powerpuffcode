#!/usr/bin/env node
/* eslint-disable no-console */
import { execSync } from 'node:child_process';
import cliProgress from 'cli-progress';

const tasks = [
	{
		command: 'npx prettier --write .',
		message: 'Formatting code with Prettier',
	},
	{ command: 'next lint', message: 'Linting code with ESLint' },
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
	console.log('Linting script executed successfully');
} catch (err) {
	progressBar.stop();
	console.error('Error executing linting script:', err);
	process.exit(1);
}
