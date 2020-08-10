
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (50) UNIQUE NOT NULL,
    "location" VARCHAR (100) NOT NULL
);

CREATE TABLE "dog" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (100) NOT NULL,
	"energy_level" VARCHAR (100) NOT NULL,
	"size" VARCHAR (100) NOT NULL,
	"play_style" VARCHAR (200) NOT NULL,
	"picture" VARCHAR (120),
	"description" TEXT,
	"owner_id" INT REFERENCES "user"
	);