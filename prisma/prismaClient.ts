import { PrismaClient } from "@prisma/client";

// TODO (Database): Use a standard relational database like PostgreSQL
// Postgres is more robust and has better support for complex queries, transactions, and concurrency
// SQLite is more suitable for small projects or simple applications
export const prismaClient = new PrismaClient();
