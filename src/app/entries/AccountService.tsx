import { db } from "@vercel/postgres";

export interface Account {
  id: number;
  category?: string;
  name?: string;
}

export const getAccounts = async (): Promise<Array<Account>> => {
  const client = await db.connect();
  return (
    await client.sql<Account>`SELECT cr.id, c.name AS category, cr.name AS name FROM categories c INNER JOIN category_rows cr ON c.id = cr.category_id;`
  ).rows;
};
