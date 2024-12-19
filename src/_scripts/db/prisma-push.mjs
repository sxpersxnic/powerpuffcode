#!/usr/bin/env node
/* eslint-disable no-console */
import { execSync } from 'node:child_process';

const tasks = [
	{
		command: 'npx prisma db push',
		message: 'Migrating schema',
	},
];

try {
	tasks.forEach((task) => {
		console.log(' ', task.message);
		execSync(task.command, { stdio: 'inherit' });
	});

	console.log('Database schema update script executed successfully');
} catch (err) {
	console.error('Error executing database schema update script:', err);
	process.exit(1);
}
