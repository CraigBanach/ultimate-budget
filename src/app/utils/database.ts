import { db } from "@vercel/postgres";

export const database = db.connect();
