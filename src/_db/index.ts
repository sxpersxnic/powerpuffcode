import { profiles, SelectProfile } from './schema';
import { drizzle } from 'drizzle-orm/postgres-js';
import { eq } from 'drizzle-orm';
import postgres from 'postgres';

export default class Database {
	private client;
	public db;

	constructor() {
		this.client = postgres(process.env.DATABASE_URL!, { prepare: false });
		this.db = drizzle(this.client);
	}

	public async getProfileById(id: string): Promise<SelectProfile> {
		try {
			const data = await this.db
				.select()
				.from(profiles)
				.where(eq(profiles.id, id));

			return data[0];
		} catch (error) {
			console.error('Failed to fetch profile by id, Error: ', error);
			throw new Error('Failed to fetch profile by id');
		}
	}
}
