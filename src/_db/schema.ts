import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { pgTable, uuid, text } from 'drizzle-orm/pg-core';
import { v4 as uuidv4 } from 'uuid';

export const profiles = pgTable('profiles',
	{
		id: uuid('id').primaryKey().notNull().unique().$defaultFn(() => uuidv4()),
		username: text('username').notNull().unique(),
		description: text('description'),
		photo: text('photo').default('/default-48x48.jpg'),
		created_at: text('created_at').notNull().default('now()'),
		updated_at: text('updated_at').notNull().default('now()'),
	}
);

export type NewProfile = InferInsertModel<typeof profiles>;
export type SelectProfile = InferSelectModel<typeof profiles>;
