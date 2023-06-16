import { db } from "@vercel/postgres";

export const database = async () => {
  return db.connect();
};
