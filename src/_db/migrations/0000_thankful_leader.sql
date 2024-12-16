CREATE TABLE "profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"description" text,
	"photo" text DEFAULT '/default-48x48.jpg',
	"created_at" text DEFAULT 'now()' NOT NULL,
	"updated_at" text DEFAULT 'now()' NOT NULL,
	CONSTRAINT "profiles_id_unique" UNIQUE("id"),
	CONSTRAINT "profiles_username_unique" UNIQUE("username")
);
