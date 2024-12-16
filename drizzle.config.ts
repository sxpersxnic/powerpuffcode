import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';

export default defineConfig({
	out: './src/_db/migrations',
	schema: './src/_db/schema.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.NEXT_PUBLIC_SUPABASE_POSTGRES_URL!,
	},
});
